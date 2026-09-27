---
version: 2
slug: "docs-timeline-md"
primary_target: "docs/timeline.md"
related_targets:
  - "docs/.vitepress/theme/components/TheoryTimeline.vue"
  - "docs/.vitepress/theme/data/timeline.ts"
  - "docs/data/Readme.md"
---

# Surface brief: 理论时间线（可拖动编年线）

## Scope & mode
站点内的 Experience/Read 混合面：一条横向编年线 + 详情面板 + 文本年表。Mode: Read（理解理论为何在此时出现），仪器是 Operate 的（拖、缩、筛、点）。继承 docs-index-md 的 ledger-line 世界，不另起视觉语言。

## Audience / job / proof / constraints
- 受众：需要「按时间找理论、按理论找章节」的中文读者；任务 = 看疏密 → 放大 → 点开一条 why
- 证明 = 全部节点真实回链站内章节（`/western/...`、`/monetary/...`、`/data/...`），死链即视为未完成
- 约束：无外部图表库（纯 Vue + CSS）；SSR 安全（window 只在 onMounted 后访问）；明暗双模式；`prefers-reduced-motion`；键盘可达（轴可聚焦、←/→ 换节点、+/− 缩放）；禁止发布部署动作

## Chosen direction: 账本上的横轴
把首页那条竖向脉络线在这里旋转成横轴：一条 2px 主线 + 节点圆 + 上下车道卡片，卡片用发丝引线连回它挂靠的年份。年份一律等宽表格数字，因此「1500」与「2020」在同一列上对齐——这是账本的读法，不是信息图的读法。
- 全览档整条线必须装进一屏（任何屏宽），节点画成 2px 短墨线（`is-rug`，pxPerYear < 9 时启用）——密度靠墨的多少读，不靠一个个圆点
- 年份注记按 `LABEL_MIN_GAP: 36px` 贪心间距只标能放下的那些，选中的节点永远标（`showYear`）；时代带 `narrow`（< 118px）不印「from — to · n 个节点」、`tiny`（< 52px）连名字也不印，分段线保留
- `pxPerYear >= 11`（手机 22）才出现卡片：半世纪一档卡片收窄为 150px（`is-tight`，只印年份与标题）；手机半世纪整档回到疏密视图
- 车道分配放不下时**不印卡片只留节点**（`noRoom`，如 1917—1921、1933—1941 连排年代），放大一档自然散开——宁可空着也不叠字
- 卡片/节点的选中在 `pointerup` 兜底（`downOn` 记录按下目标）：`setPointerCapture` 会把 click 重定向到视口，卡片的 `@click` 在拖拽组件里收不到
- 详情面板用 `aria-live="polite"`，空态有真实文案，不是空白框；底部 `<details>` 文本年表承担无 JS/通读/检索职责

## Memorable moment
拖动时窗口年份读数（`.tl-window`）随行滚动，节点在指针下保持锚定：视觉上像把一卷账纸从窗口下拉过。

## Geometry tokens
默认 `--card-h: 92px`、`--lane-near: 56px`、`--lane-far: 156px`（= near + card-h + 8），`--rail-h: calc((var(--lane-far) + var(--card-h) + 12px) * 2)` 单点推导；≤960：88/50/146；≤768：84/44/44（只留上下两条车道，`lane-0/3` 卡片 `display:none`，JS 侧用 `matchMedia` 同步，分配时不再把它们算作容量）。缩放档位：全览（fit = viewW/535，下限 0.6）/ 半世纪(13px/年) / 十五年(34) / 五年(90)。断点下卡片宽 196 → 170（≤960）→ 150（≤768 或 is-tight）。

## Unresolved
- 触屏双指捏合在部分 Android 浏览器会同时触发页面缩放（`touch-action: pan-y` 只保证单指横向拖动），需在真机确认
- 无 Room 档（如 1917—1921）在「半世纪」下有 20/65 个节点无卡片：是否需要在「半世纪」加第六条车道或允许更窄卡片，待真实读者反馈

## Direction contract
THESIS: 时间线不是列表的另一种排版，而是一台密度仪器：读者用「拖与缩」选择要看时代还是看单点。
OWN-WORLD: 沿用 ledger-line——纸白/墨面双底、账本绿单一强调、发丝线分区、衬线标题/无衬线正文/等宽年份、线条 SVG 图标一套描边。
STORY: 访客 3 秒内明白：这是一条能拖的经济学编年线；primary action = 拖动或点节点。
FIRST VIEWPORT: 领域筛选与缩放档位在上，读数行说明当前窗口年份，横轴贯穿屏宽，节点疏密可见。
FORM: 继承 docs-index-md 的 ledger-line 世界（局部扩展，非新世界），code-led。
FINISH: 已按真实浏览器复核收口（2026-09-27，playwright + chromium：明暗双模式、桌面 1440/移动 390、四档缩放几何零裁切零碰撞、键盘/拖拽/点选全通过）。
