#!/usr/bin/env node
/**
 * 侧栏对账：列出 docs/ 下所有 md 页面，逐一核对是否至少被一个入口通道覆盖。
 * 通道：① 顶部 nav ② 各课程侧栏（aux + chapters）③ 参考资料课程条目
 *       ④ 课程 Readme（CourseTabs 入口）⑤ 首页书架 SITE_INDEX ⑥ 页内相对链接
 * 用法：node scripts/audit-sidebar.cjs
 */
const fs = require('fs')
const path = require('path')

const docsDir = path.join(__dirname, '..', 'docs')
const coursesTs = fs.readFileSync(
  path.join(docsDir, '.vitepress/theme/data/courses.ts'),
  'utf8',
)

// ① nav（config.ts）；首页 / 对应 docs/index.md
const navLinks = ['/', '/index', '/timeline', '/people', '/books', '/glossary', '/knowledge', '/about']

// ② 侧栏条目：ch(n, title, base) / plain(title, base) / aux(base, title, text)
const sidebarLinks = new Set()
for (const m of coursesTs.matchAll(/\bch\(\s*\d+\s*,\s*'([^']+)'\s*,\s*'([^']+)'\s*\)/g)) {
  sidebarLinks.add(`/${m[2]}/${m[1]}`)
}
for (const m of coursesTs.matchAll(/\bplain\(\s*'([^']+)'\s*,\s*'([^']+)'\s*\)/g)) {
  sidebarLinks.add(`/${m[2]}/${m[1]}`)
}
for (const m of coursesTs.matchAll(/\baux\(\s*'([^']+)'\s*,\s*'([^']+)'/g)) {
  sidebarLinks.add(`/${m[1]}/${m[2]}`)
}

// ③ 参考资料课程条目 + ④ 课程 Readme + ⑤ SITE_INDEX
const refLinks = new Set()
for (const m of coursesTs.matchAll(/link:\s*'(\/[^']+)'/g)) refLinks.add(m[1])
for (const m of coursesTs.matchAll(/readme:\s*'(\/[^']+)'/g)) refLinks.add(m[1])

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
    const key = '/' + abs.replace(/\.md$/, '')
    if (!relCovered.has(key)) relCovered.set(key, [])
    relCovered.get(key).push(path.posix.relative(docsDir, page))
  }
}

const orphans = []
for (const page of pages) {
  const rel = path.posix.relative(docsDir, page)
  const noExt = '/' + rel.replace(/\.md$/, '')
  const hit = covered.has(noExt) || relCovered.has(noExt)
  if (!hit) orphans.push(rel)
}

console.log(`页面总数: ${pages.length}`)
console.log(`nav 入口: ${navLinks.length}，侧栏条目: ${sidebarLinks.size}，参考资料/Readme/SITE_INDEX 条目: ${refLinks.size}`)
console.log(`页内相对链接覆盖: ${relCovered.size} 个目标`)
console.log(`孤立页面（无任何入口）: ${orphans.length}`)
for (const o of orphans) console.log(`  - ${o}`)
