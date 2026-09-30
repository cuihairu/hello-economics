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

## 仓库结构

| 目录 | 内容 |
| :--- | :--- |
| `docs/` | VitePress 站点（章节内容、时间线、名人、术语数据与组件） |
| `western/` `monetary/` `finance/` `international/` `socialist/` | 五门课源内容（迁入 `docs/` 前的原始整理） |
| `math/` | 数学基础：经济学推理所需的最小数学集 |

## 本地开发

```bash
pnpm install
pnpm dev     # 本地预览
pnpm test    # node --test（数据/门禁黑盒）+ vitest（theme 组件挂载）
pnpm build   # 构建（含死链检查）
```

组件测试选型：Vitest + @vue/test-utils + happy-dom——复用站点同一条 vite 工具链编译 .vue SFC（`vitest.config.ts`，含 vitepress client 别名），用例在 `tests/vue/`。

## 各课入口

- 西方经济学：[课程导论](western/Readme.md) · [理论推进链](western/History.md)
- 货币银行学：[课程导论](monetary/Readme.md) · [历史进程](monetary/History.md)
- 财政学：[课程导论](finance/Readme.md) · [历史进程](finance/History.md)
- 国际经济学：[课程导论](international/Readme.md) · [历史进程](international/History.md)
- 社会主义经济理论：[课程导论](socialist/Readme.md) · [历史进程](socialist/History.md)
- 数学基础：[课程导论](math/Readme.md)

## 公共资料

- [经济学统一术语](经济学-术语.md)
- [经济学名人](经济学-名人.md)
- [西方经济学公式总览](western/西方经济学公式总览.md)
- [IS-AS 模型通俗讲解](western/IS-AS模型通俗讲解.md)
- [宏观经济模型演进](western/宏观经济模型演进.md)
