// 专题目录的唯一数据源（双语）。
// - docs/.vitepress/config.ts 用它生成 root（英文）与 zh 两套侧边栏与导航
// - CourseTabs.vue / CourseShelf.vue 读它，按 useData().localeIndex 取对应语言
// - theme/data/*.ts 与页面正文共用同一套文件名：两语言目录互为路径镜像
//   （docs/<path>.md ↔ docs/zh/<path>.md），VitePress 官方语言切换器
//   （useLangs 去当前 locale 前缀、补目标前缀）正是靠这层镜像在两套页面间互跳
// 新增/改章节只改这里，避免侧边栏、切换条、首页书架三处各自漂移。
// path 一律写两语言共用的站点路径（不含 base、不含 .md），
// locale 前缀由投影时补，站点 base 由主题的 withBase 在渲染时补。

export type Locale = 'root' | 'zh'

/** 语言环境 → 站点路径前缀：英文在根目录，中文在 /zh/ 下 */
export const LOCALE_PREFIX: Record<Locale, string> = { root: '', zh: '/zh' }

/** 语言环境 → 标签文本键 */
const LKEY: Record<Locale, 'en' | 'zh'> = { root: 'en', zh: 'zh' }

export interface CatalogItem {
  text: string
  link: string
}

export interface ChapterGroup {
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
  /** 用于路由高亮与侧边栏匹配的站点路径前缀（已带 locale 前缀） */
  base: string
  readme: string
  /** 一句话：这门课要回答什么问题 */
  blurb: string
  icon: IconSpec
  /** 导论、历史进程、公式总览等专题入口 */
  aux: CatalogItem[]
  chapters: ChapterGroup[]
}

type LText = { zh: string; en: string }

/** 双语标签的书写简写 */
const L = (zh: string, en: string): LText => ({ zh, en })

/* ---------- 结构定义（locale 无关） ---------- */

interface Item {
  /** 两语言共用的站点路径（不含 locale 前缀、不含 .md） */
  path: string
  text: LText
}

interface GroupSpec {
  text: LText
  items: Item[]
  /** 首页 tab 上的短标签；缺省时用组标题 */
  tab?: LText
}

interface CourseSpec {
  id: string
  label: LText
  /** locale 无关的站点路径前缀，如 /math */
  base: string
  readme: string
  blurb: LText
  icon: IconSpec
  aux: Item[]
  chapters: GroupSpec[]
}

const ch = (n: number | string, file: string, base: string, zh: string, en: string): Item => ({
  path: `/${base}/${file}`,
  text: L(`${n} · ${zh}`, `${n} · ${en}`),
})

const plain = (file: string, base: string, zh: string, en: string): Item => ({
  path: `/${base}/${file}`,
  text: L(zh, en),
})

const aux = (base: string, file: string, zh: string, en: string): Item => ({
  path: `/${base}/${file}`,
  text: L(zh, en),
})

const entry = (path: string, zh: string, en: string): Item => ({ path, text: L(zh, en) })

