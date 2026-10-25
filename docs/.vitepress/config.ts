import { defineConfig } from 'vitepress'
import { katex as katexPlugin } from '@mdit/plugin-katex'
import {
  courseListFor,
  sidebarFor,
  LOCALE_PREFIX,
  EN_READY,
  type Locale,
} from './theme/data/courses'

// 部署在 GitHub 项目页 cuihairu.github.io/hello-economics/ 下，
// 因此静态资源与 head 里的绝对路径必须自带 base 前缀（Markdown 链接与
// 主题组件由 VitePress 自动补，head 配置不会）。
const siteBase = '/hello-economics/'

// 中文分词：CJK 逐字 + 西文按词，供 minisearch 使用
// （英文页同样适用：[a-z0-9]+ 按词切分，不损失英文检索）
const cjkTokenize = (text: string): string[] =>
  text
    .toLowerCase()
    .match(/[一-鿿]|[a-z0-9]+/g) ?? []

/** 两个语言环境共用的导航骨架：英文在根目录，中文在 /zh/ 下。
 * ready 指向 EN_READY 的伪 id：未译完的模块在英文侧不出入口（中文侧全量）。 */
const NAV_ITEMS: { path: string; zh: string; en: string; ready?: string }[] = [
  { path: '/', zh: '首页', en: 'Home' },
  { path: '/timeline', zh: '理论时间线', en: 'Theory timeline', ready: 'index' },
  { path: '/people', zh: '名人篇', en: 'Economists', ready: 'index' },
  { path: '/books', zh: '名著篇', en: 'Books', ready: 'index' },
  { path: '/glossary', zh: '术语篇', en: 'Glossary', ready: 'index' },
  { path: '/knowledge', zh: '知识点主文档', en: 'Knowledge', ready: 'knowledge' },
  { path: '/about', zh: '关于', en: 'About' },
]
const rootNav = NAV_ITEMS.filter((n) => !n.ready || EN_READY.has(n.ready))

const UI_LABELS = {
  root: {
    outlineLabel: 'On this page',
    darkModeSwitchLabel: 'Light / dark',
    sidebarMenuLabel: 'Sections',
    returnToTopLabel: 'Back to top',
    docFooter: { prev: 'Previous', next: 'Next' },
    footer: {
      message: 'Working notes from sorting out economics — corrections welcome.',
      copyright: 'Hello Economics',
    },
  },
  zh: {
    outlineLabel: '本页脉络',
    darkModeSwitchLabel: '明暗',
    sidebarMenuLabel: '专题',
    returnToTopLabel: '回到顶部',
    docFooter: { prev: '上一篇', next: '下一篇' },
    footer: {
      message: '整理过程中的记录，欢迎指正',
      copyright: 'Hello Economics',
    },
  },
} as const

export default defineConfig({
  base: siteBase,
  lang: 'en-US',
  title: 'Hello Economics',
  description: 'Working notes on economics: why a theory arose, how it evolved, how it was tested',
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
  // VitePress 官方多语言：路径前缀判定 locale，语言切换器由主题内置生成
  // （useLangs 去当前前缀、补目标前缀），两语言目录互为路径镜像。
  locales: {
    root: { label: 'English', lang: 'en-US' },
    zh: { label: '简体中文', lang: 'zh-CN', link: '/zh/' },
  },
  // 迁移期豁免：根 locale 的站内链指向 EN_READY 尚未放行的模块（英译镜像
  // 落地即逐个消除），/zh/ 与相对链接仍全量校验。
  ignoreDeadLinks: [(url) => url.startsWith('/') && !url.startsWith('/zh/'), /%E5%AE%A1%E8%AE%A1/],
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Hello Economics',
    outline: [2, 3],
    socialLinks: [],
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
    locales: {
      root: {
        nav: rootNav.map((n) => ({ text: n.en, link: LOCALE_PREFIX.root + n.path })),
        // 侧边栏全部由 theme/data/courses.ts 生成：章节、tab、首页共用同一份目录
        sidebar: Object.fromEntries(
          courseListFor('root').map((course) => [`${course.base}/`, sidebarFor(course.id, 'root')]),
        ),
        ...UI_LABELS.root,
      },
      zh: {
        nav: NAV_ITEMS.map((n) => ({ text: n.zh, link: LOCALE_PREFIX.zh + n.path })),
        sidebar: Object.fromEntries(
          courseListFor('zh').map((course) => [`${course.base}/`, sidebarFor(course.id, 'zh')]),
        ),
        ...UI_LABELS.zh,
      },
    },
  },
})
