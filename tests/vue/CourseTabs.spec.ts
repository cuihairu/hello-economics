// CourseTabs（文档页顶部课程切换条）：tab 渲染、图标几何、路由高亮。
// 数据期望从 theme/data/courses.ts 真库推导（沿第二十六批方法论：内容变则期望跟着变）。
// useRoute 在裸挂载下无 provider 会抛错——按文件 mock 掉 vitepress 的 useRoute，
// withBase 走真实实现（@siteData 替身见 tests/vue/stubs/site-data.ts）。
import { beforeEach, describe, expect, it, vi } from 'vitest'

const holder = vi.hoisted(() => ({ route: null as null | { path: string } }))

vi.mock('vitepress', async (importOriginal) => {
  const actual = await importOriginal<typeof import('vitepress')>()
  const { reactive } = await import('vue')
  holder.route = reactive({ path: '/' })
  return { ...actual, useRoute: () => holder.route }
})

import CourseTabs from '../../docs/.vitepress/theme/components/CourseTabs.vue'
import { COURSES } from '../../docs/.vitepress/theme/data/courses'
import { flush, mountTheme, siteHref } from './helpers'

const setPath = async (path: string) => {
  holder.route!.path = path
  await flush()
}

beforeEach(async () => {
  await setPath('/')
})

describe('CourseTabs 渲染', () => {
  it('一门课一个 tab：标签、导论链接都与 COURSES 对齐并补 base 前缀', () => {
    const wrapper = mountTheme(CourseTabs)
    const nav = wrapper.find('nav.course-tabs')
    expect(nav.attributes('aria-label')).toBe('课程切换')
    const tabs = wrapper.findAll('.course-tab')
    expect(tabs).toHaveLength(COURSES.length)
    COURSES.forEach((c, i) => {
      expect(tabs[i].find('span').text()).toBe(c.label)
      expect(tabs[i].attributes('href')).toBe(siteHref(c.readme))
    })
  })

  it('线条图标几何与数据一致：circle 只在声明的课程出现，path 条数对得上', () => {
    const wrapper = mountTheme(CourseTabs)
    const tabs = wrapper.findAll('.course-tab')
    COURSES.forEach((c, i) => {
      const svg = tabs[i].find('svg')
      expect(svg.attributes('viewBox')).toBe('0 0 24 24')
      expect(svg.findAll('path')).toHaveLength(c.icon.paths.length)
      c.icon.paths.forEach((d, j) => {
        expect(svg.findAll('path')[j].attributes('d')).toBe(d)
      })
      expect(svg.find('circle').exists()).toBe(c.icon.circle === true)
    })
    // 至少一门课带 circle、一门课不带，两个分支都在场
    expect(COURSES.some((c) => c.icon.circle)).toBe(true)
    expect(COURSES.some((c) => !c.icon.circle)).toBe(true)
  })
})

describe('CourseTabs 路由高亮', () => {
  it('落在某课路径下只高亮该课（章节页/导论页都命中 base 前缀）', async () => {
    const wrapper = mountTheme(CourseTabs)
    for (const [i, c] of COURSES.entries()) {
      await setPath(`${c.base}/任意章节`)
      const tabs = wrapper.findAll('.course-tab')
      tabs.forEach((tab, j) => {
        expect(tab.classes().includes('is-active')).toBe(i === j)
      })
    }
  })

  it('站内非课程路径（首页/时间线/参考资料）不高亮任何 tab', async () => {
    const wrapper = mountTheme(CourseTabs)
    for (const path of ['/', '/timeline', '/people', '/glossary', '/reference/参考书目']) {
      await setPath(path)
      expect(wrapper.findAll('.course-tab.is-active')).toHaveLength(0)
    }
  })
})
