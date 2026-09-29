import { onMounted, onUnmounted, ref, type Ref } from 'vue'

/**
 * 系统级「减少动态效果」（prefers-reduced-motion: reduce）响应式开关。
 * 在 setup 同步期就读媒体查询（客户端）：v-motion 指令的 mounted 钩子早于
 * 组件自身 onMounted，若等到挂载后才读初值，指令会先消费到过期的 false。
 * SSR 无 window 走 false 分支——该值只驱动指令绑定、不产生任何 SSR HTML
 * 差异，无 hydration 风险；用户运行时切换系统设置也会跟随。
 * 动画接线方式：为 true 时给 v-motion 初态即终态、给 CSS 过渡整体置 none。
 */
export function useReducedMotion(): Ref<boolean> {
  const reduced = ref(
    typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  let mq: MediaQueryList | undefined
  const onChange = (e: MediaQueryListEvent) => {
    reduced.value = e.matches
  }
  onMounted(() => {
    mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    mq.addEventListener('change', onChange)
  })
  onUnmounted(() => mq?.removeEventListener('change', onChange))
  return reduced
}
