---
layout: page
---

<script setup>
import { PEOPLE } from './.vitepress/theme/data/people'
import { GLOSSARY } from './.vitepress/theme/data/glossary'
import { COURSES_EN, EN_READY, shelfFor } from './.vitepress/theme/data/courses'
import { withBase } from 'vitepress'
import { TIMELINE } from './.vitepress/theme/data/timeline'

const chapterTotal = COURSES_EN.reduce((n, c) => n + c.chapters.reduce((m, g) => m + g.items.length, 0), 0)
const hasShelf = shelfFor('root').length > 0
const threadsReady = EN_READY.has('index')
</script>

<div class="ledger-hero">
  <p class="hero-kicker">Working notes on economics</p>
  <h1 class="hero-title">Economics is not a list of conclusions.<br>It is an argument still in progress.</h1>
  <p class="hero-lede">
    Every theory was an answer to the question its own era posed: mercantilism could not explain where
    the trade balance goes, the classics could not explain a depression, Keynes could not explain
    stagflation. This site re-sorts economics along a single line — <strong>why it arose → how it
    developed → how it was tested</strong> — putting each formula back into the situation that produced it.
  </p>
  <p class="hero-meta">
    <span>{{ COURSES_EN.length }} course guides</span>
    <span>{{ chapterTotal }} chapters</span>
    <span>{{ TIMELINE.length }} theory nodes</span>
    <span>{{ PEOPLE.length }} economists</span>
    <span>{{ GLOSSARY.length }} terms</span>
  </p>
</div>

<template v-if="hasShelf">
  <h2 class="home-h2">Course catalogue</h2>

  <CourseShelf />

  <p class="shelf-note">
    The catalogue is grouped by course; switch tabs above to browse chapters. I usually start from a
    course guide or the page for the specific question at hand.
  </p>
</template>

<template v-if="threadsReady">
  <h2 class="home-h2">Three reading threads</h2>

  <ol class="threads">
    <li>
      <h3><a :href="withBase('/timeline')">Theory timeline</a></h3>
      <p>From More's Utopia in 1516 to the 2020 debates over the pandemic and fiscal monetization: {{ TIMELINE.length }} nodes in the order theories appeared. Drag to read the density; zoom in and open any node to ask "why at this moment".</p>
    </li>
    <li>
      <h3><a :href="withBase('/people')">Economists</a></h3>
      <p>{{ PEOPLE.length }} economists as a network of lineages: who influenced whom, who proposed what, and who carried it on. Click any person and follow the thread.</p>
    </li>
    <li>
      <h3><a :href="withBase('/glossary')">Glossary</a></h3>
      <p>Premium, Pareto optimality, the natural-rate hypothesis — {{ GLOSSARY.length }} terms with unified definitions, source chapters marked, searchable and individually linkable.</p>
    </li>
  </ol>
</template>

<p class="colophon">
  These pages are compiled from open economics textbooks and lecture notes; I am gradually adding the
  background of how each theory arose and how it was tested. Quotations always link back to their
  sources; if you spot an error, please open an issue.
</p>
