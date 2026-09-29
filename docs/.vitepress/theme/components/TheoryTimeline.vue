<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { withBase } from 'vitepress'
import { TIMELINE, FIELD_LABELS, ERAS, type TimelineEvent } from '../data/timeline'
import { useReducedMotion } from '../composables/useReducedMotion'

// 理论时间线：一条拖着走的编年线。
//   · 按住轨道横向拖动 = 沿时间走；Shift + 滚轮 = 平移；Ctrl/⌘ + 滚轮 = 缩放
//   · 点节点/卡片 = 在下方读出「它当初要回答什么」；←/→ 换节点，Home/End 跳首尾
//   · 全览只看疏密（理论在哪个时代扎堆），放大后才散开成卡片；
//     实在挤不开的年代（1917—1921、1933—1941）只留节点，放大一档自然散开
// 普通纵向滚轮一律不劫持，页面照常往下读。
// 不想用交互的人：折叠区里就是完整的竖排年表，内容与轨道同源。

const AXIS_FROM = 1500
const AXIS_TO = 2035
const SPAN = AXIS_TO - AXIS_FROM

const CARD_W = 196
const CARD_GAP = 14
/** 低于这个像素/年，卡片会互相压住，只画节点 */
const CARD_MIN_PX = 11

type Field = TimelineEvent['field']
type Filter = 'all' | Field

const fields = Object.keys(FIELD_LABELS) as Field[]

// 空态文案里的首尾节点：跟着数据走，避免新增条目后文案写死过期
const byYear = [...TIMELINE].sort((a, b) => a.year - b.year)
const firstEvent = byYear[0]
const lastEvent = byYear[byYear.length - 1]

const ZOOMS = [
  { label: '全览', fit: true as const, pxPerYear: 0 },
  { label: '半世纪', fit: false as const, pxPerYear: 13 },
  { label: '十五年', fit: false as const, pxPerYear: 34 },
  { label: '五年', fit: false as const, pxPerYear: 90 },
]

const filter = ref<Filter>('all')
const zoomIndex = ref(0)
const selected = ref<number | null>(null)

const viewport = ref<HTMLElement | null>(null)
const viewW = ref(1100)
const offset = ref(0) // 轨道左缘相对视口左缘的位移（≤ 0）
// 全览必须真的装得下整条线，窄屏也不例外；挤不下的代价由 is-rug 的短线画法承担
const fitPx = computed(() => Math.max(0.6, viewW.value / SPAN))
const pxPerYear = computed(() =>
  ZOOMS[zoomIndex.value].fit ? fitPx.value : ZOOMS[zoomIndex.value].pxPerYear,
)
/** 断点状态，与 CSS 对齐：≤960 卡片 170px；≤768 只留上下两条车道、卡片 150px */
const narrow = ref(false)
const mid = ref(false)
let narrowQuery: MediaQueryList | null = null
let midQuery: MediaQueryList | null = null
const syncBreakpoints = () => {
  narrow.value = narrowQuery?.matches ?? false
  mid.value = midQuery?.matches ?? false
}

/** 紧凑档（只写年份和标题）卡片收窄到 150px，同样的车道能多排下几个事件 */
const isTight = computed(() => pxPerYear.value < 24)
const cardW = computed(() => (isTight.value ? 150 : narrow.value ? 150 : mid.value ? 170 : CARD_W))
// 手机上半世纪一档本来就排不下几张卡：不画半堆卡片，直接回到「只看疏密」
const showCards = computed(() => pxPerYear.value >= (narrow.value ? 22 : CARD_MIN_PX))
/** 节点间隔小于一个圆点直径（10px）时，圆点会糊成一条粗杠；改画 2px 短线，疏密反而更准 */
const isRug = computed(() => pxPerYear.value < 9)

/* ---------- 动画（第二十八批）：轨道缓动 CSS 状态类驱动，入场/详情/退场全走 v-motion ---------- */

// 系统声明减少动态效果：v-motion 变体初态即终态整体旁路；
// 轨道缓动/缩放淡化/呼吸/退场淡出另有 CSS media 块兜底（三层防线与 GlossaryView 同构）
const reducedMotion = useReducedMotion()

// 卡片入场：进入视口交错淡入（拖动轨道把卡片带进视口同样触发——IO 尊重 transform 与 overflow 裁剪）。
// 节点层（全览短墨线态）不做入场动画：全览读的是墨的疏密，入场动画会盖住疏密本身
const cardInitial = computed(() => (reducedMotion.value ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }))
const cardVisible = (k: number) =>
  reducedMotion.value
    ? { opacity: 1, y: 0 }
    : { opacity: 1, y: 0, transition: { duration: 360, ease: 'easeOut', delay: Math.min(k * 45, 420) } }

// 详情面板换场：选中变化时内层 key 重绑，v-motion 指令重新挂载重放淡入上浮
const detailInitial = computed(() => (reducedMotion.value ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }))
const detailEnter = computed(() =>
  reducedMotion.value
    ? { opacity: 1, y: 0 }
    : { opacity: 1, y: 0, transition: { duration: 240, ease: 'easeOut' } },
)

