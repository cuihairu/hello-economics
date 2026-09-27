// 课程目录的唯一数据源：
// - docs/.vitepress/config.ts 用它生成侧边栏
// - CourseTabs.vue（文档页顶部课程切换条）与 CourseShelf.vue（首页分栏）都读它
// 新增/改章节只改这里，避免三处各自漂移。
// link 一律写站点根路径（不含 base），由主题组件的 withBase 补前缀。

export interface CatalogItem {
  text: string
  link: string
}

export interface ChapterGroup {
  /** 分组名，用于首页 tab 面板的小标题；'章节' 表示侧边栏里的默认分组 */
  text: string
  items: CatalogItem[]
}

export interface IconSpec {
  /** 24 viewBox、1.5 描边、圆角端点的手绘线条几何 */
  paths: string[]
  circle?: boolean
}

export interface Course {
  id: string
  label: string
  /** 用于路由高亮的站点根路径前缀 */
  base: string
  readme: string
  /** 一句话：这门课要回答什么问题 */
  blurb: string
  icon: IconSpec
  /** 导论、历史进程、公式总览等课程级入口 */
  aux: CatalogItem[]
  chapters: ChapterGroup[]
}

const ch = (n: number | string, title: string, base: string): CatalogItem => ({
  text: `${n} · ${title}`,
  link: `/${base}/${title}`,
})

const plain = (title: string, base: string): CatalogItem => ({
  text: title,
  link: `/${base}/${title}`,
})

const aux = (base: string, title: string, text: string): CatalogItem => ({
  text,
  link: `/${base}/${title}`,
})

