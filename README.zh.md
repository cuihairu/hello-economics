[English](README.md) | [中文](README.zh.md)

<p align="center"><img src="docs/public/logo.svg" width="64" height="64" alt="logo" /></p>
<p align="center"><img src="docs/public/badges/topic.svg" alt="topic" /> <img src="docs/public/badges/docs.svg" alt="docs" /> <img src="docs/public/badges/license.svg" alt="CC BY 4.0" /></p>

# Hello Economics · 经济学知识整理

这是我整理经济学资料的记录，重点放在三个问题上：

1. 一个理论**为什么**会出现——它当时要解决什么问题？
2. 它**如何发展**——谁修正了它，留下了什么新问题？
3. 它**如何被验证**——现实数据与后来的研究站在哪一边？

知识点主文档：[docs/knowledge.md](https://cuihairu.github.io/hello-economics/knowledge) —— 各专题对应的通行教材、名著时间线、以及本站的年份口径。

## 内容索引

站点基于 VitePress，当前包括这些内容：

- **六组专题**：西方经济学、货币银行学、财政学、国际经济学、社会主义经济理论、数学基础（tab 切换）
- **理论时间线**：16 世纪至今，经济理论的出现与发展历史线
- **名人篇**：经济学家的影响网络——提出了什么、影响了谁、受谁影响
- **术语篇**：专业名词词典，支持搜索与目录浏览
- **名著篇**：经济学名著书架，按出版年份与流派浏览

## 仓库结构

| 路径 | 内容 |
| :--- | :--- |
| `docs/` | VitePress 站点：六组专题正文与导读页（`docs/western/` `docs/math/` 等）、时间线/名人/术语/名著页面、主题数据与 Vue 组件 |
| `scripts/` | 门禁脚本（死链、LaTeX、排印、侧栏覆盖、渲染公式检查）、`build-glossary` 词条生成，以及一次性迁移与改写工具 |
| `tests/` | 数据与门禁黑盒（`node --test`）+ 组件挂载（`vitest`） |
| `经济学-术语.md` `经济学-名人.md` | 根级源资料：术语词条与名人骨架（词条回链按 `docs/` 相对路径书写，供生成链消费） |

## 本地开发

```bash
pnpm install
pnpm dev       # 本地预览
pnpm glossary  # 编辑 经济学-术语.md 后重生成词条数据
pnpm test      # node --test（数据/门禁黑盒）+ vitest（theme 组件挂载）
pnpm build     # 构建（含死链检查）
```

门禁脚本：`pnpm check:links`（站内链接）、`pnpm check:latex`（公式语法）、`pnpm check:typography`（排印规则）、`pnpm check:sidebar`（导航覆盖）。CI 在构建部署前重生成词条、跑测试与这四道门禁。

组件测试选型：Vitest + @vue/test-utils + happy-dom——复用站点同一条 vite 工具链编译 .vue SFC（`vitest.config.ts`，含 vitepress client 别名），用例在 `tests/vue/`。

## 专题入口

站点当前专题与章节导航由 [`courses.ts`](docs/.vitepress/theme/data/courses.ts) 生成，并显示在侧边栏。该文件是导航唯一真源；不要在 README 维护第二份章节清单。专题导读和补充页可从侧栏对应入口打开；各专题导读也可直接访问（中文页为主，括注为对应英文页）：[数学基础](docs/zh/math/Readme.md)（[English](docs/math/Readme.md)）、[西方经济学](docs/zh/western/Readme.md)（[理论推进链](docs/zh/western/History.md)；[English](docs/western/Readme.md)）、[货币银行学](docs/zh/monetary/Readme.md)（[历史进程](docs/zh/monetary/History.md)；[English](docs/monetary/Readme.md)）、[财政学](docs/zh/finance/Readme.md)（[历史进程](docs/zh/finance/History.md)；[English](docs/finance/Readme.md)）、[国际经济学](docs/zh/international/Readme.md)（[历史进程](docs/zh/international/History.md)；[English](docs/international/Readme.md)）、[社会主义经济理论](docs/zh/socialist/Readme.md)（[历史进程](docs/zh/socialist/History.md)；[English](docs/socialist/Readme.md)）。

## 公共资料

- [经济学统一术语](经济学-术语.md)
- [经济学名人](经济学-名人.md)
- [西方经济学公式总览](docs/zh/western/西方经济学公式总览.md)（[English](docs/western/西方经济学公式总览.md)）
- [宏观经济模型演进](docs/zh/western/宏观经济模型演进.md)（[English](docs/western/宏观经济模型演进.md)）

## License

本作品采用 [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/) 许可协议发布。
