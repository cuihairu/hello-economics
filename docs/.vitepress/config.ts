import { defineConfig } from 'vitepress'
import mathjax3 from 'markdown-it-mathjax3'

// 中文分词：CJK 逐字 + 西文按词，供 minisearch 使用
const cjkTokenize = (text: string): string[] =>
  text
    .toLowerCase()
    .match(/[一-鿿]|[a-z0-9]+/g) ?? []

type Link = { text: string; link: string }

const chapter = (n: number | string, title: string, base: string): Link => ({
  text: `${n} · ${title}`,
  link: `/${base}/${title}`,
})

export default defineConfig({
  lang: 'zh-CN',
  title: 'Hello Economics',
  description: '经济学知识整理：理论为什么出现，如何发展，如何被验证',
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]],
  cleanUrls: true,
  lastUpdated: false,
  markdown: {
    config(md) {
      md.use(mathjax3)
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
      { text: '术语篇', link: '/glossary' },
    ],
    sidebar: {
      '/western/': [
        { text: '西方经济学', items: [
          { text: '课程导论', link: '/western/Readme' },
          { text: '理论推进链', link: '/western/History' },
          { text: '公式总览', link: '/western/西方经济学公式总览' },
          { text: 'IS-AS 模型通俗讲解', link: '/western/IS-AS模型通俗讲解' },
          { text: '宏观经济模型演进', link: '/western/宏观经济模型演进' },
        ]},
        { text: '章节', items: [
          chapter(1, '需求与供给', 'western'),
          chapter(2, '效用论', 'western'),
          chapter(3, '生产和成本论', 'western'),
          chapter(4, '市场理论', 'western'),
          chapter(5, '生产要素市场', 'western'),
          chapter(6, '一般均衡论和福利经济学', 'western'),
          chapter(7, '市场失灵和微观经济政策', 'western'),
          chapter(8, '宏观经济活动与宏观经济学', 'western'),
          chapter(9, '简单国民收入决定理论', 'western'),
          chapter(10, '产品市场和货币市场的一般均衡', 'western'),
          chapter(11, '宏观经济政策', 'western'),
          chapter(12, '总需求和总供给分析', 'western'),
          chapter(13, '经济增长', 'western'),
          chapter(14, '通货膨胀理论', 'western'),
          chapter(15, '宏观经济学的意见分歧', 'western'),
        ]},
      ],
      '/monetary/': [
        { text: '货币银行学', items: [
          { text: '课程导论', link: '/monetary/Readme' },
          { text: '历史进程', link: '/monetary/History' },
        ]},
        { text: '章节', items: [
          chapter(1, '货币供求理论', 'monetary'),
          chapter(2, '利率理论', 'monetary'),
          chapter(3, '通货膨胀与通货紧缩', 'monetary'),
          chapter(4, '金融中介体系', 'monetary'),
          chapter(5, '金融市场', 'monetary'),
          chapter(6, '金融监管体系', 'monetary'),
          chapter(7, '货币政策', 'monetary'),
          chapter(8, '汇率理论', 'monetary'),
          chapter(9, '国际货币体系', 'monetary'),
          chapter(10, '内外均衡理论', 'monetary'),
        ]},
      ],
      '/finance/': [
        { text: '财政学', items: [
          { text: '课程导论', link: '/finance/Readme' },
          { text: '历史进程', link: '/finance/History' },
        ]},
        { text: '章节', items: [
          chapter(1, '财政职能', 'finance'),
          chapter(2, '财政支出规模与结构', 'finance'),
          chapter(3, '财政投资支出和社会保障支出', 'finance'),
          chapter(4, '税收原理', 'finance'),
          chapter(5, '税收制度', 'finance'),
          chapter(6, '国债理论与管理', 'finance'),
          chapter(7, '国家预算与预算管理体制', 'finance'),
          chapter(8, '财政平衡与财政赤字', 'finance'),
        ]},
      ],
      '/international/': [
        { text: '国际经济学', items: [
          { text: '课程导论', link: '/international/Readme' },
          { text: '历史进程', link: '/international/History' },
        ]},
        { text: '章节', items: [
          chapter(1, '绪论', 'international'),
          chapter(2, '国际贸易纯理论', 'international'),
          chapter(3, '国际贸易的现代与当代理论', 'international'),
          chapter(4, '国际贸易政策分析', 'international'),
          chapter(5, '国际收支分析', 'international'),
          chapter(6, '汇率决定的一般理论', 'international'),
          chapter(7, '要素的国际流动', 'international'),
          chapter(8, '宏观经济的内外均衡', 'international'),
          chapter(9, '经济一体化与国际经济秩序分析', 'international'),
          chapter(10, '经济全球化趋势', 'international'),
        ]},
      ],
      '/socialist/': [
        { text: '社会主义经济理论', items: [
          { text: '课程导论', link: '/socialist/Readme' },
          { text: '历史进程', link: '/socialist/History' },
          { text: '重要会议与体制演进', link: '/socialist/中国共产党重要会议与社会主义经济体制演进' },
        ]},
        { text: '章节', items: [
          { text: '导论', link: '/socialist/导论' },
          chapter(1, '社会主义经济制度的本质特征', 'socialist'),
          chapter(2, '社会主义市场经济理论', 'socialist'),
          chapter(3, '向社会主义市场经济体制的渐进过渡', 'socialist'),
          chapter(4, '社会主义企业制度与国有企业改革', 'socialist'),
          chapter(5, '国有企业治理结构的创新', 'socialist'),
          chapter(6, '社会主义市场经济条件下的分配制度', 'socialist'),
          chapter(7, '社会主义经济增长与经济发展', 'socialist'),
          chapter(8, '社会主义市场经济条件下的经济结构调整', 'socialist'),
          chapter(9, '社会主义对外经济关系', 'socialist'),
          chapter(10, '社会主义市场经济条件下的政府调节', 'socialist'),
        ]},
      ],
      '/math/': [
        { text: '数学基础', items: [
          { text: '课程导论', link: '/math/Readme' },
          { text: '西方经济学-数学基础', link: '/math/西方经济学-数学基础' },
        ]},
        { text: '章节', items: [
          { text: '1 · 集合与逻辑', link: '/math/集合与逻辑' },
          { text: '2 · 数列与极限', link: '/math/数列与极限' },
          { text: '3 · 常见求和公式', link: '/math/常见求和公式' },
          { text: '4 · 微分学基础', link: '/math/微分学基础' },
          { text: '5 · 积分学基础', link: '/math/积分学基础' },
          { text: '6 · 微分方程', link: '/math/微分方程' },
          { text: '7 · 矩阵与行列式', link: '/math/矩阵与行列式' },
          { text: '8 · 特征值与特征向量', link: '/math/特征值与特征向量' },
          { text: '9 · 线性空间与线性变换', link: '/math/线性空间与线性变换' },
          { text: '10 · 概率论基础', link: '/math/概率论基础' },
          { text: '11 · 统计学基础', link: '/math/统计学基础' },
        ]},
      ],
      '/reference/': [
        { text: '参考笔记', items: [
          { text: '微观经济学笔记', link: '/reference/微观经济学-笔记' },
          { text: '西方经济学导论笔记', link: '/reference/notes/西方经济学导论-笔记' },
          { text: '金融学笔记', link: '/reference/notes/金融学-笔记' },
        ]},
      ],
    },
  },
})