const COURSE_SPECS: CourseSpec[] = [
  {
    id: 'math',
    label: L('数学基础', 'Math Foundations'),
    base: '/math',
    readme: '/math/Readme',
    blurb: L(
      '经济学把数学当脚手架：微积分找最优点，矩阵解均衡，统计做检验。',
      'Economics leans on math as scaffolding: calculus finds the optimum, matrices solve equilibria, statistics does the testing.',
    ),
    icon: { paths: ['M17 5H8l5 7-5 7h9'] },
    aux: [
      aux('math', 'Readme', '专题导读', 'Course guide'),
      aux('math', '西方经济学-数学基础', '西方经济学-数学基础', 'Math for Economics'),
    ],
    chapters: [
      {
        text: L('章节', 'Chapters'),
        items: [
          ch(1, '集合与逻辑', 'math', '集合与逻辑', 'Sets and Logic'),
          ch(2, '数列与极限', 'math', '数列与极限', 'Sequences and Limits'),
          ch(3, '常见求和公式', 'math', '常见求和公式', 'Common Summation Formulas'),
          ch(4, '微分学基础', 'math', '微分学基础', 'Differential Calculus Basics'),
          ch(5, '积分学基础', 'math', '积分学基础', 'Integral Calculus Basics'),
          ch(6, '微分方程', 'math', '微分方程', 'Differential Equations'),
          ch(7, '矩阵与行列式', 'math', '矩阵与行列式', 'Matrices and Determinants'),
          ch(8, '特征值与特征向量', 'math', '特征值与特征向量', 'Eigenvalues and Eigenvectors'),
          ch(9, '线性空间与线性变换', 'math', '线性空间与线性变换', 'Linear Spaces and Linear Maps'),
          ch(10, '概率论基础', 'math', '概率论基础', 'Probability Basics'),
          ch(11, '统计学基础', 'math', '统计学基础', 'Statistics Basics'),
          // 磁盘文件名为「最优化方法」（H1 为「最优化方法与经济学应用」），path 须对齐文件名
          ch(12, '最优化方法', 'math', '最优化方法与经济学应用', 'Optimization and Its Use in Economics'),
        ],
      },
    ],
  },
  {
    id: 'western',
    label: L('西方经济学', 'Western Economics'),
    base: '/western',
    readme: '/western/Readme',
    blurb: L(
      '微观解释价格如何形成，宏观解释总量为什么会崩：两套工具，同一个「稀缺与协调」问题。',
      'Micro says how prices form; macro says why totals can collapse: two toolkits, one question of scarcity and coordination.',
    ),
    icon: { paths: ['M4 20h16M4 20V4', 'M6 6c4 5 8 8 12 11', 'M6 18c4-5 8-8 12-11'] },
    aux: [
      aux('western', 'Readme', '专题导读', 'Course guide'),
      aux('western', 'History', '理论推进链', 'Theory chain'),
      aux('western', '西方经济学公式总览', '公式总览', 'Formulas'),
      aux('western', '宏观经济模型演进', '宏观经济模型演进', 'Evolution of macro models'),
    ],
    chapters: [
      {
        text: L('微观 · 价格与资源配置', 'Micro · Prices and Resource Allocation'),
        tab: L('微观经济学', 'Microeconomics'),
        items: [
          // 导言（第二十九批深写）：教材首章，无章号置顶；正文章号从需求与供给的 1 起
          plain('导言', 'western', '导言', 'Introduction'),
          ch(1, '需求与供给', 'western', '需求与供给', 'Demand and Supply'),
          ch(2, '效用论', 'western', '效用论', 'Utility Theory'),
          ch(3, '生产和成本论', 'western', '生产和成本论', 'Production and Cost Theory'),
          ch(4, '市场理论', 'western', '市场理论', 'Market Theory'),
          ch(5, '生产要素市场', 'western', '生产要素市场', 'Factor Markets'),
          ch(6, '一般均衡论和福利经济学', 'western', '一般均衡论和福利经济学', 'General Equilibrium and Welfare Economics'),
          ch(7, '市场失灵和微观经济政策', 'western', '市场失灵和微观经济政策', 'Market Failure and Microeconomic Policy'),
        ],
      },
      {
        text: L('宏观 · 总量、政策与增长', 'Macro · Aggregates, Policy and Growth'),
        tab: L('宏观经济学', 'Macroeconomics'),
        items: [
          ch(8, '宏观经济活动与宏观经济学', 'western', '宏观经济活动与宏观经济学', 'Macroeconomic Activity and Macroeconomics'),
          ch(9, '简单国民收入决定理论', 'western', '简单国民收入决定理论', 'Simple Income Determination'),
          ch(10, '产品市场和货币市场的一般均衡', 'western', '产品市场和货币市场的一般均衡', 'General Equilibrium of the Goods and Money Markets'),
          ch(11, '宏观经济政策', 'western', '宏观经济政策', 'Macroeconomic Policy'),
          ch(12, '总需求和总供给分析', 'western', '总需求和总供给分析', 'Aggregate Demand and Supply'),
          ch(13, '经济增长', 'western', '经济增长', 'Economic Growth'),
          ch(14, '通货膨胀理论', 'western', '通货膨胀理论', 'Inflation Theory'),
          ch(15, '宏观经济学的意见分歧', 'western', '宏观经济学的意见分歧', 'Disagreement in Macroeconomics'),
        ],
      },
    ],
  },
  {
    id: 'monetary',
    label: L('货币银行学', 'Money and Banking'),
    base: '/monetary',
    readme: '/monetary/Readme',
    blurb: L(
      '钱从哪里来、利率如何决定、中央银行的手怎样伸进实体经济。',
      'Where money comes from, how interest rates are set, and how the central bank reaches into the real economy.',
    ),
    icon: {
      paths: ['M3 9l9-5 9 5', 'M6 9v8M12 9v8M18 9v8', 'M4 17h16M3 20h18'],
    },
    aux: [aux('monetary', 'Readme', '专题导读', 'Course guide'), aux('monetary', 'History', '历史进程', 'History')],
    chapters: [
      {
        text: L('章节', 'Chapters'),
        items: [
          ch(1, '货币供求理论', 'monetary', '货币供求理论', 'Money Demand and Supply'),
          ch(2, '利率理论', 'monetary', '利率理论', 'Interest Rate Theory'),
          ch(3, '通货膨胀与通货紧缩', 'monetary', '通货膨胀与通货紧缩', 'Inflation and Deflation'),
          ch(4, '金融中介体系', 'monetary', '金融中介体系', 'The Financial Intermediary System'),
          ch(5, '金融市场', 'monetary', '金融市场', 'Financial Markets'),
          ch(6, '金融监管体系', 'monetary', '金融监管体系', 'Financial Regulation'),
          ch(7, '货币政策', 'monetary', '货币政策', 'Monetary Policy'),
          ch(8, '汇率理论', 'monetary', '汇率理论', 'Exchange Rate Theory'),
          ch(9, '国际货币体系', 'monetary', '国际货币体系', 'The International Monetary System'),
          ch(10, '内外均衡理论', 'monetary', '内外均衡理论', 'Internal and External Equilibrium'),
        ],
      },
    ],
  },
  {
    id: 'finance',
    label: L('财政学', 'Public Finance'),
    base: '/finance',
    readme: '/finance/Readme',
    blurb: L(
      '政府为什么收税、怎么花钱，以及什么时候财政本身成为问题。',
      'Why government taxes, how it spends, and when the budget itself becomes the problem.',
    ),
    icon: {
      paths: [
        'M12 4v16M8 20h8',
        'M4 7h16',
        'M4 7l-2 5M4 7l2 5M2 12a2 2 0 0 0 4 0',
        'M20 7l-2 5M20 7l2 5M18 12a2 2 0 0 0 4 0',
      ],
    },
    aux: [aux('finance', 'Readme', '专题导读', 'Course guide'), aux('finance', 'History', '历史进程', 'History')],
    chapters: [
      {
        text: L('章节', 'Chapters'),
        items: [
          ch(1, '财政职能', 'finance', '财政职能', 'The Functions of the Budget'),
          ch(2, '财政支出规模与结构', 'finance', '财政支出规模与结构', 'The Scale and Structure of Spending'),
          ch(3, '财政投资支出和社会保障支出', 'finance', '财政投资支出和社会保障支出', 'Public Investment and Social Protection Spending'),
          ch(4, '税收原理', 'finance', '税收原理', 'Tax Principles'),
          ch(5, '税收制度', 'finance', '税收制度', 'The Tax System'),
          ch(6, '国债理论与管理', 'finance', '国债理论与管理', 'Public Debt Theory and Management'),
          ch(7, '国家预算与预算管理体制', 'finance', '国家预算与预算管理体制', 'The State Budget and Budget Systems'),
          ch(8, '财政平衡与财政赤字', 'finance', '财政平衡与财政赤字', 'Budget Balance and Deficits'),
        ],
      },
    ],
  },
  {
    id: 'international',
    label: L('国际经济学', 'International Economics'),
    base: '/international',
    readme: '/international/Readme',
    blurb: L(
      '贸易为什么不是零和游戏，汇率与收支怎样把各国绑在同一张表上。',
      'Why trade is not zero-sum, and how exchange rates and the balance of payments bind countries to one ledger.',
    ),
    icon: {
      paths: ['M12 4a12.5 12.5 0 0 0 0 16M12 4a12.5 12.5 0 0 1 0 16', 'M4 12h16'],
      circle: true,
    },
    aux: [
      aux('international', 'Readme', '专题导读', 'Course guide'),
      aux('international', 'History', '历史进程', 'History'),
    ],
    chapters: [
      {
        text: L('章节', 'Chapters'),
        items: [
          ch(1, '绪论', 'international', '绪论', 'Introduction'),
          ch(2, '国际贸易纯理论', 'international', '国际贸易纯理论', 'Pure Theory of Trade'),
          ch(3, '国际贸易的现代与当代理论', 'international', '国际贸易的现代与当代理论', 'Modern and Contemporary Trade Theory'),
          ch(4, '国际贸易政策分析', 'international', '国际贸易政策分析', 'Trade Policy Analysis'),
          ch(5, '国际收支分析', 'international', '国际收支分析', 'Balance of Payments Analysis'),
          ch(6, '汇率决定的一般理论', 'international', '汇率决定的一般理论', 'General Theory of Exchange Rates'),
          ch(7, '要素的国际流动', 'international', '要素的国际流动', 'International Mobility of Factors'),
          ch(8, '宏观经济的内外均衡', 'international', '宏观经济的内外均衡', 'Internal and External Balance of the Macroeconomy'),
          ch(9, '经济一体化与国际经济秩序分析', 'international', '经济一体化与国际经济秩序分析', 'Economic Integration and the International Order'),
          ch(10, '经济全球化趋势', 'international', '经济全球化趋势', 'The Trend Toward Globalization'),
        ],
      },
    ],
  },
  {
    id: 'socialist',
    label: L('社会主义经济理论', 'Socialist Economic Theory'),
    base: '/socialist',
    readme: '/socialist/Readme',
    blurb: L(
      '计划与市场的百年辩论，以及中国怎样走出自己的答案。',
      'A hundred years of arguing over plans and markets, and how China found its own answer.',
    ),
    icon: {
      paths: ['M6 21V4', 'M6 5c2-1.2 4-1.2 6 0s4 1.2 6 0v7c-2 1.2-4 1.2-6 0s-4-1.2-6 0'],
    },
    aux: [
      aux('socialist', 'Readme', '专题导读', 'Course guide'),
      aux('socialist', 'History', '历史进程', 'History'),
      aux('socialist', '中国共产党重要会议与社会主义经济体制演进', '重要会议与体制演进', 'Key Party Conferences and the Evolution of the System'),
    ],
    chapters: [
      {
        text: L('章节', 'Chapters'),
        items: [
          plain('导论', 'socialist', '导论', 'Introduction'),
          ch(1, '社会主义经济制度的本质特征', 'socialist', '社会主义经济制度的本质特征', 'Defining Features of the Socialist Economic System'),
          ch(2, '社会主义市场经济理论', 'socialist', '社会主义市场经济理论', 'Theory of the Socialist Market Economy'),
          ch(3, '向社会主义市场经济体制的渐进过渡', 'socialist', '向社会主义市场经济体制的渐进过渡', 'The Gradual Transition to the Socialist Market Economy'),
          ch(4, '社会主义企业制度与国有企业改革', 'socialist', '社会主义企业制度与国有企业改革', 'Socialist Enterprises and SOE Reform'),
          ch(5, '国有企业治理结构的创新', 'socialist', '国有企业治理结构的创新', 'Innovation in SOE Governance'),
          ch(6, '社会主义市场经济条件下的分配制度', 'socialist', '社会主义市场经济条件下的分配制度', 'Distribution in the Socialist Market Economy'),
          ch(7, '社会主义经济增长与经济发展', 'socialist', '社会主义经济增长与经济发展', 'Socialist Growth and Development'),
          ch(8, '社会主义市场经济条件下的经济结构调整', 'socialist', '社会主义市场经济条件下的经济结构调整', 'Structural Adjustment in the Socialist Market Economy'),
          ch(9, '社会主义对外经济关系', 'socialist', '社会主义对外经济关系', 'Socialist Foreign Economic Relations'),
          ch(10, '社会主义市场经济条件下的政府调节', 'socialist', '社会主义市场经济条件下的政府调节', 'Government Regulation in the Socialist Market Economy'),
        ],
      },
    ],
  },
]

