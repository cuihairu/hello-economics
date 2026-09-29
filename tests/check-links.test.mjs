// check-links.cjs 自测：死链必须被抓（exit 1 + 计数与目标输出），好样例必须通过。
// 覆盖检测逻辑要点：相对/站内绝对路径解析、URL 解码、外链锚点图片跳过、多死链计数。
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { withFixture, runGate } from './gate-helpers.mjs'

test('好样例全部通过（相对链接 / URL 解码中文 / 站内绝对路径 / 外链锚点图片跳过）', async () => {
  await withFixture(
    {
      'good.md': [
        '# 好',
        '',
        '[隔壁章节](./good2.md)',
        '[带标题语法](./good2.md "标题")',
        '[URL 编码中文](./%E9%9C%80%E6%B1%82.md)',
        '[站内绝对路径](/需求与供给.md)',
        '[外链即使以 .md 结尾也不扫](https://example.com/x.md)',
        '[纯锚点](#section)',
        '[图片非 md 跳过](img.png)',
        '[邮件](mailto:a@b.c)',
      ].join('\n'),
      'good2.md': '# 二',
      '需求.md': '# 需求',
      '需求与供给.md': '# 需求与供给',
    },
    async (dir) => {
      const { status, out } = runGate('check-links', dir)
      assert.equal(status, 0, out)
      assert.match(out, /共检查 4 个/)
      assert.match(out, /无死链/)
    },
  )
})

test('相对路径死链被抓（exit 1 + 计数 + 目标回显）', async () => {
  await withFixture(
    { 'bad.md': '[死链](./不存在.md)\n' },
    async (dir) => {
      const { status, out } = runGate('check-links', dir)
      assert.equal(status, 1, out)
      assert.match(out, /死链 1 个/)
      assert.match(out, /-> \.\/不存在\.md/)
    },
  )
})

test('站内绝对路径死链被抓（相对扫描根目录解析）', async () => {
  await withFixture(
    { 'bad.md': '[绝对死链](/没有这一章.md)\n' },
    async (dir) => {
      const { status, out } = runGate('check-links', dir)
      assert.equal(status, 1, out)
      assert.match(out, /死链 1 个/)
      assert.match(out, /-> \/没有这一章\.md/)
    },
  )
})

test('多个死链计数正确（2 个报 2 个）', async () => {
  await withFixture(
    { 'bad.md': '[一](./a.md)\n[二](./b.md)\n', 'ok.md': '[好](./ok2.md)\n', 'ok2.md': '' },
    async (dir) => {
      const { status, out } = runGate('check-links', dir)
      assert.equal(status, 1, out)
      assert.match(out, /死链 2 个/)
    },
  )
})

test('子目录内相对链接按所在目录解析（升目录 ../ 正常，跨目录死链被抓）', async () => {
  await withFixture(
    {
      'sub/inner.md': '[升目录](../top.md) 是好的\n[跨目录死链](../nope.md)\n',
      'top.md': '# 顶',
    },
    async (dir) => {
      const { status, out } = runGate('check-links', dir)
      assert.equal(status, 1, out)
      assert.match(out, /死链 1 个/)
      assert.match(out, /-> \.\.\/nope\.md/)
    },
  )
})
