// 文档一致性审计防线（第五十批）——《文档与源码一致性审计规范》要求审计表落
// docs/审计-文档一致性.md；本测试把首轮审计的 A1-A4 四处差异钉成断言，防止修好
// 又回退：①审计表在位且按三类差异口径登记；②surface 的 related_targets 路径
// 必须真实存在（A3：docs/data/Readme.md 引用已不存在的误建课）；③surface 无
// /data/ 回链与「禁止发布」残留（A3/A4：与第九批删课、2026-09-27 起的 Pages
// 部署相悖）；④双语 README 结构表 scripts 行的门禁枚举含侧栏覆盖（A1）；
// ⑤PRODUCT 的 math 计数保持 14 个 md 的现口径（A2）。
import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const read = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8')

const AUDIT_PATH = 'docs/审计-文档一致性.md'
const SURFACES = ['.impeccable/surfaces/docs-index-md.md', '.impeccable/surfaces/docs-timeline-md.md']

test('审计表落 docs/审计-文档一致性.md 且按三类差异口径登记', () => {
  assert.ok(fs.existsSync(path.join(ROOT, AUDIT_PATH)), '规范要求的审计表不在位')
  const audit = read(AUDIT_PATH)
  for (const cls of ['超前', '缺失', '不符']) {
    assert.ok(audit.includes(cls), `审计表应含差异类别「${cls}」`)
  }
  assert.ok(/\| A\d+ \|/.test(audit), '审计表应有编号差异行')
  assert.ok(audit.includes('源码证据'), '审计表应有源码证据列')
})

test('surface 的 related_targets 与正文 docs/ 路径全部真实存在', () => {
  for (const f of SURFACES) {
    const text = read(f)
    const targets = [...text.matchAll(/"(docs\/[^"]+)"/g)].map((m) => m[1])
    assert.ok(targets.length > 0, `${f} 应含 docs/ 路径目标`)
    for (const t of targets) {
      assert.ok(fs.existsSync(path.join(ROOT, t)), `${f} 引用的路径不存在：${t}`)
    }
    assert.ok(!text.includes('docs/data'), `${f} 不应引用已删除的 docs/data/ 课程`)
  }
})

test('surface 无 /data/ 回链与「禁止发布」残留（与现行部署形态一致）', () => {
  for (const f of SURFACES) {
    const text = read(f)
    // /data/ 站内回链（引号或反引号紧邻的站内绝对路径；theme/data/ 数据目录不算）
    assert.ok(!/["'`]\/data\//.test(text), `${f} 不应残留 /data/ 站内回链`)
    // CI 自 2026-09-27 起构建并部署 Pages，禁令现行口径只到 tag/release 一层
    assert.ok(!text.includes('禁止发布'), `${f} 不应残留「禁止发布」旧约束`)
    assert.ok(text.includes('git tag'), `${f} 应写明现行约束「禁止 git tag 与 release」`)
  }
})

test('双语 README 结构表 scripts 行的门禁枚举含侧栏覆盖', () => {
  const en = read('README.md').split('\n').find((l) => l.startsWith('| `scripts/`'))
  const zh = read('README.zh.md').split('\n').find((l) => l.startsWith('| `scripts/`'))
  assert.ok(en, 'README.md 应有 scripts 结构表行')
  assert.ok(zh, 'README.zh.md 应有 scripts 结构表行')
  assert.ok(en.includes('navigation coverage'), 'README.md scripts 行应枚举侧栏覆盖门禁')
  assert.ok(zh.includes('侧栏覆盖'), 'README.zh.md scripts 行应枚举侧栏覆盖门禁')
})

test('PRODUCT 的 math 计数保持 14 个 md 的现口径', () => {
  const product = read('PRODUCT.md')
  assert.ok(!product.includes('docs/math/ 12 个文件'), 'docs/math/ 实有 14 个 md，不应写 12 个文件')
  assert.ok(product.includes('14 个 md'), 'PRODUCT 应保留 docs/math/ 14 个 md 的现计数')
})