/** 参考资料：不进专题切换条，只在首页书架与侧边栏出现 */
const REFERENCE_SPEC: CourseSpec = {
  id: 'reference',
  label: L('参考资料', 'Reference'),
  base: '/reference',
  readme: '/reference/参考书目',
  blurb: L(
    '书目与旧笔记原文：新写的正文都回链到这里，方便核对出处。',
    'Bibliography and the original notes: new prose links back here so sources stay checkable.',
  ),
  icon: { paths: ['M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3z', 'M5 4v13'] },
  aux: [],
  chapters: [
    {
      text: L('参考资料', 'Reference'),
      items: [
        entry('/knowledge', '知识点主文档', 'Master knowledge doc'),
        entry('/reference/参考书目', '参考书目', 'Bibliography'),
        entry('/reference/微观经济学-笔记', '微观经济学笔记', 'Microeconomics notes'),
        entry('/reference/notes/西方经济学导论-笔记', '西方经济学导论笔记', 'Intro to western economics notes'),
        entry('/reference/notes/金融学-笔记', '金融学笔记', 'Finance notes'),
      ],
    },
  ],
}

/** 站点的三条阅读线索（时间线 / 名人篇 / 术语篇），与专题同级的索引入口 */
const SITE_INDEX_SPEC: Item[] = [
  entry('/timeline', '理论时间线', 'Theory timeline'),
  entry('/people', '名人篇（师承网络）', 'Economists (lineage network)'),
  entry('/glossary', '术语篇（可检索）', 'Glossary (searchable)'),
]

