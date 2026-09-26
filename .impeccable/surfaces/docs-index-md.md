---
version: 1
slug: "docs-index-md"
primary_target: "docs/index.md"
related_targets: []
---

# Surface brief: docs 首页（全站主题载体）

## Scope & mode
VitePress 站点全局主题 + 首页。Mode: Read（知识理解），交互组件服务理解。

## Audience / job / proof / constraints
- 受众：经济学爱好者，中文长文阅读；任务 = 顺着「为什么→发展→验证」读理论、查术语、看脉络
- 证明 = 内容本身：时间线数据、人物影响网络、术语出处链接全部真实可跳转
- 约束（用户 pin）：线条 SVG 图标统一描边；主题色贴合经济学；去 AI 味；明暗双模式；禁止发布

## Chosen direction: 账本红线（ledger-line）
世界 = 经济学的两件老物件：**账本**（复式记账的克制与秩序）与**脉络线**（编年史与家谱的那条线）。
- 色彩策略：Committed——账本绿（bottle green）承载站点身份；纸面/墨面中性底；无第二强调色
- 排印：标题衬线（Noto Serif SC），正文无衬线系统栈；年份与数字用等宽表格数字
- 纪律：已证实的引用用实线实字，推断/概述用细线弱化（provenance 排印）；一条贯穿页面的竖向脉络线作为导航/时间线/章节的统一骨架（donated by challenger 6）；主题色敢于整面浸染而非 timid 点缀（donated by challenger 3）

## Memorable moment
首页首屏：一条竖向脉络线从报头垂下，串起六门课与时间线入口；滚动时线上节点依次点亮。

## Unresolved
- 具体绿色色值在构建中对纸面/墨面校准后定

## Direction contract
THESIS: 经济学是一部有脉络的账本：站点的每一页都是这条线的一段。拒绝品类默认的「米色纸+衬线+红点缀」报纸腔。
OWN-WORLD: 纸白/墨绿黑双底；账本绿 #0F6B4F 系单一强调；细账线（1px 发丝线）分区；脉络线 = 2px 竖线 + 节点圆；衬线标题/无衬线正文/等宽年份。
STORY: 访客 3 秒内明白：这是一个按「为什么→发展→验证」组织的经济学知识站；primary action = 进入一门课或时间线。
FIRST VIEWPORT: 报头（站名 + 一句话定位）+ 六门课 tab 入口 + 脉络线垂下串起最近的理论节点（预览时间线）；主操作位于脉络线节点旁。
FORM: seed d5150deb assigned #5（报纸版面），经 challenger 6/3 融合升格为 ledger-line 世界；code-led。
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
