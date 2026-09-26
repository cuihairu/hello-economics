// 一次性文体转换：章节从考试体改为知识整理体（配合 STYLE.md）
// 处理：删「历年真题/常见题型/选择题/考前背诵」小节；重命名考试体标题；清空骨架小节；去掉「答：」开头。
// 幂等：重复运行无进一步改动。用法：node scripts/rewrite-style.cjs
const { readFileSync, writeFileSync } = require('fs')
const { resolve } = require('path')
const { execSync } = require('child_process')

const root = resolve(__dirname, '..')
const dirs = ['western', 'monetary', 'finance', 'international', 'socialist']
const files = []
for (const d of dirs) {
  for (const f of execSync(`find docs/${d} -maxdepth 1 -name '*.md'`, { cwd: root }).toString().trim().split('\n')) {
    if (/Readme\.md$/.test(f)) continue // 导论页已手工重写
    files.push(resolve(root, f))
  }
}

// 小节删除规则：标题匹配即整节删除（到下一个同级或更高级标题为止）
const CUT_SECTION = [
  /^#{2,3}\s*(?:[一二三四五六七八九十]+[、.．]\s*)?历年真题/,
  /^#{2,3}\s*(?:[一二三四五六七八九十]+[、.．]\s*)?常见题型/,
  /^#{2,3}\s*选择题/,
  /^#{2,3}\s*(?:[一二三四五六七八九十]+[、.．]\s*)?(?:考前|应试|背诵|速背|猜题|押题)/,
]

// 标题重命名规则
const RENAME = [
  [/^##\s*(?:[一二三四五六七八九十]+[、.．]\s*)?名词解释.*$/, '## 核心概念'],
  [/^##\s*(?:[一二三四五六七八九十]+[、.．]\s*)?简(?:述|答)题.*$/, '## 问题与分析'],
  [/^##\s*(?:[一二三四五六七八九十]+[、.．]\s*)?论述题.*$/, '## 综合论述'],
  [/^##\s*(?:[一二三四五六七八九十]+[、.．]\s*)?(?:计算与证明|计算题).*$/, '## 推导与例题'],
  [/^##\s*摘要\s*$/, '## 本章脉络'],
]

const level = (line) => (line.match(/^#+/) || [''])[0].length

// 把全文按标题行切片，返回 [{head, body[]}]，head 为 null 表示文件首段
function parseSections(text) {
  const lines = text.split('\n')
  const sections = []
  let cur = { head: null, body: [] }
  for (const line of lines) {
    if (/^#{1,6}\s/.test(line)) {
      sections.push(cur)
      cur = { head: line, body: [] }
    } else {
      cur.body.push(line)
    }
  }
  sections.push(cur)
  return sections
}

let changed = 0
for (const file of files) {
  const before = readFileSync(file, 'utf8')
  const sections = parseSections(before)

  // 1) 删除考试小节：标题级 <=3 时删除其后所有更深层级的小节
  const kept = []
  let cutting = false
  let cutLevel = 0
  for (const s of sections) {
    if (s.head) {
      const lv = level(s.head)
      if (cutting && lv <= cutLevel) cutting = false
      if (!cutting && lv <= 3 && CUT_SECTION.some((re) => re.test(s.head))) {
        cutting = true
        cutLevel = lv
        continue
      }
    }
    if (!cutting) kept.push(s)
  }

  // 2) 重命名 + 3) 空小节清理 + 4) 去「答：」
  const out = []
  for (let i = 0; i < kept.length; i++) {
    const s = kept[i]
    let head = s.head
    if (head) {
      for (const [re, replacement] of RENAME) {
        if (re.test(head)) {
          head = replacement
          break
        }
      }
      // ### N．标题 → ### 标题（去掉序号前缀）
      head = head.replace(/^(#{2,4})\s*[0-9０-９]+[、.．、]?\s*/, '$1 ')
    }
    const body = s.body
      .join('\n')
      .replace(/^答：[ \t]*/gm, '')
      .replace(/\n{3,}/g, '\n\n')
      .trimEnd()
    // 空小节（无正文且没有子标题跟随）删除；有子标题的保留
    if (head && body.trim() === '') {
      const next = kept[i + 1]
      if (!next || !next.head || level(next.head) <= level(head)) continue
    }
    out.push((head ? head + '\n' : '') + (body.trim() ? body + '\n' : ''))
  }

  const after = out.join('\n').replace(/\n{3,}/g, '\n\n').trim() + '\n'
  if (after !== before) {
    writeFileSync(file, after, 'utf8')
    changed++
    console.log('改写', file.replace(root + '/', ''))
  }
}
console.log(`完成：${changed}/${files.length} 个文件有改动`)