const trackWidth = computed(() => SPAN * pxPerYear.value)
const maxOffset = computed(() => Math.max(0, trackWidth.value - viewW.value))
const clampOffset = (v: number) => Math.min(0, Math.max(-maxOffset.value, v))
const xOf = (year: number) => (year - AXIS_FROM) * pxPerYear.value
const yearAt = (xInTrack: number) => AXIS_FROM + xInTrack / pxPerYear.value

const filtered = computed(() => {
  const list = TIMELINE.map((e, i) => ({ e, i }))
  return filter.value === 'all' ? list : list.filter(({ e }) => e.field === filter.value)
})

/* ---------- 车道分配：先上下交替，撞上就换侧；四条都满了就只画节点 ---------- */

interface Placed {
  e: TimelineEvent
  index: number
  x: number
  lane: number // 0 上远 1 上近 2 下近 3 下远
  nudge: number // 节点纵向微移，避免同年的点叠成一个
  label: boolean // 只看不卡片的那一档，年份注记要不要画
  noRoom: boolean // 连最远的车道都放不下：这张卡片不画，节点仍可点，放大即散开
}

/** 年份注记之间的最小水平间距，低于它就会互相压字 */
const LABEL_MIN_GAP = 36

/** ≤768px 时 CSS 把 0/3 两条车道的卡片藏起来了，分配时就不能再把它们算作容量 */
const placed = computed<Placed[]>(() => {
  const lastRight = [-Infinity, -Infinity, -Infinity, -Infinity]
  let lastNodeX = -Infinity
  let lastLabelX = -Infinity
  let nudgeUp = false
  const w = cardW.value
  const out: Placed[] = []
  filtered.value.forEach(({ e, i }, k) => {
    const x = xOf(e.year)
    const order = narrow.value
      ? k % 2 === 0
        ? [1, 2]
        : [2, 1]
      : k % 2 === 0
        ? [1, 2, 0, 3]
        : [2, 1, 3, 0]
    const free = order.find((L) => x - w / 2 > lastRight[L] + CARD_GAP)
    if (free !== undefined) lastRight[free] = x + w / 2
    const crowded = x - lastNodeX < 11
    lastNodeX = x
    nudgeUp = crowded ? !nudgeUp : false
    // 密集年代（1930 年代前后）逐点标年份必然糊成一团：隔一段标一个，剩下的靠放大看
    const label = x - lastLabelX >= LABEL_MIN_GAP
    if (label) lastLabelX = x
    out.push({
      e,
      index: i,
      x,
      lane: free ?? 2,
      nudge: crowded ? (nudgeUp ? -11 : 11) : 0,
      label,
      noRoom: free === undefined,
    })
  })
  return out
})

// narrow：这段年代在全览下只有一指宽，装不下「xxx — xxx · n 个节点」那一行，就别硬塞
/** 只看疏密的那一档里，哪几个节点标年份：按间距筛掉会压字的，选中那个始终标出来 */
const showYear = (p: Placed) => !showCards.value && (p.label || selected.value === p.index)

const eraBands = computed(() =>
  ERAS.map((era) => {
    const width = xOf(Math.min(era.to, AXIS_TO)) - xOf(era.from)
    return {
      ...era,
      left: xOf(era.from),
      width,
      narrow: width < 118,
      tiny: width < 52, // 连三个字都放不下，留分段线就够，别写半个年代名出来
      count: TIMELINE.filter((e) => e.year >= era.from && e.year <= era.to).length,
    }
  }),
)

const ticks = computed(() => {
  const p = pxPerYear.value
  const step = p >= 60 ? 2 : p >= 30 ? 5 : p >= 10 ? 10 : p >= 4 ? 25 : 50
  const out: { year: number; x: number; major: boolean }[] = []
  for (let y = Math.ceil(AXIS_FROM / step) * step; y <= AXIS_TO; y += step) {
    out.push({ year: y, x: xOf(y), major: y % (step * (step < 10 ? 5 : 2)) === 0 })
  }
  return out
})

/* ---------- 平移与缩放 ---------- */

/** 程序性平移（节点入视野 / 方向键平移 / 缩放锚定 / 筛选回弹）：开一个 260ms 缓动窗口。
 *  拖动与滚轮是连续输入，offset 逐帧直绑 style、不加过渡（跟手红线）；缓动只属于松手后的吸附 */
const gliding = ref(false)
let glideTimer: number | undefined
const glide = (fn: () => void) => {
  if (reducedMotion.value) {
    fn()
    return
  }
  gliding.value = true
  fn()
  window.clearTimeout(glideTimer)
  glideTimer = window.setTimeout(() => (gliding.value = false), 300)
}

/** 缩放档位切换：几何密度一帧换完，轨道做一次快速压暗回放盖住跳变；
 *  animationend 事件驱动摘类，不落定时器（呼吸动画的 animationend 会冒泡上来，按始发元素过滤） */
const zoomFade = ref(false)
const onTrackAnimationEnd = (e: AnimationEvent) => {
  if (e.target === e.currentTarget) zoomFade.value = false
}

let pointerId: number | null = null
let startX = 0
let startOffset = 0
/** 按下时指尖落在哪个事件上（setPointerCapture 会把 click 重定向走，只能在这里记） */
let downOn: number | null = null
const dragging = ref(false)
const dragged = ref(false)

