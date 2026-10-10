// 门禁接线防线（第四十九批）——两道建好却没接线的门禁（check-typography 第十七批
// 建、audit-sidebar 第四十六批建）此前只在推前手工跑，CI 不设防；package.json 也
// 只有 check:latex/check:sidebar、缺 check:links/check:typography 命名入口。本测试
// 断言三件事：①每个 scripts/check-*.cjs 都被 package.json 某脚本引用（新门禁忘挂
// 即红）；②四道门禁有 check:* 入口且指向对应脚本；③build.yml 在 build 之前逐条
// 执行 glossary、测试与四道门禁（失败即停，不产出半套部署产物）。
import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const pkg = JSON.parse(fs.readFileSync(path.join(ROOT, 'package.json'), 'utf8'))
const workflow = fs.readFileSync(path.join(ROOT, '.github/workflows/build.yml'), 'utf8')

const GATES = {
  'check:links': 'check-links.cjs',
  'check:latex': 'check-latex.cjs',
  'check:typography': 'check-typography.cjs',
  'check:sidebar': 'audit-sidebar.cjs',
}

test('每个 scripts/check-*.cjs 都被 package.json 某脚本引用（新门禁不忘接线）', () => {
  const files = fs.readdirSync(path.join(ROOT, 'scripts'))
    .filter((f) => f.startsWith('check-') && f.endsWith('.cjs'))
  assert.ok(files.length >= 4, `门禁脚本数异常：${files.join(', ')}`)
  const wired = Object.values(pkg.scripts).join('\n')
  for (const f of files) {
    assert.ok(wired.includes(f), `scripts/${f} 未被 package.json 任何脚本引用`)
  }
})

test('四道门禁均有 check:* 命名入口且指向对应脚本', () => {
  for (const [cmd, file] of Object.entries(GATES)) {
    assert.ok(pkg.scripts[cmd], `缺 package.json 脚本 ${cmd}`)
    assert.ok(pkg.scripts[cmd].includes(file), `${cmd} 未指向 ${file}`)
  }
})

test('CI 在 build 之前执行 glossary、测试与四道门禁', () => {
  const ordered = ['pnpm glossary', 'pnpm test', ...Object.keys(GATES).map((c) => `pnpm ${c}`), 'pnpm build']
  const at = ordered.map((s) => workflow.indexOf(s))
  at.forEach((i, k) => assert.ok(i >= 0, `build.yml 缺步骤：${ordered[k]}`))
  // 步骤按声明顺序出现（glossary → test → 门禁 → build），任一在前步骤缺失/错序即红
  for (let k = 1; k < at.length; k++) {
    assert.ok(at[k] > at[k - 1], `build.yml 步骤错序：${ordered[k - 1]} 应在 ${ordered[k]} 之前`)
  }
})
