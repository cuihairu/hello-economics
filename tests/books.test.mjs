// books.ts——名著书架的回归防线：peopleId 指向、封面兜底 SVG 在位、枚举合法（第十六批人工核对自动化）。
import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { BOOKS, BOOKS_BY_ID, SCHOOL_LABELS } from '../docs/.vitepress/theme/data/books.ts'
import { PEOPLE_BY_ID } from '../docs/.vitepress/theme/data/people.ts'
import { collect } from './helpers.mjs'

const PUBLIC_BOOKS = path.join(
  path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..'),
  'docs/public/books',
)

test('书籍 id 唯一，BOOKS_BY_ID 全量一致', () => {
  const ids = BOOKS.map((b) => b.id)
  assert.equal(new Set(ids).size, ids.length, `id 重复：${ids.join()}`)
  assert.deepEqual(Object.keys(BOOKS_BY_ID).sort(), [...ids].sort())
})

test('school 枚举全部在 SCHOOL_LABELS 内', () => {
  const errs = collect('未知 school', BOOKS, (b) => !(b.school in SCHOOL_LABELS))
  assert.equal(errs, '', errs)
})

test('作者 peopleId 全部指向站内人物词条；无站内词条者须有 wiki 链接', () => {
  const errs = []
  for (const b of BOOKS) {
    for (const a of b.authors) {
      if (a.peopleId && !PEOPLE_BY_ID[a.peopleId]) errs.push(`${b.id} 作者 ${a.name} peopleId 无效：${a.peopleId}`)
      if (!a.peopleId && !a.wiki) errs.push(`${b.id} 作者 ${a.name} 既无 peopleId 也无 wiki`)
      if (a.peopleId && PEOPLE_BY_ID[a.peopleId].name !== a.name) {
        errs.push(`${b.id} 作者名与人物词条不一致：${a.name} ≠ ${PEOPLE_BY_ID[a.peopleId].name}`)
      }
    }
  }
  assert.deepEqual(errs, [], errs.join('；'))
})

test('fallback 本地占位 SVG 全部在位（封面外链失效时的兜底）', () => {
  const errs = collect(
    'SVG 缺失',
    BOOKS,
    (b) => !fs.existsSync(path.join(PUBLIC_BOOKS, `${b.id}.svg`)),
  )
  assert.equal(errs, '', errs)
})

test('出版年份在合理区间，summary 非空', () => {
  const errs = collect('year 越界', BOOKS, (b) => b.year < 1400 || b.year > 2026).concat(
    collect('summary 为空', BOOKS, (b) => !b.summary || b.summary.length < 20),
  )
  assert.equal(errs, '', errs)
})