const onPointerDown = (e: PointerEvent) => {
  if (e.button !== 0) return
  dragging.value = true
  dragged.value = false
  pointerId = e.pointerId
  startX = e.clientX
  startOffset = offset.value
  const hit = (e.target as HTMLElement).closest?.('.tl-event') as HTMLElement | null
  downOn = hit?.dataset.index !== undefined ? Number(hit.dataset.index) : null
  viewport.value?.setPointerCapture(e.pointerId)
}
const onPointerMove = (e: PointerEvent) => {
  if (!dragging.value || e.pointerId !== pointerId) return
  const dx = e.clientX - startX
  if (Math.abs(dx) > 4) dragged.value = true
  offset.value = clampOffset(startOffset + dx)
}
const endDrag = (e: PointerEvent) => {
  if (pointerId !== null && e.pointerId !== pointerId) return
  dragging.value = false
  pointerId = null
  // 捕获期间 click 会派发给视口而不是卡片，所以「点了但没拖」的选中在这里兜底；
  // pointercancel 是手势被浏览器接管，不算点选
  if (e.type === 'pointerup' && !dragged.value && downOn !== null) select(downOn, false)
  downOn = null
}

const onWheel = (e: WheelEvent) => {
  const rect = viewport.value?.getBoundingClientRect()
  if (e.ctrlKey || e.metaKey) {
    e.preventDefault()
    zoomAt(e.clientX - (rect?.left ?? 0), e.deltaY < 0 ? 1 : -1)
    return
  }
  if (e.shiftKey || Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
    e.preventDefault()
    offset.value = clampOffset(offset.value - (e.shiftKey ? e.deltaY : e.deltaX))
  }
}

/** 缩放时锁住指针下的那一年，画面不会跳 */
const zoomAt = (pxInViewport: number, dir: number, exact?: number) => {
  const anchor = yearAt(pxInViewport - offset.value)
  const next =
    exact ?? Math.min(ZOOMS.length - 1, Math.max(0, zoomIndex.value + dir))
  if (next === zoomIndex.value && exact === undefined) return
  zoomIndex.value = next
  const px = ZOOMS[next].fit ? fitPx.value : ZOOMS[next].pxPerYear
  if (!reducedMotion.value) zoomFade.value = true
  glide(() => {
    offset.value = clampOffset(pxInViewport - (anchor - AXIS_FROM) * px)
  })
}

const setZoom = (i: number) => zoomAt(viewW.value / 2, 0, i)

/**
 * 把某个节点纳入视野。
 * offset 是轨道的位移（≤0），viewLeft = -offset 是此刻视野左缘落在轨道上的坐标：
 * 目标在左边 → offset 要往 0 方向回抬；目标在右边 → offset 要往负方向推。
 */
const reveal = (index: number) => {
  const p = placed.value.find((q) => q.index === index)
  if (!p) return
  const half = (showCards.value ? cardW.value : 20) / 2 + 20
  const viewLeft = -offset.value
  if (p.x - half < viewLeft) glide(() => {
    offset.value = clampOffset(offset.value + (viewLeft - (p.x - half)))
  })
  else if (p.x + half > viewLeft + viewW.value)
    glide(() => {
      offset.value = clampOffset(offset.value - ((p.x + half) - (viewLeft + viewW.value)))
    })
}

const select = (index: number, move = true) => {
  selected.value = index
  if (move) void nextTick(() => reveal(index))
}

const onCardClick = (index: number) => {
  if (dragged.value) return // 拖完松手不该顺带选中
  select(index, false)
}

const onKeydown = (e: KeyboardEvent) => {
  const list = filtered.value
  if (!list.length) return
  const at = list.findIndex((q) => q.i === selected.value)
  if (e.shiftKey && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) {
    e.preventDefault()
    glide(() => {
      offset.value = clampOffset(offset.value + (e.key === 'ArrowRight' ? -140 : 140))
    })
    return
  }
  switch (e.key) {
    case 'ArrowRight':
      e.preventDefault()
      select(at < 0 ? list[0].i : list[Math.min(list.length - 1, at + 1)].i)
      break
    case 'ArrowLeft':
      e.preventDefault()
      select(at < 0 ? list[0].i : list[Math.max(0, at - 1)].i)
      break
    case 'Home':
      e.preventDefault()
      select(list[0].i)
      break
    case 'End':
      e.preventDefault()
      select(list[list.length - 1].i)
      break
    case '+':
    case '=':
      e.preventDefault()
      setZoom(Math.min(ZOOMS.length - 1, zoomIndex.value + 1))
      break
    case '-':
    case '_':
      e.preventDefault()
      setZoom(Math.max(0, zoomIndex.value - 1))
      break
  }
}

const current = computed(() => (selected.value === null ? null : TIMELINE[selected.value]))
const currentEra = computed(() =>
  current.value
    ? ERAS.find((s) => current.value!.year >= s.from && current.value!.year <= s.to)
    : null,
)

