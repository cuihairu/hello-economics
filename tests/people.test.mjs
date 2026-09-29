// people.ts——名人篇影响网络的回归防线：双向边一致、引用无死链（第三批 3A 人工核对自动化）。
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { PEOPLE, PEOPLE_BY_ID, FIELD_LABELS } from '../docs/.vitepress/theme/data/people.ts'
import { FIELD_LABELS as TIMELINE_FIELDS } from '../docs/.vitepress/theme/data/timeline.ts'
import { collect } from './helpers.mjs'

test('人物 id 唯一，PEOPLE_BY_ID 全量一致', () => {
  const ids = PEOPLE.map((p) => p.id)
  assert.equal(new Set(ids).size, ids.length, `id 重复：${ids.join()}`)
  assert.deepEqual(Object.keys(PEOPLE_BY_ID).sort(), [...ids].sort())
})

test('影响网络引用的 id 全部存在（无死链）', () => {
  for (const p of PEOPLE) {
    for (const id of [...p.influencedBy, ...p.influenced]) {
      assert.ok(PEOPLE_BY_ID[id], `${p.id} 引用了不存在的人物：${id}`)
    }
  }
})

test('influenced / influencedBy 双向一致', () => {
  const errs = []
  for (const a of PEOPLE) {
    for (const b of a.influenced) {
      if (!PEOPLE_BY_ID[b].influencedBy.includes(a.id)) errs.push(`${a.id}.influenced 含 ${b}，但 ${b}.influencedBy 无 ${a.id}`)
    }
    for (const b of a.influencedBy) {
      if (!PEOPLE_BY_ID[b].influenced.includes(a.id)) errs.push(`${a.id}.influencedBy 含 ${b}，但 ${b}.influenced 无 ${a.id}`)
    }
  }
  assert.deepEqual(errs, [], `双向边不对称 ×${errs.length}：\n${errs.join('\n')}`)
})

test('无自引用、生卒年格式与顺序合法、领域枚举有效', () => {
  const errs = []
  for (const p of PEOPLE) {
    if (p.influenced.includes(p.id) || p.influencedBy.includes(p.id)) errs.push(`${p.id} 自引用`)
    const m = p.years.match(/^(\d{4})-(\d{4})?$/)
    if (!m) errs.push(`${p.id} years 格式异常：${p.years}`)
    else if (m[2] && Number(m[2]) <= Number(m[1])) errs.push(`${p.id} 卒年不晚于生年：${p.years}`)
    if (!(p.field in FIELD_LABELS)) errs.push(`${p.id} 未知 field：${p.field}`)
  }
  assert.deepEqual(errs, [], errs.join('；'))
})

test('people 与 timeline 两处 FIELD_LABELS 枚举同步（重复常量防漂移）', () => {
  assert.deepEqual(Object.keys(FIELD_LABELS).sort(), Object.keys(TIMELINE_FIELDS).sort())
})

test('卡页渲染前提：每人生卒年非空、至少一条理论标签', () => {
  const errs = collect('理论标签为空', PEOPLE, (p) => !p.theories.length).concat(
    collect('years 为空', PEOPLE, (p) => !p.years),
  )
  assert.equal(errs, '', errs)
})