export const COURSES: Course[] = [
  {
    id: 'western',
    label: '西方经济学',
    base: '/western',
    readme: '/western/Readme',
    blurb: '微观解释价格如何形成，宏观解释总量为什么会崩：两套工具，同一个「稀缺与协调」问题。',
    icon: { paths: ['M4 20h16M4 20V4', 'M6 6c4 5 8 8 12 11', 'M6 18c4-5 8-8 12-11'] },
    aux: [
      aux('western', 'Readme', '课程导论'),
      aux('western', 'History', '理论推进链'),
      aux('western', '西方经济学公式总览', '公式总览'),
      aux('western', 'IS-AS模型通俗讲解', 'IS-AS 模型通俗讲解'),
      aux('western', '宏观经济模型演进', '宏观经济模型演进'),
    ],
    chapters: [
      {
        text: '微观 · 价格与资源配置',
        items: [
          ch(1, '需求与供给', 'western'),
          ch(2, '效用论', 'western'),
          ch(3, '生产和成本论', 'western'),
          ch(4, '市场理论', 'western'),
          ch(5, '生产要素市场', 'western'),
          ch(6, '一般均衡论和福利经济学', 'western'),
          ch(7, '市场失灵和微观经济政策', 'western'),
        ],
      },
      {
        text: '宏观 · 总量、政策与增长',
        items: [
          ch(8, '宏观经济活动与宏观经济学', 'western'),
          ch(9, '简单国民收入决定理论', 'western'),
          ch(10, '产品市场和货币市场的一般均衡', 'western'),
          ch(11, '宏观经济政策', 'western'),
          ch(12, '总需求和总供给分析', 'western'),
          ch(13, '经济增长', 'western'),
          ch(14, '通货膨胀理论', 'western'),
          ch(15, '宏观经济学的意见分歧', 'western'),
        ],
      },
    ],
  },
  {
    id: 'monetary',
    label: '货币银行学',
    base: '/monetary',
    readme: '/monetary/Readme',
    blurb: '钱从哪里来、利率如何决定、中央银行的手怎样伸进实体经济。',
    icon: {
      paths: ['M3 9l9-5 9 5', 'M6 9v8M12 9v8M18 9v8', 'M4 17h16M3 20h18'],
    },
    aux: [aux('monetary', 'Readme', '课程导论'), aux('monetary', 'History', '历史进程')],
    chapters: [
      {
        text: '章节',
        items: [
          ch(1, '货币供求理论', 'monetary'),
          ch(2, '利率理论', 'monetary'),
          ch(3, '通货膨胀与通货紧缩', 'monetary'),
          ch(4, '金融中介体系', 'monetary'),
          ch(5, '金融市场', 'monetary'),
          ch(6, '金融监管体系', 'monetary'),
          ch(7, '货币政策', 'monetary'),
          ch(8, '汇率理论', 'monetary'),
          ch(9, '国际货币体系', 'monetary'),
          ch(10, '内外均衡理论', 'monetary'),
        ],
      },
    ],
  },
  {
    id: 'finance',
    label: '财政学',
    base: '/finance',
    readme: '/finance/Readme',
    blurb: '政府为什么收税、怎么花钱，以及什么时候财政本身成为问题。',
    icon: {
      paths: [
        'M12 4v16M8 20h8',
        'M4 7h16',
        'M4 7l-2 5M4 7l2 5M2 12a2 2 0 0 0 4 0',
        'M20 7l-2 5M20 7l2 5M18 12a2 2 0 0 0 4 0',
      ],
    },
    aux: [aux('finance', 'Readme', '课程导论'), aux('finance', 'History', '历史进程')],
    chapters: [
      {
        text: '章节',
        items: [
          ch(1, '财政职能', 'finance'),
          ch(2, '财政支出规模与结构', 'finance'),
          ch(3, '财政投资支出和社会保障支出', 'finance'),
          ch(4, '税收原理', 'finance'),
          ch(5, '税收制度', 'finance'),
          ch(6, '国债理论与管理', 'finance'),
          ch(7, '国家预算与预算管理体制', 'finance'),
          ch(8, '财政平衡与财政赤字', 'finance'),
        ],
      },
    ],
  },
  {
    id: 'international',
    label: '国际经济学',
    base: '/international',
    readme: '/international/Readme',
    blurb: '贸易为什么不是零和游戏，汇率与收支怎样把各国绑在同一张表上。',
    icon: {
      paths: ['M12 4a12.5 12.5 0 0 0 0 16M12 4a12.5 12.5 0 0 1 0 16', 'M4 12h16'],
      circle: true,
    },
    aux: [
      aux('international', 'Readme', '课程导论'),
      aux('international', 'History', '历史进程'),
    ],
    chapters: [
      {
        text: '章节',
        items: [
          ch(1, '绪论', 'international'),
          ch(2, '国际贸易纯理论', 'international'),
          ch(3, '国际贸易的现代与当代理论', 'international'),
          ch(4, '国际贸易政策分析', 'international'),
          ch(5, '国际收支分析', 'international'),
          ch(6, '汇率决定的一般理论', 'international'),
          ch(7, '要素的国际流动', 'international'),
          ch(8, '宏观经济的内外均衡', 'international'),
          ch(9, '经济一体化与国际经济秩序分析', 'international'),
          ch(10, '经济全球化趋势', 'international'),
        ],
      },
    ],
  },
  {
    id: 'socialist',
    label: '社会主义经济理论',
    base: '/socialist',
    readme: '/socialist/Readme',
    blurb: '计划与市场的百年辩论，以及中国怎样走出自己的答案。',
    icon: {
      paths: ['M6 21V4', 'M6 5c2-1.2 4-1.2 6 0s4 1.2 6 0v7c-2 1.2-4 1.2-6 0s-4-1.2-6 0'],
    },
    aux: [
      aux('socialist', 'Readme', '课程导论'),
      aux('socialist', 'History', '历史进程'),
      aux('socialist', '中国共产党重要会议与社会主义经济体制演进', '重要会议与体制演进'),
    ],
    chapters: [
      {
        text: '章节',
        items: [
          plain('导论', 'socialist'),
          ch(1, '社会主义经济制度的本质特征', 'socialist'),
          ch(2, '社会主义市场经济理论', 'socialist'),
          ch(3, '向社会主义市场经济体制的渐进过渡', 'socialist'),
          ch(4, '社会主义企业制度与国有企业改革', 'socialist'),
          ch(5, '国有企业治理结构的创新', 'socialist'),
          ch(6, '社会主义市场经济条件下的分配制度', 'socialist'),
          ch(7, '社会主义经济增长与经济发展', 'socialist'),
          ch(8, '社会主义市场经济条件下的经济结构调整', 'socialist'),
          ch(9, '社会主义对外经济关系', 'socialist'),
          ch(10, '社会主义市场经济条件下的政府调节', 'socialist'),
        ],
      },
    ],
  },
  {
    id: 'math',
    label: '数学基础',
    base: '/math',
    readme: '/math/Readme',
    blurb: '经济学把数学当脚手架：微积分找最优点，矩阵解均衡，统计做检验。',
    icon: { paths: ['M17 5H8l5 7-5 7h9'] },
    aux: [
      aux('math', 'Readme', '课程导论'),
      aux('math', '西方经济学-数学基础', '西方经济学-数学基础'),
    ],
    chapters: [
      {
        text: '章节',
        items: [
          ch(1, '集合与逻辑', 'math'),
          ch(2, '数列与极限', 'math'),
          ch(3, '常见求和公式', 'math'),
          ch(4, '微分学基础', 'math'),
          ch(5, '积分学基础', 'math'),
          ch(6, '微分方程', 'math'),
          ch(7, '矩阵与行列式', 'math'),
          ch(8, '特征值与特征向量', 'math'),
          ch(9, '线性空间与线性变换', 'math'),
          ch(10, '概率论基础', 'math'),
          ch(11, '统计学基础', 'math'),
          ch(12, '最优化方法与经济学应用', 'math'),
        ],
      },
    ],
  },
  {
    id: 'data',
    label: '基础数据',
    base: '/data',
    readme: '/data/Readme',
    blurb: '理论要落地就得先有数：这一课整理指标的口径、来源与常见的读错方式。',
    icon: {
      paths: ['M4 20h16M4 20V4', 'M8 20v-5M12 20v-9M16 20v-6M20 20v-12', 'M6 9l4-3 4 4 5-5'],
    },
    aux: [aux('data', 'Readme', '课程导论')],
    chapters: [
      {
        text: '章节',
        items: [
          ch(1, '国民经济核算数据', 'data'),
          ch(2, '货币与金融数据', 'data'),
          ch(3, '财政与国际收支数据', 'data'),
          ch(4, '数据来源与口径', 'data'),
        ],
      },
    ],
  },
]