/** 视口指示条：整条线上此刻看到的是哪一段 */
const indicator = computed(() => {
  const total = trackWidth.value || 1
  return {
    left: ((-offset.value / total) * 100).toFixed(2) + '%',
    width: ((Math.min(viewW.value, trackWidth.value) / total) * 100).toFixed(2) + '%',
  }
})
const windowYears = computed(() => {
  const from = Math.round(yearAt(-offset.value))
  const to = Math.round(yearAt(-offset.value + viewW.value))
  return trackWidth.value <= viewW.value ? `${AXIS_FROM} — ${AXIS_TO}` : `${from} — ${to}`
})

const measure = () => {
  viewW.value = viewport.value?.clientWidth ?? viewW.value
  offset.value = clampOffset(offset.value)
}

onMounted(() => {
  measure()
  narrowQuery = window.matchMedia('(max-width: 768px)')
  midQuery = window.matchMedia('(max-width: 960px)')
  syncBreakpoints()
  narrowQuery.addEventListener('change', syncBreakpoints)
  midQuery.addEventListener('change', syncBreakpoints)
  window.addEventListener('resize', measure)
})
onUnmounted(() => {
  narrowQuery?.removeEventListener('change', syncBreakpoints)
  midQuery?.removeEventListener('change', syncBreakpoints)
  window.removeEventListener('resize', measure)
  window.clearTimeout(glideTimer)
})

watch(filter, () => {
  selected.value = null
  glide(() => {
    offset.value = clampOffset(offset.value)
  })
})

const filterOptions: Filter[] = ['all', ...fields]
const labelOf = (f: Filter) => (f === 'all' ? '全部' : FIELD_LABELS[f as Field])

const countOf = (f: Filter) =>
  f === 'all' ? TIMELINE.length : TIMELINE.filter((e) => e.field === f).length

const eraGroups = computed(() =>
  ERAS.map((era) => ({
    ...era,
    events: filtered.value
      .map(({ e }) => e)
      .filter((e) => e.year >= era.from && e.year <= era.to),
  })).filter((g) => g.events.length > 0),
)

const eraLabel = (era: { from: number; to: number }) =>
  `${era.from === 1500 ? '16 世纪' : era.from} — ${era.to > 2026 ? '今天' : era.to}`
</script>

