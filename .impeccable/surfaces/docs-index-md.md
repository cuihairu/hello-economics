---
version: 1
slug: "docs-index-md"
primary_target: "docs/index.md"
related_targets:
  - "docs/.vitepress/theme/components/CourseShelf.vue"
  - "docs/.vitepress/theme/components/CourseTabs.vue"
  - "docs/.vitepress/theme/data/courses.ts"
  - "docs/.vitepress/theme/custom.css"
---

# Surface brief: docs 首页（全站主题载体）

## Scope & mode
VitePress 站点全局主题 + 首页。Mode: Read（知识理解），交互组件服务理解。

## Audience / job / proof / constraints
- 受众：经济学爱好者，中文长文阅读；任务 = 找到一门课并进入它的问题（不是浏览一个 link dump）
- 证明 = 内容本身：时间线数据、人物影响网络、术语出处链接全部真实可跳转
- 约束（用户 pin）：线条 SVG 图标统一描边；主题色贴合经济学；去 AI 味；明暗双模式；禁止 git tag 与 release

## Chosen direction: 账本红线（ledger-line）
世界 = 经济学的两件老物件：**账本**（复式记账的克制与秩序）与**脉络线**（编年史与家谱的那条线）。
- 色彩策略：Committed——账本绿（bottle green）承载站点身份；纸面/墨面中性底；无第二强调色
- 排印：标题衬线（Noto Serif SC），正文无衬线系统栈；年份与数字用等宽表格数字
- 纪律：已证实的引用用实线实字，推断/概述用细线弱化（provenance 排印）；一条贯穿页面的竖向脉络线作为导航/时间线/章节的统一骨架（donated by challenger 6）；主题色敢于整面浸染而非 timid 点缀（donated by challenger 3）

## Memorable moment
首屏报头的等宽计数行（N 门课程 / N 章正文 / N 个理论节点 / N 位经济学家 / N 个术语，全部由数据算出）；
其下书架的目录行用「等宽序号 + 衬线标题」排，行与行之间是点线（账本的分栏线），悬停时行尾探出 `→`。
「三条阅读线索」保留那条竖向脉络线：2px 竖线 + 节点圆串起时间线/名人/术语三个入口。

## Unresolved
- 绿色色值已定（#0b6b4e / 暗色 #57b98c）；待真机复核：tab 条在 320px 宽下的横滚与首尾截断、目录行点线在长标题换行时的对齐

## Direction contract
THESIS: 经济学是一部有脉络的账本：站点的每一页都是这条线的一段。拒绝品类默认的「米色纸+衬线+红点缀」报纸腔。
OWN-WORLD: 纸白/墨绿黑双底；账本绿 #0F6B4F 系单一强调；细账线（1px 发丝线）分区；脉络线 = 2px 竖线 + 节点圆；衬线标题/无衬线正文/等宽年份。
STORY: 访客 3 秒内明白：这是一个按「为什么→发展→验证」组织的经济学知识站；primary action = 进入一门课或时间线。
FIRST VIEWPORT: 报头（kicker + 一句话立场 + 等宽计数行）→ 课程书架 tab 条（七门课，西方经济学按内容拆成微观/宏观两个 tab）→ 当前 tab 的章节目录与课程导论入口。主操作 = 换 tab 或直接点章节。
FORM: seed d5150deb assigned #5（报纸版面），经 challenger 6/3 融合升格为 ledger-line 世界；code-led。
目录数据单一来源 `theme/data/courses.ts`：侧边栏、文档页顶部课程条、首页书架三处同源，计数不允许手写。
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
