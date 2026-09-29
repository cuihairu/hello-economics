// glossary.ts——术语篇回归防线：回链无死链、课程枚举合法、生成物与源文件同步（第十四批人工核对自动化）。
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { GLOSSARY, COURSES } from '../docs/.vitepress/theme/data/glossary.ts'
import { linkExists, collect } from './helpers.mjs'

test('(term, course) 二元组唯一——同一术语跨课程并存是设计预期（如「贴水」在汇率与利率中含义不同），组内 key 与搜索态 key 均含 course 不冲突', () => {
  const keys = GLOSSARY.map((e) => `${e.course}::${e.term}`)
  const dup = keys.filter((k, i) => keys.indexOf(k) !== i)
  assert.deepEqual(dup, [], `同课程内重复词条：${[...new Set(dup)].join(', ')}`)
})

test('course 枚举与术语篇自身 COURSES 一致', () => {
  const errs = collect('未知课程', GLOSSARY, (e) => !COURSES.includes(e.course))
  assert.equal(errs, '', errs)
})

test('每条词条 def 非空；source 存在时指向真实章节', () => {
  const errs = collect('def 为空', GLOSSARY, (e) => !e.def).concat(
    collect('source 死链', GLOSSARY, (e) => e.source && !linkExists(e.source)),
  )
  assert.equal(errs, '', errs)
})

test('生成物与源《经济学-术语.md》同步（重生成无 diff）', () => {
  const file = path.join(
    path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..'),
    'docs/.vitepress/theme/data/glossary.ts',
  )
  const before = fs.readFileSync(file, 'utf8')
  execFileSync('node', ['scripts/build-glossary.cjs'], { stdio: 'pipe' })
  const after = fs.readFileSync(file, 'utf8')
  assert.equal(after, before, 'glossary.ts 与源术语文件不同步：请运行 pnpm glossary 后再提交')
})
