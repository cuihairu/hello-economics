// GlossaryView（术语篇）：CJK 逐字 + 拉丁词元检索、课程筛选、词条详情与选中态清理。
// 期望从 theme/data/glossary.ts 真库推导，不写死词条数。
import { describe, expect, it } from 'vitest'
import GlossaryView from '../../docs/.vitepress/theme/components/GlossaryView.vue'
import { COURSES, GLOSSARY } from '../../docs/.vitepress/theme/data/glossary'
import { flush, mountTheme, siteHref } from './helpers'

// 与组件同构的命中计算，用于交叉核对渲染数量
const normalize = (s: string) => s.toLowerCase().replace(/\s+/g, '')

// 同名术语可能跨课存在（(term, course) 唯一而非 term 唯一）：按钮按所在课程分组定位
const termButtonIn = (wrapper: ReturnType<typeof mountTheme>, course: string, term: string) =>
  wrapper
    .findAll('.group')
    .find((g) => g.find('h2').text().includes(course))!
    .findAll('.term')
    .find((b) => b.text() === term)!

describe('GlossaryView 目录态', () => {
  it('按课程分组渲染全部词条，chip 计数与真库一致', () => {
    const wrapper = mountTheme(GlossaryView)
    const chips = wrapper.findAll('.chip')
    expect(chips).toHaveLength(COURSES.length + 1) // 全部 + 五门课
    expect(chips[0].text()).toContain(String(GLOSSARY.length))
    COURSES.forEach((c, i) => {
      expect(chips[i + 1].text()).toContain(String(GLOSSARY.filter((e) => e.course === c).length))
    })

    const groups = wrapper.findAll('.group')
    expect(groups).toHaveLength(COURSES.length)
    groups.forEach((g, i) => {
      expect(g.find('h2').text()).toContain(COURSES[i])
      expect(g.findAll('.term')).toHaveLength(GLOSSARY.filter((e) => e.course === COURSES[i]).length)
    })
    // 目录态没有搜索结果清单
    expect(wrapper.find('.results').exists()).toBe(false)
    expect(wrapper.find('.hint').exists()).toBe(false)
  })

  it('课程 chip 筛选只留该课分组', async () => {
    const wrapper = mountTheme(GlossaryView)
    const target = COURSES[2]
    await wrapper.findAll('.chip')[3].trigger('click') // 全部 + 前两门课之后
    await flush()

    const groups = wrapper.findAll('.group')
    expect(groups).toHaveLength(1)
    expect(groups[0].find('h2').text()).toContain(target)
    expect(groups[0].findAll('.term')).toHaveLength(
      GLOSSARY.filter((e) => e.course === target).length,
    )

    // 「全部」chip 回位：分组与每组词条数恢复全量
    await wrapper.findAll('.chip')[0].trigger('click')
    await flush()
    expect(wrapper.findAll('.chip')[0].classes()).toContain('is-active')
    const restored = wrapper.findAll('.group')
    expect(restored).toHaveLength(COURSES.length)
    restored.forEach((g, i) => {
      expect(g.find('h2').text()).toContain(COURSES[i])
      expect(g.findAll('.term')).toHaveLength(GLOSSARY.filter((e) => e.course === COURSES[i]).length)
    })
  })
})

