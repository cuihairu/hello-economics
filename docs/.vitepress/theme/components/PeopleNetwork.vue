<script setup lang="ts">
import { computed, ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { PEOPLE, PEOPLE_BY_ID, FIELD_LABELS, type Person } from '../data/people'

// 支持 #person-id 深链（名著页等外部入口直达词条）
const openFromHash = () => {
  const id = decodeURIComponent(location.hash.slice(1))
  if (id && PEOPLE_BY_ID[id]) selectedId.value = id
}
onMounted(() => {
  openFromHash()
  window.addEventListener('hashchange', openFromHash)
})
onBeforeUnmount(() => window.removeEventListener('hashchange', openFromHash))

// 时代分段（与理论时间线的分期保持一致，出生年决定归属）
const ERA_BANDS = [
  { name: '前古典与古典', from: 1500, to: 1870 },
  { name: '边际革命与新古典', from: 1871, to: 1935 },
  { name: '凯恩斯革命与综合', from: 1936, to: 1970 },
  { name: '理性预期与当代', from: 1971, to: 2100 },
]

const birthOf = (p: Person) => parseInt(p.years, 10)

const eraOf = (p: Person) =>
  ERA_BANDS.find((b) => birthOf(p) >= b.from && birthOf(p) <= b.to)?.name ?? ''

const active = ref<'all' | Person['field']>('all')
const selectedId = ref<string | null>(null)

const fields = Object.keys(FIELD_LABELS) as Person['field'][]

const people = computed(() =>
  [...PEOPLE]
    .filter((p) => active.value === 'all' || p.field === active.value)
    .sort((a, b) => birthOf(a) - birthOf(b)),
)

const selected = computed(() => (selectedId.value ? PEOPLE_BY_ID[selectedId.value] : null))

const select = (id: string) => {
  selectedId.value = id
}
const toggle = (id: string) => {
  selectedId.value = selectedId.value === id ? null : id
}

// 切换筛选后如果选中项被过滤掉，保留详情但置顶展示（不强制清除）
watch(active, () => {
  if (selectedId.value && !PEOPLE_BY_ID[selectedId.value]) selectedId.value = null
})

const span = (p: Person) => {
  const [b, d] = p.years.split('-')
  return { b: parseInt(b, 10), d: d ? parseInt(d, 10) : 2026 }
}
</script>

<template>
  <div class="people">
    <div class="filters" role="tablist" aria-label="按领域筛选">
      <button
        :class="['chip', { 'is-active': active === 'all' }]"
        @click="active = 'all'"
      >全部 <span class="count">{{ PEOPLE.length }}</span></button>
      <button
        v-for="f in fields"
        :key="f"
        :class="['chip', { 'is-active': active === f }]"
        @click="active = f"
      >{{ FIELD_LABELS[f] }} <span class="count">{{ PEOPLE.filter((p) => p.field === f).length }}</span></button>
    </div>

    <!-- 人物详情：影响网络 -->
    <article v-if="selected" class="detail">
      <header class="detail-head">
        <div>
          <h2>{{ selected.name }}</h2>
          <p class="meta">
            <span class="years">{{ selected.years }}</span>
            <span>{{ selected.country }}</span>
            <span>{{ selected.school }}</span>
            <span class="field-tag">{{ FIELD_LABELS[selected.field] }}</span>
          </p>
        </div>
        <button class="close" aria-label="关闭详情" @click="selectedId = null">✕</button>
      </header>

      <!-- 生卒在时代带上的位置 -->
      <div class="lifebar" aria-hidden="true">
        <div
          v-for="band in ERA_BANDS"
          :key="band.name"
          class="band"
          :title="band.name"
        >
          <span class="band-label">{{ band.name }}</span>
        </div>
        <div
          class="life"
          :style="{
            left: ((span(selected).b - 1500) / 600) * 100 + '%',
            width: Math.max(((span(selected).d - span(selected).b) / 600) * 100, 1.2) + '%',
          }"
        />
      </div>

      <p class="bio">{{ selected.bio }}</p>

      <div class="cols">
        <div class="col">
          <h3>提出与发展</h3>
          <ul class="theories">
            <li v-for="t in selected.theories" :key="t">{{ t }}</li>
          </ul>
          <ul v-if="selected.works" class="works">
            <li v-for="w in selected.works" :key="w">{{ w }}</li>
          </ul>
        </div>
        <div class="col">
          <h3>受谁影响</h3>
          <p v-if="selected.influencedBy.length === 0" class="none">思想源头在此之前的传统。</p>
          <div class="links">
            <button
              v-for="id in selected.influencedBy"
              :key="id"
              class="person-chip"
              @click="select(id)"
            >← {{ PEOPLE_BY_ID[id].name }}</button>
          </div>
          <h3>影响了谁</h3>
          <p v-if="selected.influenced.length === 0" class="none">这条线索在后辈处拐了弯——见他所属课程的相关章节。</p>
          <div class="links">
            <button
              v-for="id in selected.influenced"
              :key="id"
              class="person-chip"
              @click="select(id)"
            >{{ PEOPLE_BY_ID[id].name }} →</button>
          </div>
        </div>
      </div>
    </article>

    <!-- 人物卡片目录 -->
    <ul class="cards">
      <li v-for="p in people" :key="p.id">
        <button
          :class="['card', { 'is-active': selectedId === p.id }]"
          @click="toggle(p.id)"
        >
          <span class="p-name">{{ p.name }}</span>
          <span class="p-years">{{ p.years }}</span>
          <span class="p-school">{{ p.school }}</span>
          <span class="p-theory">{{ p.theories[0] }}</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1.2rem 0 2rem;
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
  padding: 1.4rem 1.6rem 1.6rem;
  margin-bottom: 2rem;
}
.detail-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
}
.detail-head h2 {
  font-family: var(--vp-font-display);
  font-size: 1.5rem;
  margin: 0 0 0.25rem;
}
.meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin: 0;
  font-size: 0.85rem;
  color: var(--vp-c-text-3);
}
.years {
  font-family: var(--vp-font-mono);
  font-variant-numeric: tabular-nums;
}
.field-tag {
  border: 1px solid var(--vp-c-border);
  border-radius: 3px;
  padding: 0 0.35rem;
  font-size: 0.75rem;
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

/* 时代带上的生命线 */
.lifebar {
  position: relative;
  display: flex;
  height: 1.9rem;
  margin: 1.1rem 0 0.9rem;
  border-block: 1px solid var(--vp-c-border);
}
.band {
  flex: 1;
  border-right: 1px solid var(--vp-c-border);
  overflow: hidden;
}
.band:last-child {
  border-right: none;
}
.band-label {
  font-size: 0.66rem;
  color: var(--vp-c-text-3);
  white-space: nowrap;
  display: block;
  padding: 0.15rem 0 0 0.3rem;
}
.life {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 4px;
  background: var(--vp-c-brand-1);
  border-radius: 2px;
}

.bio {
  max-width: 46em;
  color: var(--vp-c-text-1);
  line-height: 1.75;
  margin: 0 0 1.2rem;
}

.cols {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.6rem;
}
.col h3 {
  font-size: 0.82rem;
  letter-spacing: 0.08em;
  color: var(--vp-c-text-3);
  margin: 0 0 0.5rem;
  font-weight: 600;
}
.col h3 + .links {
  margin-top: 0;
}
.col h3:not(:first-child) {
  margin-top: 1.1rem;
}
.theories,
.works {
  margin: 0;
  padding: 0;
  list-style: none;
}
.theories li {
  font-size: 0.92rem;
  padding: 0.22rem 0 0.22rem 1rem;
  position: relative;
}
.theories li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.78em;
  width: 6px;
  height: 1px;
  background: var(--vp-c-brand-1);
}
.works li {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  padding: 0.15rem 0;
}
.none {
  font-size: 0.88rem;
  color: var(--vp-c-text-3);
  margin: 0 0 0.4rem;
}
.links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}
.person-chip {
  border: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  border-radius: 999px;
  padding: 0.28rem 0.8rem;
  font-size: 0.85rem;
  cursor: pointer;
  transition: border-color 0.15s, color 0.15s;
}
.person-chip:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

/* 卡片目录 */
.cards {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(13.5rem, 1fr));
  gap: 0.7rem;
}
.card {
  width: 100%;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  border: 1px solid var(--vp-c-border);
  border-radius: 6px;
  background: var(--vp-c-bg);
  padding: 0.8rem 0.95rem;
  cursor: pointer;
  transition: border-color 0.15s, transform 0.15s;
}
.card:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-1px);
}
.card.is-active {
  border-color: var(--vp-c-brand-1);
  box-shadow: inset 3px 0 0 var(--vp-c-brand-1);
}
.p-name {
  font-family: var(--vp-font-display);
  font-size: 1.02rem;
  color: var(--vp-c-text-1);
}
.p-years {
  font-family: var(--vp-font-mono);
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
  font-variant-numeric: tabular-nums;
}
.p-school {
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
}
.p-theory {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  margin-top: 0.25rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

@media (max-width: 768px) {
  .cols {
    grid-template-columns: 1fr;
  }
  .band-label {
    display: none;
  }
}
</style>