<template>
  <div class="tl">
    <div class="tl-controls">
      <div class="tl-filters" role="group" aria-label="按领域筛选">
        <button
          v-for="f in filterOptions"
          :key="f"
          type="button"
          :class="['chip', { 'is-active': filter === f }]"
          :aria-pressed="filter === f"
          @click="filter = f"
        >
          {{ labelOf(f) }}
          <span class="count">{{ countOf(f) }}</span>
        </button>
      </div>
      <div class="tl-zoom" role="group" aria-label="缩放">
        <button
          v-for="(z, i) in ZOOMS"
          :key="z.label"
          type="button"
          :class="['chip chip-sm', { 'is-active': zoomIndex === i }]"
          :aria-pressed="zoomIndex === i"
          @click="setZoom(i)"
        >
          {{ z.label }}
        </button>
      </div>
    </div>

    <p class="tl-hint">
      <span class="tl-window">{{ windowYears }}</span>
      按住轨道拖动即可沿时间走；<kbd>Shift</kbd> + 滚轮平移，<kbd>Ctrl</kbd> + 滚轮或
      <kbd>+</kbd> <kbd>-</kbd> 缩放；<kbd>←</kbd> <kbd>→</kbd> 换节点，<kbd>Home</kbd>
      <kbd>End</kbd> 跳首尾。
    </p>

    <div class="tl-rail-wrap">
      <div
        ref="viewport"
        class="tl-viewport"
        :class="{
          'is-dragging': dragging,
          'is-gliding': gliding,
          'is-plain': !showCards,
          'is-rug': isRug,
        }"
        tabindex="0"
        role="group"
        aria-label="经济学理论时间线，可拖动浏览"
        @pointerdown="onPointerDown"
        @pointermove="onPointerMove"
        @pointerup="endDrag"
        @pointercancel="endDrag"
        @wheel="onWheel"
        @keydown="onKeydown"
      >
        <div
          class="tl-track"
          :class="{ 'is-zooming': zoomFade }"
          :style="{ width: trackWidth + 'px', transform: `translate3d(${offset}px,0,0)` }"
          @animationend="onTrackAnimationEnd"
        >
          <div class="tl-eras" aria-hidden="true">
            <div
              v-for="era in eraBands"
              :key="era.name"
              class="tl-era"
              :style="{ left: era.left + 'px', width: era.width + 'px' }"
            >
              <template v-if="!showCards">
                <span v-if="!era.tiny" class="tl-era-name">{{ era.name }}</span>
                <span v-if="!era.narrow" class="tl-era-range">{{ eraLabel(era) }} · {{ era.count }} 个节点</span>
              </template>
            </div>
          </div>

          <div class="tl-ticks" aria-hidden="true">
            <span
              v-for="t in ticks"
              :key="t.year"
              :class="['tl-tick', { 'is-major': t.major }]"
              :style="{ left: t.x + 'px' }"
            >
              <i v-if="t.major" class="tl-tick-year">{{ t.year }}</i>
            </span>
          </div>

          <div class="tl-spine" aria-hidden="true" />

          <!-- 筛选切换：非匹配节点退场淡出（leave 走 CSS opacity；入场交给卡片上的 v-motion 交错，属性不撞车）；
               位置重排（车道/年份注记重算）一帧换完，不做 move FLIP——left 是 layout 属性，动了就破红线 -->
          <TransitionGroup name="ev">
            <div
              v-for="(p, k) in placed"
              :key="p.index"
              :class="[
                'tl-event',
                `lane-${p.lane}`,
                { 'is-selected': selected === p.index, 'is-nudged': p.nudge < 0 },
              ]"
              :style="{ left: p.x + 'px', '--nudge': p.nudge + 'px' }"
              :data-index="p.index"
            >
              <button
                v-if="showCards && !p.noRoom"
                v-motion
                :initial="cardInitial"
                :visible-once="cardVisible(k)"
                type="button"
                class="tl-card"
                tabindex="-1"
                :class="{ 'is-tight': isTight }"
                :aria-pressed="selected === p.index"
                @click.stop="onCardClick(p.index)"
              >
              <span class="tl-card-year">{{ p.e.year }}</span>
              <span class="tl-card-title">{{ p.e.title }}</span>
              <span v-if="!isTight && p.e.who" class="tl-card-who">{{ p.e.who }}</span>
            </button>
            <button
              type="button"
              class="tl-node"
              tabindex="-1"
              :class="{ 'is-labeled': showYear(p) }"
              :data-field="p.e.field"
              :aria-label="`${p.e.year} ${p.e.title}`"
              @click.stop="onCardClick(p.index)"
            >
              <span v-if="showYear(p)" class="tl-node-year">{{ p.e.year }}</span>
            </button>
          </div>
          </TransitionGroup>
        </div>
      </div>

      <div class="tl-map" aria-hidden="true">
        <span
          v-for="era in eraBands"
          :key="'m' + era.name"
          class="tl-map-era"
          :style="{
            left: ((era.left / trackWidth) * 100).toFixed(2) + '%',
            width: ((era.width / trackWidth) * 100).toFixed(2) + '%',
          }"
        />
        <span class="tl-map-view" :style="{ left: indicator.left, width: indicator.width }" />
      </div>
    </div>

    <div class="tl-detail" aria-live="polite">
      <!-- 换场层：选中变化时 key 重绑，v-motion 重挂重放淡入上浮（只动 opacity/transform，高度交由布局自然变化） -->
      <div v-motion :key="selected ?? 'empty'" :initial="detailInitial" :enter="detailEnter">
        <template v-if="current">
          <p class="d-year">{{ current.year }}</p>
          <h3 class="d-title">{{ current.title }}</h3>
          <p class="d-meta">
            <span v-if="current.who">{{ current.who }}</span>
            <span class="d-field">{{ FIELD_LABELS[current.field] }}</span>
            <span v-if="currentEra" class="d-era">{{ currentEra.name }}</span>
          </p>
          <p class="d-why">{{ current.why }}</p>
          <a v-if="current.link" class="d-more" :href="withBase(current.link)">进入相关章节</a>
        </template>
        <p v-else class="d-empty">
          这条线上一共 {{ TIMELINE.length }} 个节点，从 {{ firstEvent.year }} 年的{{ firstEvent.title }}，到
          {{ lastEvent.year }} 年的{{ lastEvent.title }}。拖到想看的年代，点一个节点，读它当初要回答的问题。
        </p>
      </div>
    </div>

    <details class="tl-list">
      <summary>按时期通读全部 {{ filtered.length }} 个节点</summary>
      <section v-for="era in eraGroups" :key="era.name" class="era">
        <header class="era-head">
          <h2>{{ era.name }}</h2>
          <p class="era-range">{{ eraLabel(era) }}</p>
          <p class="era-intro">{{ era.intro }}</p>
        </header>
        <ol class="events">
          <li v-for="e in era.events" :key="e.year + e.title" class="event spine">
            <span class="node" :data-field="e.field" />
            <span class="year">{{ e.year }}</span>
            <div class="body">
              <h3>{{ e.title }}</h3>
              <p v-if="e.who" class="who">
                {{ e.who }}<span class="field-tag">{{ FIELD_LABELS[e.field] }}</span>
              </p>
              <p class="why">{{ e.why }}</p>
              <a v-if="e.link" class="more" :href="withBase(e.link)">进入相关章节</a>
            </div>
          </li>
        </ol>
      </section>
      <p v-if="!filtered.length" class="d-empty">这个领域在这条线上还没有节点。</p>
    </details>
  </div>
</template>

<style scoped>
.tl {
  /* 车道几何：--card-h 必须 ≥ 卡片实际高度，否则远车道卡片会被 overflow 裁掉；
     --lane-far = --lane-near + --card-h + 8（两条车道之间留 8px），轨道高度再由此推出。改一处即可。 */
  --card-w: 196px;
  --card-h: 92px;
  --lane-near: 56px;
  --lane-far: 156px;
  --rail-h: calc((var(--lane-far) + var(--card-h) + 12px) * 2);
  margin-top: 1rem;
}

/* ---------- 控件 ---------- */