/** 参考资料：不进课程切换条，只在首页书架与侧边栏出现 */
export const REFERENCE_COURSE: Course = {
  id: 'reference',
  label: '参考资料',
  base: '/reference',
  readme: '/reference/参考书目',
  blurb: '书目与旧笔记原文：新写的正文都回链到这里，方便核对出处。',
  icon: { paths: ['M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3z', 'M5 4v13'] },
  aux: [],
  chapters: [
    {
      text: '参考资料',
      items: [
        { text: '参考书目', link: '/reference/参考书目' },
        { text: '微观经济学笔记', link: '/reference/微观经济学-笔记' },
        { text: '西方经济学导论笔记', link: '/reference/notes/西方经济学导论-笔记' },
        { text: '金融学笔记', link: '/reference/notes/金融学-笔记' },
      ],
    },
  ],
}

export const ALL_COURSES: Course[] = [...COURSES, REFERENCE_COURSE]

export const courseById = (id: string): Course | undefined =>
  ALL_COURSES.find((c) => c.id === id)

/** 站点的三条阅读线索（术语篇 / 名人篇 / 时间线），不是课程但同级入口 */
export const SITE_INDEX: CatalogItem[] = [
  { text: '理论时间线', link: '/timeline' },
  { text: '名人篇（师承网络）', link: '/people' },
  { text: '术语篇（可检索）', link: '/glossary' },
]

