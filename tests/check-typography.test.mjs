// check-typography.cjs 自测：四类排印病灶必须被抓（exit 1 + 关键词），好样例必须通过。
// 覆盖：全角空格/nbsp 缩进、3+ 空行堆叠、非 SVG 行内样式、段落行下 4+ 空格行、
// 以及各豁免路径（围栏/HTML 块/列表续行/$$ 块后/行内嵌 SVG）与 --fix 两段式退出。
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { withFixture, runGate } from './gate-helpers.mjs'

test('好样例全部通过（围栏四空格 / HTML 块 / 列表续行 / $$ 块后缩进 / 行内嵌 SVG）', async () => {
  await withFixture(
    {
      'good.md': [
        '# 好',
        '',
        '普通段落顶格书写，缩进交给主题 CSS。',
        '',
        '- 列表项',
        '    列表续行四空格（上一行是列表，合法）',
        '',
        '1. 有序列表',
        '   有序续行三空格',
        '',
        '$$',
        'sf(k)=\\Delta k+nk',
        '$$',
        '    display 块后的缩进行（上一非空行是 $$，合法）',
        '',
        '    ```',
        '    围栏内四空格不算',
        '    ```',
        '',
        '<div class="fig">',
        'html 块内不扫',
        '</div>',
        '',
        '图示 <svg><circle style="fill:none"/></svg> 说明文字（行内嵌 SVG 允许样式）。',
        '',
        '> 引用块',
        '',
      ].join('\n'),
    },
    async (dir) => {
      const { status, out } = runGate('check-typography', dir)
      assert.equal(status, 0, out)
      assert.match(out, /排印模式全部通过/)
    },
  )
})

test('段首全角空格缩进被抓', async () => {
  await withFixture(
    { 'bad.md': '　　全角空格开头的段落\n' },
    async (dir) => {
      const { status, out } = runGate('check-typography', dir)
      assert.equal(status, 1, out)
      assert.match(out, /手敲缩进/)
    },
  )
})

test('nbsp/emsp 实体缩进被抓（含列表标记后）', async () => {
  await withFixture(
    { 'bad.md': '&nbsp;段首实体缩进\n\n- &emsp;列表项实体缩进\n' },
    async (dir) => {
      const { status, out } = runGate('check-typography', dir)
      assert.equal(status, 1, out)
      assert.match(out, /:1 手敲缩进/)
      assert.match(out, /:3 手敲缩进/)
    },
  )
})

test('连续 3+ 空行堆叠被抓', async () => {
  await withFixture(
    { 'bad.md': '段落 a\n\n\n\n\n段落 b\n' },
    async (dir) => {
      const { status, out } = runGate('check-typography', dir)
      assert.equal(status, 1, out)
      assert.match(out, /空行堆叠/)
    },
  )
})

test('非 SVG 行内样式被抓（排版补丁应回主题层）', async () => {
  await withFixture(
    { 'bad.md': '段落里 <span style="color:red">红字</span> 继续\n' },
    async (dir) => {
      const { status, out } = runGate('check-typography', dir)
      assert.equal(status, 1, out)
      assert.match(out, /非 SVG 行内样式：style="color:red"/)
    },
  )
})

test('段落行下紧跟 4+ 空格行被抓', async () => {
  await withFixture(
    { 'bad.md': '普通段落一行\n    紧跟四空格缩进行\n' },
    async (dir) => {
      const { status, out } = runGate('check-typography', dir)
      assert.equal(status, 1, out)
      assert.match(out, /段落行下紧跟 4\+ 空格行/)
    },
  )
})

test('--fix 自动修手敲缩进后两段式退出 0，且复检干净', async () => {
  await withFixture(
    { 'bad.md': '　　全角空格开头的段落\n' },
    async (dir) => {
      const fixed = runGate('check-typography', dir, ['--fix'])
      assert.equal(fixed.status, 0, fixed.out)
      assert.match(fixed.out, /已自动修 1 处/)
      const recheck = runGate('check-typography', dir)
      assert.equal(recheck.status, 0, recheck.out)
      assert.match(recheck.out, /排印模式全部通过/)
    },
  )
})
