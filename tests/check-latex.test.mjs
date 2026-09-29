// check-latex.cjs 自测：六类病灶必须被抓（exit 1 + 对应报错），好样例必须通过。
// 覆盖：非法命令/环境白名单、可疑转义、行内 $ 配对、$$ 行中嵌入、
// 文件尾未闭合块、围栏与行内代码剥离、CJK 贴邻 display 定界。
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { withFixture, runGate } from './gate-helpers.mjs'

test('好样例全部通过（行内/独立行/单行 $$/cases 环境/转义/围栏与行内代码剥离/CJK 贴邻）', async () => {
  await withFixture(
    {
      'good.md': [
        '# 好',
        '',
        '行内公式 $x^2 + \\beta$ 与 $\\frac{\\Delta Q}{\\Delta P}$ 正常。',
        '',
        '成本占 $50\\%$ 的比例。',
        '',
        '- 列表项 $MU=\\frac{\\Delta TU}{\\Delta Q}$ 也正常',
        '    列表续行四空格（门禁只看公式，不看排印）',
        '',
        '$$',
        'sf(k)=\\Delta k+nk',
        '$$',
        '',
        '$$\\pi_t=\\pi_t^e+h\\frac{Y_t-Y_f}{Y_f}$$',
        '',
        '\\begin{cases} x=1 \\\\ y=2 \\end{cases}',
        '',
        '中文 $\\text{货币乘数}$ 贴邻定界。',
        '',
        '围栏里的非法命令不算：',
        '',
        '```',
        '\\infin $\\frac{1}{2}',
        '```',
        '',
        '行内代码 `$5` 里的美元不算。',
        '',
      ].join('\n'),
    },
    async (dir) => {
      const { status, out } = runGate('check-latex', dir)
      assert.equal(status, 0, out)
      assert.match(out, /全部通过/)
    },
  )
})

test('非法命令被抓（\\infin 应为 \\infty）', async () => {
  await withFixture(
    { 'bad.md': '极限 $\\infin$ 写错了\n' },
    async (dir) => {
      const { status, out } = runGate('check-latex', dir)
      assert.equal(status, 1, out)
      assert.match(out, /非法命令 \\infin/)
    },
  )
})

test('非法环境被抓（\\begin{foo} 白名单外）', async () => {
  await withFixture(
    { 'bad.md': '$$\\begin{foo} x \\end{foo}$$\n' },
    async (dir) => {
      const { status, out } = runGate('check-latex', dir)
      assert.equal(status, 1, out)
      assert.match(out, /非法环境 \\begin\{foo\}/)
    },
  )
})

test('单个行内 $ 不配对被抓（奇数个）', async () => {
  await withFixture(
    { 'bad.md': '价格是 $5 美元\n' },
    async (dir) => {
      const { status, out } = runGate('check-latex', dir)
      assert.equal(status, 1, out)
      assert.match(out, /行内 \$ 不配对（1 个）/)
    },
  )
})

test('$$ 行中嵌入被抓（「$$A$$或者：$$B$$」连写会漏出字面 $$）', async () => {
  await withFixture(
    { 'bad.md': '所以$$A$$或者：$$B$$二者\n' },
    async (dir) => {
      const { status, out } = runGate('check-latex', dir)
      assert.equal(status, 1, out)
      assert.match(out, /\$\$ 行中嵌入/)
    },
  )
})

test('文件结束未闭合 $$ 块被抓', async () => {
  await withFixture(
    { 'bad.md': '$$x=1\n后续文字没有闭合\n' },
    async (dir) => {
      const { status, out } = runGate('check-latex', dir)
      assert.equal(status, 1, out)
      assert.match(out, /文件结束仍有未闭合的 \$\$ 块/)
    },
  )
})

test('可疑单字符转义被抓（\\@ 不在合法转义集）', async () => {
  await withFixture(
    { 'bad.md': '邮箱 a\\@b 里的转义\n' },
    async (dir) => {
      const { status, out } = runGate('check-latex', dir)
      assert.equal(status, 1, out)
      assert.match(out, /可疑转义 "\\\\@"/)
    },
  )
})