/* ---------- 投影：结构定义 → 语言环境版本 ---------- */

const project = (locale: Locale, it: Item): CatalogItem => ({
  text: it.text[LKEY[locale]],
  link: LOCALE_PREFIX[locale] + it.path,
})

const projectCourse = (locale: Locale, s: CourseSpec): Course => ({
  id: s.id,
  label: s.label[LKEY[locale]],
  base: LOCALE_PREFIX[locale] + s.base,
  readme: LOCALE_PREFIX[locale] + s.readme,
  blurb: s.blurb[LKEY[locale]],
  icon: s.icon,
  aux: s.aux.map((i) => project(locale, i)),
  chapters: s.chapters.map((g) => ({
    text: g.text[LKEY[locale]],
    items: g.items.map((i) => project(locale, i)),
  })),
})

const buildCourses = (locale: Locale): Course[] => COURSE_SPECS.map((s) => projectCourse(locale, s))
const buildReferenceCourse = (locale: Locale): Course => projectCourse(locale, REFERENCE_SPEC)
const buildSiteIndex = (locale: Locale): CatalogItem[] => SITE_INDEX_SPEC.map((it) => project(locale, it))

/* ---------- 导出（默认中文：与中文站、既有测试的口径一致） ---------- */

export const COURSES: Course[] = buildCourses('zh')
export const REFERENCE_COURSE: Course = buildReferenceCourse('zh')
export const ALL_COURSES: Course[] = [...COURSES, REFERENCE_COURSE]
export const SITE_INDEX: CatalogItem[] = buildSiteIndex('zh')

