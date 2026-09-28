// 从仓库根部的《经济学-术语.md》生成 docs/.vitepress/theme/data/glossary.ts
// 用法：pnpm glossary（在仓库根目录执行）
const { readFileSync, writeFileSync } = require('fs')
const { resolve } = require('path')
const root = resolve(__dirname, '..')

const MarkdownIt = require('markdown-it')
const mdit = new MarkdownIt({ html: false })
try {
  // 与站点渲染器保持一致（config.ts 同款 KaTeX），词条里的公式随主站换装
  mdit.use(require('@mdit/plugin-katex').katex, { throwOnError: false })
} catch {
  // 公式预渲染失败时退化为纯文本渲染
}

const COURSE_ORDER = ['西方经济学', '货币银行学', '财政学', '国际经济学', '社会主义经济学']

const text = readFileSync(resolve(root, '经济学-术语.md'), 'utf8')

const glossaries = []
let course = null
let count = 0

for (const rawLine of text.split('\n')) {
  const line = rawLine.trim()
  const h2 = line.match(/^## (.+)$/)
  if (h2) {
    course = COURSE_ORDER.includes(h2[1]) ? h2[1] : null
    continue
  }
  if (!course) continue
  const entry = line.match(/^- \*\*(.+?)\*\*：(.*)$/)
  if (!entry) continue

  const name = entry[1]
  const rest = entry[2]
  const link = rest.match(/\s*\[原文\]\(([^)]+)\)\s*\.?\s*$/)
  const defSource = (link ? rest.slice(0, link.index) : rest).trim()
  const href = link ? '/' + link[1].replace(/\.md$/, '') : null

  glossaries.push({
    term: name.trim(),
    course,
    def: mdit.renderInline(defSource),
    source: href,
  })
  count++
}

const out = `// 本文件由 scripts/build-glossary.cjs 从《经济学-术语.md》生成，请勿手改。
// 用法：pnpm glossary

export interface GlossaryEntry {
  term: string
  course: string
  def: string
  source: string | null
}

export const GLOSSARY: GlossaryEntry[] = ${JSON.stringify(glossaries, null, 2)}

export const COURSES = ${JSON.stringify(COURSE_ORDER)}
`

const target = resolve(root, 'docs/.vitepress/theme/data/glossary.ts')
writeFileSync(target, out, 'utf8')
console.log(`glossary: ${count} terms -> ${target}`)