/* ---------- 侧边栏生成 ---------- */

export const sidebarFor = (id: string): { text: string; items: CatalogItem[] }[] => {
  const course = courseById(id)
  if (!course) return []
  const groups: { text: string; items: CatalogItem[] }[] = []
  if (course.aux.length) groups.push({ text: course.label, items: course.aux })
  for (const g of course.chapters) {
    groups.push({ text: g.text, items: g.items })
  }
  return groups
}

/* ---------- 首页书架（tab 面板）生成 ---------- */

export interface ShelfTab {
  id: string
  /** tab 上的短标签 */
  label: string
  /** tab 上的条数徽标（等宽小字） */
  count: string
  /** tab 面板顶部的等宽小字：给出这一 tab 在全站中的位置 */
  kicker: string
  blurb: string
  courseId: string
  icon: IconSpec
  groups: ChapterGroup[]
  /** 面板底部的主入口 */
  entry: CatalogItem
}

// 西方经济学的两个 tab 用读者熟悉的课名，而不是内部分组标题
const WESTERN_TAB_LABELS: Record<string, string> = {
  微观: '微观经济学',
  宏观: '宏观经济学',
}

const SITE_INDEX_ICON: IconSpec = {
  paths: ['M4 6h16M4 12h16M4 18h10', 'M18 16l2 2-2 2'],
}

/**
 * 西方经济学按微观/宏观拆成两个 tab（内容本身就是两套工具）；
 * 其余课程一个 tab，面板内按 aux + 章节分组排布。
 */
export const SHELF: ShelfTab[] = (() => {
  const tabs: ShelfTab[] = []
  const n = (groups: ChapterGroup[]) => groups.reduce((t, g) => t + g.items.length, 0)
  for (const c of COURSES) {
    if (c.id === 'western') {
      for (const g of c.chapters) {
        const label = WESTERN_TAB_LABELS[g.text.split(' · ')[0]] ?? g.text
        tabs.push({
          id: `${c.id}-${g.text}`,
          label,
          kicker: `${c.label} · ${label}`,
          count: `${g.items.length} 章`,
          blurb:
            g.text.startsWith('微观')
              ? '从一条需求曲线出发，走到市场为什么会失灵：价格是唯一信号时的世界，和它不成立之处。'
              : '总支出为什么会不足，失业为什么会持续：从乘数到 IS-LM，再到政策有效性之争。',
          courseId: c.id,
          icon: c.icon,
          groups: [g],
          entry: { text: '课程导论', link: c.readme },
        })
      }
      continue
    }
    const groups = c.aux.length ? [{ text: '课程入口', items: c.aux }, ...c.chapters] : c.chapters
    tabs.push({
      id: c.id,
      label: c.label,
      kicker: c.label,
      count: `${n(groups)} 条`,
      blurb: c.blurb,
      courseId: c.id,
      icon: c.icon,
      groups,
      entry: { text: '课程导论', link: c.readme },
    })
  }
  const indexGroups = [
    { text: '阅读线索', items: SITE_INDEX },
    ...REFERENCE_COURSE.chapters,
  ]
  tabs.push({
    id: 'index',
    label: '术语 · 人物 · 时间线',
    kicker: '三条阅读线索与引文原文',
    count: `${n(indexGroups)} 条`,
    blurb: '把书读薄之后需要查的东西：术语释义、经济学家师承、理论出现的顺序，以及引文原文。',
    courseId: 'reference',
    icon: SITE_INDEX_ICON,
    groups: indexGroups,
    entry: { text: '参考书目', link: REFERENCE_COURSE.readme },
  })
  return tabs
})()

export const chapterCount = (id: string): number => {
  const c = courseById(id)
  return c ? c.chapters.reduce((n, g) => n + g.items.length, 0) : 0
}
