#!/usr/bin/env node
// 内容迁移：mdBook 仓库结构 → docs/（VitePress）
// 用法：node scripts/migrate-content.mjs
import { cpSync, mkdirSync, readFileSync, writeFileSync, existsSync, rmSync } from 'node:fs'
import { join } from 'node:path'

const root = new URL('..', import.meta.url).pathname
const docs = join(root, 'docs')

const COURSES = ['western', 'monetary', 'finance', 'international', 'socialist', 'math']

// 1. 课程目录整体复制（先清理旧产物，保证可重复执行）
mkdirSync(docs, { recursive: true })
for (const dir of [...COURSES, 'img']) {
  const dest = join(docs, dir)
  if (existsSync(dest)) rmSync(dest, { recursive: true })
  cpSync(join(root, dir), dest, { recursive: true })
}

// 2. 参考笔记（微观笔记、notes/）→ docs/reference/
const refDest = join(docs, 'reference')
if (existsSync(refDest)) rmSync(refDest, { recursive: true })
mkdirSync(refDest, { recursive: true })
cpSync(join(root, '微观经济学-笔记.md'), join(refDest, '微观经济学-笔记.md'))
cpSync(join(root, 'notes'), join(refDest, 'notes'), { recursive: true })

// 3. 链接修正
// 3a. reference/ 下：](src/img/ → ../../img/（微观笔记在 reference/ 根，notes 在 reference/notes/）
for (const [file, prefix] of [
  [join(refDest, '微观经济学-笔记.md'), '../img/'],
  [join(refDest, 'notes', '西方经济学导论-笔记.md'), '../../img/'],
  [join(refDest, 'notes', '金融学-笔记.md'), '../../img/'],
]) {
  if (!existsSync(file)) continue
  let text = readFileSync(file, 'utf8')
  text = text.replaceAll('](src/img/', `](${prefix}`)
  text = text.replaceAll('](img/', `](${prefix}`)
  writeFileSync(file, text)
}

// 3b. 课程目录下：指向根级术语表的链接 → 站内术语篇
for (const course of COURSES) {
  const { readdirSync, statSync } = await import('node:fs')
  const walk = dir => {
    for (const name of readdirSync(dir)) {
      const p = join(dir, name)
      if (statSync(p).isDirectory()) { if (name !== 'img') walk(p); continue }
      if (!name.endsWith('.md')) continue
      let text = readFileSync(p, 'utf8')
      const next = text
        .replaceAll('](经济学-术语.md', '](/glossary')
        .replaceAll('](../经济学-术语.md', '](/glossary')
        .replaceAll('](经济学-名人.md', '](/people')
        .replaceAll('](../经济学-名人.md', '](/people')
      if (next !== text) writeFileSync(p, next)
    }
  }
  walk(join(docs, course))
}

console.log('migrated:', COURSES.join(', '), '+ reference + img → docs/')
