---
layout: page
---

<script setup>
import { PEOPLE } from './.vitepress/theme/data/people'
import { GLOSSARY } from './.vitepress/theme/data/glossary'
import { COURSES, chapterCount } from './.vitepress/theme/data/courses'
import { withBase } from 'vitepress'
import { TIMELINE } from './.vitepress/theme/data/timeline'
</script>

<div class="ledger-hero">
  <p class="hero-kicker">经济学知识整理</p>
  <h1 class="hero-title">经济学不是结论的清单，<br>是一场仍在进行的争论。</h1>
  <p class="hero-lede">
    每个理论都是为了回答它那个时代的问题：重商主义回答不了贸易差额的去向，古典学派回答不了萧条，
    凯恩斯回答不了滞胀。这个站点沿着「<strong>为什么出现 → 如何发展 → 怎样被验证</strong>」重新整理经济学，
    让公式回到它诞生的处境里。
  </p>
  <p class="hero-meta">
    <span>{{ COURSES.length }} 门课程</span>
    <span>{{ COURSES.reduce((n, c) => n + chapterCount(c.id), 0) }} 章正文</span>
    <span>{{ TIMELINE.length }} 个理论节点</span>
    <span>{{ PEOPLE.length }} 位经济学家</span>
    <span>{{ GLOSSARY.length }} 个术语</span>
  </p>
</div>

<h2 class="home-h2">课程目录</h2>

<CourseShelf />

<p class="shelf-note">
  目录按课程分栏，切换上面任意一个标签即可看该课的章节；想按问题读，先从每课的「课程导论」进。
</p>

<h2 class="home-h2">三条阅读线索</h2>

<ol class="threads">
  <li>
    <h3><a :href="withBase('/timeline')">理论时间线</a></h3>
    <p>1516 年《乌托邦》到 2020 年的疫情与财政货币化争论，{{ TIMELINE.length }} 个节点串起理论出现的顺序：按住拖动看疏密，放大后点开任一节点，回答「为什么是这个时候」。</p>
  </li>
  <li>
    <h3><a :href="withBase('/people')">名人篇</a></h3>
    <p>{{ PEOPLE.length }} 位经济学家的师承网络：谁受谁影响、提出了什么、又传给了谁。点击任何一个人，沿着线索走。</p>
  </li>
  <li>
    <h3><a :href="withBase('/glossary')">术语篇</a></h3>
    <p>贴水、帕累托最优、自然率假说……{{ GLOSSARY.length }} 个术语统一释义，标注出处章节，可检索、可单查。</p>
  </li>
</ol>

<p class="colophon">
  内容整理自公开的经济学教材与讲义笔记，正在逐章补入「理论的诞生与验证」背景。
  引用一律回链原文；发现错漏欢迎开 issue 指正。
</p>
