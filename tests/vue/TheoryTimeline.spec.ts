// TheoryTimeline（理论时间线）：档位/车道几何、节点选择、拖动-滚轮-键盘三套输入、
// 筛选与折叠年表。视口宽度由 setup 固定为 1100px（与组件默认一致），几何期望可精确推算。
import { beforeEach, describe, expect, it } from 'vitest'
import TheoryTimeline from '../../docs/.vitepress/theme/components/TheoryTimeline.vue'
import { ERAS, FIELD_LABELS, TIMELINE } from '../../docs/.vitepress/theme/data/timeline'
import { flush, mountTheme, siteHref } from './helpers'
import { resetMedia } from './setup'

const SPAN = 2035 - 1500
const VIEW_W = 1100

const viewport = (wrapper: ReturnType<typeof mountTheme>) => wrapper.find('.tl-viewport')
const track = (wrapper: ReturnType<typeof mountTheme>) => wrapper.find('.tl-track')
/** 轨道当前 translate3d 的 x 值（px，≤0） */
const offsetOf = (wrapper: ReturnType<typeof mountTheme>) => {
  const m = /translate3d\((-?[\d.]+)px,0,0\)/.exec(track(wrapper).attributes('style') ?? '')
  return m ? Number(m[1]) : null
}
/** 缩放到第 i 档并把轨道拉回最左端（zoomAt 锚定视口中心，初始 offset 不为 0） */
const zoomHome = async (wrapper: ReturnType<typeof mountTheme>, i: number) => {
  await wrapper.findAll('.tl-zoom .chip')[i].trigger('click')
  await viewport(wrapper).trigger('wheel', { deltaX: -1e6, deltaY: 0 })
  await flush()
  expect(offsetOf(wrapper)).toBe(0)
}

beforeEach(resetMedia)

describe('TheoryTimeline 全览档（默认）', () => {
  it('全览 fit：整条线装进视口，年份窗口显示全程，节点全渲染', () => {
    const wrapper = mountTheme(TheoryTimeline)
    // viewW=1100 → fitPx≈2.06 px/年：is-plain（不画卡片）且 is-rug（<9px/年改画短线）
    expect(viewport(wrapper).classes()).toContain('is-plain')
    expect(viewport(wrapper).classes()).toContain('is-rug')
    expect(wrapper.find('.tl-window').text()).toBe('1500 — 2035')
    expect(wrapper.findAll('.tl-event')).toHaveLength(TIMELINE.length)
    expect(wrapper.findAll('.tl-node')).toHaveLength(TIMELINE.length)
    expect(wrapper.findAll('.tl-card')).toHaveLength(0)
    // 全览刻度 50 年一档，1500 是 major 且落在原点
    expect(wrapper.find('.tl-tick').attributes('style')).toContain('left: 0px')
    expect(wrapper.find('.tl-tick .tl-tick-year').text()).toBe('1500')
  })

  it('筛选 chip 计数与真库一致，切换领域后节点收敛且选中清空', async () => {
    const wrapper = mountTheme(TheoryTimeline)
    const chips = wrapper.findAll('.tl-filters .chip')
    expect(chips).toHaveLength(Object.keys(FIELD_LABELS).length + 1)
    expect(chips[0].text()).toContain(String(TIMELINE.length))
    for (const [i, field] of Object.keys(FIELD_LABELS).entries()) {
      expect(chips[i + 1].text()).toContain(
        String(TIMELINE.filter((e) => e.field === field).length),
      )
    }

    await wrapper.find('.tl-event .tl-node').trigger('click')
    await flush()
    expect(wrapper.find('.d-title').exists()).toBe(true)

    const field = Object.keys(FIELD_LABELS)[0]
    await chips[1].trigger('click')
    await flush()
    expect(wrapper.findAll('.tl-event')).toHaveLength(
      TIMELINE.filter((e) => e.field === field).length,
    )
    expect(wrapper.find('.d-title').exists()).toBe(false)
    // 折叠年表跟随筛选：summary 计数对齐
    expect(wrapper.find('.tl-list summary').text()).toContain(
      String(TIMELINE.filter((e) => e.field === field).length),
    )
  })

  it('未选中时详情给出口号文案：节点总数与首尾节点来自数据', () => {
    const wrapper = mountTheme(TheoryTimeline)
    const byYear = [...TIMELINE].sort((a, b) => a.year - b.year)
    const empty = wrapper.find('.d-empty').text()
    expect(empty).toContain(`${TIMELINE.length} 个节点`)
    expect(empty).toContain(`${byYear[0].year} 年的${byYear[0].title}`)
    expect(empty).toContain(
      `${byYear[byYear.length - 1].year} 年的${byYear[byYear.length - 1].title}`,
    )
  })
})

