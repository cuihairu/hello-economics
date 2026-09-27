<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { withBase } from 'vitepress'
import { SHELF, type ChapterGroup, type CatalogItem } from '../data/courses'

// 首页书架：一门课一个 tab（西方经济学按内容拆成微观 / 宏观两个 tab）。
// 目录来自 theme/data/courses.ts —— 与侧边栏、课程切换条同一份数据，不会各自漂移。
// WAI-ARIA tabs：tablist + roving tabindex，左右方向键切换，Home/End 跳两端。

const active = ref(0)
const tablist = ref<HTMLElement | null>(null)

const tabId = (i: number) => `shelf-tab-${SHELF[i].id}`
const panelId = `shelf-panel-live`

const current = computed(() => SHELF[active.value])

const select = (i: number, focus = true) => {
  const n = SHELF.length
  active.value = ((i % n) + n) % n
  if (focus) void nextTick(() => document.getElementById(tabId(active.value))?.focus())
}

const onTabKeydown = (e: KeyboardEvent) => {
  const last = SHELF.length - 1
  switch (e.key) {
    case 'ArrowRight':
      select(active.value === last ? 0 : active.value + 1)
      break
    case 'ArrowLeft':
      select(active.value === 0 ? last : active.value - 1)
      break
    case 'Home':
      select(0)
      break
    case 'End':
      select(last)
      break
    default:
      return
  }
  e.preventDefault()
}

/** 深链定位：/#western-微观·价格与资源配置 或 /#finance，便于站内页面引到具体课程 */
const applyHash = () => {
  const id = decodeURIComponent(location.hash.replace(/^#/, ''))
  if (!id) return
  const i = SHELF.findIndex((t) => t.id === id || t.courseId === id)
  if (i >= 0) active.value = i
}
onMounted(() => {
  applyHash()
  window.addEventListener('hashchange', applyHash)
})
onUnmounted(() => window.removeEventListener('hashchange', applyHash))

// tab 很多时保证选中的那个在视口内
watch(active, () => {
  void nextTick(() => {
    tablist.value
      ?.querySelector<HTMLElement>('[aria-selected="true"]')
      ?.scrollIntoView({ block: 'nearest', inline: 'nearest' })
  })
})

interface Row {
  num: string
  title: string
  link: string
}

/** 「12 · 最优化方法与经济学应用」→ 序号用等宽、标题用衬线分开排 */
const rowsOf = (items: CatalogItem[]): Row[] =>
  items.map((item) => {
    const m = /^(\d+)\s·\s(.+)$/.exec(item.text)
    return m ? { num: m[1], title: m[2], link: item.link } : { num: '', title: item.text, link: item.link }
  })

const groups = computed<{ text: string; rows: Row[] }[]>(() =>
  current.value.groups.map((g: ChapterGroup) => ({ text: g.text, rows: rowsOf(g.items) })),
)
</script>

<template>
  <section class="shelf" aria-label="课程目录">
    <div
      ref="tablist"
      class="shelf-tabs"
      role="tablist"
      aria-label="按课程分组"
      @keydown="onTabKeydown"
    >
      <button
        v-for="(t, i) in SHELF"
        :id="tabId(i)"
        :key="t.id"
        class="shelf-tab"
        :class="{ 'is-active': active === i }"
        type="button"
        role="tab"
        :aria-selected="active === i"
        :aria-controls="active === i ? panelId : undefined"
        :tabindex="active === i ? 0 : -1"
        @click="select(i, false)"
      >
        <svg
          class="st-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <circle v-if="t.icon.circle" cx="12" cy="12" r="8" />
          <path v-for="(d, k) in t.icon.paths" :key="k" :d="d" />
        </svg>
        <span class="st-label">{{ t.label }}</span>
        <span class="st-count">{{ t.count }}</span>
      </button>
    </div>

    <div
      :key="current.id"
      class="shelf-panel"
      role="tabpanel"
      :id="panelId"
      :aria-labelledby="tabId(active)"
      tabindex="0"
    >
      <p class="sp-kicker">{{ current.kicker }}</p>
      <p class="sp-blurb">{{ current.blurb }}</p>

      <div class="sp-groups">
        <div v-for="g in groups" :key="g.text" class="sp-group">
          <h4 class="sp-group-title">{{ g.text }}</h4>
          <ol class="sp-list">
            <li v-for="r in g.rows" :key="r.link">
              <a :href="withBase(r.link)">
                <span class="sp-num">{{ r.num }}</span>
                <span class="sp-title">{{ r.title }}</span>
              </a>
            </li>
          </ol>
        </div>
      </div>

      <a class="sp-entry" :href="withBase(current.entry.link)">
        {{ current.entry.text }}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="M4 12h15M13 6l6 6-6 6" />
        </svg>
      </a>
    </div>
  </section>
</template>
