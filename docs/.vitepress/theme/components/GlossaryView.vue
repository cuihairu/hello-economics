<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { withBase } from 'vitepress'
import { GLOSSARY, COURSES, type GlossaryEntry } from '../data/glossary'

const query = ref('')
const course = ref<'all' | string>('all')
const selected = ref<GlossaryEntry | null>(null)

// CJK 逐字匹配 + 拉丁词元匹配，280 余条数据无需分词库
const normalize = (s: string) =>
  s.toLowerCase().replace(/\s+/g, '')

const hit = (e: GlossaryEntry, q: string) =>
  normalize(e.term).includes(q) || normalize(e.def.replace(/<[^>]+>/g, '')).includes(q)

const filtered = computed(() => {
  const q = normalize(query.value)
  return GLOSSARY.filter(
    (e) =>
      (course.value === 'all' || e.course === course.value) &&
      (q === '' || hit(e, q)),
  )
})

// 目录态按课程分组；搜索态展示命中清单
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

const countAll = (c: string) => GLOSSARY.filter((e) => e.course === c).length
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
          placeholder="检索术语，例如：贴水、弹性、帕累托"
          aria-label="检索术语"
        >
      </div>
      <div class="filters" role="tablist" aria-label="按课程筛选">
        <button
          :class="['chip', { 'is-active': course === 'all' }]"
          @click="course = 'all'"
        >全部 <span class="count">{{ GLOSSARY.length }}</span></button>
        <button
          v-for="c in COURSES"
          :key="c"
          :class="['chip', { 'is-active': course === c }]"
          @click="course = c"
        >{{ c }} <span class="count">{{ countAll(c) }}</span></button>
      </div>
    </div>

    <!-- 词条详情 -->
    <article v-if="selected" class="detail">
      <header class="detail-head">
        <h2>{{ selected.term }}</h2>
        <button class="close" aria-label="关闭词条" @click="selected = null">✕</button>
      </header>
      <p class="where">
        出现于「{{ selected.course }}」<template v-if="selected.source">
          · <a class="source" :href="withBase(selected.source)">回到原文</a></template>
      </p>
      <!-- 定义由构建脚本预渲染为 HTML（含公式 SVG） -->
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="def" v-html="selected.def" />
    </article>

    <p class="hint" v-if="searching">
      命中 {{ filtered.length }} 条
    </p>

    <!-- 搜索结果：平铺清单 -->
    <ul v-if="searching" class="results">
      <li v-for="e in filtered" :key="e.course + e.term">
        <button
          :class="['result', { 'is-active': selected === e }]"
          @click="selected = e"
        >
          <span class="r-term">{{ e.term }}</span>
          <span class="r-course">{{ e.course }}</span>
        </button>
      </li>
    </ul>

    <!-- 目录态：按课程分组 -->
    <section v-else v-for="g in groups" :key="g.course" class="group">
      <h2>{{ g.course }} <span class="g-count">{{ g.entries.length }}</span></h2>
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
      没有命中的术语。换个说法试试，或清空筛选。
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