describe('TheoryTimeline 节点选择与详情', () => {
  it('全览档点节点：详情给年份/标题/人物/领域与「进入相关章节」', async () => {
    const wrapper = mountTheme(TheoryTimeline)
    const first = wrapper.find('.tl-event')
    const index = Number(first.attributes('data-index'))
    const event = TIMELINE[index]

    await first.find('.tl-node').trigger('click')
    await flush()

    expect(wrapper.find('.d-year').text()).toBe(String(event.year))
    expect(wrapper.find('.d-title').text()).toBe(event.title)
    expect(wrapper.find('.d-meta').text()).toContain(FIELD_LABELS[event.field])
    if (event.who) expect(wrapper.find('.d-meta').text()).toContain(event.who)
    expect(wrapper.find('.d-why').text()).toBe(event.why)
    if (event.link) {
      expect(wrapper.find('.d-more').attributes('href')).toBe(siteHref(event.link))
    } else {
      expect(wrapper.find('.d-more').exists()).toBe(false)
    }
    expect(first.classes()).toContain('is-selected')
    expect(first.find('.tl-node').attributes('aria-label')).toBe(`${event.year} ${event.title}`)
  })

  it('拖拽后松手不误选（dragged 守卫），原地点按仍可选（downOn 兜底）', async () => {
    const wrapper = mountTheme(TheoryTimeline)
    const vp = viewport(wrapper)
    const node = wrapper.find('.tl-event')

    // 在节点上按下 → 移动超过 4px → 松手：dragged=true，不触发选中
    await node.trigger('pointerdown', { button: 0, pointerId: 1, clientX: 300 })
    await vp.trigger('pointermove', { pointerId: 1, clientX: 280 })
    expect(vp.classes()).toContain('is-dragging')
    await vp.trigger('pointerup', { pointerId: 1 })
    await flush()
    expect(wrapper.find('.d-empty').exists()).toBe(true)

    // 拖完紧接着的 click 也被守卫拦下
    await node.find('.tl-node').trigger('click')
    await flush()
    expect(wrapper.find('.d-empty').exists()).toBe(true)

    // 原地按下-松手（无位移）：pointer capture 吞掉 click，由 endDrag 兜底选中
    await node.trigger('pointerdown', { button: 0, pointerId: 2, clientX: 300 })
    await vp.trigger('pointerup', { pointerId: 2 })
    await flush()
    expect(wrapper.find('.d-title').exists()).toBe(true)

    // 非主键不进入拖拽
    await vp.trigger('pointerdown', { button: 2, pointerId: 3, clientX: 300 })
    expect(vp.classes()).not.toContain('is-dragging')
  })
})

