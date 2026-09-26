---
layout: page
---

<script setup>
import { PEOPLE } from './.vitepress/theme/data/people'
import { GLOSSARY } from './.vitepress/theme/data/glossary'
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
    <span>{{ 6 }} 门课程</span><span>{{ TIMELINE.length }} 个理论节点</span><span>{{ PEOPLE.length }} 位经济学家</span><span>{{ GLOSSARY.length }} 个术语</span>
  </p>
</div>

<h2 class="home-h2">课程目录</h2>

<ul class="course-index">
  <li>
    <a href="/western/Readme">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M4 20h16M4 20V4"/><path d="M6 6c4 5 8 8 12 11"/><path d="M6 18c4-5 8-8 12-11"/>
      </svg>
      <div class="ci-body">
        <span class="ci-num">01</span>
        <span class="ci-name">西方经济学</span>
        <span class="ci-why">从供求交叉点出发，看微观如何解释价格、宏观如何解释萧条与增长。</span>
      </div>
      <span class="ci-go">15 章</span>
    </a>
  </li>
  <li>
    <a href="/monetary/Readme">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M3 9l9-5 9 5"/><path d="M6 9v8M12 9v8M18 9v8"/><path d="M4 17h16M3 20h18"/>
      </svg>
      <div class="ci-body">
        <span class="ci-num">02</span>
        <span class="ci-name">货币银行学</span>
        <span class="ci-why">钱从哪里来、利率如何决定、中央银行的手怎样伸进经济。</span>
      </div>
      <span class="ci-go">10 章</span>
    </a>
  </li>
  <li>
    <a href="/finance/Readme">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M12 4v16M8 20h8"/><path d="M4 7h16"/><path d="M4 7l-2 5M4 7l2 5M2 12a2 2 0 0 0 4 0"/><path d="M20 7l-2 5M20 7l2 5M18 12a2 2 0 0 0 4 0"/>
      </svg>
      <div class="ci-body">
        <span class="ci-num">03</span>
        <span class="ci-name">财政学</span>
        <span class="ci-why">政府为什么收税、怎么花钱，以及什么时候财政本身成为问题。</span>
      </div>
      <span class="ci-go">8 章</span>
    </a>
  </li>
  <li>
    <a href="/international/Readme">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="8"/><path d="M12 4a12.5 12.5 0 0 0 0 16M12 4a12.5 12.5 0 0 1 0 16"/><path d="M4 12h16"/>
      </svg>
      <div class="ci-body">
        <span class="ci-num">04</span>
        <span class="ci-name">国际经济学</span>
        <span class="ci-why">贸易为什么不是零和游戏，汇率与收支怎样把国家绑在一起。</span>
      </div>
      <span class="ci-go">10 章</span>
    </a>
  </li>
  <li>
    <a href="/socialist/Readme">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M6 21V4"/><path d="M6 5c2-1.2 4-1.2 6 0s4 1.2 6 0v7c-2 1.2-4 1.2-6 0s-4-1.2-6 0"/>
      </svg>
      <div class="ci-body">
        <span class="ci-num">05</span>
        <span class="ci-name">社会主义经济理论</span>
        <span class="ci-why">计划与市场的百年辩论，以及中国如何走出自己的答案。</span>
      </div>
      <span class="ci-go">导论 + 10 章</span>
    </a>
  </li>
  <li>
    <a href="/math/Readme">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M17 5H8l5 7-5 7h9"/>
      </svg>
      <div class="ci-body">
        <span class="ci-num">06</span>
        <span class="ci-name">数学基础</span>
        <span class="ci-why">经济学把数学当作脚手架：微积分找最优点，矩阵解均衡。</span>
      </div>
      <span class="ci-go">11 章</span>
    </a>
  </li>
</ul>

<h2 class="home-h2">三条阅读线索</h2>

<ol class="threads">
  <li>
    <h3><a href="/timeline">理论时间线</a></h3>
    <p>1516 年《乌托邦》到 2019 年的实验经济学减贫研究，{{ TIMELINE.length }} 个节点串起理论的出现顺序，每个节点都回答「为什么是这个时候」。</p>
  </li>
  <li>
    <h3><a href="/people">名人篇</a></h3>
    <p>{{ PEOPLE.length }} 位经济学家的师承网络：谁受谁影响、提出了什么、又传给了谁。点击任何一个人，沿着线索走。</p>
  </li>
  <li>
    <h3><a href="/glossary">术语篇</a></h3>
    <p>贴水、帕累托最优、自然率假说……{{ GLOSSARY.length }} 个术语统一释义，标注出处章节，可检索、可单查。</p>
  </li>
</ol>

<p class="colophon">
  内容整理自公开的经济学教材与讲义笔记，正在逐章补入「理论的诞生与验证」背景。
  引用一律回链原文；发现错漏欢迎开 issue 指正。
</p>
