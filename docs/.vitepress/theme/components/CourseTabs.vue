<script setup lang="ts">
import { useRoute } from 'vitepress'

// 线条图标：24 viewBox、1.5 描边、圆角端点，一套手绘几何
const courses = [
  {
    label: '西方经济学',
    base: '/western',
    link: '/western/Readme',
    paths: [
      'M4 20h16M4 20V4',
      'M6 6c4 5 8 8 12 11',
      'M6 18c4-5 8-8 12-11',
    ],
  },
  {
    label: '货币银行学',
    base: '/monetary',
    link: '/monetary/Readme',
    paths: ['M3 9l9-5 9 5', 'M6 9v8M12 9v8M18 9v8', 'M4 17h16M3 20h18'],
  },
  {
    label: '财政学',
    base: '/finance',
    link: '/finance/Readme',
    paths: [
      'M12 4v16M8 20h8',
      'M4 7h16',
      'M4 7l-2 5M4 7l2 5M2 12a2 2 0 0 0 4 0',
      'M20 7l-2 5M20 7l2 5M18 12a2 2 0 0 0 4 0',
    ],
  },
  {
    label: '国际经济学',
    base: '/international',
    link: '/international/Readme',
    paths: ['M12 4a12.5 12.5 0 0 0 0 16M12 4a12.5 12.5 0 0 1 0 16', 'M4 12h16'],
    circle: true,
  },
  {
    label: '社会主义经济理论',
    base: '/socialist',
    link: '/socialist/Readme',
    paths: ['M6 21V4', 'M6 5c2-1.2 4-1.2 6 0s4 1.2 6 0v7c-2 1.2-4 1.2-6 0s-4-1.2-6 0'],
  },
  {
    label: '数学基础',
    base: '/math',
    link: '/math/Readme',
    paths: ['M17 5H8l5 7-5 7h9'],
  },
]

const route = useRoute()
</script>

<template>
  <nav class="course-tabs" aria-label="课程切换">
    <a
      v-for="c in courses"
      :key="c.base"
      :class="['course-tab', { 'is-active': route.path.startsWith(c.base) }]"
      :href="c.link"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <template v-if="c.circle">
          <circle cx="12" cy="12" r="8" />
          <path v-for="(d, i) in c.paths" :key="i" :d="d" />
        </template>
        <template v-else>
          <path v-for="(d, i) in c.paths" :key="i" :d="d" />
        </template>
      </svg>
      <span>{{ c.label }}</span>
    </a>
  </nav>
</template>
