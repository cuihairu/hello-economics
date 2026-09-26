// 站内死链检查：解析 docs/**/*.md 的相对 .md 链接，报告指向不存在文件的引用
// 用法：node scripts/check-links.cjs
const { readFileSync, existsSync } = require('fs')
const { resolve, dirname } = require('path')
const { execSync } = require('child_process')

const root = resolve(__dirname, '..')
const files = execSync('find docs -name "*.md"', { cwd: root }).toString().trim().split('\n')

const RE = /!?\[[^\]]*\]\(([^)]+)\)/g
const bad = []
let total = 0

for (const f of files) {
  const abs = resolve(root, f)
  const text = readFileSync(abs, 'utf8')
  let m
  RE.lastIndex = 0
  while ((m = RE.exec(text))) {
    let ref = m[1].split(' ')[0].trim()
    if (!ref || ref.startsWith('http') || ref.startsWith('mailto:') || ref.startsWith('<')) continue
    ref = ref.split('#')[0]
    if (!ref) continue // 纯锚点
    if (!ref.endsWith('.md')) continue
    total++
    try { ref = decodeURIComponent(ref) } catch {}
    // 指向 / 开头的站点绝对路径
    const target = ref.startsWith('/')
      ? resolve(root, 'docs', ref.slice(1))
      : resolve(dirname(abs), ref)
    if (!existsSync(target)) bad.push(`${f} -> ${m[1]}`)
  }
}

console.log(`共检查 ${total} 个 .md 相对链接`)
if (bad.length === 0) {
  console.log('无死链')
} else {
  console.log(`死链 ${bad.length} 个:`)
  for (const b of bad) console.log('  ' + b)
  process.exit(1)
}
