#!/usr/bin/env node
// 构建后公式渲染门禁：扫 dist 产物，验证 KaTeX 真实渲染成功。
// 背景：第二十批从 markdown-it-mathjax3 换装 KaTeX（mjx 自定义元素曾致
// 含公式页 hydration mismatch + display 公式双绘）。throwOnError: false
// 下，KaTeX 对白名单外的非法命令不炸构建、而是渲染成可见的
// span.katex-error（红色原文）——静态门禁 check-latex.cjs 的白名单
// 可能与渲染器实际支持度脱节，本脚本以 dist 产物为准兜底：
//   1. katex-error 必须为 0（渲染器层失败了才算数）；
//   2. mjx 残留必须为 0（换装不得留尾巴）；
//   3. 全站至少渲染出 1 个公式（渲染器彻底坏了立刻报警）；
//   4. katex.min.css 必须进了产物（主题层 CSS 导入被静默丢弃时报警）。
// 用法：构建后执行（package.json 的 build 脚本已串联）；须先 pnpm build。
const fs = require('fs')
const path = require('path')

const DIST = path.resolve(__dirname, '..', 'docs', '.vitepress', 'dist')

if (!fs.existsSync(DIST)) {
  console.error('check-rendered-math：找不到 docs/.vitepress/dist，请先 pnpm build')
  process.exit(1)
}

function* walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) yield* walk(p)
    else if (e.isFile() && e.name.endsWith('.html')) yield p
  }
}

const problems = []
let files = 0
let formulas = 0
let errorHits = 0
const pagesWithFormula = new Set()

for (const file of walk(DIST)) {
  const rel = path.relative(DIST, file)
  const html = fs.readFileSync(file, 'utf8')
  files++

  const n = (html.match(/class="katex-html"/g) || []).length
  formulas += n
  if (n > 0) pagesWithFormula.add(rel)

  // katex-error 内是渲染失败的原始命令原文，截取一段便于定位
  for (const m of html.matchAll(/class="katex-error"[^>]*>([^<]{1,60})/g)) {
    errorHits++
    problems.push(`${rel} 渲染失败：${m[1].trim().slice(0, 50)}`)
  }

  // mjx 残留：换装后任何 mjx 标记都不应再出现
  if (/mjx-|<mjx/.test(html)) {
    problems.push(`${rel} 残留 mjx 标记（换装未清干净或缓存产物）`)
  }
}

// katex CSS：产物里任一样式表含 .katex 规则即算到位
const assetsDir = path.join(DIST, 'assets')
let cssOk = false
if (fs.existsSync(assetsDir)) {
  for (const e of fs.readdirSync(assetsDir)) {
    if (e.endsWith('.css')) {
      const css = fs.readFileSync(path.join(assetsDir, e), 'utf8')
      if (css.includes('.katex')) {
        cssOk = true
        break
      }
    }
  }
}
if (!cssOk) {
  problems.push('产物样式表中未发现 .katex 规则——katex.min.css 导入可能被丢弃，公式将裸排')
}

if (formulas === 0) {
  problems.push('全站 0 个公式渲染产物（无 class="katex-html"）——渲染器可能未生效')
}

if (problems.length) {
  console.error(
    `check-rendered-math：${problems.length} 处问题（扫描 ${files} 个 HTML，公式 ${formulas} 处）\n` +
      problems.map((p) => `  - ${p}`).join('\n'),
  )
  process.exit(1)
}
console.log(
  `check-rendered-math：${files} 个 HTML、${formulas} 处公式渲染成功（${pagesWithFormula.size} 个含公式页）、katex-error 0、mjx 残留 0、katex CSS 到位`,
)
