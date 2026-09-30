# Hello Economics · 经济学知识整理

写给经济学爱好者的知识整理站点。这里不堆背诵要点，而是回答三个问题：

1. 一个理论**为什么**会出现——它当时要解决什么问题？
2. 它**如何发展**——谁修正了它，留下了什么新问题？
3. 它**如何被验证**——现实数据与后来的研究站在哪一边？

## 站点内容

基于 VitePress 的交互式站点，入口包括：

- **六门课**：西方经济学、货币银行学、财政学、国际经济学、社会主义经济理论、数学基础（tab 切换）
- **理论时间线**：16 世纪至今，经济理论的出现与发展历史线
- **名人篇**：经济学家的影响网络——提出了什么、影响了谁、受谁影响
- **术语篇**：专业名词词典，支持搜索与目录浏览
- **名著篇**：经济学名著书架，按出版年份与流派浏览

## 仓库结构

| 路径 | 内容 |
| :--- | :--- |
| `docs/` | VitePress 站点：六门课正文与导论页（`docs/western/` `docs/math/` 等）、时间线/名人/术语/名著页面、主题数据与 Vue 组件 |
| `scripts/` | 门禁脚本（死链、LaTeX、排印、渲染公式检查）与 `build-glossary` 词条生成 |
| `tests/` | 数据与门禁黑盒（`node --test`）+ 组件挂载（`vitest`） |
| `经济学-术语.md` `经济学-名人.md` | 根级源资料：术语词条与名人骨架（词条回链按 `docs/` 相对路径书写，供生成链消费） |

## 本地开发

```bash
pnpm install
pnpm dev     # 本地预览
pnpm test    # node --test（数据/门禁黑盒）+ vitest（theme 组件挂载）
pnpm build   # 构建（含死链检查）
```

组件测试选型：Vitest + @vue/test-utils + happy-dom——复用站点同一条 vite 工具链编译 .vue SFC（`vitest.config.ts`，含 vitepress client 别名），用例在 `tests/vue/`。

## 各课入口

- 西方经济学：[课程导论](docs/western/Readme.md) · [理论推进链](docs/western/History.md)
- 货币银行学：[课程导论](docs/monetary/Readme.md) · [历史进程](docs/monetary/History.md)
- 财政学：[课程导论](docs/finance/Readme.md) · [历史进程](docs/finance/History.md)
- 国际经济学：[课程导论](docs/international/Readme.md) · [历史进程](docs/international/History.md)
- 社会主义经济理论：[课程导论](docs/socialist/Readme.md) · [历史进程](docs/socialist/History.md)
- 数学基础：[课程导论](docs/math/Readme.md)

## 公共资料

- [经济学统一术语](经济学-术语.md)
- [经济学名人](经济学-名人.md)
- [西方经济学公式总览](docs/western/西方经济学公式总览.md)
- [宏观经济模型演进](docs/western/宏观经济模型演进.md)