describe('TheoryTimeline 缩放', () => {
  it('四档缩放 chip；半世纪档起画卡片，轨道按 px/年 换算宽度', async () => {
    const wrapper = mountTheme(TheoryTimeline)
    const zoomChips = wrapper.findAll('.tl-zoom .chip')
    expect(zoomChips.map((c) => c.text().trim())).toEqual(['全览', '半世纪', '十五年', '五年'])
    expect(zoomChips[0].attributes('aria-pressed')).toBe('true')

    await zoomChips[1].trigger('click')
    await flush()
    expect(viewport(wrapper).classes()).not.toContain('is-plain')
    expect(viewport(wrapper).classes()).not.toContain('is-rug')
    // 13 px/年 × 535 年 = 6955px
    expect(track(wrapper).attributes('style')).toContain('width: 6955px')
    expect(wrapper.findAll('.tl-card').length).toBeGreaterThan(0)
    // 放大后年份窗口不再是全程
    expect(wrapper.find('.tl-window').text()).not.toBe('1500 — 2035')
  })

  it('Ctrl/⌘ + 滚轮缩放：档位步进，+ / - 键盘等价', async () => {
    const wrapper = mountTheme(TheoryTimeline)
    const vp = viewport(wrapper)
    const zoomChips = () => wrapper.findAll('.tl-zoom .chip')

    await vp.trigger('wheel', { deltaY: -100, ctrlKey: true, clientX: 550 })
    await flush()
    expect(zoomChips()[1].attributes('aria-pressed')).toBe('true')

    await vp.trigger('keydown', { key: '+' })
    await flush()
    expect(zoomChips()[2].attributes('aria-pressed')).toBe('true')

    await vp.trigger('keydown', { key: '-' })
    await flush()
    expect(zoomChips()[1].attributes('aria-pressed')).toBe('true')

    await vp.trigger('wheel', { deltaY: 100, ctrlKey: true, clientX: 550 })
    await flush()
    expect(zoomChips()[0].attributes('aria-pressed')).toBe('true')
  })

  it('缩放锚定指针下的年份：同一点连放大两档，窗口中心年份不动', async () => {
    const wrapper = mountTheme(TheoryTimeline)
    const vp = viewport(wrapper)
    await vp.trigger('wheel', { deltaY: -100, ctrlKey: true, clientX: 550 })
    await flush()
    const before = wrapper.find('.tl-window').text()

    await vp.trigger('wheel', { deltaY: -100, ctrlKey: true, clientX: 550 })
    await flush()
    const after = wrapper.find('.tl-window').text()

    const parse = (s: string) => s.split('—').map((x) => Number(x.trim()))
    const [b1, b2] = parse(before)
    const [a1, a2] = parse(after)
    expect(Math.abs((a1 + a2) / 2 - (b1 + b2) / 2)).toBeLessThan(6) // 半个格宽容差
  })
})

describe('TheoryTimeline 平移', () => {
  it('Shift+方向键平移走 260ms 缓动窗口（is-gliding 开合）', async () => {
    const wrapper = mountTheme(TheoryTimeline)
    const vp = viewport(wrapper)
    await zoomHome(wrapper, 1)
    expect(offsetOf(wrapper)).toBe(0)

    await vp.trigger('keydown', { key: 'ArrowRight', shiftKey: true })
    await flush()
    expect(offsetOf(wrapper)).toBe(-140)
    expect(vp.classes()).toContain('is-gliding')
    await new Promise((r) => setTimeout(r, 380))
    expect(vp.classes()).not.toContain('is-gliding')
  })

  it('按住拖动逐帧直绑（跟手红线：不出现 is-gliding），offset 跟随位移', async () => {
    const wrapper = mountTheme(TheoryTimeline)
    const vp = viewport(wrapper)
    await zoomHome(wrapper, 1)
    // zoomHome 里 setZoom 自带一次缓动窗口，等它合上再验证「拖动不开窗口」
    await new Promise((r) => setTimeout(r, 380))

    await vp.trigger('pointerdown', { button: 0, pointerId: 7, clientX: 500 })
    await vp.trigger('pointermove', { pointerId: 7, clientX: 420 })
    expect(vp.classes()).toContain('is-dragging')
    expect(vp.classes()).not.toContain('is-gliding')
    expect(offsetOf(wrapper)).toBe(-80)
    await vp.trigger('pointermove', { pointerId: 7, clientX: 470 })
    expect(offsetOf(wrapper)).toBe(-30)
    await vp.trigger('pointerup', { pointerId: 7 })
    expect(vp.classes()).not.toContain('is-dragging')
  })

  it('横向滚轮平移、位移被夹在 [−maxOffset, 0]', async () => {
    const wrapper = mountTheme(TheoryTimeline)
    const vp = viewport(wrapper)
    await zoomHome(wrapper, 3) // 五年档 90 px/年

    await vp.trigger('wheel', { deltaX: 200, deltaY: 0 })
    await flush()
    expect(offsetOf(wrapper)).toBe(-200)

    // 往回拉到头：夹在 0，不越界成正数
    await vp.trigger('wheel', { deltaX: -1e6, deltaY: 0 })
    await flush()
    expect(offsetOf(wrapper)).toBe(0)
    // 再往尾端拉到头：夹在 -(trackWidth - viewW)
    await vp.trigger('wheel', { deltaX: 1e6, deltaY: 0 })
    await flush()
    expect(offsetOf(wrapper)).toBe(-(SPAN * 90 - VIEW_W))
  })

  it('Shift+滚轮平移（纵向滚轮转横向）', async () => {
    const wrapper = mountTheme(TheoryTimeline)
    const vp = viewport(wrapper)
    await zoomHome(wrapper, 1)
    await vp.trigger('wheel', { deltaY: 60, shiftKey: true })
    await flush()
    expect(offsetOf(wrapper)).toBe(-60)
  })
})

