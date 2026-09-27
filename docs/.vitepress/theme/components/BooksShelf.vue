<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { withBase } from 'vitepress'
import { BOOKS, SCHOOL_LABELS, type Book } from '../data/books'
import { PEOPLE_BY_ID } from '../data/people'

const active = ref<'all' | Book['school']>('all')
const selectedId = ref<string | null>(null)

const schools = Object.keys(SCHOOL_LABELS) as Book['school'][]

const books = computed(() =>
  [...BOOKS]
    .filter((b) => active.value === 'all' || b.school === active.value)
    .sort((a, b) => a.year - b.year),
)

const selected = computed(() => (selectedId.value ? BOOKS.find((b) => b.id === selectedId.value) : null))

const toggle = (id: string) => {
  selectedId.value = selectedId.value === id ? null : id
}

watch(active, () => {
  if (selectedId.value && !BOOKS.some((b) => b.id === selectedId.value)) selectedId.value = null
})

// 封面：Open Library 直链优先，加载失败切本地占位 SVG
const failed = ref<Record<string, boolean>>({})
const coverSrc = (b: Book) =>
  !b.cover || failed.value[b.id] ? withBase(b.fallback) : b.cover

const authorHref = (peopleId?: string, wiki?: string) =>
  peopleId && PEOPLE_BY_ID[peopleId] ? `${withBase('/people')}#${peopleId}` : wiki ?? ''
</script>

<template>
  <div class="shelf">
    <div class="filters" role="tablist" aria-label="按流派筛选">
      <button
        :class="['chip', { 'is-active': active === 'all' }]"
        @click="active = 'all'"
      >全部 <span class="count">{{ BOOKS.length }}</span></button>
      <button
        v-for="s in schools"
        :key="s"
        :class="['chip', { 'is-active': active === s }]"
        @click="active = s"
      >{{ SCHOOL_LABELS[s] }} <span class="count">{{ BOOKS.filter((b) => b.school === s).length }}</span></button>
    </div>

    <!-- 书籍详情 -->
    <article v-if="selected" class="detail">
      <button class="close" aria-label="关闭详情" @click="selectedId = null">✕</button>
      <div class="detail-body">
        <img
          class="detail-cover"
          :src="coverSrc(selected)"
          :alt="`《${selected.title}》封面`"
          loading="lazy"
          @error="failed[selected.id] = true"
        />
        <div class="detail-text">
          <h2>《{{ selected.title }}》</h2>
          <p class="meta">
            <span class="year">{{ selected.year }}</span>
            <span>{{ SCHOOL_LABELS[selected.school] }}</span>
          </p>
          <p class="authors">
            <template v-for="(a, i) in selected.authors" :key="a.name">
              <span v-if="i > 0" class="author-sep">、</span><a
                v-if="authorHref(a.peopleId, a.wiki)"
                :href="authorHref(a.peopleId, a.wiki)"
                :title="a.peopleId && PEOPLE_BY_ID[a.peopleId] ? '查看站内词条' : '查看维基百科'"
              >{{ a.name }}</a><span v-else>{{ a.name }}</span>
            </template>
          </p>
          <p class="summary">{{ selected.summary }}</p>
        </div>
      </div>
    </article>

    <!-- 书架卡片 -->
    <ul class="cards">
      <li v-for="b in books" :key="b.id">
        <button
          :class="['card', { 'is-active': selectedId === b.id }]"
          @click="toggle(b.id)"
        >
          <span class="cover-wrap">
            <img
              class="cover"
              :src="coverSrc(b)"
              :alt="`《${b.title}》封面`"
              loading="lazy"
              @error="failed[b.id] = true"
            />
          </span>
          <span class="b-title">{{ b.title }}</span>
          <span class="b-author">{{ b.authors.map((a) => a.name).join('、') }}</span>
          <span class="b-year">{{ b.year }}</span>
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
  position: relative;
  border: 1px solid var(--vp-c-border);
  border-left: 3px solid var(--vp-c-brand-1);
  background: var(--vp-c-bg-soft);
  padding: 1.4rem 1.6rem;
  margin-bottom: 2rem;
}
.close {
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
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
.detail-body {
  display: grid;
  grid-template-columns: 9.5rem 1fr;
  gap: 1.6rem;
  align-items: start;
}
.detail-cover {
  width: 100%;
  border: 1px solid var(--vp-c-border);
  box-shadow: 2px 3px 0 rgba(0, 0, 0, 0.12);
}
.detail-text h2 {
  font-family: var(--vp-font-display);
  font-size: 1.4rem;
  margin: 0 0 0.4rem;
  padding-right: 2.2rem;
}
.meta {
  display: flex;
  gap: 0.75rem;
  margin: 0 0 0.5rem;
  font-size: 0.85rem;
  color: var(--vp-c-text-3);
}
.year {
  font-family: var(--vp-font-mono);
  font-variant-numeric: tabular-nums;
}
.authors {
  margin: 0 0 0.9rem;
  font-size: 0.9rem;
}
.authors a {
  color: var(--vp-c-brand-1);
  text-decoration: none;
  border-bottom: 1px solid var(--vp-c-brand-soft);
}
.authors a:hover {
  border-bottom-color: var(--vp-c-brand-1);
}
.author-sep {
  color: var(--vp-c-text-3);
}
.summary {
  margin: 0;
  max-width: 46em;
  color: var(--vp-c-text-1);
  line-height: 1.8;
}

/* 书架卡片 */
.cards {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(9.5rem, 1fr));
  gap: 1rem;
}
.card {
  width: 100%;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  border: 1px solid var(--vp-c-border);
  border-radius: 6px;
  background: var(--vp-c-bg);
  padding: 0.7rem;
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
.cover-wrap {
  display: block;
  margin: 0 0 0.5rem;
  border: 1px solid var(--vp-c-border);
  overflow: hidden;
  box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.08);
}
.cover {
  display: block;
  width: 100%;
  aspect-ratio: 33 / 50;
  object-fit: cover;
}
.b-title {
  font-family: var(--vp-font-display);
  font-size: 0.95rem;
  color: var(--vp-c-text-1);
  text-wrap: balance;
}
.b-author {
  font-size: 0.78rem;
  color: var(--vp-c-text-3);
}
.b-year {
  font-family: var(--vp-font-mono);
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
  font-variant-numeric: tabular-nums;
}

@media (max-width: 768px) {
  .detail-body {
    grid-template-columns: 7rem 1fr;
    gap: 1.1rem;
  }
  .cards {
    grid-template-columns: repeat(auto-fill, minmax(8.2rem, 1fr));
  }
}
</style>
