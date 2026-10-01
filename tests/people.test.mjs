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

// ——第三十八批（名人篇全量审计）修订锚点：归属分立/师承/残词叠字防倒退——

test('萨缪尔森贸易两定理分立且用通行顺序（章节正文口径）', () => {
  const s = PEOPLE.find((p) => p.id === 'samuelson')
  assert.ok(s, '萨缪尔森应在册')
  assert.ok(s.theories.includes('要素价格均等化定理'),
    '要素价格均等化系萨缪尔森 1948-1949 独立证明（国际贸易的现代与当代理论章原文）')
  assert.ok(s.theories.includes('斯托尔珀-萨缪尔森定理'), 'S-S 定理应单列且用通行顺序')
  assert.ok(!s.theories.join().includes('萨缪尔森-斯托尔珀'),
    '「要素价格均等化定理（萨缪尔森-斯托尔珀）」混两定理且倒置人名，不得回退')
})

test('bio 无中英混排残词与叠字', () => {
  const all = JSON.stringify(PEOPLE)
  assert.ok(!all.includes(' argument'), '哈耶克 bio 曾残留英文「argument」，不得回退')
  assert.ok(!all.includes('不改改变'), '索洛 bio 曾叠字「不改改变」，不得回退')
})

test('关键细节锚点：斯密自然自由制度、柠檬市场 13 页、索洛余值黑箱', () => {
  const smith = PEOPLE.find((p) => p.id === 'adam-smith')
  assert.ok(smith.theories.includes('自然自由制度'), '斯密理论标签应作「自然自由制度」')
  assert.ok(!smith.theories.join().includes('比较自然的自由制度'), '「比较自然的自由制度」系讹误，不得回退')
  const akerlof = PEOPLE.find((p) => p.id === 'akerlof')
  assert.ok(akerlof.bio.includes('13 页'), '《柠檬市场》QJE 1970（84 卷 3 期）pp.488-500 共 13 页')
  assert.ok(!akerlof.bio.includes('14 页'), '「14 页」系扫描版含封面页的误计，不得回退')
  const solow = PEOPLE.find((p) => p.id === 'solow')
  assert.ok(solow.bio.includes('不改变趋势'), '索洛模型结论应为「不改变趋势」')
  assert.ok(solow.bio.includes('余值'), '余值→内生增长黑箱的衔接语应在（与罗默 bio 互文）')
})

test('斯蒂格利茨师承锚定 MIT（萨缪尔森、索洛），双向边成立', () => {
  const stiglitz = PEOPLE.find((p) => p.id === 'stiglitz')
  assert.ok(stiglitz.influencedBy.includes('samuelson') && stiglitz.influencedBy.includes('solow'),
    '斯蒂格利茨系 MIT 博士（学位论文导师索洛），师承边不得回退')
  assert.ok(PEOPLE_BY_ID.samuelson.influenced.includes('stiglitz'), '萨缪尔森 → 斯蒂格利茨 反向边应在')
  assert.ok(PEOPLE_BY_ID.solow.influenced.includes('stiglitz'), '索洛 → 斯蒂格利茨 反向边应在')
  assert.ok(!stiglitz.bio.includes('阿罗的学生'), '「阿罗的学生」系师承误记（其 MIT 师长为萨缪尔森、索洛），不得回退')
})

// ——第四十一批（存疑项清账）锚点：门格尔理论标签归属论防倒退——

test('第四十一批：门格尔理论标签为归属（归算）理论，不得回退「边际生产力分配」', () => {
  const menger = PEOPLE.find((p) => p.id === 'menger')
  assert.ok(menger, '门格尔应在册')
  assert.ok(menger.theories.some((t) => t.includes('归属') && t.includes('归算')),
    '门格尔第三理论标签应作「要素价值的归属（归算）理论」——维基 Imputation (economics)：归算理论 first expounded by Carl Menger（要素价值由产品价值推导）')
  assert.ok(!menger.theories.includes('边际生产力分配'),
    '完成形态的边际生产力分配论通行归属克拉克（站内 math/微分学基础与 western/生产要素市场章口径），不得挂门格尔名下')
})