.tl-controls {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.2rem;
  align-items: center;
  justify-content: space-between;
}
.tl-filters,
.tl-zoom {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
.chip {
  border: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  border-radius: 999px;
  padding: 0.28rem 0.78rem;
  font-size: 0.85rem;
  cursor: pointer;
  transition: color 0.15s, border-color 0.15s, background 0.15s;
}
.chip:hover {
  color: var(--vp-c-text-1);
  border-color: var(--vp-c-text-3);
}
.chip.is-active {
  color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  font-weight: 600;
}
.chip-sm {
  border-radius: 5px;
  padding: 0.2rem 0.55rem;
  font-family: var(--vp-font-mono);
  font-size: 0.78rem;
}
.count {
  margin-left: 0.3rem;
  font-size: 0.75rem;
  opacity: 0.65;
  font-variant-numeric: tabular-nums;
}
.tl-hint {
  margin: 0.85rem 0 0.9rem;
  font-size: 0.84rem;
  line-height: 1.7;
  color: var(--vp-c-text-3);
}
.tl-window {
  font-family: var(--vp-font-mono);
  font-variant-numeric: tabular-nums;
  color: var(--vp-c-brand-1);
  margin-right: 0.5rem;
}
.tl-hint kbd {
  font-family: var(--vp-font-mono);
  font-size: 0.76rem;
  border: 1px solid var(--vp-c-border);
  border-bottom-width: 2px;
  border-radius: 4px;
  padding: 0 0.32rem;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg-soft);
}

/* ---------- 轨道 ---------- */

.tl-viewport {
  position: relative;
  height: var(--rail-h);
  overflow: hidden;
  cursor: grab;
  touch-action: pan-y;
  user-select: none;
  border-top: 1px solid var(--vp-c-border);
  border-bottom: 1px solid var(--vp-c-border);
  background: linear-gradient(
    to bottom,
    var(--vp-c-bg-soft),
    transparent 18%,
    transparent 82%,
    var(--vp-c-bg-soft)
  );
}
.tl-viewport.is-plain {
  height: 168px;
}
.tl-viewport.is-dragging {
  cursor: grabbing;
}
.tl-viewport:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: -2px;
}
.tl-track {
  position: absolute;
  inset: 0 auto 0 0;
  /* 跟手红线：默认零过渡（拖动/滚轮逐帧直绑 transform）；只有程序性跳转的
     is-gliding 窗口（且不在拖动中）开 transform 缓动——松手吸附才有缓动，拖动永远即时 */
  will-change: transform;
}
.tl-viewport.is-gliding:not(.is-dragging) .tl-track {
  transition: transform 0.26s cubic-bezier(0.25, 0.7, 0.3, 1);
}
/* 缩放档位切换：几何一帧换完，快速压暗回放盖住密度跳变（opacity-only，合成层） */
.tl-track.is-zooming {
  animation: tl-zoomfade 0.22s ease-out;
}
@keyframes tl-zoomfade {
  from {
    opacity: 0.45;
  }
  to {
    opacity: 1;
  }
}

.tl-eras,
.tl-ticks {
  position: absolute;
  inset: 0;
}
.tl-era {
  position: absolute;
  top: 0;
  bottom: 0;
  border-left: 1px solid var(--spine-color);
  padding: 0.45rem 0 0 0.55rem;
  overflow: hidden; /* 年代段的文字不许爬进邻段：全览下相邻年代只隔几像素 */
}
.tl-era-name {
  display: block;
  font-family: var(--vp-font-display);
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
  white-space: nowrap;
  text-overflow: ellipsis;
}
.tl-era-range {
  display: block;
  font-family: var(--vp-font-mono);
  font-size: 0.7rem;
  color: var(--vp-c-text-3);
  opacity: 0.75;
  white-space: nowrap;
}

.tl-spine {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 2px;
  background: var(--spine-color);
}
.tl-tick {
  position: absolute;
  top: 50%;
  width: 1px;
  height: 7px;
  margin-top: -3.5px;
  background: var(--spine-color);
}
.tl-tick.is-major {
  height: 13px;
  margin-top: -6.5px;
  background: var(--vp-c-text-3);
}
.tl-tick-year {
  position: absolute;
  bottom: 100%;
  left: 5px;
  padding-bottom: 2px;
  font-family: var(--vp-font-mono);
  font-size: 0.7rem;
  font-style: normal;
  color: var(--vp-c-text-3);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}

.tl-event {
  position: absolute;
  top: 50%;
  width: 0;
}
.tl-node {
  position: absolute;
  left: -5px;
  top: calc(-5px + var(--nudge, 0px));
  width: 10px;
  height: 10px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: var(--spine-node);
  box-shadow: 0 0 0 3px var(--vp-c-bg);
  cursor: pointer;
  transition: transform 0.15s ease-out;
}
.tl-node:hover {
  transform: scale(1.5);
}
/* 选中呼吸：无限脉冲循环超出 v-motion 变体模型（一次性过渡）的表达域，keyframes 只动
   transform，同为合成层；0/100% 即静态选中态，reduce 下 animation 置 none 自然回落 */