describe('GlossaryView 检索', () => {
  it('输入命中词：平铺结果清单 + 命中计数，分组隐去', async () => {
    const wrapper = mountTheme(GlossaryView)
    await wrapper.find('input[type="search"]').setValue('LM')
    await flush()

    const expected = GLOSSARY.filter(
      (e) =>
        normalize(e.term).includes('lm') ||
        normalize(e.def.replace(/<[^>]+>/g, '')).includes('lm'),
    )
    expect(expected.length).toBeGreaterThan(0)
    expect(wrapper.find('.hint').text()).toContain(`命中 ${expected.length} 条`)
    expect(wrapper.findAll('.result')).toHaveLength(expected.length)
    expect(wrapper.findAll('.group')).toHaveLength(0)
    // 结果行带术语与课程双列
    expect(wrapper.find('.result .r-term').text()).toBe(expected[0].term)
    expect(wrapper.find('.result .r-course').text()).toBe(expected[0].course)
  })

  it('大小写与空格不敏感：查询串先 normalize 再比', async () => {
    const wrapper = mountTheme(GlossaryView)
    // 「IS 曲线」normalize 后为 is曲线：大小写、内部空格都应命中
    await wrapper.find('input[type="search"]').setValue('  is 曲线 ')
    await flush()
    const results = wrapper.findAll('.result')
    expect(results.length).toBeGreaterThan(0)
    expect(results.some((r) => r.find('.r-term').text() === 'IS 曲线')).toBe(true)
  })

  it('无命中给出空态提示', async () => {
    const wrapper = mountTheme(GlossaryView)
    await wrapper.find('input[type="search"]').setValue('不存在的术语zzz')
    await flush()
    expect(wrapper.find('.hint').text()).toContain('命中 0 条')
    expect(wrapper.find('.empty').text()).toContain('没有命中的术语')
  })

  it('命中定义中的 HTML 标签不参与匹配（def 先剥标签）', async () => {
    const wrapper = mountTheme(GlossaryView)
    // 任取一条含 HTML 的定义：搜标签名不应因为裸字符串而命中
    const withHtml = GLOSSARY.find((e) => /<[a-z]+/i.test(e.def))!
    expect(withHtml).toBeTruthy()
    const tag = /<([a-z]+)[\s>/]/i.exec(withHtml.def)![1]
    const strippedHit = GLOSSARY.filter(
      (e) =>
        normalize(e.term).includes(tag) ||
        normalize(e.def.replace(/<[^>]+>/g, '')).includes(tag),
    )
    await wrapper.find('input[type="search"]').setValue(tag)
    await flush()
    expect(wrapper.findAll('.result')).toHaveLength(strippedHit.length)
  })
})

describe('GlossaryView 词条详情', () => {
  it('目录态点击术语打开详情：术语、课程与回到原文链接', async () => {
    const wrapper = mountTheme(GlossaryView)
    const entry = GLOSSARY[0]
    const termBtn = termButtonIn(wrapper, entry.course, entry.term)
    await termBtn.trigger('click')
    await flush()

    const detail = wrapper.find('.detail')
    expect(detail.exists()).toBe(true)
    expect(detail.find('h2').text()).toBe(entry.term)
    expect(detail.find('.where').text()).toContain(entry.course)
    expect(detail.find('.source').attributes('href')).toBe(siteHref(entry.source!))
    expect(detail.find('.def').html()).toContain(entry.def.replace(/<[^>]+>/g, '').slice(0, 12))
  })

  it('搜索态点击结果同样可开详情，关闭按钮收起', async () => {
    const wrapper = mountTheme(GlossaryView)
    await wrapper.find('input[type="search"]').setValue('LM')
    await flush()
    await wrapper.find('.result').trigger('click')
    await flush()
    expect(wrapper.find('.detail h2').text()).toBeTruthy()

    await wrapper.find('.close').trigger('click')
    await flush()
    expect(wrapper.find('.detail').exists()).toBe(false)
  })

  it('选中词条被筛选过滤掉时详情自动清空（watch 守卫）', async () => {
    const wrapper = mountTheme(GlossaryView)
    const entry = GLOSSARY.find((e) => e.course === COURSES[0])!
    const termBtn = termButtonIn(wrapper, entry.course, entry.term)
    await termBtn.trigger('click')
    await flush()
    expect(wrapper.find('.detail').exists()).toBe(true)

    // 切到另一门课：选中项不在过滤结果里，详情应收起
    await wrapper.findAll('.chip')[2].trigger('click')
    await flush()
    expect(wrapper.find('.detail').exists()).toBe(false)
  })
})
