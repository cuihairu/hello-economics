// 从仓库根部的《经济学-术语.md》与《Economics-Glossary-en.md》生成 docs/.vitepress/theme/data/glossary.ts
// 用法：pnpm glossary（在仓库根目录执行）
const { readFileSync, writeFileSync, existsSync } = require('fs')
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

// 课程顺序是词条分组的唯一真相；英文标题与其中文键一一对应，顺序不得错位
const COURSES = ['西方经济学', '货币银行学', '财政学', '国际经济学', '社会主义经济学']
const COURSES_EN = ['Western Economics', 'Money and Banking', 'Public Finance', 'International Economics', 'Socialist Economics']
const EN_BY_ZH = Object.fromEntries(COURSES.map((zh, i) => [zh, COURSES_EN[i]]))

// 术语级权威出处（由 scripts/glossary-cites.json 提供，须先经 curl 200 实测）
const citeFile = resolve(root, 'scripts', 'glossary-cites.json')
const cites = existsSync(citeFile) ? JSON.parse(readFileSync(citeFile, 'utf8')) : {}

/**
 * 解析一份术语表：`## 标题` 分段，段内 `- **术语**：定义 [原文](路径)` 为词条。
 * 冒号全角/半角皆可，末尾括注标签不限字面（[原文] / [source] 都行）。
 */
const parse = (text, titles, courseOf) => {
  const out = new Map()
  let course = null
  for (const rawLine of text.split('\n')) {
    const line = rawLine.trim()
    const h2 = line.match(/^## (.+)$/)
    if (h2) {
      course = courseOf(h2[1])
      if (course) out.set(course, [])
      continue
    }
    if (!course) continue
    const entry = line.match(/^- \*\*(.+?)\*\*\s*[:：]\s*(.*)$/)
    if (!entry) continue

    const name = entry[1].trim()
    const rest = entry[2]
    const link = rest.match(/\s*\[[^\]]*\]\(([^)]+)\)\s*\.?\s*$/)
    const defSource = (link ? rest.slice(0, link.index) : rest).trim()
    const href = link ? '/' + link[1].replace(/\.md$/, '') : null

    out.get(course).push({
      term: name,
      def: defSource,
      source: href,
    })
  }
  return out
}

const zhText = readFileSync(resolve(root, '经济学-术语.md'), 'utf8')
const zhGroups = parse(zhText, COURSES, (t) => (COURSES.includes(t) ? t : null))

const enFile = resolve(root, 'Economics-Glossary-en.md')
let enGroups = new Map()
let enCount = 0
if (existsSync(enFile)) {
  const enText = readFileSync(enFile, 'utf8')
  enGroups = parse(enText, COURSES_EN, (t) => {
    const i = COURSES_EN.indexOf(t)
    return i >= 0 ? COURSES[i] : null
  })
  enCount = [...enGroups.values()].reduce((n, a) => n + a.length, 0)
}

// 逐段对齐：英文侧条目数必须与中文侧一致，错位当场报错，不产出半套数据
const order = []
const zhAll = []
const enAll = []
for (const c of COURSES) {
  const z = zhGroups.get(c) || []
  const e = enGroups.get(c) || []
  if (z.length !== e.length) {
    throw new Error(`glossary: course "${c}" count mismatch — zh ${z.length} vs en ${e.length}`)
  }
  order.push(c)
  for (let i = 0; i < z.length; i++) {
    zhAll.push({
      term: z[i].term,
      course: c,
      def: mdit.renderInline(z[i].def),
      source: z[i].source,
      cite: cites[z[i].term] || [],
    })
    enAll.push({
      term: e[i].term,
      course: c,
      courseEn: EN_BY_ZH[c],
      def: mdit.renderInline(e[i].def),
      source: e[i].source ?? z[i].source,
      cite: cites[z[i].term] || [],
    })
  }
}

const out = `// 本文件由 scripts/build-glossary.cjs 从《经济学-术语.md》与《Economics-Glossary-en.md》生成，请勿手改。
// 用法：pnpm glossary（术语级出处读自 scripts/glossary-cites.json）

export interface GlossaryEntry {
  term: string
  course: string
  def: string
  source: string | null
  cite: { label: string; url: string }[]
}

export interface GlossaryEntryEn extends GlossaryEntry {
  courseEn: string
}

export const GLOSSARY: GlossaryEntry[] = ${JSON.stringify(zhAll, null, 2)}

export const GLOSSARY_EN: GlossaryEntryEn[] = ${JSON.stringify(enAll, null, 2)}

export const COURSES = ${JSON.stringify(COURSES)}

export const COURSE_LABELS_EN: Record<string, string> = ${JSON.stringify(EN_BY_ZH, null, 2)}
`

const target = resolve(root, 'docs/.vitepress/theme/data/glossary.ts')
writeFileSync(target, out, 'utf8')
console.log(`glossary: ${zhAll.length} terms (${enCount} en) -> ${target}`)
