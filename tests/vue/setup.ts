// 组件测试的全局环境补丁（happy-dom 缺失或不可编程的浏览器 API）。
// 原则：补到「行为确定」为止，不模拟真实渲染引擎——断言不依赖布局与动画。
import { afterEach } from 'vitest'
import { enableAutoUnmount } from '@vue/test-utils'

// attachTo: document.body 的挂载（focus/activeElement 断言需要）统一在用例后回收
enableAutoUnmount(afterEach)

type MqListener = (e: { matches: boolean; media: string }) => void

/** 可编程 matchMedia：happy-dom 无法翻转 prefers-reduced-motion / max-width 的 matches */
const queries = new Map<string, { matches: boolean; listeners: Set<MqListener> }>()
const stateOf = (q: string) => {
  let s = queries.get(q)
  if (!s) queries.set(q, (s = { matches: false, listeners: new Set() }))
  return s
}

class FakeMediaQueryList {
  private s: { matches: boolean; listeners: Set<MqListener> }
  readonly media: string
  constructor(query: string) {
    this.media = query
    this.s = stateOf(query)
  }
  get matches() {
    return this.s.matches
  }
  addEventListener(_type: string, listener: MqListener) {
    this.s.listeners.add(listener)
  }
  removeEventListener(_type: string, listener: MqListener) {
    this.s.listeners.delete(listener)
  }
  addListener(listener: MqListener) {
    this.addEventListener('change', listener)
  }
  removeListener(listener: MqListener) {
    this.removeEventListener('change', listener)
  }
}

window.matchMedia = ((q: string) => new FakeMediaQueryList(q)) as typeof window.matchMedia

/** 测试内翻转某个媒体查询并广播 change（组件挂载前后都生效） */
export const setMedia = (query: string, matches: boolean) => {
  const s = stateOf(query)
  s.matches = matches
  for (const l of s.listeners) l({ matches, media: query })
}

/** 每个用例前回到「无减少动态偏好、宽屏」基线，并摘掉上一轮残留监听 */
export const resetMedia = () => {
  for (const s of queries.values()) {
    s.matches = false
    s.listeners.clear()
  }
}

// IntersectionObserver：@vueuse/motion 的 visible-once 依赖它。换成永不回调的
// 占位实现，元素停在 initial 变体——测试只断言我们自己的计算，不赌动画时机。
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class IdleIntersectionObserver {
  readonly root = null
  readonly rootMargin = ''
  readonly thresholds: number[] = []
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return []
  }
}
;(globalThis as Record<string, unknown>).IntersectionObserver = IdleIntersectionObserver

// happy-dom 未布局元素的 clientWidth 一律 0，TheoryTimeline 的 measure() 会把
// 视口读成 0 触发 0.6px/年的兜底分支——统一给桌面典型宽度（组件默认 1100）
Object.defineProperty(window.HTMLElement.prototype, 'clientWidth', {
  configurable: true,
  get: () => 1100,
})

// happy-dom 缺失的元素方法：占位即可（组件只要求调用不抛）
if (!window.Element.prototype.scrollIntoView) {
  window.Element.prototype.scrollIntoView = function scrollIntoView() {}
}
if (!window.Element.prototype.setPointerCapture) {
  window.Element.prototype.setPointerCapture = function setPointerCapture() {}
}
if (!window.Element.prototype.releasePointerCapture) {
  window.Element.prototype.releasePointerCapture = function releasePointerCapture() {}
}

// 深链测试之间清理 location.hash（happy-dom 允许直接赋值）
export const clearHash = () => {
  window.location.hash = ''
}
