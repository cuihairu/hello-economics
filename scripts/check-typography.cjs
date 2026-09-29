#!/usr/bin/env node
// 内容层排印检查：段首缩进交给主题 CSS（custom.css text-indent: 2em）之后，
// 源文里不再允许手敲缩进与排版补丁。扫四类模式：
//   1. 全角空格 / &nbsp; / &ensp; / &emsp; 手敲缩进（段首或列表标记后）
//   2. 连续 3 行以上空行（异常空行堆叠）
//   3. SVG 之外的写死行内样式（排版补丁应回主题层）
//   4. 行首 4+ 半角空格（Markdown 会解析成代码块，属异常结构；围栏内不算）
// 用法：node scripts/check-typography.cjs [扫描目录] [--fix]
//   --fix 自动修 1、2 两类（可安全自动化的），3、4 只报告人工处理。

const fs = require('fs')
const path = require('path')

const ROOT = path.resolve(__dirname, '..')
// 用法：node scripts/check-typography.cjs [扫描目录] [--fix]（目录默认 docs，
// 供 tests/ 夹具自测复用；--fix 自动修 1、2 两类）
const ARGV = process.argv.slice(2)
const FIX = ARGV.includes('--fix')
const DOCS = (() => {
  const dir = ARGV.find((a) => !a.startsWith('--'))
  return dir ? path.resolve(ROOT, dir) : path.join(ROOT, 'docs')
})()

function* walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) {
      if (e.name === 'dist' || e.name === 'node_modules' || e.name === '.temp') continue
      yield* walk(p)
    } else if (e.isFile() && e.name.endsWith('.md')) {
      yield p
    }
  }
}

const problems = []
let files = 0
let fixed = 0

for (const file of walk(DOCS)) {
  const rel = path.relative(ROOT, file)
  const src = fs.readFileSync(file, 'utf8')
  files++
  const lines = src.split('\n')
  const out = [...lines]
  let inFence = false
  let inHtml = false
  let changed = false

  lines.forEach((line, i) => {
    // 围栏状态（``` 或 ~~~）
    if (/^\s*(```|~~~)/.test(line)) inFence = !inFence
    if (inFence) return

    // HTML 块状态：顶格 <tag> 或 </tag> 开启，空行结束（CommonMark type 6/7 近似）
    if (/^<\/?[a-zA-Z]/.test(line)) inHtml = true
    if (inHtml && line.trim() === '') inHtml = false
    if (inHtml) return

    const report = (msg) => problems.push(`${rel}:${i + 1} ${msg}`)

    // 1. 手敲缩进：全角空格 / nbsp 实体
    const indentRe = /^((?:\s*(?:[-*+]|\d+[.)])\s+)?)(?:　+|&(?:nbsp|ensp|emsp);)+/
    if (indentRe.test(line)) {
      report(`手敲缩进（全角空格/nbsp 实体）`)
      if (FIX) {
        out[i] = line.replace(indentRe, '$1')
        changed = true
        fixed++
      }
    }

    // 2. 连续 3+ 空行
    if (line.trim() === '' && i >= 2 && lines[i - 1].trim() === '' && lines[i - 2].trim() === '') {
      report('连续 3+ 空行堆叠')
      if (FIX) {
        out[i] = null // 标记删除
        changed = true
        fixed++
      }
    }

    // 3. 非 SVG 行内样式
    const styleRe = /style="[^"]*"/g
    const before = line.lastIndexOf('<')
    const isSvgLine = /<(svg|rect|line|text|path|circle|polygon|polyline|ellipse|tspan|marker|g|defs|filter|title)\b/i.test(
      line.slice(0, before + 1)
    )
    if (!isSvgLine) {
      for (const s of line.matchAll(styleRe)) {
        report(`非 SVG 行内样式：${s[0].slice(0, 60)}`)
      }
    }

    // 4. 段落行紧跟 4+ 空格/tab 行——缩进行会被并入段落或吞成代码块。
    //    列表续行/嵌套列表/故意缩进的 ASCII 图与公式块都是合法缩进，不在此列：
    //    只在「上一非空行是顶格普通段落」时才报。
    if (/^(?: {4,}|\t+)\S/.test(line)) {
      let j = i - 1
      while (j >= 0 && lines[j].trim() === '') j--
      const prev = j >= 0 ? lines[j] : ''
      const prevIsPlainParagraph =
        prev !== '' &&
        !/^\s/.test(prev) &&
        !/^ {4,}\S/.test(prev) &&
        !/^\s*([-*+]|\d+[.)])\s/.test(prev) &&
        !/^[#>|]/.test(prev) &&
        !/^\$\$/.test(prev) &&
        !/^<\/?[a-zA-Z]/.test(prev)
      if (prevIsPlainParagraph) {
        report('段落行下紧跟 4+ 空格行（缩进行将并入段落或成代码块）')
      }
    }
  })

  if (changed) {
    let next = out.filter((l) => l !== null).join('\n')
    // 兜底：残余的 3+ 连续换行统一收到一个空行（逐行标记删除对 4+ 连空只删一半）
    next = next.replace(/\n{3,}/g, '\n\n')
    fs.writeFileSync(file, next)
  }
}

const head = `check-typography：${files} 个 md 文件`
if (problems.length) {
  console.error(
    `${head}，${problems.length} 处问题${FIX ? `（已自动修 ${fixed} 处，余下需人工）` : ''}\n` +
      problems.map((p) => `  - ${p}`).join('\n')
  )
  // --fix 后若全部修复（剩余 0 条非自动类）则以成功退出，便于流水线两段式
  const remainManual = problems.filter((p) => !p.includes('手敲缩进') && !p.includes('空行堆叠'))
  process.exit(FIX && remainManual.length === 0 ? 0 : 1)
}
console.log(`${head}，排印模式全部通过`)
