<script setup lang="ts">
import { computed, ref } from 'vue'
import { TIMELINE, FIELD_LABELS, ERAS, type TimelineEvent } from '../data/timeline'

const active = ref<'all' | TimelineEvent['field']>('all')

const fields = Object.keys(FIELD_LABELS) as TimelineEvent['field'][]

const filtered = computed(() =>
  active.value === 'all' ? TIMELINE : TIMELINE.filter((e) => e.field === active.value),
)

const eraGroups = computed(() =>
  ERAS.map((era) => ({
    ...era,
    events: filtered.value.filter((e) => e.year >= era.from && e.year <= era.to),
  })).filter((g) => g.events.length > 0),
)
</script>

<template>
  <div class="timeline">
    <div class="filters" role="tablist" aria-label="按领域筛选">
      <button
        :class="['chip', { 'is-active': active === 'all' }]"
        @click="active = 'all'"
      >全部 <span class="count">{{ TIMELINE.length }}</span></button>
      <button
        v-for="f in fields"
        :key="f"
        :class="['chip', { 'is-active': active === f }]"
        @click="active = f"
      >{{ FIELD_LABELS[f] }} <span class="count">{{ TIMELINE.filter((e) => e.field === f).length }}</span></button>
    </div>

    <section v-for="era in eraGroups" :key="era.name" class="era">
      <header class="era-head">
        <h2>{{ era.name }}</h2>
        <p class="era-range">{{ era.from === 1500 ? '16 世纪' : era.from }} — {{ era.to > 2026 ? '今天' : era.to }}</p>
        <p class="era-intro">{{ era.intro }}</p>
      </header>

      <ol class="events">
        <li v-for="e in era.events" :key="e.year + e.title" class="event spine">
          <span class="node" :data-field="e.field" />
          <span class="year">{{ e.year }}</span>
          <div class="body">
            <h3>{{ e.title }}</h3>
            <p v-if="e.who" class="who">{{ e.who }}<span class="field-tag">{{ FIELD_LABELS[e.field] }}</span></p>
            <p class="why">{{ e.why }}</p>
            <a v-if="e.link" class="more" :href="e.link">进入相关章节</a>
          </div>
        </li>
      </ol>
    </section>
  </div>
</template>

<style scoped>
.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1.2rem 0 2.2rem;
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

.era {
  margin-bottom: 3rem;
}
.era-head h2 {
  font-family: var(--vp-font-display);
  font-size: 1.35rem;
  margin: 0 0 0.2rem;
}
.era-range {
  font-family: var(--vp-font-mono);
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
  margin: 0 0 0.5rem;
}
.era-intro {
  color: var(--vp-c-text-2);
  max-width: 40em;
  margin: 0 0 1.4rem;
  font-size: 0.95rem;
}

.events {
  list-style: none;
  margin: 0;
  padding: 0 0 0 1.4rem;
}
.event {
  position: relative;
  display: grid;
  grid-template-columns: 3.6rem 1fr;
  column-gap: 1rem;
  padding-bottom: 1.7rem;
}
.event .node {
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
.year {
  font-family: var(--vp-font-mono);
  font-size: 0.88rem;
  color: var(--vp-c-brand-1);
  font-variant-numeric: tabular-nums;
  padding-top: 0.25rem;
}
.body h3 {
  font-family: var(--vp-font-display);
  font-size: 1.02rem;
  margin: 0 0 0.15rem;
}
.who {
  margin: 0 0 0.3rem;
  font-size: 0.86rem;
  color: var(--vp-c-text-3);
}
.field-tag {
  margin-left: 0.6rem;
  font-size: 0.72rem;
  border: 1px solid var(--vp-c-border);
  border-radius: 3px;
  padding: 0 0.35rem;
  color: var(--vp-c-text-3);
}
.why {
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 0.93rem;
  max-width: 42em;
}
.more {
  display: inline-block;
  margin-top: 0.3rem;
  font-size: 0.85rem;
  color: var(--vp-c-brand-1);
  text-decoration: none;
}
.more:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .event {
    grid-template-columns: 1fr;
    row-gap: 0.1rem;
  }
}
</style>
