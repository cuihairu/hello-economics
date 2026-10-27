<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useData, withBase } from 'vitepress'
import { GLOSSARY, GLOSSARY_EN, COURSES, COURSE_LABELS_EN, type GlossaryEntry } from '../data/glossary'
import { useReducedMotion } from '../composables/useReducedMotion'

const { localeIndex } = useData()
const en = computed(() => localeIndex.value === 'root')

// 词条数据按语言取；course 始终是中文课程键（COURSES 为唯一真相），展示层再翻译
const entries = computed(() => (en.value ? GLOSSARY_EN : GLOSSARY))

const query = ref('')
const course = ref<'all' | string>('all')
const selected = ref<GlossaryEntry | null>(null)

// 词条组滚动入场：系统声明减少动态效果时初态即终态，动画旁路
const reducedMotion = useReducedMotion()
const groupInitial = computed(() =>
  reducedMotion.value ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 },
)
const groupVisible = (i: number) =>
  reducedMotion.value
    ? { opacity: 1, y: 0 }
    : {
        opacity: 1,
        y: 0,
        transition: { duration: 320, ease: 'easeOut', delay: Math.min(i * 60, 240) },
      }

// CJK 逐字匹配 + 拉丁词元匹配，280 余条数据无需分词库
const normalize = (s: string) =>
  s.toLowerCase().replace(/\s+/g, '')

const hit = (e: GlossaryEntry, q: string) =>
  normalize(e.term).includes(q) || normalize(e.def.replace(/<[^>]+>/g, '')).includes(q)

const filtered = computed(() => {
  const q = normalize(query.value)
  return entries.value.filter(
    (e) =>
      (course.value === 'all' || e.course === course.value) &&
      (q === '' || hit(e, q)),
  )
})

// 目录态按专题分组；搜索态展示命中清单
const groups = computed(() =>
  COURSES.map((c) => ({
    course: c,
    entries: filtered.value.filter((e) => e.course === c),
  })).filter((g) => g.entries.length > 0),
)

const searching = computed(() => query.value.trim() !== '')

watch([query, course], () => {
  if (selected.value && !filtered.value.includes(selected.value)) selected.value = null
})

const countAll = (c: string) => entries.value.filter((e) => e.course === c).length

/** 课程名展示：中文键查英文标签，未收录则原样回落 */
const courseLabel = (c: string) => (en.value ? (COURSE_LABELS_EN[c] ?? c) : c)

/** 词条出处链接是站点绝对路径（不带语言前缀）；中文侧要补 /zh 指向 zh 树同一篇 */
const sourceHref = (e: GlossaryEntry) =>
  e.source ? withBase(en.value ? e.source : '/zh' + e.source) : ''

/** 出处标签是中文维基的条目名；英文侧只留域名，避免英文页夹带中文 */
const citeLabel = (c: { label: string; url: string }) =>
  en.value ? new URL(c.url).hostname : c.label

const STR = {
  root: {
    placeholder: 'Search terms, e.g. discount, elasticity, Pareto',
    searchAria: 'Search terms',
    filterAria: 'Filter by course',
    all: 'All',
    closeAria: 'Close entry',
    appearsIn: (c: string) => `From “${c}”`,
    backToSource: 'Back to source',
    citeLabel: 'Cited from',
    hits: (n: number) => `${n} matches`,
    empty: 'No matching term. Try another phrasing, or clear the filters.',
  },
  zh: {
    placeholder: '检索术语，例如：贴水、弹性、帕累托',
    searchAria: '检索术语',
    filterAria: '按专题筛选',
    all: '全部',
    closeAria: '关闭词条',
    appearsIn: (c: string) => `出现于「${c}」`,
    backToSource: '回到原文',
    citeLabel: '出处：',
    hits: (n: number) => `命中 ${n} 条`,
    empty: '没有命中的术语。换个说法试试，或清空筛选。',
  },
} as const

const s = computed(() => STR[localeIndex.value])
</script>

