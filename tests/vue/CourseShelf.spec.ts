// CourseShelf（首页书架）：WAI-ARIA tabs 语义、章节行拆分、深链与方向键导航。
// 数据期望从 theme/data/courses.ts 真库推导（沿第二十六批方法论：内容变则期望跟着变）。
import { beforeEach, describe, expect, it } from 'vitest'
import CourseShelf from '../../docs/.vitepress/theme/components/CourseShelf.vue'
import { SHELF } from '../../docs/.vitepress/theme/data/courses'
import { flush, mountTheme, siteHref } from './helpers'
import { clearHash } from './setup'

beforeEach(clearHash)

describe('CourseShelf 渲染', () => {
  it('一个 SHELF 条目一个 tab：标签与条数徽标对得上', () => {
    const wrapper = mountTheme(CourseShelf)
    const tabs = wrapper.findAll('.shelf-tab')
    expect(tabs).toHaveLength(SHELF.length)
    SHELF.forEach((t, i) => {
      expect(tabs[i].find('.st-label').text()).toBe(t.label)
      expect(tabs[i].find('.st-count').text()).toBe(t.count)
    })
  })

  it('首个 tab 默认选中：aria-selected / roving tabindex / panel 关联', () => {
    const wrapper = mountTheme(CourseShelf)
    const tabs = wrapper.findAll('.shelf-tab')
    tabs.forEach((tab, i) => {
      expect(tab.attributes('aria-selected')).toBe(String(i === 0))
      expect(tab.attributes('tabindex')).toBe(i === 0 ? '0' : '-1')
    })
    expect(tabs[0].attributes('aria-controls')).toBe('shelf-panel-live')
    const panel = wrapper.find('.shelf-panel')
    expect(panel.attributes('aria-labelledby')).toBe(`shelf-tab-${SHELF[0].id}`)
    expect(panel.find('.sp-kicker').text()).toBe(SHELF[0].kicker)
    expect(panel.find('.sp-blurb').text()).toBe(SHELF[0].blurb)
  })

  it('「n · 标题」拆成序号与标题两段，无序号条目序号留空', () => {
    const wrapper = mountTheme(CourseShelf)
    const items = SHELF[0].groups.flatMap((g) => g.items)
    const rows = wrapper.findAll('.sp-list li')
    expect(rows).toHaveLength(items.length)

    const numbered = items.findIndex((it) => /^(\d+)\s·\s/.test(it.text))
    const plain = items.findIndex((it) => !/^(\d+)\s·\s/.test(it.text))
    // 首个 tab（数学基础）同时含 aux 无序号入口与带序号章节，两条分支都在场
    expect(numbered).toBeGreaterThanOrEqual(0)
    expect(plain).toBeGreaterThanOrEqual(0)

    const numMatch = /^(\d+)\s·\s(.+)$/.exec(items[numbered].text)!
    expect(rows[numbered].find('.sp-num').text()).toBe(numMatch[1])
    expect(rows[numbered].find('.sp-title').text()).toBe(numMatch[2])
    expect(rows[plain].find('.sp-num').text()).toBe('')
    expect(rows[plain].find('.sp-title').text()).toBe(items[plain].text)
  })

  it('章节链接与主入口都补站点 base 前缀', () => {
    const wrapper = mountTheme(CourseShelf)
    const items = SHELF[0].groups.flatMap((g) => g.items)
    wrapper.findAll('.sp-list a').forEach((a, i) => {
      expect(a.attributes('href')).toBe(siteHref(items[i].link))
    })
    expect(wrapper.find('.sp-entry').attributes('href')).toBe(siteHref(SHELF[0].entry.link))
    expect(wrapper.find('.sp-entry').text()).toContain(SHELF[0].entry.text)
  })
})

describe('CourseShelf 切换', () => {
  it('点击 tab 切换面板：aria-selected 与 kicker/blurb/entry 跟随', async () => {
    const wrapper = mountTheme(CourseShelf)
    const target = SHELF.length - 1
    await wrapper.findAll('.shelf-tab')[target].trigger('click')
    await flush()

    const tabs = wrapper.findAll('.shelf-tab')
    expect(tabs[target].attributes('aria-selected')).toBe('true')
    expect(tabs[target].classes()).toContain('is-active')
    expect(wrapper.find('.sp-kicker').text()).toBe(SHELF[target].kicker)
    expect(wrapper.find('.sp-entry').attributes('href')).toBe(siteHref(SHELF[target].entry.link))
  })

  it('方向键导航：→ 前进、← 从头回绕到尾、Home/End 跳两端', async () => {
    const wrapper = mountTheme(CourseShelf)
    const tablist = wrapper.find('.shelf-tabs')
    const selected = () =>
      wrapper.findAll('.shelf-tab').findIndex((t) => t.attributes('aria-selected') === 'true')

    await tablist.trigger('keydown', { key: 'ArrowRight' })
    expect(selected()).toBe(1)
    await tablist.trigger('keydown', { key: 'ArrowLeft' })
    expect(selected()).toBe(0)
    await tablist.trigger('keydown', { key: 'ArrowLeft' })
    expect(selected()).toBe(SHELF.length - 1)
    await tablist.trigger('keydown', { key: 'Home' })
    expect(selected()).toBe(0)
    await tablist.trigger('keydown', { key: 'End' })
    expect(selected()).toBe(SHELF.length - 1)
  })

  it('键盘切换后焦点落在选中 tab 上（select 的 focus 分支）', async () => {
    const wrapper = mountTheme(CourseShelf)
    await wrapper.find('.shelf-tabs').trigger('keydown', { key: 'ArrowRight' })
    await flush()
    expect(document.activeElement?.id).toBe(`shelf-tab-${SHELF[1].id}`)
  })
})

describe('CourseShelf 深链', () => {
  it('挂载时按 tab id 或 courseId 定位（/#western-微观…、/#finance）', async () => {
    const target = SHELF.length - 1
    window.location.hash = `#${encodeURIComponent(SHELF[target].id)}`
    const wrapper = mountTheme(CourseShelf)
    await flush() // applyHash 在 onMounted 里写状态，渲染在微任务里落地
    expect(wrapper.findAll('.shelf-tab')[target].attributes('aria-selected')).toBe('true')

    // courseId 同样命中：找第一个 courseId ≠ 自身 id 的 tab
    const byCourse = SHELF.findIndex((t) => t.courseId !== t.id)
    expect(byCourse).toBeGreaterThanOrEqual(0)
    wrapper.unmount()
    window.location.hash = `#${SHELF[byCourse].courseId}`
    const wrapper2 = mountTheme(CourseShelf)
    await flush()
    expect(
      wrapper2.findAll('.shelf-tab')[byCourse].attributes('aria-selected'),
    ).toBe('true')
  })

  it('hashchange 事件实时切换到对应 tab，未知 hash 不动', async () => {
    const wrapper = mountTheme(CourseShelf)
    window.location.hash = `#${SHELF[2].id}`
    window.dispatchEvent(new Event('hashchange'))
    await flush()
    expect(wrapper.findAll('.shelf-tab')[2].attributes('aria-selected')).toBe('true')

    window.location.hash = '#不存在的课程'
    window.dispatchEvent(new Event('hashchange'))
    await flush()
    expect(wrapper.findAll('.shelf-tab')[2].attributes('aria-selected')).toBe('true')
  })
})