export const COURSES_EN: Course[] = buildCourses('root')
export const REFERENCE_COURSE_EN: Course = buildReferenceCourse('root')
export const ALL_COURSES_EN: Course[] = [...COURSES_EN, REFERENCE_COURSE_EN]
export const SITE_INDEX_EN: CatalogItem[] = buildSiteIndex('root')

/**
 * 过渡期门禁：根目录（英文）已译完的专题 id。
 * 英文侧边栏与首页书架只暴露 EN_READY 里的专题，未译完的不出入口；
 * 'index' 是首页「三条阅读线索」段落的开关（时间线 / 名人篇 / 术语篇）。
 * 全部译完后删掉本集合与相关 filter。
 */
export const EN_READY: Set<string> = new Set(['knowledge', 'index', 'reference', 'math', 'finance', 'international', 'western'])

export const courseById = (id: string, locale: Locale = 'zh'): Course | undefined =>
  (locale === 'root' ? ALL_COURSES_EN : ALL_COURSES).find((c) => c.id === id)

/** 侧边栏 / 切换条用的课程列表：英文侧按 EN_READY 过滤 */
export const courseListFor = (locale: Locale = 'zh'): Course[] => {
  const all = locale === 'root' ? ALL_COURSES_EN : ALL_COURSES
  return locale === 'root' ? all.filter((c) => EN_READY.has(c.id)) : all
}

/* ---------- 侧边栏生成 ---------- */

