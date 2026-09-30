import { mount } from '@vue/test-utils'
import { MotionPlugin } from '@vueuse/motion'
import { nextTick } from 'vue'
import type { Component } from 'vue'

/** v-motion 组件统一挂载：装上 MotionPlugin，与 theme/index.ts 的 enhanceApp 同构 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mountTheme = (component: Component, options: any = {}) =>
  mount(component, {
    attachTo: document.body,
    ...options,
    global: { plugins: [MotionPlugin], ...(options.global ?? {}) },
  })

/** 等组件的 nextTick / Transition / glide 定时器落地 */
export const flush = async (n = 3) => {
  for (let i = 0; i < n; i++) await nextTick()
}

/** 与 vitepress client 的 withBase（base=/hello-economics/）等价的期望值计算 */
export const siteHref = (link: string) => `/hello-economics/${link}`.replace(/\/+/g, '/')