<template>
  <div class="glossary">
    <div class="toolbar">
      <div class="search">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true">
          <circle cx="10.5" cy="10.5" r="6.5" />
          <path d="M15.5 15.5 20 20" />
        </svg>
        <input
          v-model="query"
          type="search"
          :placeholder="s.placeholder"
          :aria-label="s.searchAria"
        >
      </div>
      <div class="filters" role="tablist" :aria-label="s.filterAria">
        <button
          :class="['chip', { 'is-active': course === 'all' }]"
          @click="course = 'all'"
        >{{ s.all }} <span class="count">{{ entries.length }}</span></button>
        <button
          v-for="c in COURSES"
          :key="c"
          :class="['chip', { 'is-active': course === c }]"
          @click="course = c"
        >{{ courseLabel(c) }} <span class="count">{{ countAll(c) }}</span></button>
      </div>
    </div>

    <!-- 词条详情 -->
    <Transition name="panel">
      <article v-if="selected" class="detail">
        <header class="detail-head">
          <h2>{{ selected.term }}</h2>
          <button class="close" :aria-label="s.closeAria" @click="selected = null">✕</button>
        </header>
        <p class="where">
          {{ s.appearsIn(courseLabel(selected.course)) }}<template v-if="selected.source">
            · <a class="source" :href="sourceHref(selected)">{{ s.backToSource }}</a></template>
          <template v-if="selected.cite && selected.cite.length">
            · <span class="cites">{{ s.citeLabel }}<a v-for="(c, i) in selected.cite" :key="i"
                class="source" :href="c.url" target="_blank" rel="noopener">{{ citeLabel(c) }}</a></span>
          </template>
        </p>
        <!-- 定义由构建脚本预渲染为 HTML（含公式 SVG） -->
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="def" v-html="selected.def" />
      </article>
    </Transition>

    <p class="hint" v-if="searching">
      {{ s.hits(filtered.length) }}
    </p>

    <!-- 搜索结果：平铺清单 -->
    <ul v-if="searching" class="results">
      <li v-for="e in filtered" :key="e.course + e.term">
        <button
          :class="['result', { 'is-active': selected === e }]"
          @click="selected = e"
        >
          <span class="r-term">{{ e.term }}</span>
          <span class="r-course">{{ courseLabel(e.course) }}</span>
        </button>
      </li>
    </ul>

    <!-- 目录态：按专题分组（visible-once：滚动到才入场，SSR 首屏不受影响） -->
    <section
      v-if="!searching"
      v-for="(g, i) in groups"
      :key="g.course"
      v-motion
      :initial="groupInitial"
      :visible-once="groupVisible(i)"
      class="group"
    >
      <h2>{{ courseLabel(g.course) }} <span class="g-count">{{ g.entries.length }}</span></h2>
      <ul class="terms">
        <li v-for="e in g.entries" :key="e.term">
          <button
            :class="['term', { 'is-active': selected === e }]"
            @click="selected = e"
          >{{ e.term }}</button>
        </li>
      </ul>
    </section>

    <p v-if="filtered.length === 0" class="empty">
      {{ s.empty }}
    </p>
  </div>
</template>

<style scoped>
.toolbar {
  margin: 1.2rem 0 1.6rem;
}
.search {
  position: relative;
  max-width: 26rem;
}
.search svg {
  position: absolute;
  left: 0.8rem;
  top: 50%;
  width: 1rem;
  height: 1rem;
  transform: translateY(-50%);
  color: var(--vp-c-text-3);
  pointer-events: none;
}
.search input {
  width: 100%;
  box-sizing: border-box;
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  padding: 0.55rem 0.9rem 0.55rem 2.3rem;
  font-size: 0.92rem;
}
.search input:focus {
  outline: none;
  border-color: var(--vp-c-brand-1);
}
.search input::placeholder {
  color: var(--vp-c-text-3);
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.8rem;
}
.chip {
  border: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  border-radius: 999px;
  padding: 0.3rem 0.85rem;
  font-size: 0.85rem;
  cursor: pointer;
  transition: color 0.15s, border-color 0.15s;
}
.chip:hover {
  color: var(--vp-c-text-1);
  border-color: var(--vp-c-text-3);
}
.chip.is-active {
  color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
  font-weight: 600;
}
.count {
  font-size: 0.75rem;
  opacity: 0.65;
  font-variant-numeric: tabular-nums;
}

