// 本文件由 scripts/build-glossary.cjs 从《经济学-术语.md》生成，请勿手改。
// 用法：pnpm glossary

export interface GlossaryEntry {
  term: string
  course: string
  def: string
  source: string | null
}

export const GLOSSARY: GlossaryEntry[] = [
  {
    "term": "IS 曲线",
    "course": "西方经济学",
    "def": "IS 曲线是将产品市场处于均衡的收入与利息率的组合描述出来的曲线。",
    "source": "/western/产品市场和货币市场的一般均衡"
  },
  {
    "term": "LM 曲线",
    "course": "西方经济学",
    "def": "LM 是描述货币市场处于均衡的利息率和国民收入的组合曲线。",
    "source": "/western/产品市场和货币市场的一般均衡"
  },
  {
    "term": "个人可支配收入",
    "course": "西方经济学",
    "def": "个人可支配收入（DPI）是指个人收入扣除个人所得税后，实际可用于消费和储蓄的那部分收入。公式：DPI = 个人收入 − 个人所得税。",
    "source": "/western/宏观经济活动与宏观经济学"
  },
  {
    "term": "交换与生产同时符合帕累托最优的条件",
    "course": "西方经济学",
    "def": "交换与生产同时符合帕累托最优的条件是指所有产品中任意两种产品的边际替代率等于这两种产品在生产中的边际转换率，即 <span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>R</mi><mi>C</mi><msub><mi>S</mi><mrow><mi>X</mi><mi>Y</mi></mrow></msub><mo>=</mo><mi>R</mi><mi>P</mi><msub><mi>T</mi><mrow><mi>X</mi><mi>Y</mi></mrow></msub></mrow><annotation encoding=\"application/x-tex\">RCS_{XY}=RPT_{XY}</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:0.8333em;vertical-align:-0.15em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0077em;\">R</span><span class=\"mord mathnormal\" style=\"margin-right:0.0715em;\">C</span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3283em;\"><span style=\"top:-2.55em;margin-left:-0.0576em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"katex-sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0785em;\">X</span><span class=\"mord mathnormal mtight\" style=\"margin-right:0.2222em;\">Y</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:0.8333em;vertical-align:-0.15em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0077em;\">R</span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">P</span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3283em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"katex-sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0785em;\">X</span><span class=\"mord mathnormal mtight\" style=\"margin-right:0.2222em;\">Y</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span> 。",
    "source": "/western/一般均衡论和福利经济学"
  },
  {
    "term": "交换符合帕累托最优的条件",
    "course": "西方经济学",
    "def": "交换符合帕累托最优条件是指在交换方面，任何一对商品之间的边际替代率对任何使用这两种商品的个人来说都相等，即 <span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>R</mi><mi>C</mi><msubsup><mi>S</mi><mn>12</mn><mi>A</mi></msubsup><mo>=</mo><mi>R</mi><mi>C</mi><msubsup><mi>S</mi><mn>12</mn><mi>B</mi></msubsup></mrow><annotation encoding=\"application/x-tex\">RCS_{12}^{A} = RCS_{12}^B</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:1.0894em;vertical-align:-0.2481em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0077em;\">R</span><span class=\"mord mathnormal\" style=\"margin-right:0.0715em;\">C</span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8413em;\"><span style=\"top:-2.4519em;margin-left:-0.0576em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"katex-sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">12</span></span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"katex-sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">A</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2481em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:1.0894em;vertical-align:-0.2481em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0077em;\">R</span><span class=\"mord mathnormal\" style=\"margin-right:0.0715em;\">C</span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8413em;\"><span style=\"top:-2.4519em;margin-left:-0.0576em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"katex-sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">12</span></span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"katex-sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0502em;\">B</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2481em;\"><span></span></span></span></span></span></span></span></span></span> ，此时该社会达到了产品分配的帕累托最优状态，从而实现了交换的效率。",
    "source": "/western/一般均衡论和福利经济学"
  },
  {
    "term": "产品转换率",
    "course": "西方经济学",
    "def": "边际转换率是指增加另一种商品产出的数量必须减少某种商品产出数量的比例。",
    "source": "/western/一般均衡论和福利经济学"
  },
  {
    "term": "价格歧视",
    "course": "西方经济学",
    "def": "价格歧视是指垄断厂商在同一时期内，以不同的价格销售同一种商品。",
    "source": "/western/市场理论"
  },
  {
    "term": "价格调整方程",
    "course": "西方经济学",
    "def": "价格调整方程指用来表示通胀率与产生通胀压力之间关系的方程。",
    "source": "/western/通货膨胀理论"
  },
  {
    "term": "供给",
    "course": "西方经济学",
    "def": "供给是指在其他条件不变的情况下，在一定时期内生产者在各种可能的价格下愿意而且能够提供的该商品的数量。",
    "source": "/western/需求与供给"
  },
  {
    "term": "供给的价格弹性",
    "course": "西方经济学",
    "def": "供给的价格弹性是指，在一定时期内，一种商品的供给量的变动对于该商品的价格的变动的反应程度。",
    "source": "/western/需求与供给"
  },
  {
    "term": "供给规律",
    "course": "西方经济学",
    "def": "供给规律也称为供给定理、供给法则或供给原则，是指生产者的供给量与商品价格之间呈同方向变化的规律。",
    "source": "/western/需求与供给"
  },
  {
    "term": "免费乘车者问题",
    "course": "西方经济学",
    "def": "免费乘车者问题是指经济中由于存在不支付即可获得消费满足而产生的市场失灵问题。",
    "source": "/western/市场失灵和微观经济政策"
  },
  {
    "term": "公共物品",
    "course": "西方经济学",
    "def": "通常把不具备排他性或（和）竞争性，一旦生产出来就不可能把某些人排除在外的商品称为（纯）公共物品。",
    "source": "/western/市场失灵和微观经济政策"
  },
  {
    "term": "单一货币规则",
    "course": "西方经济学",
    "def": "单一货币规则是货币主义的政策主张，是货币主义经济学最重要的理论规则。",
    "source": "/western/宏观经济学的意见分歧"
  },
  {
    "term": "厂商利润最大化原则",
    "course": "西方经济学",
    "def": "厂商利润最大化原则是厂商做生产决策时所遵循的一般原则，它要求每增加一单位产品（或要素）所增加的收益等于由此带来的成本增加量，即边际收益等于边际成本： <span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>M</mi><mi>R</mi><mo>=</mo><mi>M</mi><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">MR =MC</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">M</span><span class=\"mord mathnormal\" style=\"margin-right:0.0077em;\">R</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">M</span><span class=\"mord mathnormal\" style=\"margin-right:0.0715em;\">C</span></span></span></span> 。",
    "source": "/western/市场理论"
  },
  {
    "term": "古诺模型",
    "course": "西方经济学",
    "def": "古诺模型是一个只有两个寡头厂商的简单模型，即双头模型。",
    "source": "/western/市场理论"
  },
  {
    "term": "名义的和实际的国民收入",
    "course": "西方经济学",
    "def": "（1）名义的国民收入是按物品和劳务当年的价格计算所得的国民收入，它没有考虑通货膨胀因素。（2）实际的国民收入是以从前某一年为基年，按基年价格计算所得的国民收入，或者说是用价格指数折算之后的国民收入。",
    "source": "/western/宏观经济活动与宏观经济学"
  },
  {
    "term": "向后弯曲的劳动供给曲线",
    "course": "西方经济学",
    "def": "根据劳动者的最优化行为，对应于一个特定的工资率，劳动者在效用最大化点上确定最优劳动供给量，从而得到劳动的供给曲线。",
    "source": "/western/生产要素市场"
  },
  {
    "term": "哈罗德-多马模型",
    "course": "西方经济学",
    "def": "哈罗德-多马模型是 20 世纪 40 年代由哈罗德和多马相继提出的分析经济增长问题的模型。",
    "source": "/western/经济增长"
  },
  {
    "term": "商品的边际替代率",
    "course": "西方经济学",
    "def": "商品的边际替代率指在效用水平保持不变的前提条件下，消费者增加一单位第一种商品的消费所需要放弃的另外一种商品的消费数量。",
    "source": "/western/效用论"
  },
  {
    "term": "国内生产总值",
    "course": "西方经济学",
    "def": "国内生产总值（GDP）是指经济社会（一国或一个地区）在一定时期内运用生产要素所生产的全部最终产品和劳务的市场价值总和。",
    "source": "/western/宏观经济活动与宏观经济学"
  },
  {
    "term": "国民生产总值",
    "course": "西方经济学",
    "def": "国民生产总值（GNP）是指某国国民在一个既定的时期内所拥有的全部生产要素所生产的最终产品的市场价值总和，即本国常住居民所生产的最终产品市场价值的总和。",
    "source": "/western/宏观经济活动与宏观经济学"
  },
  {
    "term": "均衡价格",
    "course": "西方经济学",
    "def": "均衡价格是指商品的市场需求量与市场供给量相等时的价格。",
    "source": "/western/需求与供给"
  },
  {
    "term": "垄断竞争市场",
    "course": "西方经济学",
    "def": "垄断竞争市场是指一种由许多厂商生产和销售有差别的同种产品的市场，市场中既有垄断又有竞争，既不是完全竞争又不是完全垄断。",
    "source": "/western/市场理论"
  },
  {
    "term": "外在性",
    "course": "西方经济学",
    "def": "外在性又称外部经济影响，是指一个经济行为主体的经济活动对另一个经济主体的福利所产生的效应，但这种效应并没有通过市场交易反映出来。",
    "source": "/western/市场失灵和微观经济政策"
  },
  {
    "term": "外在经济和外在不经济",
    "course": "西方经济学",
    "def": "外在经济是指某一经济个体的一项经济活动给社会其他成员带来好处，但该个体并未获得相应的补偿，即其经济活动带来了正的外在影响；外在不经济是指某一经济个体的一项经济活动给社会其他成员带来成本，但该个体并不需要承担相应的全部成本，即其经济活动带来了负的外在影响。",
    "source": "/western/市场理论"
  },
  {
    "term": "失业率",
    "course": "西方经济学",
    "def": "失业率是指一定时期内失业人数占劳动力总数（就业人数与失业人数之和）的比率。",
    "source": "/western/宏观经济活动与宏观经济学"
  },
  {
    "term": "完全竞争市场",
    "course": "西方经济学",
    "def": "完全竞争市场是指一种竞争不受任何阻碍和干扰的市场结构。",
    "source": "/western/市场理论"
  },
  {
    "term": "寡头垄断市场",
    "course": "西方经济学",
    "def": "寡头垄断市场指那种在某一产业只存在少数几个卖者的市场组织形式。",
    "source": "/western/市场理论"
  },
  {
    "term": "局部均衡和一般均衡",
    "course": "西方经济学",
    "def": "局部均衡是指在假设其他市场不变的情况下，某一特定产品或要素的市场均衡。",
    "source": "/western/一般均衡论和福利经济学"
  },
  {
    "term": "市场出清",
    "course": "西方经济学",
    "def": "市场出清是指，无论劳动市场上的工资还是产品市场上的商品价格都具有充分的灵活性，可以根据供求情况迅速进行调整，以达到供求相等的均衡状态。",
    "source": "/western/宏观经济学的意见分歧"
  },
  {
    "term": "市场失灵",
    "course": "西方经济学",
    "def": "市场失灵是指市场机制不能有效地配置资源。",
    "source": "/western/市场失灵和微观经济政策"
  },
  {
    "term": "帕累托最优状态",
    "course": "西方经济学",
    "def": "帕累托最优状态又称作经济效率，是指没有人可以在不使得他人境况变坏的条件下使得自身境况得到改善，此时的状态被称为帕累托最优状态。",
    "source": "/western/一般均衡论和福利经济学"
  },
  {
    "term": "平均成本",
    "course": "西方经济学",
    "def": "平均成本是指厂商平均每生产一单位产品所消耗的成本。",
    "source": "/western/生产和成本论"
  },
  {
    "term": "平均要素成本",
    "course": "西方经济学",
    "def": "平均要素成本是厂商购买每单位生产要素平均支付的成本。",
    "source": "/western/生产要素市场"
  },
  {
    "term": "引致需求",
    "course": "西方经济学",
    "def": "引致需求又称“派生需求”，指由于消费者对产品的需求而引起的企业对生产要素的需求。",
    "source": "/western/生产要素市场"
  },
  {
    "term": "总供给曲线",
    "course": "西方经济学",
    "def": "总供给曲线是表示经济中的总供给量与价格总水平之间关系的曲线，总供给量通常与价格总水平呈同向变动关系，曲线向右上方倾斜。",
    "source": "/western/总需求和总供给分析"
  },
  {
    "term": "总收益、平均收益和边际收益",
    "course": "西方经济学",
    "def": "（1）厂商的总收益（ <span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mi>R</mi></mrow><annotation encoding=\"application/x-tex\">TR</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"mord mathnormal\" style=\"margin-right:0.0077em;\">R</span></span></span></span> ）是指厂商按照一定价格出售一定量产品所获得的全部收入，即： <span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mi>R</mi><mo>=</mo><mi>p</mi><mo stretchy=\"false\">(</mo><mi>y</mi><mo stretchy=\"false\">)</mo><mo>⋅</mo><mi>y</mi></mrow><annotation encoding=\"application/x-tex\">TR=p(y)\\cdot y</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"mord mathnormal\" style=\"margin-right:0.0077em;\">R</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\">p</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">⋅</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span></span></span></span> 。式中的 <span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mi>R</mi></mrow><annotation encoding=\"application/x-tex\">TR</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"mord mathnormal\" style=\"margin-right:0.0077em;\">R</span></span></span></span> 为总收益，<span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>p</mi><mo stretchy=\"false\">(</mo><mi>y</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">p(y)</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\">p</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span></span></span></span> 为既定的市场价格，<span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>y</mi></mrow><annotation encoding=\"application/x-tex\">y</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span></span></span></span> 为销售总量。",
    "source": "/western/市场理论"
  },
  {
    "term": "总需求曲线",
    "course": "西方经济学",
    "def": "总需求曲线是表示经济当中的总需求量与价格总水平之间对应关系的曲线，总需求量通常与价格总水平呈反向变动关系，曲线向右下方倾斜。",
    "source": "/western/总需求和总供给分析"
  },
  {
    "term": "成本推动的通货膨胀",
    "course": "西方经济学",
    "def": "成本推动通货膨胀又称成本通货膨胀或供给通货膨胀，指由于供给成本的提高而引起的一般价格水平持续和显著的上涨。",
    "source": "/western/通货膨胀理论"
  },
  {
    "term": "投资函数",
    "course": "西方经济学",
    "def": "以资本的边际效率不变为条件，投资取决于利息率，并且是利率的减函数，投资与利息率呈反方向变动关系，用公式表示为： <span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>I</mi><mo>=</mo><mi>I</mi><mo stretchy=\"false\">(</mo><mi>r</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">I=I(r)</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0785em;\">I</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0785em;\">I</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">r</span><span class=\"mclose\">)</span></span></span></span> 。",
    "source": "/western/产品市场和货币市场的一般均衡"
  },
  {
    "term": "支持价格",
    "course": "西方经济学",
    "def": "支持价格又称为最低限价，是指政府为了扶植某一行业的生产而规定的该行业产品的最低价格。",
    "source": "/western/需求与供给"
  },
  {
    "term": "收入指数化",
    "course": "西方经济学",
    "def": "收入指数化是指政府对付成本推动的通货膨胀时采取的一项措施。",
    "source": "/western/通货膨胀理论"
  },
  {
    "term": "收入效应",
    "course": "西方经济学",
    "def": "收入效应是因商品价格变动引起消费者实际收入水平变动，进而引起消费者改变消费数量而对商品需求量产生的影响。",
    "source": "/western/效用论"
  },
  {
    "term": "效用",
    "course": "西方经济学",
    "def": "效用是指商品或劳务满足人的欲望的能力，即指消费者在消费商品或劳务时所感受到的满足程度。",
    "source": "/western/效用论"
  },
  {
    "term": "新古典增长模型",
    "course": "西方经济学",
    "def": "新古典经济增长模型是指由美国经济学家索洛等提出的国民经济增长模型。",
    "source": "/western/经济增长"
  },
  {
    "term": "新古典宏观经济学",
    "course": "西方经济学",
    "def": "新古典宏观经济学，又称作“新古典主义”的一个经济学流派，这个学派的经济学遵循古典经济学的传统，相信市场力量的有效性；认为如果让市场机制自发地发挥作用，就可以解决失业、衰退等一系列宏观经济问题。",
    "source": "/western/宏观经济学的意见分歧"
  },
  {
    "term": "无差异曲线",
    "course": "西方经济学",
    "def": "无差异曲线是序数效用论的一种分析方法，是用来表示消费者偏好相同的两种商品的所有的数量组合。",
    "source": "/western/效用论"
  },
  {
    "term": "替代效应",
    "course": "西方经济学",
    "def": "由商品的价格变动所引起的商品相对价格的变动，进而由商品的相对价格变动所引起的商品需求量的变动，称为替代效应。",
    "source": "/western/效用论"
  },
  {
    "term": "有保证的增长率",
    "course": "西方经济学",
    "def": "有保证的增长率 <span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>G</mi><mi>w</mi></msub></mrow><annotation encoding=\"application/x-tex\">G_w</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:0.8333em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">G</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"katex-sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0269em;\">w</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span> ，其公式为 <span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>G</mi><mi>w</mi></msub><mo>=</mo><mfrac><msub><mi>S</mi><mi>d</mi></msub><msub><mi>v</mi><mi>r</mi></msub></mfrac></mrow><annotation encoding=\"application/x-tex\">G_w=\\frac{S_d}{v_r}</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:0.8333em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">G</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"katex-sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0269em;\">w</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:1.3393em;vertical-align:-0.4451em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8942em;\"><span style=\"top:-2.655em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"katex-sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0359em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1645em;\"><span style=\"top:-2.357em;margin-left:-0.0359em;margin-right:0.0714em;\"><span class=\"pstrut\" style=\"height:2.5em;\"></span><span class=\"katex-sizing reset-size3 size1 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0278em;\">r</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.143em;\"><span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.4159em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"katex-sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3448em;\"><span style=\"top:-2.3488em;margin-left:-0.0576em;margin-right:0.0714em;\"><span class=\"pstrut\" style=\"height:2.5em;\"></span><span class=\"katex-sizing reset-size3 size1 mtight\"><span class=\"mord mathnormal mtight\">d</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1512em;\"><span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.4451em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span></span></span></span>，式中，<span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>S</mi><mi>d</mi></msub></mrow><annotation encoding=\"application/x-tex\">S_d</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:0.8333em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3361em;\"><span style=\"top:-2.55em;margin-left:-0.0576em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"katex-sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">d</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span> 是合意的储蓄率（假设既定），<span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>v</mi><mi>r</mi></msub></mrow><annotation encoding=\"application/x-tex\">v_r</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:0.5806em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"katex-sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0278em;\">r</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span> 是企业家意愿中所需的资本—产量比率。",
    "source": "/western/经济增长"
  },
  {
    "term": "比较静态分析",
    "course": "西方经济学",
    "def": "比较静态分析是比较分析不同静态均衡状态的方法。",
    "source": "/western/需求与供给"
  },
  {
    "term": "流动偏好",
    "course": "西方经济学",
    "def": "流动偏好也称流动性偏好，是指人们持有货币的偏好。",
    "source": "/western/产品市场和货币市场的一般均衡"
  },
  {
    "term": "流动偏好陷阱",
    "course": "西方经济学",
    "def": "流动性陷阱又称凯恩斯陷阱，是指当利率水平极低时，人们对货币的投机性需求趋于无限大，货币当局即使增加货币供给，也难以继续压低利率并刺激投资的一种经济状态。",
    "source": "/western/产品市场和货币市场的一般均衡"
  },
  {
    "term": "消费物价指数",
    "course": "西方经济学",
    "def": "消费物价指数是消费者物价指数的简称，它反映消费品（包括劳务）价格水平变动状况，一般用加权平均法来编制。",
    "source": "/western/通货膨胀理论"
  },
  {
    "term": "消费者均衡",
    "course": "西方经济学",
    "def": "消费者均衡是指在其他条件不变的情况下，消费者实现效用最大化并将保持不变的一种状态。",
    "source": "/western/效用论"
  },
  {
    "term": "理性预期假设",
    "course": "西方经济学",
    "def": "理性预期假说是指经济当事人对价格、利率、利润或收入等经济变量未来的变动可以作出符合理性的估计。",
    "source": "/western/宏观经济学的意见分歧"
  },
  {
    "term": "瓦尔拉斯定律",
    "course": "西方经济学",
    "def": "瓦尔拉斯定律也称为瓦尔拉斯法则，是由经济学家瓦尔拉斯在其完全竞争市场的一般均衡理论体系中提出一个恒等关系式。",
    "source": "/western/一般均衡论和福利经济学"
  },
  {
    "term": "生产符合帕累托最优的条件",
    "course": "西方经济学",
    "def": "生产符合帕累托最优的条件指对于有多个个人、多种商品、多种生产要素的经济，达到均衡时要求在生产方面，任何一对生产要素之间的边际技术替代率在用这两种投入要素生产的所有商品的生产中都相等，即 <span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>R</mi><mi>T</mi><msubsup><mi>S</mi><mrow><mi>L</mi><mi>K</mi></mrow><mn>1</mn></msubsup><mo>=</mo><mi>R</mi><mi>T</mi><msubsup><mi>S</mi><mrow><mi>L</mi><mi>K</mi></mrow><mn>2</mn></msubsup></mrow><annotation encoding=\"application/x-tex\">RTS_{LK}^{1} = RTS_{LK}^2</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:1.0894em;vertical-align:-0.2753em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0077em;\">R</span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8141em;\"><span style=\"top:-2.4247em;margin-left:-0.0576em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"katex-sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">L</span><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0715em;\">K</span></span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"katex-sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">1</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2753em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:1.0894em;vertical-align:-0.2753em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0077em;\">R</span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8141em;\"><span style=\"top:-2.4247em;margin-left:-0.0576em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"katex-sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">L</span><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0715em;\">K</span></span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"katex-sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2753em;\"><span></span></span></span></span></span></span></span></span></span> ，此时该社会达到了帕累托最优状态。",
    "source": "/western/一般均衡论和福利经济学"
  },
  {
    "term": "生产要素最优组合",
    "course": "西方经济学",
    "def": "生产要素最优组合是指在生产技术和要素价格不变的条件下，生产者在成本既定时实现产量最大或在产量既定时实现成本最小目标时所使用的各种生产要素的数量组合。",
    "source": "/western/生产和成本论"
  },
  {
    "term": "科斯定理",
    "course": "西方经济学",
    "def": "科斯定理是一种产权理论。",
    "source": "/western/市场失灵和微观经济政策"
  },
  {
    "term": "等产量曲线",
    "course": "西方经济学",
    "def": "等产量曲线是在技术水平不变的条件下，生产同一产量的两种生产要素投入量的各种不同组合的轨迹。",
    "source": "/western/生产和成本论"
  },
  {
    "term": "等成本方程",
    "course": "西方经济学",
    "def": "厂商的等成本方程是指在要素价格一定的条件下，表示厂商花费相同成本可以使用的所有不同的要素组合的代数式。",
    "source": "/western/生产和成本论"
  },
  {
    "term": "纳什均衡",
    "course": "西方经济学",
    "def": "纳什均衡指的是这样一种策略组合：如果其他参与者不改变策略，任何一个参与者都不会改变自己的策略。",
    "source": "/western/市场理论"
  },
  {
    "term": "自然率假说",
    "course": "西方经济学",
    "def": "自然率假说是指在没有货币因素干扰的情况下，劳动市场在竞争条件下达到均衡时所决定的就业率。",
    "source": "/western/宏观经济学的意见分歧"
  },
  {
    "term": "菲利普斯曲线",
    "course": "西方经济学",
    "def": "菲利普斯曲线由英国经济学家 A.W. 菲利普斯首先提出；其原始研究描述的是失业率与货币工资增长率之间的负相关关系，后来才常被引申为通货膨胀率与失业率之间的短期替代关系。",
    "source": "/western/宏观经济学的意见分歧"
  },
  {
    "term": "规模收益递增、不变和递减",
    "course": "西方经济学",
    "def": "作为规模经济与规模不经济的一种特殊的情况，如果产量的增加是借助于生产要素的同比例扩大实现的，那么相应的可定义规模收益的概念：①如果产量增加的比例大于生产要素增加的比例，则称生产是规模收益递增的；②若产量增加的比例等于生产要素增加的比例，则称生产是规模收益不变的；③若产量增加的比例小于生产要素增加的比例，则称生产是规模收益递减的。",
    "source": "/western/生产和成本论"
  },
  {
    "term": "规模经济与规模不经济",
    "course": "西方经济学",
    "def": "规模经济和规模不经济用来说明厂商产量变动从而规模变动与成本之间的关系。",
    "source": "/western/生产和成本论"
  },
  {
    "term": "货币主义",
    "course": "西方经济学",
    "def": "货币主义又称货币学派，它以制止通货膨胀和反对国家干预为主旨，以现代货币数量论为理论基础，坚信货币供给量的变动是物价水平和经济活动变动的最根本原因；强调货币及货币政策的重要性，主张实行单一规则的货币政策。",
    "source": "/western/宏观经济学的意见分歧"
  },
  {
    "term": "货币工资刚性",
    "course": "西方经济学",
    "def": "货币工资刚性是指货币工资不随劳动需求和供给的变化而迅速做出相应的调整的现象。",
    "source": "/western/总需求和总供给分析"
  },
  {
    "term": "资本的边际效率",
    "course": "西方经济学",
    "def": "资本的边际效率是一种贴现率，这一贴现率恰好使一项资本品在使用期内各预期收益的贴现值之和等于该项资本品的供给价格或重置成本。",
    "source": "/western/产品市场和货币市场的一般均衡"
  },
  {
    "term": "边际产品价值",
    "course": "西方经济学",
    "def": "边际产品价值指增加一单位生产要素所增加的产量的价值，它等于边际产量与产品价格的乘积，即： <span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>V</mi><mi>M</mi><mi>P</mi><mo>=</mo><mi>P</mi><mo>⋅</mo><mi>M</mi><mi>P</mi></mrow><annotation encoding=\"application/x-tex\">VMP=P \\cdot MP</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">M</span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">P</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">P</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">⋅</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">M</span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">P</span></span></span></span> 。",
    "source": "/western/生产要素市场"
  },
  {
    "term": "边际产量",
    "course": "西方经济学",
    "def": "边际产量是指在生产技术水平和其他投入要素不变的情况下，每增加一单位可变投入要素所得到的总产量的增加量。",
    "source": "/western/生产和成本论"
  },
  {
    "term": "边际成本",
    "course": "西方经济学",
    "def": "边际成本是指产量变动某一数量所引起的成本变动的数量，也即厂商在短期内增加一单位产量时所增加的总成本。",
    "source": "/western/生产和成本论"
  },
  {
    "term": "边际技术替代率",
    "course": "西方经济学",
    "def": "在维持产量水平不变的条件下，增加一单位某种生产要素投入量时所减少的另一种要素的投入数量，被称为边际技术替代率，其英文缩写为 <span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>M</mi><mi>R</mi><mi>T</mi><mi>S</mi></mrow><annotation encoding=\"application/x-tex\">MRTS</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">M</span><span class=\"mord mathnormal\" style=\"margin-right:0.0077em;\">R</span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span></span></span></span> 。",
    "source": "/western/生产和成本论"
  },
  {
    "term": "边际技术替代率递减规律",
    "course": "西方经济学",
    "def": "边际技术替代率递减规律是指，在维持产量不变的前提下，当一种生产要素的投入量不断增加时，每一单位的这种生产要素所能替代的另一种生产要素的数量是递减的。",
    "source": "/western/生产和成本论"
  },
  {
    "term": "边际收益产品",
    "course": "西方经济学",
    "def": "边际收益产品是指在其他生产要素的投入量固定不变时追加一单位的某种生产要素投入所带来的收益。",
    "source": "/western/生产要素市场"
  },
  {
    "term": "边际收益递减规律",
    "course": "西方经济学",
    "def": "在技术水平不变的条件下，在连续等量地把某一种可变生产要素增加到其他一种或几种数量不变的生产要素上去的过程中，当这种可变生产要素的投入量小于某一特定值时，增加该要素投入所带来的边际产量是递增的；当这种可变要素的投入量连续增加并超过这个特定值时，增加该要素投入所带来的边际产量是递减的。",
    "source": "/western/生产和成本论"
  },
  {
    "term": "边际效用递减规律",
    "course": "西方经济学",
    "def": "边际效用递减规律是指特定时期内，在其他商品的消费保持不变的条件下，消费者不断地增加某种商品的消费量，随着该商品消费数量的增加，消费者每增加一单位该商品的消费所获得的效用增加量逐渐减少。",
    "source": "/western/效用论"
  },
  {
    "term": "边际要素成本",
    "course": "西方经济学",
    "def": "边际要素成本是指厂商增加一单位生产要素投入量所带来的成本增加量。",
    "source": "/western/生产要素市场"
  },
  {
    "term": "逆向选择",
    "course": "西方经济学",
    "def": "逆向选择指在次品市场上出现的高质量产品遭淘汰而低质量产品生存下来的现象。",
    "source": "/western/市场失灵和微观经济政策"
  },
  {
    "term": "道德风险",
    "course": "西方经济学",
    "def": "道德风险是指交易双方在签订交易合约后，信息占优势的一方为了最大化自己的收益而损坏另一方，同时也不承担后果的一种行为，即是市场的一方不能查知另一方的行动一种情形，又被称作隐藏行动问题。",
    "source": "/western/市场失灵和微观经济政策"
  },
  {
    "term": "长期平均成本曲线",
    "course": "西方经济学",
    "def": "长期平均成本曲线（ <span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>L</mi><mi>A</mi><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">LAC</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\">L</span><span class=\"mord mathnormal\">A</span><span class=\"mord mathnormal\" style=\"margin-right:0.0715em;\">C</span></span></span></span> ）是用于描述长期平均成本与产量关系的一条曲线。",
    "source": "/western/生产和成本论"
  },
  {
    "term": "限制价格",
    "course": "西方经济学",
    "def": "限制价格是指政府为了防止某些生活必需品的价格上涨而规定的这些产品的最高价格。",
    "source": "/western/需求与供给"
  },
  {
    "term": "需求",
    "course": "西方经济学",
    "def": "消费者对一种商品的需求，是指在一个特定时期内消费者在各种可能的价格下愿意而且能够购买的该商品的数量。",
    "source": "/western/需求与供给"
  },
  {
    "term": "需求拉动的通货膨胀",
    "course": "西方经济学",
    "def": "需求拉动通货膨胀是指由总需求增加所引起的一般价格水平的持续和显著的上涨。",
    "source": "/western/通货膨胀理论"
  },
  {
    "term": "需求的交叉弹性",
    "course": "西方经济学",
    "def": "需求的交叉弹性是指在某特定时间内，某种商品或劳务需求量变动的百分比与另一种相关商品或劳务的价格变动百分比之比。",
    "source": "/western/需求与供给"
  },
  {
    "term": "需求的价格弹性",
    "course": "西方经济学",
    "def": "需求的价格弹性反映了相应于价格的变动，需求量变动的敏感程度，用弹性系数加以衡量，被定义为需求量变动的百分比除以价格变动的百分比。",
    "source": "/western/需求与供给"
  },
  {
    "term": "需求的收入弹性",
    "course": "西方经济学",
    "def": "需求的收入弹性是指相应于消费者收入的变动，需求量变动的敏感程度，其弹性系数定义为需求量变动的百分比除以收入变动的百分比。",
    "source": "/western/需求与供给"
  },
  {
    "term": "需求规律",
    "course": "西方经济学",
    "def": "需求规律也称为需求定理、需求法则或需求原则，指消费者的需求量与商品价格之间呈反方向变化的规律。",
    "source": "/western/需求与供给"
  },
  {
    "term": "预算约束线",
    "course": "西方经济学",
    "def": "预算约束线又称为预算线、消费可能线和价格线，表示在消费者的收入和商品的价格给定的条件下，消费者的全部收入所能购买到的两种商品的各种组合。",
    "source": "/western/效用论"
  },
  {
    "term": "收入-消费曲线",
    "course": "西方经济学",
    "def": "在消费者的偏好和商品的价格不变的条件下，消费者的收入变动引起的消费者效用最大化的均衡点的轨迹。它反映收入变化引起的消费量变动的情况。",
    "source": "/western/效用论"
  },
  {
    "term": "基数效用论",
    "course": "西方经济学",
    "def": "基数效用论认为效用可以用基数（1, 2, 3…）来衡量和加总，消费者通过比较不同商品组合的效用来做出选择。",
    "source": "/western/效用论"
  },
  {
    "term": "政府购买乘数",
    "course": "西方经济学",
    "def": "政府购买乘数是指政府购买支出变动所引起的国民收入变动量与政府购买支出变动量的比率。",
    "source": "/western/简单国民收入决定理论"
  },
  {
    "term": "一价定律",
    "course": "国际经济学",
    "def": "一价定律是关于在自由贸易条件下国际商品价格定价规律的一种理论。",
    "source": "/international/汇率决定的一般理论"
  },
  {
    "term": "倾销",
    "course": "国际经济学",
    "def": "倾销是指出口商以低于国内市场价格的价格，甚至以低于成本的价格在国际市场销售商品的行为。",
    "source": "/international/国际贸易政策分析"
  },
  {
    "term": "偿债率",
    "course": "国际经济学",
    "def": "偿债率是指一国在某一时期，所举借外债的还本付息额与其各种出口收入总和之比。",
    "source": "/international/要素的国际流动"
  },
  {
    "term": "关税同盟",
    "course": "国际经济学",
    "def": "关税同盟是指两个或两个以上国家结盟划为一个关税区域，在区域内相互取消关税与非关税壁垒，实行自由贸易，同时对非加盟国实行统一的关税和贸易限制的关税区域。",
    "source": "/international/经济一体化与国际经济秩序分析"
  },
  {
    "term": "关税壁垒与非关税壁垒",
    "course": "国际经济学",
    "def": "关税壁垒是指为了保护本国市场、扶持本国某些产业发展，对进口商品征收关税，特别是高额关税，以限制外国商品进口的贸易措施。",
    "source": "/international/国际贸易政策分析"
  },
  {
    "term": "升水与贴水",
    "course": "国际经济学",
    "def": "升水是贴水的对称，两者描述远期汇率与即期汇率的偏离方向：升水是指一种货币的远期汇率高于其即期汇率，贴水是指远期汇率低于即期汇率；在直接标价法下，外币远期升水表示外币币值上涨（远期汇率上升），贴水表示外币币值下跌（远期汇率下降）。",
    "source": "/international/汇率决定的一般理论"
  },
  {
    "term": "固定借贷",
    "course": "国际经济学",
    "def": "固定借贷是指国际借贷中形成了借贷关系，但尚未进入实际支付的那种债权、债务关系。",
    "source": "/international/汇率决定的一般理论"
  },
  {
    "term": "固定汇率与浮动汇率",
    "course": "国际经济学",
    "def": "固定汇率是指政府用行政手段或法律手段选择一基本参照物，并确定、公布和维持本国货币与该单位参照物的固定比价的汇率制度。",
    "source": "/international/汇率决定的一般理论"
  },
  {
    "term": "国际分工",
    "course": "国际经济学",
    "def": "国际分工即各国之间的劳动分工，生产的国际专业化。",
    "source": "/international/绪论"
  },
  {
    "term": "国际收支",
    "course": "国际经济学",
    "def": "国际收支的概念有狭义和广义之分。狭义的国际收支指一国在一定时期（一般为一年）内，同其他国家由于贸易、劳务、资本等往来而引起的资产转移，仅计入现在或将来有外汇收支的交易；广义的国际收支指在特定时期内，一个经济体与世界其他地方的各项经济交易，包括货物、服务与收入交易，金融资产和负债交易，以及无偿转让。",
    "source": "/international/国际收支分析"
  },
  {
    "term": "国际经济学",
    "course": "国际经济学",
    "def": "国际经济学是指以经济学的一般理论为基础来研究国际经济活动与国际经济关系的经济学分支学科。",
    "source": "/international/绪论"
  },
  {
    "term": "外汇",
    "course": "国际经济学",
    "def": "外汇是货币行政当局（中央银行、货币机构、外汇平准基金组织以及财政部）以银行存款、财政部库券、长短期政府证券等形式保有的在国际收支逆差时可以用作支付使用的国际支付手段或债权。",
    "source": "/international/汇率决定的一般理论"
  },
  {
    "term": "官方储备",
    "course": "国际经济学",
    "def": "官方储备是指一个国家的中央银行或其他官方货币机构所掌握的外币储备资产及其对外债权。",
    "source": "/international/国际收支分析"
  },
  {
    "term": "幼稚产业",
    "course": "国际经济学",
    "def": "如果某种产业由于技术不足、劳动生产率低下、产品成本高于世界市场，因而无法与国外产业竞争，但在关税、补贴等保护措施下继续生产一段时间，经过一段时间的生产能够在自由贸易条件下获利，达到其他国家水平而自立，形成比较优势并良性发展，这类产业就是幼稚产业。",
    "source": "/international/国际贸易政策分析"
  },
  {
    "term": "开放经济",
    "course": "国际经济学",
    "def": "开放经济也称“开放型经济”，与“封闭经济”相对，是指一个国家或地区的经济活动与世界市场或外地市场有着密切联系（如存在国际贸易、国际金融往来）的经济。",
    "source": "/international/绪论"
  },
  {
    "term": "所有权特定优势",
    "course": "国际经济学",
    "def": "所有权特定优势是指企业具有的组织管理能力、金融融资方面的优势、技术方面的特点和优势、企业的规模与其垄断地位及其他能力等优势。",
    "source": "/international/要素的国际流动"
  },
  {
    "term": "提供曲线",
    "course": "国际经济学",
    "def": "提供曲线又称为供应条件曲线，也称相互需求曲线，是由马歇尔和埃奇沃思提出的，它表明一个国家为了进口一定量的商品，必须向其他国家出口一定量的商品，因此提供曲线即对应某一进口量愿意提供的出口量的轨迹。",
    "source": "/international/国际贸易纯理论"
  },
  {
    "term": "比较利益",
    "course": "国际经济学",
    "def": "比较利益是指贸易双方根据各自的比较优势进行生产，然后交换产品而取得的贸易利益。",
    "source": "/international/国际贸易纯理论"
  },
  {
    "term": "汇率",
    "course": "国际经济学",
    "def": "汇率又称“汇价”、“外汇牌价”或“外汇行市”，指外汇买卖的价格。",
    "source": "/international/汇率决定的一般理论"
  },
  {
    "term": "流动借贷",
    "course": "国际经济学",
    "def": "流动借贷是国际金融中汇率决定理论——国际借贷学说中的重要概念。",
    "source": "/international/汇率决定的一般理论"
  },
  {
    "term": "现值债务率",
    "course": "国际经济学",
    "def": "现值债务率是指一个债务国当年未偿还债务的现值与当年国民生产总值（或出口）的比率，分为经济现值债务率（未偿债务现值占当年 GNP 的比重，临界值 80%）与出口现值债务率（未偿债务现值占当年出口的比重，临界值 20%）。",
    "source": "/international/要素的国际流动"
  },
  {
    "term": "直接标价法与间接标价法",
    "course": "国际经济学",
    "def": "直接标价法又称“应付标价法”，是指以一定单位的外国货币作为标准，折算为一定数量的本国货币，即是以本国货币来表示外国货币价格的方法。",
    "source": "/international/汇率决定的一般理论"
  },
  {
    "term": "经济全球化",
    "course": "国际经济学",
    "def": "联合国贸发会议对经济全球化定义如下：全球化是世界各国在经济上跨国界联系和相互依存日益加强的过程，运输、通讯和信息技术的迅速进步有力地促进了这一过程。",
    "source": "/international/经济全球化趋势"
  },
  {
    "term": "绝对利益",
    "course": "国际经济学",
    "def": "绝对利益是指贸易双方根据各自的绝对优势进行生产，然后交换产品而取得的贸易利益。",
    "source": "/international/国际贸易纯理论"
  },
  {
    "term": "贷方与借方项目",
    "course": "国际经济学",
    "def": "贷方项目是指在国际收支平衡表中表示一国资产减少或负债增加的项目，该项目意味着本国商品、劳务的输出或外国金融资产的流入。",
    "source": "/international/国际收支分析"
  },
  {
    "term": "贸易乘数",
    "course": "国际经济学",
    "def": "贸易乘数指乘数理论在对外贸易研究中的作用，探讨对外贸易与国民收入和就业之间的关系。",
    "source": "/international/宏观经济的内外均衡"
  },
  {
    "term": "贸易创造与贸易转移",
    "course": "国际经济学",
    "def": "贸易创造是“贸易转移”的对称，是指两国或两个以上国家之间结成关税同盟之后，签约国之间的特惠贸易协定导致成员国之间的贸易代替了过去各自的国内生产和消费，即创造出了新的贸易的现象。",
    "source": "/international/经济一体化与国际经济秩序分析"
  },
  {
    "term": "贸易条件",
    "course": "国际经济学",
    "def": "贸易条件又称“交换比价”或“贸易比价”，是指一个国家在一定时期内出口商品价格与进口商品价格之间的比例关系。",
    "source": "/international/国际贸易纯理论"
  },
  {
    "term": "边际进口倾向",
    "course": "国际经济学",
    "def": "边际进口倾向是指进口量的变动对引起这种变动的收入变动的比率，即每增加一单位国民收入的变动量所能引起进口变动的比率。",
    "source": "/international/宏观经济的内外均衡"
  },
  {
    "term": "汇兑心理理论",
    "course": "国际经济学",
    "def": "汇兑心理说是国际借贷说与购买力平价说的结合。它的理论基础是主观效用论，认为人们需要外汇是因为要购买商品和服务以满足人们的欲望，效用是外汇的价值基础，真正的价值在于其边际效用，而这又是人们主观心理决定的。",
    "source": "/international/汇率决定的一般理论"
  },
  {
    "term": "国际收支失衡",
    "course": "国际经济学",
    "def": "国际收支失衡是指经常账户、资本和金融账户的余额出现问题，即对外经济出现了需要调整的情况。",
    "source": "/international/国际收支分析"
  },
  {
    "term": "两缺口模型",
    "course": "国际经济学",
    "def": "两缺口模型由钱纳里和斯特劳特提出，认为发展中国家在经济发展过程中面临储蓄缺口和外汇缺口的约束。",
    "source": "/international/要素的国际流动"
  },
  {
    "term": "“收支两条线”管理",
    "course": "财政学",
    "def": "“收支两条线”管理是指国家机关、事业单位、社会团体及其他组织，按照国家有关规定依法取得的政府非税收入全额缴入国库或者财政专户，支出通过财政部门编制预算进行统筹安排，资金通过国库或财政专户收缴和拨付的管理制度。",
    "source": "/finance/国家预算与预算管理体制"
  },
  {
    "term": "价内税与价外税",
    "course": "财政学",
    "def": "以税收与价格的关系为标准，税收可分为价内税和价外税。",
    "source": "/finance/税收原理"
  },
  {
    "term": "免费搭车行为",
    "course": "财政学",
    "def": "免费搭车行为是指不承担任何成本而消费或使用公共物品的行为，有这种行为的人或具有让别人付钱而自己享受公共物品收益动机的人称为免费搭车者。",
    "source": "/finance/财政职能"
  },
  {
    "term": "公共定价法",
    "course": "财政学",
    "def": "公共定价法是指政府对公共企业生产的商品和服务的定价或政府对私人部门定价的管制。",
    "source": "/finance/财政支出规模与结构"
  },
  {
    "term": "分类所得税",
    "course": "财政学",
    "def": "分类所得税是指对纳税人的各种应纳税所得分为若干类别，不同类别（或来源）的所得适用不同的税率，分别课征所得税。",
    "source": "/finance/税收制度"
  },
  {
    "term": "国债发行市场",
    "course": "财政学",
    "def": "国债发行市场是指国债发行场所，又称国债一级市场或初级市场，是国债交易的初始环节，即国债最初发行的市场。",
    "source": "/finance/国债理论与管理"
  },
  {
    "term": "国债流通市场",
    "course": "财政学",
    "def": "国债流通市场又称国债二级市场，是指国债交易的第二阶段，即已经上市发行的国债进行买卖、转让和流通的市场。",
    "source": "/finance/国债理论与管理"
  },
  {
    "term": "国债限度",
    "course": "财政学",
    "def": "国债限度是指国家债务规模的最高额度或国债的适度规模。",
    "source": "/finance/国债理论与管理"
  },
  {
    "term": "国家预算",
    "course": "财政学",
    "def": "国家预算是指政府的基本财政收支计划。",
    "source": "/finance/国家预算与预算管理体制"
  },
  {
    "term": "国家预算法",
    "course": "财政学",
    "def": "国家预算法是国家预算管理的法律规范，是组织和管理国家预算的法律依据。",
    "source": "/finance/国家预算与预算管理体制"
  },
  {
    "term": "寻租行为",
    "course": "财政学",
    "def": "寻租行为是指通过游说政府活动获得某种垄断权或特许权，以赚取超常利润或租金的行为。",
    "source": "/finance/财政职能"
  },
  {
    "term": "就业创造标准",
    "course": "财政学",
    "def": "就业创造标准是指政府应当选择单位投资额能够动员最大数量劳动力的项目。",
    "source": "/finance/财政投资支出和社会保障支出"
  },
  {
    "term": "建设－经营－转让投资方式",
    "course": "财政学",
    "def": "建设－经营－转让投资（BOT）方式是指政府将一些拟建的基础设施建设项目通过招商转让给某一财团或公司，由其组建一个经营公司进行建设经营，并在双方协定的一定时期内，由该项目公司通过经营该项目偿还债务，收回投资，协议期满，项目产权转让给政府。",
    "source": "/finance/财政投资支出和社会保障支出"
  },
  {
    "term": "成本—效益分析法",
    "course": "财政学",
    "def": "成本—效益分析法是指针对政府确定的建设目标，提出若干实现建设目标的方案，详列各种方案的全部预期成本和全部预期效益，通过分析比较，选择出最优的政府投资项目的一种分析方法。",
    "source": "/finance/财政支出规模与结构"
  },
  {
    "term": "投票规则",
    "course": "财政学",
    "def": "投票规则是通过投票进行决策的一种公共选择程序规则。",
    "source": "/finance/财政职能"
  },
  {
    "term": "拉弗曲线",
    "course": "财政学",
    "def": "拉弗曲线是指反映税率与税收总额之间关系的曲线。",
    "source": "/finance/税收原理"
  },
  {
    "term": "政府失灵",
    "course": "财政学",
    "def": "政府失灵是指政府的活动或干预措施缺乏效率，或者说，政府作出了降低经济效率的决策或不能实施改善经济效率的政策。",
    "source": "/finance/财政职能"
  },
  {
    "term": "政府采购制度",
    "course": "财政学",
    "def": "政府采购制度是指中央政府、地方政府及法律规定的其他实体以法定的方式向社会采购物资、工程或服务，并对采购过程进行监督管理的一种控制制度。",
    "source": "/finance/财政支出规模与结构"
  },
  {
    "term": "最低费用选择法",
    "course": "财政学",
    "def": "最低费用选择法一般不用货币单位来计量备选的财政支出项目的社会效益，只计算每项备选项目的有形成本，并以成本最低为择优的标准。",
    "source": "/finance/财政支出规模与结构"
  },
  {
    "term": "社会保障",
    "course": "财政学",
    "def": "社会保障是指政府通过专款专用税筹措资金，向老年人、无工作能力的人、失去工作机会的人、病人等提供基本生活保障的计划。",
    "source": "/finance/财政投资支出和社会保障支出"
  },
  {
    "term": "税制改革",
    "course": "财政学",
    "def": "税制改革是指通过税制设计和税制结构的边际改变来增进社会福利的过程。",
    "source": "/finance/税收制度"
  },
  {
    "term": "税制类型",
    "course": "财政学",
    "def": "税制类型是以一定标准对税收制度进行分类而形成的税制形态。以税制总体设计为标准，可分为单一税制和复合税制：在一个税收管辖权范围内只征收一种税的称为单一税制，同时征收两种以上税种的称为复合税制。",
    "source": "/finance/税收制度"
  },
  {
    "term": "税制结构与税制模式",
    "course": "财政学",
    "def": "税制结构是指一国税收体系的整体布局和总体结构，是国家根据当时经济条件和发展要求，在特定税收制度下，由税类、税种、税制要素和征收管理层次所组成的，分别主次，相互协调、相互补充的整体系统。",
    "source": "/finance/税收制度"
  },
  {
    "term": "税收中性",
    "course": "财政学",
    "def": "税收中性是指政府课税不扭曲市场机制的运行，或者说不影响私人部门原有的资源配置状况。",
    "source": "/finance/税收原理"
  },
  {
    "term": "税负转嫁",
    "course": "财政学",
    "def": "税负转嫁是指在商品交换过程中，纳税人通过提高销售价格或压低购进价格的方法，将税负转移给购买者或供应者的一种经济现象。",
    "source": "/finance/税收原理"
  },
  {
    "term": "累进税率",
    "course": "财政学",
    "def": "累进税率是指按课税对象数额的大小，划分若干等级，每个等级由低到高规定相应的税率，课税对象数额越大税率越高，数额越小税率越低。",
    "source": "/finance/税收原理"
  },
  {
    "term": "综合所得税",
    "course": "财政学",
    "def": "综合所得税是指对纳税人个人的各种应税所得（如工薪收入、利息、股息、财产所得等）综合征收。",
    "source": "/finance/税收制度"
  },
  {
    "term": "财政平衡",
    "course": "财政学",
    "def": "财政平衡是指国家财政的收入与支出等量。",
    "source": "/finance/财政平衡与财政赤字"
  },
  {
    "term": "财政投融资",
    "course": "财政学",
    "def": "财政投融资是指以国家的信用为基础，通过多种渠道筹措资金，有偿地投资于具有公共性的领域。",
    "source": "/finance/财政投资支出和社会保障支出"
  },
  {
    "term": "购买性支出",
    "course": "财政学",
    "def": "购买性支出是指政府购买商品和服务的开支，包括购买进行日常政务活动所需的或用于国家投资所需的商品和服务的支出，它体现的是政府的市场性再分配活动；购买性支出占较大比重的财政活动，执行资源配置的职能较强。",
    "source": "/finance/财政支出规模与结构"
  },
  {
    "term": "赤字依存度和赤字比率",
    "course": "财政学",
    "def": "赤字依存度是财政赤字占财政支出的比例，说明一国当年总支出中有多大比例依赖赤字支出实现；赤字比率是财政赤字占 GDP 的比例，说明一国在某年以赤字方式动员了多大比例的社会资源。",
    "source": "/finance/财政平衡与财政赤字"
  },
  {
    "term": "转移性支出",
    "course": "财政学",
    "def": "转移性支出是指政府资金无偿的、单方面的转移，主要有补助支出、捐赠支出和债务利息支出，它体现的是政府的非市场性再分配活动；转移性支出占较大比重的财政活动，执行收入分配的职能较强。",
    "source": "/finance/财政支出规模与结构"
  },
  {
    "term": "预算外资金",
    "course": "财政学",
    "def": "预算外资金是指按国家财政制度规定不纳入国家预算的、允许地方财政部门和由预算拨款的行政事业单位自收自支的资金。",
    "source": "/finance/国家预算与预算管理体制"
  },
  {
    "term": "预算管理体制",
    "course": "财政学",
    "def": "预算管理体制是指处理中央和地方以及地方各级政府之间的财政关系的各种制度的总称。",
    "source": "/finance/国家预算与预算管理体制"
  },
  {
    "term": "预算调整",
    "course": "财政学",
    "def": "预算调整是预算执行的一项重要程序。",
    "source": "/finance/国家预算与预算管理体制"
  },
  {
    "term": "预算赤字",
    "course": "财政学",
    "def": "预算赤字是指在某一财政年度，政府计划安排的总支出超过经常性收入并存在于决算中的差额。",
    "source": "/finance/财政平衡与财政赤字"
  },
  {
    "term": "非税收入",
    "course": "财政学",
    "def": "非税收入是指政府通过非税收形式取得的财政收入，包括行政事业性收费、政府性基金、国有资源有偿使用收入等。",
    "source": "/finance/财政职能"
  },
  {
    "term": "国债结构",
    "course": "财政学",
    "def": "国债结构是指不同类型国债之间的组合比例关系，包括期限结构、持有者结构、利率结构等。",
    "source": "/finance/国债理论与管理"
  },
  {
    "term": "财政赤字排挤效应",
    "course": "财政学",
    "def": "财政赤字排挤效应是指政府通过增加支出或减税实施扩张性财政政策时，导致利率上升，从而挤出了私人投资。",
    "source": "/finance/财政平衡与财政赤字"
  },
  {
    "term": "逆弹性命题",
    "course": "财政学",
    "def": "逆弹性命题是指在最优商品税制下，对各种商品征税的税率应与该商品的需求价格弹性成反比，即弹性越小的商品税率应越高。",
    "source": "/finance/税收原理"
  },
  {
    "term": "赤字财政",
    "course": "财政学",
    "def": "赤字财政是指政府有意识、有计划地利用预算赤字，以熨平经济波动，是一种扩张性财政政策。",
    "source": "/finance/财政平衡与财政赤字"
  },
  {
    "term": "丁伯根法则",
    "course": "货币银行学",
    "def": "丁伯根法则是由荷兰经济学家扬·丁伯根提出的政策目标与政策工具配置原则。丁伯根是 1969 年首届经济学奖共同得主之一。",
    "source": "/monetary/内外均衡理论"
  },
  {
    "term": "互换",
    "course": "货币银行学",
    "def": "互换是指互换双方达成协议并在一定的期限内转换彼此货币种类、借贷利率基础及其他资产的一种交易。",
    "source": "/monetary/金融市场"
  },
  {
    "term": "全能型商业银行",
    "course": "货币银行学",
    "def": "全能型商业银行是指商业银行可以经营一切金融业务，包括各种期限和种类的存贷款，各种证券买卖以及信托，支付清算等金融业务。",
    "source": "/monetary/金融中介体系"
  },
  {
    "term": "内外均衡",
    "course": "货币银行学",
    "def": "内外均衡是指经济的对内与对外均衡。",
    "source": "/monetary/内外均衡理论"
  },
  {
    "term": "利率与收益率",
    "course": "货币银行学",
    "def": "利率是利息率的简称，是一定时期内利息额与贷出资本额的比率。",
    "source": "/monetary/利率理论"
  },
  {
    "term": "名义利率和实际利率",
    "course": "货币银行学",
    "def": "名义利率是指以名义货币表示的利率，是借贷契约和有价证券上载明的利息率，也就是金融市场表现出的利率。",
    "source": "/monetary/利率理论"
  },
  {
    "term": "国际货币体系",
    "course": "货币银行学",
    "def": "国际货币体系是指国际间的货币安排。",
    "source": "/monetary/国际货币体系"
  },
  {
    "term": "基准利率",
    "course": "货币银行学",
    "def": "基准利率是指带动和影响其他利率的利率，也称为“中心利率”。",
    "source": "/monetary/利率理论"
  },
  {
    "term": "基础货币",
    "course": "货币银行学",
    "def": "基础货币也称为“高能货币”、“强力货币”，是指中央银行所发行的现金货币和商业银行在中央银行的准备金存款的总和。",
    "source": "/monetary/货币供求理论"
  },
  {
    "term": "存款保险制度",
    "course": "货币银行学",
    "def": "存款保险制度是一种对存款人利益提供保护、稳定金融体系的制度安排。",
    "source": "/monetary/金融中介体系"
  },
  {
    "term": "居民消费物价指数",
    "course": "货币银行学",
    "def": "居民消费物价指数是综合反映一定时期内居民生活消费品和服务项目价格变动的趋势和程度的价格指数。",
    "source": "/monetary/通货膨胀与通货紧缩"
  },
  {
    "term": "布雷顿森林体系",
    "course": "货币银行学",
    "def": "布雷顿森林体系是指第二次世界大战后以固定汇率制为基本特征的国际货币体系。",
    "source": "/monetary/国际货币体系"
  },
  {
    "term": "强制储蓄效应",
    "course": "货币银行学",
    "def": "政府如果通过向中央银行借债，从而引起货币增发这类办法筹措建设资金，就会强制增加全社会的投资需求，结果将是物价上涨。在公众名义收入不变的条件下，按原来的模式和数量进行的消费和储蓄，两者的实际额均随物价的上涨而相应减少，其减少的部分大体相当于政府运用通货膨胀实现政府收入的部分，如此实现的政府储蓄是强制储蓄。",
    "source": "/monetary/通货膨胀与通货紧缩"
  },
  {
    "term": "支出调整政策",
    "course": "货币银行学",
    "def": "支出调整政策是指通过影响国内收入和国内总支出，或者通过控制货币供给量、收缩或扩张国内投资和消费总需求来调控国内总供给与总需求以达到内部均衡目标的宏观经济政策。",
    "source": "/monetary/内外均衡理论"
  },
  {
    "term": "支出转换政策",
    "course": "货币银行学",
    "def": "支出转换政策是指能够影响贸易商品的国际竞争力通过改变支出构成而使本国收入相对于支出增加的政策。",
    "source": "/monetary/内外均衡理论"
  },
  {
    "term": "收入分配效应",
    "course": "货币银行学",
    "def": "由于社会各阶层收入来源极不相同，因此，在物价总水平上涨时，有些人的实际收入水平会下降，有些人的实际收入水平却反而会提高。",
    "source": "/monetary/通货膨胀与通货紧缩"
  },
  {
    "term": "收益的资本化",
    "course": "货币银行学",
    "def": "收益的资本化是指，由于利息已转化为收益的一般形态，于是任何有收益的事物，即使它并不是一笔贷放出去的货币，甚至不是真正有一笔实实在在的资本存在，也可以通过收益与利率的对比而倒过来算出它相当于多大的资本金额。",
    "source": "/monetary/利率理论"
  },
  {
    "term": "最终贷款人",
    "course": "货币银行学",
    "def": "最终贷款人是指在危机时刻中央银行应尽的融通责任，它应满足对高能货币的需求，以防止由恐慌引起的货币存量的收缩。",
    "source": "/monetary/金融中介体系"
  },
  {
    "term": "期权",
    "course": "货币银行学",
    "def": "期权合约赋予其持有者（即期权的购买者）一种权利，使其可以（但不必须）在未来约定的时期内以议定的价格向期权合约的出售者买入（看涨期权）或卖出（看跌期权）一定数量的资产。",
    "source": "/monetary/金融市场"
  },
  {
    "term": "期货",
    "course": "货币银行学",
    "def": "期货合约是在远期合约的基础上发展起来的一种标准化的买卖合约。",
    "source": "/monetary/金融市场"
  },
  {
    "term": "汇率制度",
    "course": "货币银行学",
    "def": "汇率制度是指一个国家、一个经济体或一个经济区域或国际社会对于确定、维持、调整与管理汇率的原则、依据、方法和机构等所作出的系统规定。",
    "source": "/monetary/汇率理论"
  },
  {
    "term": "泰勒规则",
    "course": "货币银行学",
    "def": "泰勒规则是根据产出和通货膨胀的相对变化而调整利率的操作方法。",
    "source": "/monetary/货币政策"
  },
  {
    "term": "流动性偏好",
    "course": "货币银行学",
    "def": "凯恩斯在分析影响货币需求的因素时认为，货币需求主要由个人对收入支配的心理因素决定。",
    "source": "/monetary/货币供求理论"
  },
  {
    "term": "滞胀",
    "course": "货币银行学",
    "def": "滞胀是指经济过程所呈现的并不是失业和通货膨胀之间的相互“替代”，而是经济停滞和通货膨胀相伴随，高的通货膨胀率与高的失业率相伴随。",
    "source": "/monetary/通货膨胀与通货紧缩"
  },
  {
    "term": "特里芬难题",
    "course": "货币银行学",
    "def": "特里芬难题是指在布雷顿森林体系下，美元承担的两个责任，即保证美元按官价兑换黄金、维持各国对美元的信心和提供足够的国际清偿力（即美元）之间的矛盾。",
    "source": "/monetary/国际货币体系"
  },
  {
    "term": "短期利率和长期利率",
    "course": "货币银行学",
    "def": "金融市场上的利率种类根据期限可分为短期利率和长期利率。",
    "source": "/monetary/利率理论"
  },
  {
    "term": "米德冲突",
    "course": "货币银行学",
    "def": "米德冲突是指在某些情况下，单独使用支出调整政策——货币政策和财政政策追求内、外部均衡，将会导致一国内部均衡与外部均衡之间的冲突。",
    "source": "/monetary/内外均衡理论"
  },
  {
    "term": "菲利普斯曲线",
    "course": "货币银行学",
    "def": "菲利普斯曲线由英国经济学家 A.W. 菲利普斯首先提出；其原始研究描述的是失业率与货币工资增长率之间的负相关关系，后来才常被引申为通货膨胀率与失业率之间的短期替代关系。",
    "source": "/monetary/通货膨胀与通货紧缩"
  },
  {
    "term": "表外业务",
    "course": "货币银行学",
    "def": "表外业务是指凡未列入银行资产负债表内且不影响资产负债总额的业务。",
    "source": "/monetary/金融中介体系"
  },
  {
    "term": "货币局制度",
    "course": "货币银行学",
    "def": "货币局制度是指从法律上明确承诺本国或地区货币按固定汇率兑换某种特定的外币，同时限制官方的货币发行，以确保履行法定义务，如阿根廷和我国香港特别行政区。",
    "source": "/monetary/汇率理论"
  },
  {
    "term": "货币层次",
    "course": "货币银行学",
    "def": "货币层次是指各国中央银行在确定货币供给的统计口径时以金融资产流动性的大小作为标准，并根据自身政策目的的特点和需要对货币所划分的层次。",
    "source": "/monetary/货币供求理论"
  },
  {
    "term": "货币市场",
    "course": "货币银行学",
    "def": "货币市场是一年和一年以内短期资金融通的市场，包括同业拆借市场、银行间债券市场、大额可转让存单市场、商业票据市场和国库券市场等子市场。",
    "source": "/monetary/金融市场"
  },
  {
    "term": "货币政策时滞",
    "course": "货币银行学",
    "def": "货币政策时滞是指政策从制定到获得主要的或全部的效果所经历的时间。",
    "source": "/monetary/货币政策"
  },
  {
    "term": "购买力平价",
    "course": "货币银行学",
    "def": "购买力平价是由瑞典经济学家卡塞尔在 20 世纪初提出的，用来解释长期汇率决定的基础。",
    "source": "/monetary/汇率理论"
  },
  {
    "term": "资产结构调整效应",
    "course": "货币银行学",
    "def": "资产结构调整效应也称财富分配效应，是指由物价上涨所带来的家庭财产不同构成部分的价值有升有降的现象。",
    "source": "/monetary/通货膨胀与通货紧缩"
  },
  {
    "term": "资产证券化",
    "course": "货币银行学",
    "def": "资产证券化是指将已经存在的信贷资产集中起来并重新分割为证券进而转卖给市场上的投资者，从而使此项资产在原持有者的资产负债表上消失的融资形式。",
    "source": "/monetary/金融中介体系"
  },
  {
    "term": "资本市场",
    "course": "货币银行学",
    "def": "资本市场一般指交易期限在一年以上的市场，主要包括股票市场和债券市场，满足工商企业的中长期投资需求和政府财政赤字的需要。",
    "source": "/monetary/金融市场"
  },
  {
    "term": "远期",
    "course": "货币银行学",
    "def": "远期是指在确定的未来某一时期，按照确定的价格买卖一定数量的某种资产的协议。",
    "source": "/monetary/金融市场"
  },
  {
    "term": "通货膨胀",
    "course": "货币银行学",
    "def": "在西方经济学教科书中，通常将通货膨胀定义为商品和服务的货币价格总水平持续上涨的现象。",
    "source": "/monetary/通货膨胀与通货紧缩"
  },
  {
    "term": "通货膨胀目标制",
    "course": "货币银行学",
    "def": "通货膨胀目标制是一套用于货币政策决策的框架，是中央银行直接以通货膨胀为目标并对外公布该目标的货币政策制度。",
    "source": "/monetary/货币政策"
  },
  {
    "term": "金融工具",
    "course": "货币银行学",
    "def": "金融工具又称金融资产，它是一种能够证明金融交易的金额、期限以及价格的书面文件，对于债权、债务双方的权利和义务具有法律上的约束意义。",
    "source": "/monetary/金融市场"
  },
  {
    "term": "金融监管成本",
    "course": "货币银行学",
    "def": "金融监管成本，大致分为显性成本和隐性成本两个部分。",
    "source": "/monetary/金融监管体系"
  },
  {
    "term": "“三个有利于”标准",
    "course": "社会主义经济学",
    "def": "“三个有利于”标准指是否有利于发展社会主义社会的生产力、是否有利于增强社会主义国家的综合国力、是否有利于提高人民的生活水平，并以此作为判断改革和各方面工作是非得失的标准。",
    "source": "/socialist/社会主义经济制度的本质特征"
  },
  {
    "term": "“华盛顿共识”与“北京共识”",
    "course": "社会主义经济学",
    "def": "华盛顿共识这一术语最初由经济学家约翰·威廉姆森于 1989 年提出。",
    "source": "/socialist/向社会主义市场经济体制的渐进过渡"
  },
  {
    "term": "“后起者优势”",
    "course": "社会主义经济学",
    "def": "“后起者优势”是指后起发展国家面临的外部环境相对较好，尤其是技术高度发达，这样它就可以跳过某些技术发展阶段，直接采用新技术。",
    "source": "/socialist/社会主义市场经济条件下的经济结构调整"
  },
  {
    "term": "“市场失灵”",
    "course": "社会主义经济学",
    "def": "市场失灵是指市场竞争所实现的资源配置没有达到帕累托最优，或指市场机制不能实现某些合意的社会经济目标。",
    "source": "/socialist/社会主义市场经济条件下的政府调节"
  },
  {
    "term": "“看不见的手”",
    "course": "社会主义经济学",
    "def": "“看不见的手”是亚当·斯密提出的经济自由主义的政策思想，推崇市场机制的作用。",
    "source": "/socialist/社会主义市场经济条件下的政府调节"
  },
  {
    "term": "“诺思悖论”",
    "course": "社会主义经济学",
    "def": "“诺思悖论”是指一个能促进经济持续快速增长的有效率产权制度依赖于国家对产权进行有效的界定与保护，但受双重目标的驱动，国家在界定与保护产权过程中受交易费用和竞争的双重约束，会对不同的利益集团采取歧视性的政策，从而会容忍低效率的产权结构长期存在。",
    "source": "/socialist/向社会主义市场经济体制的渐进过渡"
  },
  {
    "term": "中间扩散型制度变迁方式",
    "course": "社会主义经济学",
    "def": "当利益独立化的地方政府成为沟通权力中心的制度供给意愿与微观主体的制度创新需求的中介环节时，就有可能突破权力中心设置的制度创新进入壁垒，从而使权力中心的垄断租金最大化与保护有效率的产权结构之间达成一致，化解“诺思悖论”，这一有别于供给主导型与需求诱致型的制度变迁形态被称为中间扩散型制度变迁方式。",
    "source": "/socialist/向社会主义市场经济体制的渐进过渡"
  },
  {
    "term": "二元反差指数",
    "course": "社会主义经济学",
    "def": "二元反差指数是指工业或非农业产值比重与劳动力比重之差的绝对值。",
    "source": "/socialist/社会主义市场经济条件下的经济结构调整"
  },
  {
    "term": "二元对比系数",
    "course": "社会主义经济学",
    "def": "二元对比系数是指二元经济结构中农业比较劳动生产率与非农业比较劳动生产率的比率。",
    "source": "/socialist/社会主义市场经济条件下的经济结构调整"
  },
  {
    "term": "二元经济结构",
    "course": "社会主义经济学",
    "def": "二元经济结构是指以城市工业为主的现代部门与以农村农业为主的传统部门并存，传统部门比重过大、现代部门发展不足，以及城乡差距十分明显的经济结构。",
    "source": "/socialist/社会主义市场经济条件下的经济结构调整"
  },
  {
    "term": "产业",
    "course": "社会主义经济学",
    "def": "产业是指生产相似或相同产品的一系列企业。",
    "source": "/socialist/社会主义市场经济条件下的经济结构调整"
  },
  {
    "term": "产业结构",
    "course": "社会主义经济学",
    "def": "产业结构是指国民经济内部各产业之间在再生产过程中形成的经济联系和数量比例关系。",
    "source": "/socialist/社会主义市场经济条件下的经济结构调整"
  },
  {
    "term": "产权",
    "course": "社会主义经济学",
    "def": "产权是一种通过社会强制而实现的对某种经济物品的多种用途进行选择的权利。",
    "source": "/socialist/社会主义企业制度与国有企业改革"
  },
  {
    "term": "产权制度",
    "course": "社会主义经济学",
    "def": "产权制度是指既定产权关系和产权规则结合而成的且能对产权关系实行有效的组合、调节和保护的制度安排。",
    "source": "/socialist/社会主义企业制度与国有企业改革"
  },
  {
    "term": "产权规则",
    "course": "社会主义经济学",
    "def": "产权规则是指一个人拥有资源配置权力的大小与其所拥有的资产数量正相关，即拥有的资产越多，所拥有的资源配置权力就越大。",
    "source": "/socialist/向社会主义市场经济体制的渐进过渡"
  },
  {
    "term": "代理成本",
    "course": "社会主义经济学",
    "def": "代理成本是指在所有权与控制权相分离的条件下，由于委托人与代理人的效用函数不完全一致，代理制的引入必然会诱发一定的成本。",
    "source": "/socialist/国有企业治理结构的创新"
  },
  {
    "term": "代理问题",
    "course": "社会主义经济学",
    "def": "代理人除了追求更高的货币收益外，还力图通过对非货币物品的追求实现尽可能多的非货币收益。",
    "source": "/socialist/国有企业治理结构的创新"
  },
  {
    "term": "企业共同治理",
    "course": "社会主义经济学",
    "def": "企业共同治理强调决策的共同参与和监督的相互制约。",
    "source": "/socialist/国有企业治理结构的创新"
  },
  {
    "term": "企业所有权",
    "course": "社会主义经济学",
    "def": "企业所有权指企业对其合法占有的财产所拥有的使用、收益和处分的权利。",
    "source": "/socialist/国有企业治理结构的创新"
  },
  {
    "term": "企业治理结构",
    "course": "社会主义经济学",
    "def": "企业治理结构也称为公司法人治理结构，是指所有者、经营者和监督者之间透过公司权力机关（股东大会），经营决策与执行机关（董事会、经理），监督机关（监事会）而形成权责明确，相互制约，协调运转和科学决策的联系，并依法律、法规、规章和公司章程等规定予以制度化的统一机制。",
    "source": "/socialist/国有企业治理结构的创新"
  },
  {
    "term": "使用权能",
    "course": "社会主义经济学",
    "def": "使用权能是指不改变财产的所有和占有性质，依其用途而对其加以利用的可能性，是人与人之间因利用财产而产生的权利义务关系。",
    "source": "/socialist/社会主义企业制度与国有企业改革"
  },
  {
    "term": "供给主导型制度变迁方式",
    "course": "社会主义经济学",
    "def": "供给主导型制度变迁方式是指由权力中心推进的强制性制度变迁，其含义是在一定的宪法秩序和行为的伦理道德规范下，权力中心提供新的制度安排的能力与意愿是决定制度变迁的主导因素，而这种能力与意愿主要决定于一个社会的各既得利益集团的权力结构与力量对比。",
    "source": "/socialist/向社会主义市场经济体制的渐进过渡"
  },
  {
    "term": "充分就业",
    "course": "社会主义经济学",
    "def": "充分就业是指每一个愿意工作的劳动者按其能够接受的工资全部找到职业的一种经济状态。",
    "source": "/socialist/社会主义市场经济条件下的政府调节"
  },
  {
    "term": "公共产品",
    "course": "社会主义经济学",
    "def": "公共产品是指那些消费不具有排他性和可耗竭性，但收费存在困难的产品。",
    "source": "/socialist/社会主义企业制度与国有企业改革"
  },
  {
    "term": "公共服务均等化",
    "course": "社会主义经济学",
    "def": "公共服务均等化，主要是指全体公民享有基本公共服务的机会均等、结果大体相等，同时尊重社会成员的自由选择权。",
    "source": "/socialist/社会主义市场经济条件下的分配制度"
  },
  {
    "term": "内部人控制",
    "course": "社会主义经济学",
    "def": "内部人控制是指国有企业的经营者在经济转型过程中逐渐掌握了大部分控制权，并且这种控制权的获得往往是通过与职工“合谋”完成的。",
    "source": "/socialist/国有企业治理结构的创新"
  },
  {
    "term": "制度",
    "course": "社会主义经济学",
    "def": "制度是指一系列被制定出来的规则、守法程序和行为的伦理道德规范，旨在约束追求主体福利或效用最大化的个人行为。",
    "source": "/socialist/社会主义经济增长与经济发展"
  },
  {
    "term": "制度安排",
    "course": "社会主义经济学",
    "def": "制度安排是在宪法秩序下约束特定行为模式和关系、界定交换条件的一系列具体的操作规则。",
    "source": "/socialist/社会主义经济增长与经济发展"
  },
  {
    "term": "刺激一致性约束",
    "course": "社会主义经济学",
    "def": "刺激一致性约束指由于代理人是合同的接受者，机制所提供的刺激必须要能诱使代理人自愿地选择根据他们所属类型而设定的合同。",
    "source": "/socialist/国有企业治理结构的创新"
  },
  {
    "term": "占有权能",
    "course": "社会主义经济学",
    "def": "占有权能是指人对财产直接加以控制的可能性，是所有者与他人之间因对财产进行实际控制而产生的权利义务关系。",
    "source": "/socialist/社会主义企业制度与国有企业改革"
  },
  {
    "term": "参与约束",
    "course": "社会主义经济学",
    "def": "参与约束也称为个人理性约束，是对代理人的行为提出一种理性化假设。",
    "source": "/socialist/国有企业治理结构的创新"
  },
  {
    "term": "可持续发展",
    "course": "社会主义经济学",
    "def": "可持续发展理论是人类发展观的重大进步，它强调经济、社会、资源和环境保护的协调发展。",
    "source": "/socialist/社会主义经济增长与经济发展"
  },
  {
    "term": "国内生产总值（GDP）",
    "course": "社会主义经济学",
    "def": "国内生产总值则是指一国在一定时期（通常是一年）内，在其领土范围内，本国居民与外国居民生产的最终产品和劳务总量的货币表现。",
    "source": "/socialist/社会主义经济增长与经济发展"
  },
  {
    "term": "国民生产总值（GNP）",
    "course": "社会主义经济学",
    "def": "国民生产总值是指一个国家（或地区）在一定时期（通常为一年）内，国民经济各部门所生产的、以货币表现的全部社会最终产品和劳务价值的总和。",
    "source": "/socialist/社会主义经济增长与经济发展"
  },
  {
    "term": "基础产业",
    "course": "社会主义经济学",
    "def": "基础产业是指在一国的国民经济发展中处于基础地位，对其他产业的发展起着制约和决定作用，决定其他产业发展水平的产业群，它的产品通常要成为后续产业部门加工、再加工及生产过程中缺一不可的投入品或消耗品，通常具有不可再生性质。",
    "source": "/socialist/社会主义企业制度与国有企业改革"
  },
  {
    "term": "增量改革",
    "course": "社会主义经济学",
    "def": "增量改革是指在不率先触动既得利益格局的前提下，在边际上推进市场取向的改革，也就是说，在等级规则作用较小的边际上，选择具有帕累托改进意义的利益调整方式进行体制变革，逐渐向市场经济体制过渡。",
    "source": "/socialist/社会主义市场经济理论"
  },
  {
    "term": "处分权能",
    "course": "社会主义经济学",
    "def": "处分权能是指为法律所保障的实施旨在改变财产的经济用途或状态的行为的可能性，它所反映的是人在变更财产的过程中所产生的权利义务关系。",
    "source": "/socialist/社会主义企业制度与国有企业改革"
  },
  {
    "term": "外向型工业化战略",
    "course": "社会主义经济学",
    "def": "外向型工业化战略的基本内涵就是： 利用开放与全球产业结构调整和转移的趋势，基于劳动成本优势构建我国开放背景下的工业化模式。",
    "source": "/socialist/社会主义对外经济关系"
  },
  {
    "term": "外部约束均衡",
    "course": "社会主义经济学",
    "def": "理性的委托人将在约束成本在边际上等于代理成本的水平上实现对代理人的外部约束均衡，这一均衡调整过程将使约束成本和代理成本之和达到最小化。",
    "source": "/socialist/国有企业治理结构的创新"
  },
  {
    "term": "宏观收入分配过程",
    "course": "社会主义经济学",
    "def": "宏观层次的收入调节过程是建立在微观收入分配过程基础上并独立于这一分配过程的再分配过程。",
    "source": "/socialist/社会主义市场经济条件下的分配制度"
  },
  {
    "term": "宪法秩序",
    "course": "社会主义经济学",
    "def": "宪法秩序是指用以界定国家的产权和控制的基本结构，它包括确立生产、交换和分配的一整套政治、社会和法律的基本规则，它为集体选择确立了原则，从而是制定规则的规则。",
    "source": "/socialist/向社会主义市场经济体制的渐进过渡"
  },
  {
    "term": "市场",
    "course": "社会主义经济学",
    "def": "市场是指交换的场所、渠道和纽带。",
    "source": "/socialist/社会主义市场经济理论"
  },
  {
    "term": "市场机制",
    "course": "社会主义经济学",
    "def": "市场机制是指在市场交易关系中形成的以价格、供求和竞争三位一体的互动关系为基础的经济运行和调节的一套有机系统。",
    "source": "/socialist/社会主义市场经济理论"
  },
  {
    "term": "市场经济",
    "course": "社会主义经济学",
    "def": "市场经济是指由市场机制配置资源的经济。",
    "source": "/socialist/社会主义市场经济理论"
  },
  {
    "term": "微观收入分配过程",
    "course": "社会主义经济学",
    "def": "微观收入分配过程是通过市场机制的作用实现的。",
    "source": "/socialist/社会主义市场经济条件下的分配制度"
  },
  {
    "term": "所有权",
    "course": "社会主义经济学",
    "def": "按照马克思的定义，所有权是确定物的最终归属，表明主体对确定物的独占和垄断的财产权利，是同一物上不依赖于其他权利而独立存在的财产权利。",
    "source": "/socialist/社会主义企业制度与国有企业改革"
  },
  {
    "term": "技术进步",
    "course": "社会主义经济学",
    "def": "技术进步是指人们在生产中使用效率更高的劳动手段和工艺方法推动社会生产力发展的运动过程。",
    "source": "/socialist/社会主义市场经济条件下的经济结构调整"
  },
  {
    "term": "按劳分配",
    "course": "社会主义经济学",
    "def": "按劳分配是指社会总产品在作了必要的扣除之后，按劳动者向社会提供的有效劳动量来分配个人消费品，多劳多得，少劳少得，不劳不得的分配制度。",
    "source": "/socialist/社会主义市场经济条件下的分配制度"
  },
  {
    "term": "收益权能",
    "course": "社会主义经济学",
    "def": "收益权能是指获取基于所有者财产而产生的经济利益的可能性，是人们因获取追加财产而产生的权利义务关系。",
    "source": "/socialist/社会主义企业制度与国有企业改革"
  },
  {
    "term": "比较劳动生产率",
    "course": "社会主义经济学",
    "def": "比较劳动生产率是指一个部门的产值比重（或收入比重）与在此部门就业的劳动力比重的比率。",
    "source": "/socialist/社会主义市场经济条件下的经济结构调整"
  },
  {
    "term": "法人企业制度",
    "course": "社会主义经济学",
    "def": "按照财产的组织形式和所承担的法律责任，企业的组织形式可分为自然人企业和法人企业，法人企业制度即以法人企业为组织形式的企业制度：企业拥有独立的法人财产，以其全部财产独立承担民事责任，出资人以出资额为限承担有限责任，公司是其典型形态。",
    "source": "/socialist/社会主义企业制度与国有企业改革"
  },
  {
    "term": "混合所有制经济",
    "course": "社会主义经济学",
    "def": "混合所有制经济是由不同性质的所有制经济组合而成的一种经济形式。",
    "source": "/socialist/社会主义经济制度的本质特征"
  },
  {
    "term": "渐进式改革",
    "course": "社会主义经济学",
    "def": "渐进式改革是在工业化和社会主义宪法制度的基础上进行的市场化改革，强调利用已有的组织资源推进改革，在基本不触动既得利益格局的前提下实行增量改革。",
    "source": "/socialist/社会主义市场经济理论"
  },
  {
    "term": "激励核心",
    "course": "社会主义经济学",
    "def": "激励的核心是将代理人对个人效用的追求转化为对企业利润最大化的追求。",
    "source": "/socialist/国有企业治理结构的创新"
  },
  {
    "term": "物价稳定",
    "course": "社会主义经济学",
    "def": "物价稳定不是指各种商品和要素之间相对价格的稳定，而是指全社会范围内价格总水平的稳定。",
    "source": "/socialist/社会主义市场经济条件下的政府调节"
  },
  {
    "term": "相机治理机制",
    "course": "社会主义经济学",
    "def": "相机治理机制是企业所有权状态依存性的制度化：相对于不同的企业经营状态，对应着不同的企业所有权安排；其设计目的是确保在非正常经营状态下，受损失的利益相关者有合适的制度完成再谈判意愿，主要通过控制权的争夺来改变既定利益格局，构成针对企业决策者行为的外在约束。",
    "source": "/socialist/国有企业治理结构的创新"
  },
  {
    "term": "社会主义初级阶段",
    "course": "社会主义经济学",
    "def": "社会主义初级阶段是指我国在生产力落后、商品经济不发达条件下建设社会主义必然要经历的特定历史阶段，即从我国进入社会主义到基本实现社会主义现代化的整个历史阶段。",
    "source": "/socialist/社会主义经济制度的本质特征"
  },
  {
    "term": "社会保障",
    "course": "社会主义经济学",
    "def": "社会保障是指国家和社会通过立法对国民收入进行分配和再分配，为社会成员特别是生活有特殊困难的个人或家庭提供基本生活保障的一种制度。",
    "source": "/socialist/社会主义市场经济条件下的分配制度"
  },
  {
    "term": "竞争性国有企业",
    "course": "社会主义经济学",
    "def": "竞争性国有企业是指那些国家投资建成的、基本上不存在进入与退出障碍、同一产业部门内存在众多企业、企业产品基本上具有同质性和可分性、以利润为经营目标的国有企业。",
    "source": "/socialist/社会主义企业制度与国有企业改革"
  },
  {
    "term": "等级规则",
    "course": "社会主义经济学",
    "def": "等级规则是指首先构建一个层层隶属的金字塔形的等级构架，再界定每一个行为人在这个等级构架中所处的位置，然后再进一步界定与这个等级位置相适应的资源配置权力。",
    "source": "/socialist/向社会主义市场经济体制的渐进过渡"
  },
  {
    "term": "经济全球化",
    "course": "社会主义经济学",
    "def": "从广义上理解，经济全球化这一概念代表着经济活动从国内向全球范围扩张的过程以及随之而出现的种种经济、社会、政治、生活等诸多方面的改变过程。",
    "source": "/socialist/社会主义对外经济关系"
  },
  {
    "term": "经济发展",
    "course": "社会主义经济学",
    "def": "经济发展是指一个国家或地区经济增长以及经济结构、社会结构不断优化和高度化的演进过程。",
    "source": "/socialist/社会主义经济增长与经济发展"
  },
  {
    "term": "经济发展模式",
    "course": "社会主义经济学",
    "def": "经济发展模式是指在一定时期内国民经济发展战略及其生产力要素增长机制、运行原则的特殊类型，它包括经济发展的目标、方式、发展重心、步骤等一系列要素。",
    "source": "/socialist/社会主义经济增长与经济发展"
  },
  {
    "term": "经济增长",
    "course": "社会主义经济学",
    "def": "经济增长是指一个经济社会的实际产量（或实际收入）的长期增加，即按不变价格水平所测定的充分就业产量的增加。",
    "source": "/socialist/社会主义经济增长与经济发展"
  },
  {
    "term": "经济增长方式转变",
    "course": "社会主义经济学",
    "def": "经济增长方式的转变，是指经济增长从主要依靠生产要素的数量扩张转向主要通过提高投入生产要素的使用效率来实现，即从粗放型向集约型增长方式的转变。",
    "source": "/socialist/社会主义经济增长与经济发展"
  },
  {
    "term": "经济开放",
    "course": "社会主义经济学",
    "def": "经济开放是指经济体系通过产品、服务、技术、要素等的流动与外界发生联系。",
    "source": "/socialist/社会主义对外经济关系"
  },
  {
    "term": "经济政策手段",
    "course": "社会主义经济学",
    "def": "经济政策手段是国家为了实现经济政策目标所采取的方法，它包括政策工具和实施政策方法两个方面。",
    "source": "/socialist/社会主义市场经济条件下的政府调节"
  },
  {
    "term": "经济法制手段",
    "course": "社会主义经济学",
    "def": "经济法制手段是指国家依靠法律的强制力量来保证经济政策目标实现的手段。",
    "source": "/socialist/社会主义市场经济条件下的政府调节"
  },
  {
    "term": "绿色 GDP",
    "course": "社会主义经济学",
    "def": "1993 年联合国有关统计机构提出了生态国内生产总值“EDP”的概念，即绿色 GDP，也就是在 GDP 的基础上减掉创造 GDP 所消耗的资源价值，然后再减掉创造 GDP 所造成污染的治理成本。",
    "source": "/socialist/社会主义经济增长与经济发展"
  },
  {
    "term": "股份公司",
    "course": "社会主义经济学",
    "def": "股份公司是由一定人数以上的股东所发起组织、全部资本被划分为若干等额股份、股东就其所认购的股份对公司承担有限责任、股票可以在社会上公开发行和自由转让的公司。",
    "source": "/socialist/社会主义企业制度与国有企业改革"
  },
  {
    "term": "自然人企业制度",
    "course": "社会主义经济学",
    "def": "按照财产的组织形式和所承担的法律责任，企业的组织形式可分为自然人企业和法人企业，自然人企业制度即以自然人企业为组织形式的企业制度：企业不具有法人资格，业主对企业债务承担无限责任，个人业主制与合伙制是其典型形态。",
    "source": "/socialist/社会主义企业制度与国有企业改革"
  },
  {
    "term": "行为的伦理道德规范",
    "course": "社会主义经济学",
    "def": "行为的伦理道德规范来源于人们对现实的理解和意识形态，是与对现实契约关系的正义或公平的判断相连的，它对于赋予宪法秩序和制度安排的合法性是至关重要的。",
    "source": "/socialist/社会主义经济增长与经济发展"
  },
  {
    "term": "行政干预下的经营者控制",
    "course": "社会主义经济学",
    "def": "我国的国有企业改革主要是通过政企关系的市场化和契约化来实现权责利的再分配，政府赋予经营者很大的经营权，并监控经营者的行为，从而形成了有别于内部人控制的行政干预下的经营者控制型企业治理结构。",
    "source": "/socialist/国有企业治理结构的创新"
  },
  {
    "term": "行政管制手段",
    "course": "社会主义经济学",
    "def": "行政管制手段是国家行政管理部门凭借政权的威力，通过发布命令、指示等形式来干预经济生活的手段。",
    "source": "/socialist/社会主义市场经济条件下的政府调节"
  },
  {
    "term": "财政政策手段",
    "course": "社会主义经济学",
    "def": "财政政策的核心是通过政府的收入和支出调节供求关系，实现一定的政策目标。",
    "source": "/socialist/社会主义市场经济条件下的政府调节"
  },
  {
    "term": "货币政策手段",
    "course": "社会主义经济学",
    "def": "货币政策的核心是中央银行通过金融系统和金融市场，调节国民经济中的货币供应量和利率，影响投资和消费活动，进而实现一定的政策目标。",
    "source": "/socialist/社会主义市场经济条件下的政府调节"
  },
  {
    "term": "道德风险",
    "course": "社会主义经济学",
    "def": "道德风险是指由于信息不对称，从事经济活动的人在最大限度地增进自身效用时作出不利于他人的行动。",
    "source": "/socialist/国有企业治理结构的创新"
  },
  {
    "term": "集体经济",
    "course": "社会主义经济学",
    "def": "集体经济是由部分劳动群众共同占有生产资料的一种公有制形式。",
    "source": "/socialist/社会主义经济制度的本质特征"
  },
  {
    "term": "需求诱致型制度变迁方式",
    "course": "社会主义经济学",
    "def": "需求诱致型制度变迁方式指个人或一群人在给定的约束条件下，为确立预期能导致自身利益最大化的制度安排和权利界定而自发组织实施制度创新。",
    "source": "/socialist/向社会主义市场经济体制的渐进过渡"
  },
  {
    "term": "非货币物品",
    "course": "社会主义经济学",
    "def": "指那些通常不以货币来进行买卖，但和那些能以货币买卖的物品一样可以给当事人带来效用的消费项目。",
    "source": "/socialist/国有企业治理结构的创新"
  }
]

export const COURSES = ["西方经济学","货币银行学","财政学","国际经济学","社会主义经济学"]