describe('TheoryTimeline 键盘导航', () => {
  it('←/→ 在节点间移动，Home/End 跳首尾（按数据顺序）', async () => {
    const wrapper = mountTheme(TheoryTimeline)
    const vp = viewport(wrapper)
    const byData = TIMELINE.map((e) => e.title)

    await vp.trigger('keydown', { key: 'ArrowRight' })
    await flush()
    expect(wrapper.find('.d-title').text()).toBe(byData[0])

    await vp.trigger('keydown', { key: 'ArrowRight' })
    await flush()
    expect(wrapper.find('.d-title').text()).toBe(byData[1])

    await vp.trigger('keydown', { key: 'ArrowLeft' })
    await flush()
    expect(wrapper.find('.d-title').text()).toBe(byData[0])

    await vp.trigger('keydown', { key: 'End' })
    await flush()
    expect(wrapper.find('.d-title').text()).toBe(byData[byData.length - 1])

    await vp.trigger('keydown', { key: 'Home' })
    await flush()
    expect(wrapper.find('.d-title').text()).toBe(byData[0])

    // 选中后窗口年份注记跟随（showYear 的选中分支）
    const labeled = wrapper.find('.tl-node.is-labeled')
    expect(labeled.exists()).toBe(true)
    expect(labeled.find('.tl-node-year').text()).toBe(String(TIMELINE[0].year))
  })
})

describe('TheoryTimeline 折叠年表（无障碍兜底）', () => {
  it('era 分组与数据一致，事件带「进入相关章节」链接', () => {
    const wrapper = mountTheme(TheoryTimeline)
    const sections = wrapper.findAll('.tl-list .era')
    const expectedEras = ERAS.filter(
      (era) => TIMELINE.filter((e) => e.year >= era.from && e.year <= era.to).length > 0,
    ).map((era) => era.name)
    expect(expectedEras.length).toBeGreaterThan(1)
    expect(sections.map((s) => s.find('h2').text())).toEqual(expectedEras)
    expect(wrapper.findAll('.tl-list .event')).toHaveLength(TIMELINE.length)

    const withLink = TIMELINE.filter((e) => e.link)
    expect(wrapper.findAll('.tl-list .more')).toHaveLength(withLink.length)
    if (withLink.length) {
      const first = TIMELINE.find((e) => e.link)!
      expect(wrapper.find('.tl-list .more').attributes('href')).toBe(siteHref(first.link))
    }
  })
})