/* 详情面板开合 */
.panel-enter-active {
  transition: opacity 0.26s ease-out, transform 0.26s ease-out;
}
.panel-leave-active {
  transition: opacity 0.16s ease-in, transform 0.16s ease-in;
}
.panel-enter-from,
.panel-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* 系统声明减少动态效果：详情面板开合直达终态 */
@media (prefers-reduced-motion: reduce) {
  .panel-enter-active,
  .panel-leave-active {
    transition: none;
  }
  .panel-enter-from,
  .panel-leave-to {
    opacity: 1;
    transform: none;
  }
}

/* 详情 */
.detail {
  border: 1px solid var(--vp-c-border);
  border-left: 3px solid var(--vp-c-brand-1);
  background: var(--vp-c-bg-soft);
  padding: 1.2rem 1.5rem 1.4rem;
  margin-bottom: 1.8rem;
}
.detail-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
}
.detail-head h2 {
  font-family: var(--vp-font-display);
  font-size: 1.4rem;
  margin: 0;
}
.close {
  border: 1px solid var(--vp-c-border);
  background: transparent;
  color: var(--vp-c-text-3);
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  cursor: pointer;
  font-size: 0.8rem;
  line-height: 1;
}
.close:hover {
  color: var(--vp-c-text-1);
  border-color: var(--vp-c-text-3);
}
.where {
  margin: 0.35rem 0 0.7rem;
  font-size: 0.85rem;
  color: var(--vp-c-text-3);
}
.source {
  color: var(--vp-c-brand-1);
  text-decoration: none;
}
.source:hover {
  text-decoration: underline;
}
.def {
  max-width: 46em;
  font-size: 0.95rem;
  line-height: 1.75;
  color: var(--vp-c-text-1);
}
.def :deep(.katex-display) {
  overflow-x: auto;
  max-width: 100%;
}

.hint {
  font-size: 0.85rem;
  color: var(--vp-c-text-3);
  margin: 0 0 1rem;
}

/* 搜索结果 */
.results {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  gap: 0.4rem;
}
.result {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 0.6rem;
  text-align: left;
  border: 1px solid var(--vp-c-border);
  border-radius: 6px;
  background: var(--vp-c-bg);
  padding: 0.55rem 0.8rem;
  cursor: pointer;
  transition: border-color 0.15s;
}
.result:hover,
.result.is-active {
  border-color: var(--vp-c-brand-1);
}
.r-term {
  font-size: 0.92rem;
  color: var(--vp-c-text-1);
}
.r-course {
  flex-shrink: 0;
  font-size: 0.72rem;
  color: var(--vp-c-text-3);
  border: 1px solid var(--vp-c-border);
  border-radius: 3px;
  padding: 0 0.3rem;
}

/* 目录态 */
.group {
  margin-bottom: 2rem;
}
.group h2 {
  font-family: var(--vp-font-display);
  font-size: 1.2rem;
  margin: 0 0 0.7rem;
  padding-bottom: 0.35rem;
  border-bottom: 1px solid var(--vp-c-border);
}
.g-count {
  font-family: var(--vp-font-mono);
  font-size: 0.78rem;
  color: var(--vp-c-text-3);
  font-variant-numeric: tabular-nums;
  margin-left: 0.4rem;
}
.terms {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
.term {
  border: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  border-radius: 999px;
  padding: 0.28rem 0.8rem;
  font-size: 0.86rem;
  cursor: pointer;
  transition: border-color 0.15s, color 0.15s;
}
.term:hover,
.term.is-active {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.empty {
  color: var(--vp-c-text-3);
  font-size: 0.92rem;
}
</style>
