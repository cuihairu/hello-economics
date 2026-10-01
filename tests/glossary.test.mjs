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

// ——第四十批（glossary 全量审计）修订锚点：引号口径/讹变/口径冲突/截断补全防倒退——

const GLOSSARY_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

test('第四十批：源文件与生成物均无弯引号（全站排印口径为「」）', () => {
  const src = fs.readFileSync(path.join(GLOSSARY_ROOT, '经济学-术语.md'), 'utf8')
  assert.ok(!/[“”]/.test(src), '源术语文件残留弯引号 “ ”（含词条名，会影响术语页搜索与全站排印一致性）')
  assert.ok(!/[“”]/.test(JSON.stringify(GLOSSARY)), 'glossary.ts 残留弯引号')
})

test('第四十批：基础产业「不可分性」防回退（「不可再生」系讹变）', () => {
  const e = GLOSSARY.find((x) => x.term === '基础产业')
  assert.ok(e, '基础产业词条应在册')
  assert.ok(e.def.includes('不可分性'), 'def 应含「不可分性」（source 章正文：投资具有巨额性与「不可分性」）')
  assert.ok(!e.def.includes('不可再生'), '「不可再生」系「不可分性」讹变且语义不通（交通、通讯、水利设施均可再生产），不得回退')
})

test('第四十批：GNP 两课程词条均为常住居民（国民）口径', () => {
  const gnps = GLOSSARY.filter((x) => x.term.includes('国民生产总值'))
  assert.equal(gnps.length, 2, '西方经济学与社会主义经济学各一条 GNP 词条')
  for (const g of gnps) {
    assert.ok(g.def.includes('常住居民') || g.def.includes('某国国民'),
      `「${g.term}」（${g.course}）def 应为国民/常住居民口径`)
    assert.ok(!g.def.includes('各部门所生产'),
      `「${g.term}」（${g.course}）「各部门所生产」系 GDP 的领土范围口径（社会主义版曾误用），不得回退`)
  }
})

test('第四十批：成对概念词条 def 须覆盖两侧概念（词条名挂另一概念而 def 只讲一半即截断）', () => {
  const pin = [
    // 本批补全 12 条（判定依据：各词条 source 章正文的成对定义句）
    ['局部均衡和一般均衡', ['一般均衡是指']],
    ['总收益、平均收益和边际收益', ['平均收益', '收入增量']],
    ['固定汇率与浮动汇率', ['浮动汇率指']],
    ['贷方与借方项目', ['借方项目']],
    ['贸易创造与贸易转移', ['非成员国']],
    ['价内税与价外税', ['价外税是指']],
    ['税制结构与税制模式', ['税制模式是指']],
    ['预算调整', ['部分改变原预算']],
    ['利率与收益率', ['价格变动率']],
    ['名义利率和实际利率', ['实际利率是指']],
    ['流动性偏好', ['有价证券形式持有']],
    ['短期利率和长期利率', ['货币市场', '资本市场']],
    // 第十四批先例补全的成对词条（一并防再截断）
    ['升水与贴水', ['贴水是指']],
    ['外在经济和外在不经济', ['外在不经济']],
  ]
  for (const [term, needles] of pin) {
    const e = GLOSSARY.find((x) => x.term === term)
    assert.ok(e, `词条「${term}」应在册`)
    for (const n of needles) {
      assert.ok(e.def.includes(n), `「${term}」def 应含「${n}」（词条名挂出的概念须有定义）`)
    }
  }
})
