// 章节正文修订锚点——各批次对 docs/ 正文的修订防回退（第四十一批起）。
import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const read = (rel) => fs.readFileSync(path.join(ROOT, rel), 'utf8')

// ——第四十一批（存疑项清账）锚点——

test('第四十一批：哈罗德-多马提出年份口径（多马论文系 1946—1947 年，1948 对其不成立）', () => {
  const md = read('docs/western/经济增长.md')
  assert.ok(md.includes('20 世纪 40 年代分别提出'), '总述应作「20 世纪 40 年代分别提出」（与站内词条口径一致）')
  assert.ok(md.includes('1946—1947 年发表论文独立提出'), '多马论文年份应逐一注明（Econometrica 1946、AER 1947）')
  assert.ok(!md.includes('1948 年分别提出'), '「1948 年分别提出」对多马不成立（其增长模型论文为 1946—1947 年），不得回退')
})

test('第四十一批：安全资产短缺文献归属为卡瓦列罗等（第二十五批销账项防回退）', () => {
  const md = read('docs/monetary/利率理论.md')
  assert.ok(md.includes('安全资产短缺（卡瓦列罗等）'),
    '安全资产短缺压低长端利率一派通行出处为 Caballero-Farhi-Gourinchas，中译「卡瓦列罗等」')
  assert.ok(!md.includes('劳罗盖蒂'), '「劳罗盖蒂」系音译讹误、无从对应真实作者，不得回退')
})
