import { defineConfig } from 'vitepress'
import { katex as katexPlugin } from '@mdit/plugin-katex'
import { COURSES, REFERENCE_COURSE, sidebarFor } from './theme/data/courses'

// 部署在 GitHub 项目页 cuihairu.github.io/hello-economics/ 下，
// 因此静态资源与 head 里的绝对路径必须自带 base 前缀（Markdown 链接与
// 主题组件由 VitePress 自动补，head 配置不会）。
const siteBase = '/hello-economics/'

// 中文分词：CJK 逐字 + 西文按词，供 minisearch 使用
const cjkTokenize = (text: string): string[] =>
  text
    .toLowerCase()
    .match(/[一-鿿]|[a-z0-9]+/g) ?? []

export default defineConfig({
  base: siteBase,
  lang: 'zh-CN',
  title: 'Hello Economics',
  description: '经济学知识整理：理论为什么出现，如何发展，如何被验证',
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: `${siteBase}logo.svg` }]],
  cleanUrls: true,
  lastUpdated: false,
  markdown: {
    config(md) {
      // KaTeX 系渲染：SSR 输出纯 HTML（span.katex），客户端不重绘——
      // 替换 markdown-it-mathjax3（mjx 自定义元素曾致含公式页 hydration
      // mismatch + 每个 display 公式双绘，见 todo 第五批/第二十批）。
      // throwOnError: false 让非法命令渲染为红色原文而非构建失败，
      // 构建期由 scripts/check-latex.cjs、构建后由 check-rendered-math 兜底。
      md.use(katexPlugin, { throwOnError: false })
    },
  },
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Hello Economics',
    outline: [2, 3],
    outlineLabel: '本页脉络',
    darkModeSwitchLabel: '明暗',
    sidebarMenuLabel: '课程',
    returnToTopLabel: '回到顶部',
    docFooter: { prev: '上一篇', next: '下一篇' },
    socialLinks: [],
    footer: {
      message: '以笔记整理知识，欢迎指正',
      copyright: 'Hello Economics',
    },
    search: {
      provider: 'local',
      options: {
        detailedView: true,
        miniSearch: {
          options: {
            tokenize: cjkTokenize,
          },
          searchOptions: {
            tokenize: cjkTokenize,
          },
        },
      },
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '理论时间线', link: '/timeline' },
      { text: '名人篇', link: '/people' },
      { text: '名著篇', link: '/books' },
      { text: '术语篇', link: '/glossary' },
      { text: '知识点主文档', link: '/knowledge' },
      { text: '关于', link: '/about' },
    ],
    // 侧边栏全部由 theme/data/courses.ts 生成：章节、tab、首页共用同一份目录
    sidebar: Object.fromEntries(
      [...COURSES, REFERENCE_COURSE].map((course) => [`${course.base}/`, sidebarFor(course.id)]),
    ),
  },
})
