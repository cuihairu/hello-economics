// README.md（仓根）链接防线——check-links.cjs 只扫 docs/，根 README 一直在门外
// （第三十五批巡检发现：根级课程目录移除后，各课入口仍指 western/Readme.md 一类
// 已不存在的根级路径，无门禁可拦）。解析口径与 scripts/check-links.cjs 逐条对齐。
import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { COURSES } from '../docs/.vitepress/theme/data/courses.ts'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const README = path.join(ROOT, 'README.md')
const DOCS = path.join(ROOT, 'docs')

/** check-links.cjs 同口径提取 .md 引用（跳过外链/mailto/裸 <、去锚点、decodeURI） */
const mdRefs = (text) => {
  const out = []
  const RE = /!?\[[^\]]*\]\(([^)]+)\)/g
  let m
  while ((m = RE.exec(text))) {
    let ref = m[1].split(' ')[0].trim()
    if (!ref || ref.startsWith('http') || ref.startsWith('mailto:') || ref.startsWith('<')) continue
    ref = ref.split('#')[0]
    if (!ref || !ref.endsWith('.md')) continue
    try { ref = decodeURIComponent(ref) } catch {}
    out.push({ ref, raw: m[1] })
  }
  return out
}

const readme = fs.readFileSync(README, 'utf8')
const refs = mdRefs(readme)

/** 引用解析为磁盘绝对路径：站点绝对路径相对 docs/，否则相对 README 所在目录 */
const resolveRef = (ref) =>
  ref.startsWith('/') ? path.join(DOCS, ref.slice(1)) : path.resolve(ROOT, ref)

test('README 全部 .md 引用指向存在的文件（check-links 同口径，扫描根为仓根）', () => {
  assert.ok(refs.length > 0, 'README 应含 .md 引用')
  const bad = refs.filter((r) => !fs.existsSync(resolveRef(r.ref)))
  assert.deepEqual(
    bad.map((r) => r.raw), [],
    `README 死链 ×${bad.length}：${bad.map((r) => r.raw).join(' | ')}`,
  )
})

test('各课入口与 courses.ts 对齐：每课导论 + 有 History aux 的课历史页', () => {
  const hrefs = refs.map((r) => r.ref)
  for (const c of COURSES) {
    // 导论页（readme 字段，站点绝对路径 → README 里写作 docs/xxx.md）
    const readmeRef = `docs${c.readme}.md`
    assert.ok(hrefs.includes(readmeRef), `缺 ${c.label} 课程导论链接：${readmeRef}`)

    // History 类 aux（courses.ts aux 里有 /base/History 才要求）
    const base = c.readme.slice(0, c.readme.lastIndexOf('/'))
    if (c.aux.some((a) => a.link === `${base}/History`)) {
      const historyRef = `docs${base}/History.md`
      assert.ok(hrefs.includes(historyRef), `缺 ${c.label} 历史页链接：${historyRef}`)
    }
  }
})

test('公共资料段：根级源资料 + western 两辅助页在链，已删页不再被引', () => {
  const hrefs = refs.map((r) => r.ref)
  for (const f of ['经济学-术语.md', '经济学-名人.md']) {
    assert.ok(hrefs.includes(f), `缺根级源资料链接：${f}`)
    assert.ok(fs.existsSync(path.join(ROOT, f)), `根级源资料不在位：${f}`)
  }
  // western aux 中除 Readme/History 外的两页（公式总览、宏观经济模型演进）
  const westernAux = COURSES.find((c) => c.id === 'western').aux
    .map((a) => `docs${a.link}.md`)
    .filter((r) => !r.endsWith('/Readme.md') && !r.endsWith('/History.md'))
  assert.ok(westernAux.length >= 2, 'western 应有 Readme/History 之外的辅助页')
  for (const r of westernAux) {
    assert.ok(hrefs.includes(r), `缺 western 辅助页链接：${r}`)
  }

  // IS-AS 通俗讲解空文件自第十三批删除、内容并入正文章，README 不得再引
  assert.ok(!refs.some((r) => r.ref.includes('IS-AS')), 'IS-AS 通俗讲解页已删，README 不应引用')
})

test('仓库结构表所列路径全部在位', () => {
  for (const p of ['docs', 'scripts', 'tests', '经济学-术语.md', '经济学-名人.md']) {
    assert.ok(fs.existsSync(path.join(ROOT, p)), `仓库结构表路径不在位：${p}`)
  }
})
