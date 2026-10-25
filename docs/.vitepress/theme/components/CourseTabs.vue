<script setup lang="ts">
import { computed } from 'vue'
import { useData, useRoute, withBase } from 'vitepress'
import { courseListFor } from '../data/courses'

// 专题切换条：目录、图标几何全部来自 theme/data/courses.ts
// 样式在 custom.css 的「专题 Tab」一段（doc-before 槽位属于全局骨架）
// 语言环境：按 useData().localeIndex 取对应语言的课程列表（英文侧按 EN_READY 过滤）
const { localeIndex } = useData()
const route = useRoute()

const courses = computed(() => courseListFor(localeIndex.value))

const TABLIST_LABEL = { root: 'Course switcher', zh: '专题切换' } as const
</script>

<template>
  <nav class="course-tabs" :aria-label="TABLIST_LABEL[localeIndex]">
    <a
      v-for="c in courses"
      :key="c.base"
      :class="['course-tab', { 'is-active': route.path.startsWith(c.base) }]"
      :href="withBase(c.readme)"
    >
      <!-- 线条图标：24 viewBox、1.5 描边、圆角端点，一套手绘几何 -->
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <circle v-if="c.icon.circle" cx="12" cy="12" r="8" />
        <path v-for="(d, i) in c.icon.paths" :key="i" :d="d" />
      </svg>
      <span>{{ c.label }}</span>
    </a>
  </nav>
</template>
