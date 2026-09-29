// timeline.ts——理论时间线回归防线：年份有序、领域枚举合法、跳转链接无死链、事件全部落入时代分期。
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { TIMELINE, ERAS, FIELD_LABELS } from '../docs/.vitepress/theme/data/timeline.ts'
import { linkExists, collect } from './helpers.mjs'

test('事件年份非降序（时间线按序渲染，乱序会错位）', () => {
  for (let i = 1; i < TIMELINE.length; i++) {
    assert.ok(
      TIMELINE[i].year >= TIMELINE[i - 1].year,
      `第 ${i} 条年份倒退：${TIMELINE[i - 1].year}（${TIMELINE[i - 1].title}）→ ${TIMELINE[i].year}（${TIMELINE[i].title}）`,
    )
  }
})

test('field 枚举全部有效；title/why 非空', () => {
  const errs = collect('未知 field', TIMELINE, (e) => !(e.field in FIELD_LABELS)).concat(
    collect('title 为空', TIMELINE, (e) => !e.title),
    collect('why 为空', TIMELINE, (e) => !e.why),
  )
  assert.equal(errs, '', errs)
})

test('事件 link 存在时指向真实章节', () => {
  const errs = collect('死链', TIMELINE.filter((e) => e.link), (e) => !linkExists(e.link))
  assert.equal(errs, '', errs)
})

test('时代分期连续无缝隙，每个事件年份落入某期', () => {
  for (let i = 1; i < ERAS.length; i++) {
    assert.equal(ERAS[i].from, ERAS[i - 1].to + 1,
      `分期 ${ERAS[i - 1].name} 与 ${ERAS[i].name} 之间有缝隙`)
  }
  for (const e of TIMELINE) {
    const era = ERAS.find((r) => e.year >= r.from && e.year <= r.to)
    assert.ok(era, `事件 ${e.year}（${e.title}）不落在任何时代分期`)
  }
})