export const sidebarFor = (id: string, locale: Locale = 'zh'): { text: string; items: CatalogItem[] }[] => {
  const course = courseById(id, locale)
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

const SITE_INDEX_ICON: IconSpec = {
  paths: ['M4 6h16M4 12h16M4 18h10', 'M18 16l2 2-2 2'],
}

// 西方经济学的两个 tab 用读者熟悉的课名与导语，而不是内部分组标题
const WESTERN_TAB_BLURBS: Record<'micro' | 'macro', LText> = {
  micro: L(
    '从一条需求曲线出发，走到市场为什么会失灵：价格是唯一信号时的世界，和它不成立之处。',
    'From one demand curve to why markets fail: the world where price is the only signal, and where that stops holding.',
  ),
  macro: L(
    '总支出为什么会不足，失业为什么会持续：从乘数到 IS-LM，再到政策有效性之争。',
    'Why aggregate spending falls short and unemployment persists: from the multiplier to IS-LM, to the fight over whether policy works.',
  ),
}

const INDEX_TAB = {
  label: L('术语 · 人物 · 时间线', 'Glossary · People · Timeline'),
  kicker: L('三条阅读线索与引文原文', 'Three reading threads and the source notes'),
  blurb: L(
    '把书读薄之后需要查的东西：术语释义、经济学家师承、理论出现的顺序，以及引文原文。',
    'What you look up after the books are thinned out: term definitions, economic lineages, the order in which theories appeared, and the source notes.',
  ),
  entry: L('参考书目', 'Bibliography'),
}

/**
 * 西方经济学按微观/宏观拆成两个 tab（内容本身就是两套工具）；
 * 其余专题一个 tab，面板内按 aux + 章节分组排布。
 */
const buildShelf = (locale: Locale): ShelfTab[] => {
  const t = (v: LText): string => v[LKEY[locale]]
  const noun = (words: number, zh: string, en: string): string =>
    locale === 'root' ? `${words} ${words === 1 ? en.replace(/s$/, '') : en}` : `${words} ${zh}`
  const tabs: ShelfTab[] = []
  const groupsOf = (s: CourseSpec, c: Course): ChapterGroup[] =>
    s.aux.length ? [{ text: t({ zh: '专题入口', en: 'Course entries' }), items: c.aux }, ...c.chapters] : c.chapters

  for (const s of COURSE_SPECS) {
    const c = courseById(s.id, locale)!
    if (s.id === 'western') {
      for (let gi = 0; gi < s.chapters.length; gi++) {
        const sg = s.chapters[gi]
        const g = c.chapters[gi]
        const tabLabel = t(sg.tab!)
        tabs.push({
          id: `${s.id}-${tabLabel}`,
          label: tabLabel,
          kicker: `${c.label} · ${tabLabel}`,
          count: noun(g.items.length, '章', 'chapters'),
          blurb: t(WESTERN_TAB_BLURBS[sg.text.zh.startsWith('微观') ? 'micro' : 'macro']),
          courseId: s.id,
          icon: s.icon,
          groups: [g],
          entry: { text: t({ zh: '专题导读', en: 'Course guide' }), link: c.readme },
        })
      }
      continue
    }
    const gs = groupsOf(s, c)
    tabs.push({
      id: s.id,
      label: c.label,
      kicker: c.label,
      count: noun(gs.reduce((n, x) => n + x.items.length, 0), '条', 'items'),
      blurb: c.blurb,
      courseId: s.id,
      icon: s.icon,
      groups: gs,
      entry: { text: t({ zh: '专题导读', en: 'Course guide' }), link: c.readme },
    })
  }
  const indexGroups: ChapterGroup[] = [
    { text: t({ zh: '阅读线索', en: 'Reading threads' }), items: buildSiteIndex(locale) },
    ...projectCourse(locale, REFERENCE_SPEC).chapters,
  ]
  const refCourse = projectCourse(locale, REFERENCE_SPEC)
  tabs.push({
    id: 'index',
    label: t(INDEX_TAB.label),
    kicker: t(INDEX_TAB.kicker),
    count: noun(indexGroups.reduce((n, x) => n + x.items.length, 0), '条', 'items'),
    blurb: t(INDEX_TAB.blurb),
    courseId: 'reference',
    icon: SITE_INDEX_ICON,
    groups: indexGroups,
    entry: { text: t(INDEX_TAB.entry), link: refCourse.readme },
  })
  return tabs
}

export const SHELF: ShelfTab[] = buildShelf('zh')
export const SHELF_EN: ShelfTab[] = buildShelf('root')

/** 首页书架用：英文侧只暴露已译完的 tab */
export const shelfFor = (locale: Locale = 'zh'): ShelfTab[] =>
  locale === 'root'
    ? SHELF_EN.filter((x) => EN_READY.has(x.courseId) || (x.id === 'index' && EN_READY.has('index')))
    : SHELF

export const chapterCount = (id: string): number => {
  const c = courseById(id)
  return c ? c.chapters.reduce((n, g) => n + g.items.length, 0) : 0
}
