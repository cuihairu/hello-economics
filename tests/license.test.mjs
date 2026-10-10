// 许可声明一致性防线——仓内四处许可事实（仓根 LICENSE + README.md +
// README.zh.md + docs/about.md）+ 许可徽章必须同指 CC BY 4.0。
// 背景（第四十八批巡检）：第十七批写 about 页许可时仓库尚无 LICENSE，日志注明
// 「自行假设、以页面声明为准」取了 BY-NC-SA；8bf1d1d 补入 CC BY 4.0 的
// LICENSE、README 许可节与徽章后，about 页漏改至今且「不得用于商业目的」
// 与 CC BY 直接相抵——本测试拦三处声明再度漂移。
import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const read = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8')

const LICENSE = read('LICENSE')
const README = read('README.md')
const README_ZH = read('README.zh.md')
const ABOUT = read('docs/about.md')

test('仓根 LICENSE 即 CC BY 4.0（Attribution 4.0 International）', () => {
  assert.match(LICENSE, /^Attribution 4\.0 International/, 'LICENSE 应为 CC BY 4.0 法律文本')
})

test('README / README.zh / about 三处声明均指 CC BY 4.0 且带官方 deed 链接', () => {
  const sources = [['README.md', README], ['README.zh.md', README_ZH], ['docs/about.md', ABOUT]]
  for (const [name, text] of sources) {
    assert.ok(text.includes('CC BY 4.0'), `${name} 应含 CC BY 4.0 标识`)
    assert.ok(text.includes('creativecommons.org/licenses/by/4.0'), `${name} 应含 CC BY 4.0 deed 链接`)
    assert.ok(!/by-nc-sa/i.test(text), `${name} 不应残留已废弃的 BY-NC-SA 声明`)
  }
})

test('about 页不写与 CC BY 相抵触的限制条款', () => {
  assert.ok(!ABOUT.includes('不得用于商业目的'), 'CC BY 允许商用，about 页不得写商用禁令')
  assert.ok(!ABOUT.includes('以相同方式共享'), 'CC BY 无 SA（相同方式共享）条款')
})

test('许可徽章标注 CC BY 4.0', () => {
  assert.ok(read('docs/public/badges/license.svg').includes('CC BY 4.0'), 'license.svg 徽章应标 CC BY 4.0')
})