.tl-event.is-selected .tl-node {
  transform: scale(1.5);
  animation: tl-breathe 2.2s ease-in-out infinite;
}
@keyframes tl-breathe {
  0%,
  100% {
    transform: scale(1.5);
  }
  50% {
    transform: scale(1.85);
  }
}
.tl-node:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 3px;
}
.tl-node.is-labeled {
  top: -5px;
}
/* 极密档：圆点会糊成一条粗杠，改画 2px 短线，「疏密」这件事直接由墨的多少读出来 */
.tl-viewport.is-rug .tl-node {
  left: -1px;
  top: calc(-8px + var(--nudge, 0px));
  width: 2px;
  height: 16px;
  border-radius: 0;
  box-shadow: none;
  opacity: 0.82;
}
.tl-viewport.is-rug .tl-node::before {
  content: ''; /* 2px 的线也要点得着：把命中区放大到 12×30 */
  position: absolute;
  inset: -7px -5px;
}
.tl-viewport.is-rug .tl-node.is-labeled {
  top: -8px;
}
.tl-viewport.is-rug .tl-node:hover,
.tl-viewport.is-rug .tl-event.is-selected .tl-node {
  left: -1.5px;
  top: -13px;
  width: 3px;
  height: 26px;
  opacity: 1;
  transform: none;
}
/* 极密档的选中态是加长墨线（改的是盒子几何），呼吸的 transform 循环会盖掉它，关掉 */
.tl-viewport.is-rug .tl-event.is-selected .tl-node {
  animation: none;
}
.tl-viewport.is-rug .tl-node-year {
  top: 17px;
}
.tl-node-year {
  position: absolute;
  left: 50%;
  top: 14px;
  transform: translateX(-50%);
  font-family: var(--vp-font-mono);
  font-size: 0.68rem;
  color: var(--vp-c-text-3);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}
.tl-event.is-nudged .tl-node {
  background: var(--vp-c-text-3);
}

/* 筛选退场：被筛掉的节点原地淡出后卸载（opacity-only；入场不在此处，由卡片 v-motion 交错负责） */
.ev-leave-active {
  transition: opacity 0.22s ease-in;
  pointer-events: none;
}
.ev-leave-to {
  opacity: 0;
}

