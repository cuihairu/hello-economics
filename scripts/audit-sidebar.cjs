#!/usr/bin/env node
/**
 * 侧栏对账：列出 docs/ 下所有 md 页面，逐一核对是否至少被一个入口通道覆盖。
 * 通道：① 顶部 nav ② 各课程侧栏（ch/plain/aux/entry 条目）③ 参考资料课程条目
 *       ④ 课程 Readme（CourseTabs 入口）⑤ 首页书架 SITE_INDEX ⑥ 页内相对链接
 *
 * locale 归一：docs/zh/x.md 与 docs/x.md 是同一份目录在两个语言环境下的镜像，
 * 统一映射为 locale-neutral 键（'/western/Readme'）后再对账——目录与入口都来自
 * theme/data/courses.ts 的单源规格，两个语言环境共用这套覆盖表。
 *
 * 用法：node scripts/audit-sidebar.cjs
 */
const fs = require('fs')
const path = require('path')

const docsDir = path.join(__dirname, '..', 'docs')
const coursesTs = fs.readFileSync(
  path.join(docsDir, '.vitepress/theme/data/courses.ts'),
  'utf8',
)
const configTs = fs.readFileSync(
  path.join(docsDir, '.vitepress/config.ts'),
  'utf8',
)

/** locale 归一：去掉 zh 前缀，'/' 与 '/zh/' 归为 '/index' */
const neutral = (s) => s.replace(/^\/zh(\/|$)/, '/').replace(/^\/$/, '/index')

// ① nav（config.ts 的 NAV_ITEMS 字面量）
const navLinks = [...configTs.matchAll(/\{\s*path:\s*'(\/[^']*)'/g)].map((m) => neutral(m[1]))

/** 解析 helper 调用：按出现顺序抽出引号字符串参数（容忍签名增减参数） */
const callArgs = (name, text) => {
  const out = []
  const re = new RegExp(`\\b${name}\\(`, 'g')
  for (const m of text.matchAll(re)) {
    let i = m.index + m[0].length
    let depth = 1
    const start = i
    while (i < text.length && depth > 0) {
      const c = text[i]
      if (c === "'") {
        i++
        while (i < text.length && text[i] !== "'") i++
      } else if (c === '(') depth++
      else if (c === ')') depth--
      i++
    }
    const args = text.slice(start, i - 1)
    out.push([...args.matchAll(/'([^']*)'/g)].map((a) => a[1]))
  }
  return out
}

// ② 侧栏条目：ch(n, file, base, zh, en) / plain(file, base, zh, en)
//   aux(base, file, zh, en) / entry(path, zh, en)
const sidebarLinks = new Set()
for (const [, file, base] of callArgs('ch', coursesTs)) {
  if (file && base) sidebarLinks.add(`/${base}/${file}`)
}
for (const [file, base] of callArgs('plain', coursesTs)) {
  if (file && base) sidebarLinks.add(`/${base}/${file}`)
}
for (const [base, file] of callArgs('aux', coursesTs)) {
  if (base && file) sidebarLinks.add(`/${base}/${file}`)
}
for (const [p] of callArgs('entry', coursesTs)) {
  if (p) sidebarLinks.add(neutral(p))
}

// ③ 参考资料课程条目 + ④ 课程 Readme + ⑤ SITE_INDEX
const refLinks = new Set()
for (const m of coursesTs.matchAll(/readme:\s*'(\/[^']+)'/g)) refLinks.add(neutral(m[1]))
for (const m of coursesTs.matchAll(/link:\s*'(\/[^']+)'/g)) refLinks.add(neutral(m[1]))

const covered = new Set([...navLinks, ...sidebarLinks, ...refLinks])

// 全部 md 页面（排除 _partials / node_modules / dist）
const pages = []
const walk = (dir) => {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith('.') || e.name === 'node_modules' || e.name === 'dist') continue
    const p = path.join(dir, e.name)
    if (e.isDirectory()) walk(p)
    else if (e.name.endsWith('.md')) pages.push(p)
  }
}
walk(docsDir)

// ⑥ 页内相对链接：把每个页面的相对链接解析成站内绝对路径（不带 .md、带前导斜杠）
const relCovered = new Map() // page -> [from...]
for (const page of pages) {
  const text = fs.readFileSync(page, 'utf8')
  const dir = path.dirname(page)
  for (const m of text.matchAll(/\]\((\.{1,2}\/[^)#]+)(?:#[^)]*)?\)/g)) {
    const abs = path.posix.normalize(path.posix.join(path.posix.relative(docsDir, dir), m[1]))
    const key = neutral('/' + abs.replace(/\.md$/, ''))
    if (!relCovered.has(key)) relCovered.set(key, [])
    relCovered.get(key).push(path.posix.relative(docsDir, page))
  }
}

const orphans = []
for (const page of pages) {
  const rel = path.posix.relative(docsDir, page)
  const noExt = neutral('/' + rel.replace(/\.md$/, ''))
  const hit = covered.has(noExt) || relCovered.has(noExt)
  if (!hit) orphans.push(rel)
}

console.log(`页面总数: ${pages.length}`)
console.log(`nav 入口: ${navLinks.length}，侧栏条目: ${sidebarLinks.size}，参考资料/Readme/SITE_INDEX 条目: ${refLinks.size}`)
console.log(`页内相对链接覆盖: ${relCovered.size} 个目标`)
console.log(`孤立页面（无任何入口）: ${orphans.length}`)
for (const o of orphans) console.log(`  - ${o}`)
