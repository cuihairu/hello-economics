// 经济学名著书架
// cover 为 Open Library 封面直链（已验证可访问），本地占位 SVG（books/*.svg）兜底。
// author.peopleId 指向 theme/data/people.ts 的理论家词条（站内优先），
// 无站内词条的作者用 wiki 链接中文维基百科。

export interface BookAuthor {
  name: string
  peopleId?: string
  wiki?: string
}

export interface Book {
  id: string
  title: string
  en: string
  year: number
  school: 'classical' | 'neoclassical' | 'keynesian' | 'method' | 'liberal' | 'contemporary'
  authors: BookAuthor[]
  cover?: string
  fallback: string // 本地占位 SVG（/books/<id>.svg），站点绝对路径，渲染时补 base 前缀
  summary: string
}

export const SCHOOL_LABELS = {
  classical: '古典经济学',
  neoclassical: '新古典与综合',
  keynesian: '凯恩斯革命',
  method: '方法与博弈',
  liberal: '自由市场',
  contemporary: '当代与通俗',
} as const

export const BOOKS: Book[] = [
  {
    id: 'wealth-of-nations',
    title: '国富论',
    en: 'The Wealth of Nations',
    year: 1776,
    school: 'classical',
    authors: [{ name: '亚当·斯密', peopleId: 'adam-smith' }],
    cover: 'https://covers.openlibrary.org/b/isbn/9780553585971-L.jpg?default=false',
    fallback: '/books/wealth-of-nations.svg',
    summary:
      '政治经济学成为独立学科的标志。斯密从分工讲起：分工提高劳动生产率，交换因利己心而起，市场这只「看不见的手」把个人私利汇成社会福利。全书回答了时代的核心问题——国家的财富从哪来：不是金银存量，而是劳动的生产力。放任自由（Laissez-faire）的边界被划出：国防、司法与公共工程之外，政府少管为好。税收四原则（平等、确定、便利、经济）至今还是税制设计的出发点。它在出版后两百年里不断被重读、反驳与修正，但「市场如何自发协调亿万人的行动」这个问题本身，是它定下的。',
  },
  {
    id: 'principles-ricardo',
    title: '政治经济学及赋税原理',
    en: 'On the Principles of Political Economy and Taxation',
    year: 1817,
    school: 'classical',
    authors: [{ name: '大卫·李嘉图', peopleId: 'ricardo' }],
    fallback: '/books/principles-ricardo.svg',
    summary:
      '把斯密的体系压缩成一套演绎机器。李嘉图用劳动价值论、级差地租与分配规律说明：随着人口增长，谷物边际成本上升，地租吞噬利润，资本积累终将停滞——这是「李嘉图悲观」的核心。比较优势定理首次完整表述：两国各自专业化生产相对成本更低的商品，贸易使双方都受益，即使一国在所有产品上都比另一国便宜。这本书还确立了抽象建模的传统——假设简单得出惊人，推论却极其锋利。李嘉图悲观并非宿命：他的模型把分配推到极限处，恰恰是为了暴露体制的边界。马克思从这里拿走劳动价值论，穆勒与马歇尔则修正它的古典框架。',
  },
  {
    id: 'capital',
    title: '资本论',
    en: 'Das Kapital',
    year: 1867,
    school: 'classical',
    authors: [{ name: '卡尔·马克思', peopleId: 'marx' }],
    cover: 'https://covers.openlibrary.org/b/isbn/9780140445688-L.jpg?default=false',
    fallback: '/books/capital.svg',
    summary:
      '对资本主义最系统的解剖。第一卷从商品的两个属性出发：使用价值与价值的二重性，劳动二重性由此展开——具体劳动创造使用价值，抽象劳动决定价值。货币转化为资本，资本增殖的秘密在劳动力商品：工人出卖劳动力，其价值由再生产费用决定，而使用它创造的价值超过这一部分，差额即剩余价值。工资、积累、原始积累次第登场，最后以资本积累的历史趋势作结。第二卷研究资本的流通过程——资本循环、资本周转与社会总资本的再生产；第三卷转向资本主义生产的总过程，揭示剩余价值如何转化为利润、平均利润与生产价格如何形成，并论证利润率趋向下降的规律。它把古典经济学的范畴翻转成批判武器，其准确性与争议并存至今：剥削、危机与利润率下降，每一个命题都被反复检验。',
  },
  {
    id: 'principles-marshall',
    title: '经济学原理',
    en: 'Principles of Economics',
    year: 1890,
    school: 'neoclassical',
    authors: [{ name: '阿尔弗雷德·马歇尔', peopleId: 'marshall' }],
    fallback: '/books/principles-marshall.svg',
    summary:
      '新古典经济学的奠基教科书，也是第一本把供求分析提升为通用工具的书。马歇尔把边际主义三派的发现收编：价值不再由成本或效用单独决定，而是「剪刀的两刃」——需求由边际效用决定，供给由边际成本决定，时间维度（短期与长期）让这条律灵活可操作。弹性、消费者剩余、准地租、代表性企业，术语大多由他命名；「经济学的任务是研究人的常态行为」让他避开了功利主义包袱，也使经济学与生物学隐喻结缘。剑桥学派此后统治英语世界经济学五十年，直到凯恩斯从内部反叛。',
  },
  {
    id: 'general-theory',
    title: '就业、利息和货币通论',
    en: 'The General Theory of Employment, Interest and Money',
    year: 1936,
    school: 'keynesian',
    authors: [{ name: '约翰·梅纳德·凯恩斯', peopleId: 'keynes' }],
    cover: 'https://covers.openlibrary.org/b/isbn/9780156347112-L.jpg?default=false',
    fallback: '/books/general-theory.svg',
    summary:
      '大萧条中的叛逆之书。萨伊定律——供给自动创造需求——统治宏观思路一百多年，凯恩斯否定了它：有效需求决定产出与就业，而需求的三块构成（消费、投资、政府支出）都不稳定。消费依赖收入且边际倾向递减，储蓄是收入的决定而非前提；投资由动物精神与流动性偏好左右，利率使闲置货币与投机需求达成平衡，因而货币不只是面纱。节俭悖论、乘数效应、投资引导储蓄的因果链被倒转。1929-1933 的失业不再是暂时的摩擦，而是市场在宏观尺度上自发的失败，政府需求管理第一次获得理论牌照。此后四十年，西方经济政策都写在它的延长线上。',
  },
  {
    id: 'game-theory',
    title: '博弈论与经济行为',
    en: 'Theory of Games and Economic Behavior',
    year: 1944,
    school: 'method',
    authors: [{ name: '约翰·冯·诺伊曼', peopleId: 'von-neumann' }, { name: '奥斯卡·摩根斯坦', wiki: 'https://zh.wikipedia.org/wiki/奥斯卡·摩根斯坦' }],
    fallback: '/books/game-theory.svg',
    summary:
      '把策略互动锻造成数学理论的开山之作。冯·诺伊曼与摩根斯坦重新定义了经济学研究的对象：不是孤立的极值问题，而是多决策者互相博弈的问题。两人合作的博弈、极小极大定理处理冲突；预期效用公理为不确定条件下的选择立下形式标准——这是后来期望效用理论的起点，也是金融学理性定价的根。书里还包含了增长理论的先驱成果（扩张经济模型）。它出版时几乎无人能读，但数年后纳什从小处突破，均衡概念从此普及开去：产业组织、拍卖、贸易谈判、机制设计全部随之改写。现代经济学的方法论版图，有一半从这里发源。',
  },
  {
    id: 'economics-samuelson',
    title: '经济学',
    en: 'Economics: An Introductory Analysis',
    year: 1948,
    school: 'neoclassical',
    authors: [{ name: '保罗·萨缪尔森', peopleId: 'samuelson' }],
    fallback: '/books/economics-samuelson.svg',
    summary:
      '二十世纪最成功的教科书。萨缪尔森把凯恩斯革命与新古典微观拼成一个「新古典综合」：微观讲价格机制如何配置资源，宏观讲政府如何稳定总量；IS-LM、乘数-加速数、比较静态与动态分析第一次作为标准工具进入教材。此前经济学教科书是斯密与马歇尔的注脚，此后它们是萨缪尔森系的注脚。书中渗透的「混合经济」主张——市场经济加政府调控——定义了战后西方主流共识。它被译成四十多种语言，重版十九次，一代代学生的书架以它为起点。皮凯蒂等人批评的教科书范式、曼昆继承的写作传统，都由它立下。',
  },
  {
    id: 'capitalism-freedom',
    title: '资本主义与自由',
    en: 'Capitalism and Freedom',
    year: 1962,
    school: 'liberal',
    authors: [{ name: '米尔顿·弗里德曼', peopleId: 'friedman' }],
    cover: 'https://covers.openlibrary.org/b/isbn/9780226264219-L.jpg?default=false',
    fallback: '/books/capitalism-freedom.svg',
    summary:
      '战后自由主义经济学的宣言。弗里德曼把经济自由与政治自由绑在一起论证：集中的经济权力必然吞噬政治自由，市场竞争是最不加以约束也最能保护自由的机制。他逐个审判流行的干预项目——职业准入、价格管制、最低工资、福利制度、社会保障、教育券——给出替代方案：负所得税、入学凭单、浮动汇率。书中大部分主张在当时被视为边缘，却在随后的通胀年代（自然率假说在他手里成形）逐步成为主流政策语言。里根与撒切尔在 1980 年代把「小政府、大市场」落地，这本书是他们的案头书。',
  },
  {
    id: 'freakonomics',
    title: '魔鬼经济学',
    en: 'Freakonomics',
    year: 2005,
    school: 'contemporary',
    authors: [{ name: '史蒂芬·列维特', wiki: 'https://zh.wikipedia.org/wiki/史蒂芬·列维特' }, { name: '史蒂芬·都伯纳', wiki: 'https://zh.wikipedia.org/wiki/史蒂芬·都伯纳' }],
    cover: 'https://covers.openlibrary.org/b/isbn/9780060731328-L.jpg?default=false',
    fallback: '/books/freakonomics.svg',
    summary:
      '把计量经济学从课堂搬进日常的书。列维特的基本问题：人们会对激励作出反应，可那些反应常常藏在意想不到的地方。中小学教师考试作弊的指纹、相扑选手的贿赂网络、名字与人生统计、治安崩溃与犯罪的下降——他坚持用数据说话，而数据的结论常与常识相反。全书最著名的论战是犯罪率下降与堕胎合法化的相关性：成长在不受欢迎环境中的孩子少了，一代人后的犯罪自然减少。这本书销量数百万册，让「经济学的思维方式」变成大众词汇，也因选题大胆而引来方法论争议——数据能回答巧合，因果还需设计。',
  },
  {
    id: 'nudge',
    title: '助推',
    en: 'Nudge: Improving Decisions About Health, Wealth, and Happiness',
    year: 2008,
    school: 'contemporary',
    authors: [{ name: '理查德·塞勒', peopleId: 'thaler' }, { name: '卡斯·桑斯坦', wiki: 'https://zh.wikipedia.org/wiki/卡斯·桑斯坦' }],
    cover: 'https://covers.openlibrary.org/b/isbn/9780143115267-L.jpg?default=false',
    fallback: '/books/nudge.svg',
    summary:
      '行为经济学的政策手册。塞勒与桑斯坦论证：选择架构——默认选项、信息披露方式、选项排列顺序——本身就在干预人的决策，问题只在于有没有被自觉地设计。「助推」是这种设计的正规化：不禁止任何选项，不显著改变经济激励，只把结构摆得更好，让人们在保有选择自由的同时更容易做出好的决定。默认加入养老金计划、让器官捐献的默认选项是「同意」、给卡路里贴标签——英国的「行为洞察小组」把这些想法变成政府机构，奥巴马与卡梅伦的政府都设了助推团队。政策工具箱从此多了一件：不动价格，动结构。',
  },
  {
    id: 'poor-economics',
    title: '贫穷的本质',
    en: 'Poor Economics: A Radical Rethinking of the Way to Fight Global Poverty',
    year: 2011,
    school: 'contemporary',
    authors: [{ name: '阿比吉特·班纳吉', wiki: 'https://zh.wikipedia.org/wiki/阿比吉特·班纳吉' }, { name: '埃丝特·迪弗洛', wiki: 'https://zh.wikipedia.org/wiki/埃丝特·迪弗洛' }],
    cover: 'https://covers.openlibrary.org/b/isbn/9781610390934-L.jpg?default=false',
    fallback: '/books/poor-economics.svg',
    summary:
      '把反贫困从口号变成可检验实验的书。班纳吉与迪弗洛不满于「大讨论」——市场化还是补贴、增长优先还是再分配——而坚持拆小问题：孩子为什么不打疫苗？农民为什么不买便宜得多的经杀虫处理的蚊帐？贷方为什么收取高利贷？他们在二十多国做了几百场随机对照实验（与克雷默同获 2019 年诺贝尔经济学奖），发现穷人既是信息不足者也是风险规避者：微小的摩擦（一笔登记费、一次疫苗的往返路程）足以阻断行动，小小的补贴与保险足以释放投入。政策因此从宏大叙事转向对症下药。批评者说它回避了结构问题——这正是后续争论的战场。',
  },
  {
    id: 'scarcity',
    title: '稀缺',
    en: 'Scarcity: Why Having Too Little Means So Much',
    year: 2013,
    school: 'contemporary',
    authors: [{ name: '塞德希尔·穆来纳森', wiki: 'https://zh.wikipedia.org/wiki/塞德希尔·穆来纳森' }, { name: '埃尔德·沙菲尔', wiki: 'https://zh.wikipedia.org/wiki/埃尔德·沙菲尔' }],
    fallback: '/books/scarcity.svg',
    summary:
      '把「稀缺」重新请回经济学中心的书。穆来纳森与沙菲尔的实验显示：稀缺不只是资源不足的状态，还是一种心智状态——稀缺使注意力集中于眼前最紧的事（「隧道视野」），同时稀释对其他问题的关注。贫穷的人不是愚蠢，而是时刻被钱的计算占用带宽；忙碌的人不是低效，而是带宽被期限占满。带宽负担导致短视与冲动消费，形成贫穷的自我强化循环。富者虽富，同样为时间的稀缺买单。这本书把「稀缺经济学」接到心理学上：给穷人留出带宽、给忙碌者腾出余闲，是制度设计的新维度——与助推的选择架构互为表里。',
  },
  {
    id: 'capital-21',
    title: '21 世纪资本论',
    en: 'Capital in the Twenty-First Century',
    year: 2013,
    school: 'contemporary',
    authors: [{ name: '托马斯·皮凯蒂', peopleId: 'piketty' }],
    cover: 'https://covers.openlibrary.org/b/isbn/9780674430006-L.jpg?default=false',
    fallback: '/books/capital-21.svg',
    summary:
      '让「不平等」回到宏观经济学中心的书。皮凯蒂用二十个国家的税务与遗产数据拼出三百年的资本/收入比曲线：除战争与萧条的破坏区间外，资本收入比长期上升，资本收益率 r 稳定在 4%-5%，而经济增长 g 长期徘徊在 1%-2%——r > g 意味着财富增长快于总收入，继承财富的份额随之扩大，世袭资本主义回归。库兹涅茨「增长会自动抚平不平等」的乐观被数据推翻。他提议理想的解法是全球累进的财富税——这个建议的可行性比统计本身更富争议，但此后「资本税」「r > g」成为各国政策辩论的默认语汇，也正是这本书影响力的量度。',
  },
]

export const BOOKS_BY_ID: Record<string, Book> = Object.fromEntries(
  BOOKS.map((b) => [b.id, b]),
)