.tl-card {
  position: absolute;
  left: calc(var(--card-w) / -2);
  width: var(--card-w);
  display: grid;
  gap: 0.12rem;
  text-align: left;
  font: inherit;
  line-height: 1.4; /* 正文的 1.85 会把卡片撑到车道之外（轨道是 overflow: hidden） */
  min-height: var(--card-h);
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 6px;
  padding: 0.45rem 0.6rem;
  cursor: pointer;
  transition: transform 0.18s ease-out, border-color 0.18s, box-shadow 0.18s, background 0.18s;
}
.lane-0 .tl-card {
  bottom: var(--lane-far);
}
.lane-1 .tl-card {
  bottom: var(--lane-near);
}
.lane-2 .tl-card {
  top: var(--lane-near);
}
.lane-3 .tl-card {
  top: var(--lane-far);
}
/* 卡片连回主轴的那根细线 */
.tl-card::after {
  content: '';
  position: absolute;
  left: 50%;
  width: 1px;
  background: var(--spine-color);
}
.lane-0 .tl-card::after {
  top: 100%;
  height: calc(var(--lane-far) - 10px);
}
.lane-1 .tl-card::after {
  top: 100%;
  height: calc(var(--lane-near) - 10px);
}
.lane-2 .tl-card::after {
  bottom: 100%;
  height: calc(var(--lane-near) - 10px);
}
.lane-3 .tl-card::after {
  bottom: 100%;
  height: calc(var(--lane-far) - 10px);
}
.tl-card:hover,
.tl-event.is-selected .tl-card {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 2px 10px rgba(15, 40, 30, 0.09);
  z-index: 2;
}
.dark .tl-card:hover,
.dark .tl-event.is-selected .tl-card {
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.55);
}
.tl-event.is-selected .tl-card {
  background: var(--vp-c-brand-soft);
}
.tl-card:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
}
.tl-card-year {
  font-family: var(--vp-font-mono);
  font-size: 0.74rem;
  color: var(--vp-c-brand-1);
  font-variant-numeric: tabular-nums;
}
/* 半世纪一档只写年份和标题，卡片顺势收窄，车道能多排下几个事件 */
.tl-card.is-tight {
  --card-w: 150px;
}
.tl-card-title {
  font-family: var(--vp-font-display);
  font-size: 0.92rem;
  font-weight: 700;
  line-height: 1.35;
  color: var(--vp-c-text-1);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.tl-card-who {
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* ---------- 视口指示 ---------- */

.tl-map {
  position: relative;
  height: 6px;
  margin-top: 0.45rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 3px;
  overflow: hidden;
}
.tl-map-era {
  position: absolute;
  top: 0;
  bottom: 0;
  border-left: 1px solid var(--spine-color);
}
.tl-map-view {
  position: absolute;
  top: 0;
  bottom: 0;
  background: var(--spine-node);
  opacity: 0.5;
}

/* ---------- 详情 ---------- */

.tl-detail {
  margin: 1.3rem 0 0;
  padding: 1rem 1.15rem 1.15rem;
  border-left: 2px solid var(--spine-node);
  background: var(--vp-c-bg-soft);
  min-height: 7rem;
}
.d-year {
  margin: 0;
  font-family: var(--vp-font-mono);
  font-size: 0.84rem;
  color: var(--vp-c-brand-1);
  font-variant-numeric: tabular-nums;
}
.d-title {
  font-family: var(--vp-font-display);
  font-size: 1.15rem;
  margin: 0.1rem 0 0.25rem;
}
.d-meta {
  margin: 0 0 0.5rem;
  font-size: 0.85rem;
  color: var(--vp-c-text-3);
}
.d-field,
.d-era {
  margin-left: 0.5rem;
  font-size: 0.74rem;
  border: 1px solid var(--vp-c-border);
  border-radius: 3px;
  padding: 0 0.35rem;
}
.d-why {
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 0.95rem;
  max-width: 62ch;
}
.d-more {
  display: inline-block;
  margin-top: 0.55rem;
  font-size: 0.88rem;
  color: var(--vp-c-brand-1);
  text-decoration: none;
}
.d-more:hover {
  text-decoration: underline;
}
.d-empty {
  margin: 0;
  color: var(--vp-c-text-3);
  font-size: 0.92rem;
  max-width: 60ch;
}

/* ---------- 通读模式 ---------- */

.tl-list {
  margin-top: 2.6rem;
}
.tl-list > summary {
  cursor: pointer;
  font-family: var(--vp-font-display);
  font-size: 1.02rem;
  color: var(--vp-c-text-2);
  padding: 0.35rem 0;
  border-bottom: 1px solid var(--vp-c-border);
}
.tl-list > summary:hover {
  color: var(--vp-c-brand-1);
}
.tl-list .era {
  margin: 2.4rem 0 0;
}
.tl-list .era-head h2 {
  font-family: var(--vp-font-display);
  font-size: 1.25rem;
  margin: 0 0 0.2rem;
}
.tl-list .era-range {
  font-family: var(--vp-font-mono);
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
  margin: 0 0 0.5rem;
}
.tl-list .era-intro {
  color: var(--vp-c-text-2);
  max-width: 42em;
  margin: 0 0 1.4rem;
  font-size: 0.95rem;
}
.tl-list .events {
  list-style: none;
  margin: 0;
  padding: 0 0 0 1.4rem;
}
.tl-list .event {
  position: relative;
  display: grid;
  grid-template-columns: 3.6rem 1fr;
  column-gap: 1rem;
  padding-bottom: 1.7rem;
}
.tl-list .event .node {
  position: absolute;
  left: -1.4rem;
  top: 0.55rem;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--spine-node);
  box-shadow: 0 0 0 3px var(--vp-c-bg);
  margin-left: -3.5px;
}
.tl-list .year {
  font-family: var(--vp-font-mono);
  font-size: 0.88rem;
  color: var(--vp-c-brand-1);
  font-variant-numeric: tabular-nums;
  padding-top: 0.25rem;
}
.tl-list .body h3 {
  font-family: var(--vp-font-display);
  font-size: 1.02rem;
  margin: 0 0 0.15rem;
}
.tl-list .who {
  margin: 0 0 0.3rem;
  font-size: 0.86rem;
  color: var(--vp-c-text-3);
}
.tl-list .field-tag {
  margin-left: 0.6rem;
  font-size: 0.72rem;
  border: 1px solid var(--vp-c-border);
  border-radius: 3px;
  padding: 0 0.35rem;
  color: var(--vp-c-text-3);
}
.tl-list .why {
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 0.93rem;
  max-width: 42em;
}
.tl-list .more {
  display: inline-block;
  margin-top: 0.3rem;
  font-size: 0.85rem;
  color: var(--vp-c-brand-1);
  text-decoration: none;
}
.tl-list .more:hover {
  text-decoration: underline;
}

@media (max-width: 960px) {
  .tl {
    --card-w: 170px;
    --card-h: 88px;
    --lane-near: 50px;
    --lane-far: 146px;
  }
}

@media (max-width: 768px) {
  .tl {
    --card-w: 150px;
    --card-h: 84px;
    --lane-near: 44px;
    --lane-far: 44px; /* 只留两条车道（上下各一），密的地方用缩放看 */
  }
  .lane-0 .tl-card,
  .lane-3 .tl-card {
    display: none;
  }
  .tl-node-year {
    display: none;
  }
  .tl-event.lane-0 .tl-node,
  .tl-event.lane-3 .tl-node {
    transform: scale(0.85);
  }
  .tl-hint {
    font-size: 0.8rem;
  }
  .tl-list .event {
    grid-template-columns: 1fr;
    row-gap: 0.1rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .tl-card,
  .tl-node,
  .chip {
    transition: none;
  }
  /* 轨道缓动/缩放淡化/选中呼吸/退场淡出全部直达终态（script 侧 glide/zoomFade 已旁路，这里是兜底） */
  .tl-viewport.is-gliding:not(.is-dragging) .tl-track {
    transition: none;
  }
  .tl-track.is-zooming {
    animation: none;
    opacity: 1;
  }
  .tl-event.is-selected .tl-node {
    animation: none;
  }
  .ev-leave-active {
    transition: none;
  }
  .ev-leave-to {
    opacity: 1;
  }
}
</style>
