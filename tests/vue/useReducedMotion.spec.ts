// useReducedMotion：系统「减少动态效果」响应式开关。
// 三层防线（第二十八批）的源头在此：初值同步期读取、运行时跟随 change、卸载摘监听。
import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'
import { defineComponent, h, nextTick, type Ref } from 'vue'
import { useReducedMotion } from '../../docs/.vitepress/theme/composables/useReducedMotion'
import { resetMedia, setMedia } from './setup'

const QUERY = '(prefers-reduced-motion: reduce)'

// useReducedMotion 内部走 onMounted/onUnmounted，必须在组件 setup 里调用；
// ref 抓到组件外便于卸载后继续观察
let captured: Ref<boolean> | undefined
const Harness = defineComponent({
  setup() {
    captured = useReducedMotion()
    return () => h('p', String(captured?.value))
  },
})

beforeEach(resetMedia)

describe('useReducedMotion', () => {
  it('系统未声明 reduce 时初值为 false', () => {
    const wrapper = mount(Harness)
    expect(wrapper.text()).toBe('false')
  })

  it('setup 同步期就读媒体查询：挂载前已 reduce 则初值为 true', () => {
    setMedia(QUERY, true)
    const wrapper = mount(Harness)
    expect(wrapper.text()).toBe('true')
  })

  it('运行时切换系统设置会跟随（change 事件驱动）', async () => {
    const wrapper = mount(Harness)
    expect(wrapper.text()).toBe('false')

    setMedia(QUERY, true)
    await nextTick()
    expect(wrapper.text()).toBe('true')

    setMedia(QUERY, false)
    await nextTick()
    expect(wrapper.text()).toBe('false')
  })

  it('卸载后摘掉监听：再翻转不再影响已卸载实例', async () => {
    const wrapper = mount(Harness)
    wrapper.unmount()

    setMedia(QUERY, true)
    await nextTick()
    expect(captured?.value).toBe(false)
  })
})
