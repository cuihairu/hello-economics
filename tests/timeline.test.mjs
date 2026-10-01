// timeline.ts——理论时间线回归防线：年份有序、领域枚举合法、跳转链接无死链、事件全部落入时代分期。
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { TIMELINE, ERAS, FIELD_LABELS } from '../docs/.vitepress/theme/data/timeline.ts'
import { PEOPLE } from '../docs/.vitepress/theme/data/people.ts'
import { linkExists, collect } from './helpers.mjs'

test('事件年份非降序（时间线按序渲染，乱序会错位）', () => {
  for (let i = 1; i < TIMELINE.length; i++) {
    assert.ok(
      TIMELINE[i].year >= TIMELINE[i - 1].year,
      `第 ${i} 条年份倒退：${TIMELINE[i - 1].year}（${TIMELINE[i - 1].title}）→ ${TIMELINE[i].year}（${TIMELINE[i].title}）`,
    )
  }
})

test('field 枚举全部有效；title/why 非空', () => {
  const errs = collect('未知 field', TIMELINE, (e) => !(e.field in FIELD_LABELS)).concat(
    collect('title 为空', TIMELINE, (e) => !e.title),
    collect('why 为空', TIMELINE, (e) => !e.why),
  )
  assert.equal(errs, '', errs)
})

test('事件 link 存在时指向真实章节', () => {
  const errs = collect('死链', TIMELINE.filter((e) => e.link), (e) => !linkExists(e.link))
  assert.equal(errs, '', errs)
})

test('时代分期连续无缝隙，每个事件年份落入某期', () => {
  for (let i = 1; i < ERAS.length; i++) {
    assert.equal(ERAS[i].from, ERAS[i - 1].to + 1,
      `分期 ${ERAS[i - 1].name} 与 ${ERAS[i].name} 之间有缝隙`)
  }
  for (const e of TIMELINE) {
    const era = ERAS.find((r) => e.year >= r.from && e.year <= r.to)
    assert.ok(era, `事件 ${e.year}（${e.title}）不落在任何时代分期`)
  }
})

// ——第三十七批（timeline 全量审计）修订锚点：年份/译名/书名/链接语义防倒退——

test('who 非空（事件主体必填；2008 事件曾以空主体漏网）', () => {
  const errs = collect('who 为空', TIMELINE, (e) => !e.who || !e.who.trim())
  assert.equal(errs, '', errs)
})

test('关键年份与正文一致（章节原文为判定依据）', () => {
  const expect = [
    // 宏观经济活动章「1934 年那份提交国会的报告…1971 年诺贝尔奖」（原作 1937/1991）
    ['国民收入核算', 1934, '1971 年诺贝尔奖'],
    // 货币供求理论章「鲍莫尔（1952）与托宾（1956）」；1958 系托宾资产组合论文年（原作 1958）
    ['鲍莫尔-托宾', 1952, '平方根公式'],
    // 矩阵与行列式章「1936 年的投入产出分析」（原作 1941 专著年，与链接章节口径不一致）
    ['投入产出分析', 1936, null],
    ['IS-LM 模型', 1937, null],
    ['柠檬市场', 1970, null],
  ]
  for (const [frag, year, needle] of expect) {
    const hits = TIMELINE.filter((e) => e.title.includes(frag))
    assert.equal(hits.length, 1, `「${frag}」应恰有一条事件，实得 ${hits.length}`)
    assert.equal(hits[0].year, year, `「${frag}」年份应锚定 ${year}`)
    if (needle) {
      assert.ok(hits[0].why.includes(needle), `「${frag}」why 应含「${needle}」`)
    }
  }
})

test('白芝浩条不夸大引用年限（1873→2008 为一百三十余年）', () => {
  const bagehot = TIMELINE.find((e) => e.title.includes('伦巴第街'))
  assert.ok(bagehot, '白芝浩事件应在册')
  assert.ok(!bagehot.why.includes('两百年后'), '「两百年后」系年限夸大，应作「一百多年后」')
})

test('人名译名与章节正文一致（阿克洛夫；timeline 与 people 同源）', () => {
  const lemons = TIMELINE.find((e) => e.title === '柠檬市场')
  assert.ok(lemons, '柠檬市场事件应在册')
  assert.equal(lemons.who, '乔治·阿克洛夫', '章节正文 10+ 处均作「阿克洛夫」')
  assert.ok(!TIMELINE.some((e) => e.who.includes('阿克尔洛夫')), 'timeline 不得回退旧译「阿克尔洛夫」')
  assert.ok(PEOPLE.some((p) => p.name === '乔治·阿克洛夫'), 'people.ts 应有「乔治·阿克洛夫」')
  assert.ok(!JSON.stringify(PEOPLE).includes('阿克尔洛夫'), 'people.ts 不得残留旧译「阿克尔洛夫」')
})

test('2014 英格兰银行条书名用通行中译', () => {
  const e = TIMELINE.find((x) => x.year === 2014)
  assert.ok(e, '2014 事件应在册')
  assert.ok(e.why.includes('《现代经济中的货币创造》'), 'McLeay 等 2014 原题通行中译为《现代经济中的货币创造》')
  assert.ok(!e.why.includes('《货币创造的经济》'), '旧书名《货币创造的经济》与原文标题不符')
})

test('链接不残留已删「基础数据」课路径', () => {
  const errs = collect('/data/ 残留', TIMELINE.filter((e) => e.link), (e) => e.link.startsWith('/data/'),
    (e) => `${e.title} → ${e.link}`)
  assert.equal(errs, '', errs)
})

test('链接语义锚点不回退（指向正文中实际包含该内容的页面）', () => {
  const pin = [
    ['萨伊定律', '/western/简单国民收入决定理论'],        // 意见分歧章无萨伊定律；本条脉络正面叙述其被凯恩斯击穿
    ['《共产党宣言》', '/socialist/社会主义经济制度的本质特征'], // 导论无宣言/空想内容；本质特征章载空想→科学叙事
    ['《经济表》', '/people'],                            // 宏观经济活动章无魁奈；名人篇有魁奈词条（people.ts）
    ['希克斯-汉森综合', '/western/产品市场和货币市场的一般均衡'], // 宏观经济政策章无汉森；IS-LM 章载希克斯-汉森定名
    ['《博弈论与经济行为》', '/books'],                    // 市场理论章无 1944 原著；名著篇有该书专条
    ['《知识在社会中的运用》', '/socialist/社会主义市场经济理论'], // 意见分歧章无哈耶克；计算论战章载哈耶克 1945
    ['《经济学》', '/western/总需求和总供给分析'],          // Readme 无萨缪尔森/新古典综合；AD-AS 章载新古典综合叙事
    ['菲利普斯曲线', '/western/通货膨胀理论'],              // AD-AS 章无菲利普斯；通胀章载 1958 完整叙事
  ]
  for (const [frag, link] of pin) {
    const e = TIMELINE.find((x) => x.title.includes(frag))
    assert.ok(e, `事件「${frag}」应在册`)
    assert.equal(e.link, link, `「${frag}」链接应指向 ${link}`)
  }
})
