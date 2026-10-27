// 本文件由 scripts/build-glossary.cjs 从《经济学-术语.md》与《Economics-Glossary-en.md》生成，请勿手改。
// 用法：pnpm glossary（术语级出处读自 scripts/glossary-cites.json）

export interface GlossaryEntry {
  term: string
  course: string
  def: string
  source: string | null
  cite: { label: string; url: string }[]
}

export interface GlossaryEntryEn extends GlossaryEntry {
  courseEn: string
}

export const GLOSSARY: GlossaryEntry[] = [
  {
    "term": "IS 曲线",
    "course": "西方经济学",
    "def": "IS 曲线是将产品市场处于均衡的收入与利息率的组合描述出来的曲线。",
    "source": "/western/产品市场和货币市场的一般均衡",
    "cite": [
      {
        "label": "维基百科 · IS曲线",
        "url": "https://zh.wikipedia.org/wiki/IS%E6%9B%B2%E7%BA%BF"
      }
    ]
  },
  {
    "term": "LM 曲线",
    "course": "西方经济学",
    "def": "LM 是描述货币市场处于均衡的利息率和国民收入的组合曲线。",
    "source": "/western/产品市场和货币市场的一般均衡",
    "cite": [
      {
        "label": "维基百科 · LM曲线",
        "url": "https://zh.wikipedia.org/wiki/LM%E6%9B%B2%E7%BA%BF"
      }
    ]
  },
  {
    "term": "个人可支配收入",
    "course": "西方经济学",
    "def": "个人可支配收入（DPI）是指个人收入扣除个人所得税后，实际可用于消费和储蓄的那部分收入。公式：DPI = 个人收入 − 个人所得税。",
    "source": "/western/宏观经济活动与宏观经济学",
    "cite": [
      {
        "label": "维基百科 · 可支配收入",
        "url": "https://zh.wikipedia.org/wiki/%E5%8F%AF%E6%94%AF%E9%85%8D%E6%94%B6%E5%85%A5"
      },
      {
        "label": "Wikipedia · Disposable and discretionary income",
        "url": "https://en.wikipedia.org/wiki/Disposable_and_discretionary_income"
      }
    ]
  },
  {
    "term": "交换与生产同时符合帕累托最优的条件",
    "course": "西方经济学",
    "def": "交换与生产同时符合帕累托最优的条件是指所有产品中任意两种产品的边际替代率等于这两种产品在生产中的边际转换率，即 <span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>R</mi><mi>C</mi><msub><mi>S</mi><mrow><mi>X</mi><mi>Y</mi></mrow></msub><mo>=</mo><mi>R</mi><mi>P</mi><msub><mi>T</mi><mrow><mi>X</mi><mi>Y</mi></mrow></msub></mrow><annotation encoding=\"application/x-tex\">RCS_{XY}=RPT_{XY}</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:0.8333em;vertical-align:-0.15em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0077em;\">R</span><span class=\"mord mathnormal\" style=\"margin-right:0.0715em;\">C</span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3283em;\"><span style=\"top:-2.55em;margin-left:-0.0576em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"katex-sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0785em;\">X</span><span class=\"mord mathnormal mtight\" style=\"margin-right:0.2222em;\">Y</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:0.8333em;vertical-align:-0.15em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0077em;\">R</span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">P</span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3283em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"katex-sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0785em;\">X</span><span class=\"mord mathnormal mtight\" style=\"margin-right:0.2222em;\">Y</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span> 。",
    "source": "/western/一般均衡论和福利经济学",
    "cite": [
      {
        "label": "维基百科 · 帕累托最优",
        "url": "https://zh.wikipedia.org/wiki/%E5%B8%95%E7%B4%AF%E6%89%98%E6%9C%80%E4%BC%98"
      },
      {
        "label": "Wikipedia · Pareto efficiency",
        "url": "https://en.wikipedia.org/wiki/Pareto_efficiency"
      }
    ]
  },
  {
    "term": "交换符合帕累托最优的条件",
    "course": "西方经济学",
    "def": "交换符合帕累托最优条件是指在交换方面，任何一对商品之间的边际替代率对任何使用这两种商品的个人来说都相等，即 <span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>R</mi><mi>C</mi><msubsup><mi>S</mi><mn>12</mn><mi>A</mi></msubsup><mo>=</mo><mi>R</mi><mi>C</mi><msubsup><mi>S</mi><mn>12</mn><mi>B</mi></msubsup></mrow><annotation encoding=\"application/x-tex\">RCS_{12}^{A} = RCS_{12}^B</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:1.0894em;vertical-align:-0.2481em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0077em;\">R</span><span class=\"mord mathnormal\" style=\"margin-right:0.0715em;\">C</span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8413em;\"><span style=\"top:-2.4519em;margin-left:-0.0576em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"katex-sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">12</span></span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"katex-sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">A</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2481em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:1.0894em;vertical-align:-0.2481em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0077em;\">R</span><span class=\"mord mathnormal\" style=\"margin-right:0.0715em;\">C</span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8413em;\"><span style=\"top:-2.4519em;margin-left:-0.0576em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"katex-sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">12</span></span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"katex-sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0502em;\">B</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2481em;\"><span></span></span></span></span></span></span></span></span></span> ，此时该社会达到了产品分配的帕累托最优状态，从而实现了交换的效率。",
    "source": "/western/一般均衡论和福利经济学",
    "cite": [
      {
        "label": "维基百科 · 帕累托最优",
        "url": "https://zh.wikipedia.org/wiki/%E5%B8%95%E7%B4%AF%E6%89%98%E6%9C%80%E4%BC%98"
      },
      {
        "label": "Wikipedia · Pareto efficiency",
        "url": "https://en.wikipedia.org/wiki/Pareto_efficiency"
      }
    ]
  },
  {
    "term": "产品转换率",
    "course": "西方经济学",
    "def": "边际转换率是指增加另一种商品产出的数量必须减少某种商品产出数量的比例。",
    "source": "/western/一般均衡论和福利经济学",
    "cite": [
      {
        "label": "Wikipedia · Marginal rate of transformation",
        "url": "https://en.wikipedia.org/wiki/Marginal_rate_of_transformation"
      }
    ]
  },
  {
    "term": "价格歧视",
    "course": "西方经济学",
    "def": "价格歧视是指垄断厂商在同一时期内，以不同的价格销售同一种商品。",
    "source": "/western/市场理论",
    "cite": [
      {
        "label": "维基百科 · 价格歧视",
        "url": "https://zh.wikipedia.org/wiki/%E4%BB%B7%E6%A0%BC%E6%AD%A7%E8%A7%86"
      }
    ]
  },
  {
    "term": "价格调整方程",
    "course": "西方经济学",
    "def": "价格调整方程指用来表示通胀率与产生通胀压力之间关系的方程。",
    "source": "/western/通货膨胀理论",
    "cite": [
      {
        "label": "Wikipedia · Phillips curve",
        "url": "https://en.wikipedia.org/wiki/Phillips_curve"
      },
      {
        "label": "维基百科 · 菲利普斯曲线",
        "url": "https://zh.wikipedia.org/wiki/%E8%8F%B2%E5%88%A9%E6%99%AE%E6%96%AF%E6%9B%B2%E7%BA%BF"
      }
    ]
  },
  {
    "term": "供给",
    "course": "西方经济学",
    "def": "供给是指在其他条件不变的情况下，在一定时期内生产者在各种可能的价格下愿意而且能够提供的该商品的数量。",
    "source": "/western/需求与供给",
    "cite": [
      {
        "label": "维基百科 · 供给",
        "url": "https://zh.wikipedia.org/wiki/%E4%BE%9B%E7%BB%99"
      }
    ]
  },
  {
    "term": "供给的价格弹性",
    "course": "西方经济学",
    "def": "供给的价格弹性是指，在一定时期内，一种商品的供给量的变动对于该商品的价格的变动的反应程度。",
    "source": "/western/需求与供给",
    "cite": [
      {
        "label": "维基百科 · 供给的价格弹性",
        "url": "https://zh.wikipedia.org/wiki/%E4%BE%9B%E7%BB%99%E7%9A%84%E4%BB%B7%E6%A0%BC%E5%BC%B9%E6%80%A7"
      }
    ]
  },
  {
    "term": "供给规律",
    "course": "西方经济学",
    "def": "供给规律也称为供给定理、供给法则或供给原则，是指生产者的供给量与商品价格之间呈同方向变化的规律。",
    "source": "/western/需求与供给",
    "cite": [
      {
        "label": "Wikipedia · Law of supply",
        "url": "https://en.wikipedia.org/wiki/Law_of_supply"
      }
    ]
  },
  {
    "term": "免费乘车者问题",
    "course": "西方经济学",
    "def": "免费乘车者问题是指经济中由于存在不支付即可获得消费满足而产生的市场失灵问题。",
    "source": "/western/市场失灵和微观经济政策",
    "cite": [
      {
        "label": "维基百科 · 搭便车问题",
        "url": "https://zh.wikipedia.org/wiki/%E6%90%AD%E4%BE%BF%E8%BD%A6%E9%97%AE%E9%A2%98"
      },
      {
        "label": "Wikipedia · Free-rider problem",
        "url": "https://en.wikipedia.org/wiki/Free-rider_problem"
      }
    ]
  },
  {
    "term": "公共物品",
    "course": "西方经济学",
    "def": "通常把不具备排他性或（和）竞争性，一旦生产出来就不可能把某些人排除在外的商品称为（纯）公共物品。",
    "source": "/western/市场失灵和微观经济政策",
    "cite": [
      {
        "label": "维基百科 · 公共物品",
        "url": "https://zh.wikipedia.org/wiki/%E5%85%AC%E5%85%B1%E7%89%A9%E5%93%81"
      },
      {
        "label": "维基百科 · 公共物品",
        "url": "https://zh.wikipedia.org/wiki/%E5%85%AC%E5%85%B1%E7%89%A9%E5%93%81"
      }
    ]
  },
  {
    "term": "单一货币规则",
    "course": "西方经济学",
    "def": "单一货币规则是货币主义的政策主张，是货币主义经济学最重要的理论规则。",
    "source": "/western/宏观经济学的意见分歧",
    "cite": [
      {
        "label": "Wikipedia · Monetarism",
        "url": "https://en.wikipedia.org/wiki/Monetarism"
      },
      {
        "label": "维基百科 · 货币主义",
        "url": "https://zh.wikipedia.org/wiki/%E8%B4%A7%E5%B8%81%E4%B8%BB%E4%B9%89"
      }
    ]
  },
  {
    "term": "厂商利润最大化原则",
    "course": "西方经济学",
    "def": "厂商利润最大化原则是厂商做生产决策时所遵循的一般原则，它要求每增加一单位产品（或要素）所增加的收益等于由此带来的成本增加量，即边际收益等于边际成本： <span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>M</mi><mi>R</mi><mo>=</mo><mi>M</mi><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">MR =MC</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">M</span><span class=\"mord mathnormal\" style=\"margin-right:0.0077em;\">R</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">M</span><span class=\"mord mathnormal\" style=\"margin-right:0.0715em;\">C</span></span></span></span> 。",
    "source": "/western/市场理论",
    "cite": [
      {
        "label": "Wikipedia · Profit maximization",
        "url": "https://en.wikipedia.org/wiki/Profit_maximization"
      },
      {
        "label": "维基百科 · 利潤最大化",
        "url": "https://zh.wikipedia.org/wiki/%E5%88%A9%E6%BD%A4%E6%9C%80%E5%A4%A7%E5%8C%96"
      }
    ]
  },
  {
    "term": "古诺模型",
    "course": "西方经济学",
    "def": "古诺模型是一个只有两个寡头厂商的简单模型，即双头模型。",
    "source": "/western/市场理论",
    "cite": [
      {
        "label": "维基百科 · 古诺模型",
        "url": "https://zh.wikipedia.org/wiki/%E5%8F%A4%E8%AF%BA%E6%A8%A1%E5%9E%8B"
      }
    ]
  },
  {
    "term": "名义的和实际的国民收入",
    "course": "西方经济学",
    "def": "（1）名义的国民收入是按物品和劳务当年的价格计算所得的国民收入，它没有考虑通货膨胀因素。（2）实际的国民收入是以从前某一年为基年，按基年价格计算所得的国民收入，或者说是用价格指数折算之后的国民收入。",
    "source": "/western/宏观经济活动与宏观经济学",
    "cite": [
      {
        "label": "Wikipedia · Real and nominal value",
        "url": "https://en.wikipedia.org/wiki/Real_and_nominal_value"
      }
    ]
  },
  {
    "term": "向后弯曲的劳动供给曲线",
    "course": "西方经济学",
    "def": "根据劳动者的最优化行为，对应于一个特定的工资率，劳动者在效用最大化点上确定最优劳动供给量，从而得到劳动的供给曲线。",
    "source": "/western/生产要素市场",
    "cite": [
      {
        "label": "Wikipedia · Backward bending labour supply curve",
        "url": "https://en.wikipedia.org/wiki/Backward_bending_labour_supply_curve"
      }
    ]
  },
  {
    "term": "哈罗德-多马模型",
    "course": "西方经济学",
    "def": "哈罗德-多马模型是 20 世纪 40 年代由哈罗德和多马相继提出的分析经济增长问题的模型。",
    "source": "/western/经济增长",
    "cite": [
      {
        "label": "维基百科 · 哈罗德-多马模型",
        "url": "https://zh.wikipedia.org/wiki/%E5%93%88%E7%BD%97%E5%BE%B7-%E5%A4%9A%E9%A9%AC%E6%A8%A1%E5%9E%8B"
      },
      {
        "label": "维基百科 · 哈罗德-多马模型",
        "url": "https://zh.wikipedia.org/wiki/%E5%93%88%E7%BD%97%E5%BE%B7-%E5%A4%9A%E9%A9%AC%E6%A8%A1%E5%9E%8B"
      }
    ]
  },
  {
    "term": "商品的边际替代率",
    "course": "西方经济学",
    "def": "商品的边际替代率指在效用水平保持不变的前提条件下，消费者增加一单位第一种商品的消费所需要放弃的另外一种商品的消费数量。",
    "source": "/western/效用论",
    "cite": [
      {
        "label": "维基百科 · 边际替代率",
        "url": "https://zh.wikipedia.org/wiki/%E8%BE%B9%E9%99%85%E6%9B%BF%E4%BB%A3%E7%8E%87"
      },
      {
        "label": "Wikipedia · Marginal rate of substitution",
        "url": "https://en.wikipedia.org/wiki/Marginal_rate_of_substitution"
      }
    ]
  },
  {
    "term": "国内生产总值",
    "course": "西方经济学",
    "def": "国内生产总值（GDP）是指经济社会（一国或一个地区）在一定时期内运用生产要素所生产的全部最终产品和劳务的市场价值总和。",
    "source": "/western/宏观经济活动与宏观经济学",
    "cite": [
      {
        "label": "维基百科 · 国内生产总值",
        "url": "https://zh.wikipedia.org/wiki/%E5%9B%BD%E5%86%85%E7%94%9F%E4%BA%A7%E6%80%BB%E5%80%BC"
      }
    ]
  },
  {
    "term": "国民生产总值",
    "course": "西方经济学",
    "def": "国民生产总值（GNP）是指某国国民在一个既定的时期内所拥有的全部生产要素所生产的最终产品的市场价值总和，即本国常住居民所生产的最终产品市场价值的总和。",
    "source": "/western/宏观经济活动与宏观经济学",
    "cite": [
      {
        "label": "维基百科 · 国民生产总值",
        "url": "https://zh.wikipedia.org/wiki/%E5%9B%BD%E6%B0%91%E7%94%9F%E4%BA%A7%E6%80%BB%E5%80%BC"
      }
    ]
  },
  {
    "term": "均衡价格",
    "course": "西方经济学",
    "def": "均衡价格是指商品的市场需求量与市场供给量相等时的价格。",
    "source": "/western/需求与供给",
    "cite": [
      {
        "label": "维基百科 · 经济均衡",
        "url": "https://zh.wikipedia.org/wiki/%E7%BB%8F%E6%B5%8E%E5%9D%87%E8%A1%A1"
      },
      {
        "label": "Wikipedia · Economic equilibrium",
        "url": "https://en.wikipedia.org/wiki/Economic_equilibrium"
      }
    ]
  },
  {
    "term": "垄断竞争市场",
    "course": "西方经济学",
    "def": "垄断竞争市场是指一种由许多厂商生产和销售有差别的同种产品的市场，市场中既有垄断又有竞争，既不是完全竞争又不是完全垄断。",
    "source": "/western/市场理论",
    "cite": [
      {
        "label": "Wikipedia · Monopolistic competition",
        "url": "https://en.wikipedia.org/wiki/Monopolistic_competition"
      }
    ]
  },
  {
    "term": "外在性",
    "course": "西方经济学",
    "def": "外在性又称外部经济影响，是指一个经济行为主体的经济活动对另一个经济主体的福利所产生的效应，但这种效应并没有通过市场交易反映出来。",
    "source": "/western/市场失灵和微观经济政策",
    "cite": [
      {
        "label": "维基百科 · 外部性",
        "url": "https://zh.wikipedia.org/wiki/%E5%A4%96%E9%83%A8%E6%80%A7"
      },
      {
        "label": "Wikipedia · Externality",
        "url": "https://en.wikipedia.org/wiki/Externality"
      }
    ]
  },
  {
    "term": "外在经济和外在不经济",
    "course": "西方经济学",
    "def": "外在经济是指某一经济个体的一项经济活动给社会其他成员带来好处，但该个体并未获得相应的补偿，即其经济活动带来了正的外在影响；外在不经济是指某一经济个体的一项经济活动给社会其他成员带来成本，但该个体并不需要承担相应的全部成本，即其经济活动带来了负的外在影响。",
    "source": "/western/市场理论",
    "cite": [
      {
        "label": "维基百科 · 外部性",
        "url": "https://zh.wikipedia.org/wiki/%E5%A4%96%E9%83%A8%E6%80%A7"
      },
      {
        "label": "Wikipedia · Externality",
        "url": "https://en.wikipedia.org/wiki/Externality"
      }
    ]
  },
  {
    "term": "失业率",
    "course": "西方经济学",
    "def": "失业率是指一定时期内失业人数占劳动力总数（就业人数与失业人数之和）的比率。",
    "source": "/western/宏观经济活动与宏观经济学",
    "cite": [
      {
        "label": "维基百科 · 失业率",
        "url": "https://zh.wikipedia.org/wiki/%E5%A4%B1%E4%B8%9A%E7%8E%87"
      },
      {
        "label": "维基百科 · 中国大陆失业率",
        "url": "https://zh.wikipedia.org/wiki/%E4%B8%AD%E5%9B%BD%E5%A4%A7%E9%99%86%E5%A4%B1%E4%B8%9A%E7%8E%87"
      }
    ]
  },
  {
    "term": "完全竞争市场",
    "course": "西方经济学",
    "def": "完全竞争市场是指一种竞争不受任何阻碍和干扰的市场结构。",
    "source": "/western/市场理论",
    "cite": [
      {
        "label": "维基百科 · 完全竞争市场",
        "url": "https://zh.wikipedia.org/wiki/%E5%AE%8C%E5%85%A8%E7%AB%9E%E4%BA%89%E5%B8%82%E5%9C%BA"
      },
      {
        "label": "维基百科 · 完全竞争",
        "url": "https://zh.wikipedia.org/wiki/%E5%AE%8C%E5%85%A8%E7%AB%9E%E4%BA%89"
      }
    ]
  },
  {
    "term": "寡头垄断市场",
    "course": "西方经济学",
    "def": "寡头垄断市场指那种在某一产业只存在少数几个卖者的市场组织形式。",
    "source": "/western/市场理论",
    "cite": [
      {
        "label": "维基百科 · 寡头垄断",
        "url": "https://zh.wikipedia.org/wiki/%E5%AF%A1%E5%A4%B4%E5%9E%84%E6%96%AD"
      }
    ]
  },
  {
    "term": "局部均衡和一般均衡",
    "course": "西方经济学",
    "def": "局部均衡是指在假设其他市场不变的情况下，某一特定产品或要素的市场均衡；一般均衡是指在一个经济体系中，所有市场的供给和需求同时达到均衡的状态，一般均衡分析从微观经济主体行为的角度出发，考察每一种产品和每一个要素的供给和需求同时达到均衡状态所需具备的条件和相应的均衡价格以及均衡供销量应有的量值。",
    "source": "/western/一般均衡论和福利经济学",
    "cite": []
  },
  {
    "term": "市场出清",
    "course": "西方经济学",
    "def": "市场出清是指，无论劳动市场上的工资还是产品市场上的商品价格都具有充分的灵活性，可以根据供求情况迅速进行调整，以达到供求相等的均衡状态。",
    "source": "/western/宏观经济学的意见分歧",
    "cite": [
      {
        "label": "维基百科 · 市场出清",
        "url": "https://zh.wikipedia.org/wiki/%E5%B8%82%E5%9C%BA%E5%87%BA%E6%B8%85"
      }
    ]
  },
  {
    "term": "市场失灵",
    "course": "西方经济学",
    "def": "市场失灵是指市场机制不能有效地配置资源。",
    "source": "/western/市场失灵和微观经济政策",
    "cite": [
      {
        "label": "维基百科 · 市场失灵",
        "url": "https://zh.wikipedia.org/wiki/%E5%B8%82%E5%9C%BA%E5%A4%B1%E7%81%B5"
      },
      {
        "label": "维基百科 · 市场失灵",
        "url": "https://zh.wikipedia.org/wiki/%E5%B8%82%E5%9C%BA%E5%A4%B1%E7%81%B5"
      }
    ]
  },
  {
    "term": "帕累托最优状态",
    "course": "西方经济学",
    "def": "帕累托最优状态又称作经济效率，是指没有人可以在不使得他人境况变坏的条件下使得自身境况得到改善，此时的状态被称为帕累托最优状态。",
    "source": "/western/一般均衡论和福利经济学",
    "cite": [
      {
        "label": "维基百科 · 帕累托最优",
        "url": "https://zh.wikipedia.org/wiki/%E5%B8%95%E7%B4%AF%E6%89%98%E6%9C%80%E4%BC%98"
      },
      {
        "label": "Wikipedia · Pareto efficiency",
        "url": "https://en.wikipedia.org/wiki/Pareto_efficiency"
      }
    ]
  },
  {
    "term": "平均成本",
    "course": "西方经济学",
    "def": "平均成本是指厂商平均每生产一单位产品所消耗的成本。",
    "source": "/western/生产和成本论",
    "cite": [
      {
        "label": "维基百科 · 平均成本法",
        "url": "https://zh.wikipedia.org/wiki/%E5%B9%B3%E5%9D%87%E6%88%90%E6%9C%AC%E6%B3%95"
      }
    ]
  },
  {
    "term": "平均要素成本",
    "course": "西方经济学",
    "def": "平均要素成本是厂商购买每单位生产要素平均支付的成本。",
    "source": "/western/生产要素市场",
    "cite": [
      {
        "label": "Wikipedia · Factor market",
        "url": "https://en.wikipedia.org/wiki/Factor_market"
      },
      {
        "label": "维基百科 · 生产要素",
        "url": "https://zh.wikipedia.org/wiki/%E7%94%9F%E4%BA%A7%E8%A6%81%E7%B4%A0"
      }
    ]
  },
  {
    "term": "引致需求",
    "course": "西方经济学",
    "def": "引致需求又称「派生需求」，指由于消费者对产品的需求而引起的企业对生产要素的需求。",
    "source": "/western/生产要素市场",
    "cite": [
      {
        "label": "Wikipedia · Derived demand",
        "url": "https://en.wikipedia.org/wiki/Derived_demand"
      }
    ]
  },
  {
    "term": "总供给曲线",
    "course": "西方经济学",
    "def": "总供给曲线是表示经济中的总供给量与价格总水平之间关系的曲线，总供给量通常与价格总水平呈同向变动关系，曲线向右上方倾斜。",
    "source": "/western/总需求和总供给分析",
    "cite": [
      {
        "label": "维基百科 · 总供给",
        "url": "https://zh.wikipedia.org/wiki/%E6%80%BB%E4%BE%9B%E7%BB%99"
      },
      {
        "label": "Wikipedia · Aggregate supply",
        "url": "https://en.wikipedia.org/wiki/Aggregate_supply"
      }
    ]
  },
  {
    "term": "总收益、平均收益和边际收益",
    "course": "西方经济学",
    "def": "（1）厂商的总收益（ <span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mi>R</mi></mrow><annotation encoding=\"application/x-tex\">TR</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"mord mathnormal\" style=\"margin-right:0.0077em;\">R</span></span></span></span> ）是指厂商按照一定价格出售一定量产品所获得的全部收入，即： <span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mi>R</mi><mo>=</mo><mi>p</mi><mo stretchy=\"false\">(</mo><mi>y</mi><mo stretchy=\"false\">)</mo><mo>⋅</mo><mi>y</mi></mrow><annotation encoding=\"application/x-tex\">TR=p(y)\\cdot y</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"mord mathnormal\" style=\"margin-right:0.0077em;\">R</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\">p</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">⋅</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span></span></span></span> 。式中的 <span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mi>R</mi></mrow><annotation encoding=\"application/x-tex\">TR</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"mord mathnormal\" style=\"margin-right:0.0077em;\">R</span></span></span></span> 为总收益，<span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>p</mi><mo stretchy=\"false\">(</mo><mi>y</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">p(y)</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\">p</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span></span></span></span> 为厂商出售产品时面对的价格，<span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>y</mi></mrow><annotation encoding=\"application/x-tex\">y</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span></span></span></span> 为销售总量。（2）平均收益（ <span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mi>R</mi></mrow><annotation encoding=\"application/x-tex\">AR</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\">A</span><span class=\"mord mathnormal\" style=\"margin-right:0.0077em;\">R</span></span></span></span> ）指厂商在平均每一单位产品销售上所获得的收入，即 <span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mi>R</mi><mo>=</mo><mi>T</mi><mi>R</mi><mi mathvariant=\"normal\">/</mi><mi>y</mi><mo>=</mo><mi>p</mi><mo stretchy=\"false\">(</mo><mi>y</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">AR=TR/y=p(y)</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\">A</span><span class=\"mord mathnormal\" style=\"margin-right:0.0077em;\">R</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"mord mathnormal\" style=\"margin-right:0.0077em;\">R</span><span class=\"mord\">/</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\">p</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span></span></span></span> ，平均收益等于产品价格，厂商所面临的需求曲线即为平均收益曲线。（3）边际收益（ <span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>M</mi><mi>R</mi></mrow><annotation encoding=\"application/x-tex\">MR</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">M</span><span class=\"mord mathnormal\" style=\"margin-right:0.0077em;\">R</span></span></span></span> ）指厂商增加一单位产品销售时所获得的收入增量。",
    "source": "/western/市场理论",
    "cite": [
      {
        "label": "Wikipedia · Marginal revenue",
        "url": "https://en.wikipedia.org/wiki/Marginal_revenue"
      }
    ]
  },
  {
    "term": "总需求曲线",
    "course": "西方经济学",
    "def": "总需求曲线是表示经济当中的总需求量与价格总水平之间对应关系的曲线，总需求量通常与价格总水平呈反向变动关系，曲线向右下方倾斜。",
    "source": "/western/总需求和总供给分析",
    "cite": [
      {
        "label": "维基百科 · 总需求",
        "url": "https://zh.wikipedia.org/wiki/%E6%80%BB%E9%9C%80%E6%B1%82"
      },
      {
        "label": "Wikipedia · Aggregate demand",
        "url": "https://en.wikipedia.org/wiki/Aggregate_demand"
      }
    ]
  },
  {
    "term": "成本推动的通货膨胀",
    "course": "西方经济学",
    "def": "成本推动通货膨胀又称成本通货膨胀或供给通货膨胀，指由于供给成本的提高而引起的一般价格水平持续和显著的上涨。",
    "source": "/western/通货膨胀理论",
    "cite": [
      {
        "label": "Wikipedia · Cost-push inflation",
        "url": "https://en.wikipedia.org/wiki/Cost-push_inflation"
      }
    ]
  },
  {
    "term": "投资函数",
    "course": "西方经济学",
    "def": "以资本的边际效率不变为条件，投资取决于利息率，并且是利率的减函数，投资与利息率呈反方向变动关系，用公式表示为： <span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>I</mi><mo>=</mo><mi>I</mi><mo stretchy=\"false\">(</mo><mi>r</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">I=I(r)</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0785em;\">I</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0785em;\">I</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">r</span><span class=\"mclose\">)</span></span></span></span> 。",
    "source": "/western/产品市场和货币市场的一般均衡",
    "cite": [
      {
        "label": "Wikipedia · Investment (macroeconomics)",
        "url": "https://en.wikipedia.org/wiki/Investment_%28macroeconomics%29"
      },
      {
        "label": "维基百科 · 投资",
        "url": "https://zh.wikipedia.org/wiki/%E6%8A%95%E8%B5%84"
      }
    ]
  },
  {
    "term": "支持价格",
    "course": "西方经济学",
    "def": "支持价格又称为最低限价，是指政府为了扶植某一行业的生产而规定的该行业产品的最低价格。",
    "source": "/western/需求与供给",
    "cite": [
      {
        "label": "Wikipedia · Price floor",
        "url": "https://en.wikipedia.org/wiki/Price_floor"
      }
    ]
  },
  {
    "term": "收入指数化",
    "course": "西方经济学",
    "def": "收入指数化是指政府对付成本推动的通货膨胀时采取的一项措施。",
    "source": "/western/通货膨胀理论",
    "cite": [
      {
        "label": "Wikipedia · Indexation",
        "url": "https://en.wikipedia.org/wiki/Indexation"
      },
      {
        "label": "维基百科 · 指数化",
        "url": "https://zh.wikipedia.org/wiki/%E6%8C%87%E6%95%B0%E5%8C%96"
      }
    ]
  },
  {
    "term": "收入效应",
    "course": "西方经济学",
    "def": "收入效应是因商品价格变动引起消费者实际收入水平变动，进而引起消费者改变消费数量而对商品需求量产生的影响。",
    "source": "/western/效用论",
    "cite": [
      {
        "label": "维基百科 · 收入效应",
        "url": "https://zh.wikipedia.org/wiki/%E6%94%B6%E5%85%A5%E6%95%88%E5%BA%94"
      }
    ]
  },
  {
    "term": "效用",
    "course": "西方经济学",
    "def": "效用是指商品或劳务满足人的欲望的能力，即指消费者在消费商品或劳务时所感受到的满足程度。",
    "source": "/western/效用论",
    "cite": [
      {
        "label": "维基百科 · 效用",
        "url": "https://zh.wikipedia.org/wiki/%E6%95%88%E7%94%A8"
      },
      {
        "label": "维基百科 · 效用",
        "url": "https://zh.wikipedia.org/wiki/%E6%95%88%E7%94%A8"
      }
    ]
  },
  {
    "term": "新古典增长模型",
    "course": "西方经济学",
    "def": "新古典经济增长模型是指由美国经济学家索洛等提出的国民经济增长模型。",
    "source": "/western/经济增长",
    "cite": [
      {
        "label": "维基百科 · 新古典增长模型",
        "url": "https://zh.wikipedia.org/wiki/%E6%96%B0%E5%8F%A4%E5%85%B8%E5%A2%9E%E9%95%BF%E6%A8%A1%E5%9E%8B"
      }
    ]
  },
  {
    "term": "新古典宏观经济学",
    "course": "西方经济学",
    "def": "新古典宏观经济学，又称作「新古典主义」的一个经济学流派，这个学派的经济学遵循古典经济学的传统，相信市场力量的有效性；认为如果让市场机制自发地发挥作用，就可以解决失业、衰退等一系列宏观经济问题。",
    "source": "/western/宏观经济学的意见分歧",
    "cite": [
      {
        "label": "Wikipedia · New classical macroeconomics",
        "url": "https://en.wikipedia.org/wiki/New_classical_macroeconomics"
      }
    ]
  },
  {
    "term": "无差异曲线",
    "course": "西方经济学",
    "def": "无差异曲线是序数效用论的一种分析方法，是用来表示消费者偏好相同的两种商品的所有的数量组合。",
    "source": "/western/效用论",
    "cite": [
      {
        "label": "维基百科 · 无差异曲线",
        "url": "https://zh.wikipedia.org/wiki/%E6%97%A0%E5%B7%AE%E5%BC%82%E6%9B%B2%E7%BA%BF"
      },
      {
        "label": "维基百科 · 无差异曲线",
        "url": "https://zh.wikipedia.org/wiki/%E6%97%A0%E5%B7%AE%E5%BC%82%E6%9B%B2%E7%BA%BF"
      }
    ]
  },
  {
    "term": "替代效应",
    "course": "西方经济学",
    "def": "由商品的价格变动所引起的商品相对价格的变动，进而由商品的相对价格变动所引起的商品需求量的变动，称为替代效应。",
    "source": "/western/效用论",
    "cite": [
      {
        "label": "维基百科 · 替代效应",
        "url": "https://zh.wikipedia.org/wiki/%E6%9B%BF%E4%BB%A3%E6%95%88%E5%BA%94"
      }
    ]
  },
  {
    "term": "有保证的增长率",
    "course": "西方经济学",
    "def": "有保证的增长率 <span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>G</mi><mi>w</mi></msub></mrow><annotation encoding=\"application/x-tex\">G_w</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:0.8333em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">G</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"katex-sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0269em;\">w</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span> ，其公式为 <span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>G</mi><mi>w</mi></msub><mo>=</mo><mfrac><msub><mi>S</mi><mi>d</mi></msub><msub><mi>v</mi><mi>r</mi></msub></mfrac></mrow><annotation encoding=\"application/x-tex\">G_w=\\frac{S_d}{v_r}</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:0.8333em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">G</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"katex-sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0269em;\">w</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:1.3393em;vertical-align:-0.4451em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8942em;\"><span style=\"top:-2.655em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"katex-sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0359em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1645em;\"><span style=\"top:-2.357em;margin-left:-0.0359em;margin-right:0.0714em;\"><span class=\"pstrut\" style=\"height:2.5em;\"></span><span class=\"katex-sizing reset-size3 size1 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0278em;\">r</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.143em;\"><span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.4159em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"katex-sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3448em;\"><span style=\"top:-2.3488em;margin-left:-0.0576em;margin-right:0.0714em;\"><span class=\"pstrut\" style=\"height:2.5em;\"></span><span class=\"katex-sizing reset-size3 size1 mtight\"><span class=\"mord mathnormal mtight\">d</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1512em;\"><span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.4451em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span></span></span></span>，式中，<span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>S</mi><mi>d</mi></msub></mrow><annotation encoding=\"application/x-tex\">S_d</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:0.8333em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3361em;\"><span style=\"top:-2.55em;margin-left:-0.0576em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"katex-sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">d</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span> 是合意的储蓄率（假设既定），<span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>v</mi><mi>r</mi></msub></mrow><annotation encoding=\"application/x-tex\">v_r</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:0.5806em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"katex-sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0278em;\">r</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span> 是企业家意愿中所需的资本—产量比率。",
    "source": "/western/经济增长",
    "cite": [
      {
        "label": "Wikipedia · Harrod–Domar model",
        "url": "https://en.wikipedia.org/wiki/Harrod%E2%80%93Domar_model"
      },
      {
        "label": "维基百科 · 哈罗德-多马模型",
        "url": "https://zh.wikipedia.org/wiki/%E5%93%88%E7%BD%97%E5%BE%B7-%E5%A4%9A%E9%A9%AC%E6%A8%A1%E5%9E%8B"
      }
    ]
  },
  {
    "term": "比较静态分析",
    "course": "西方经济学",
    "def": "比较静态分析是比较分析不同静态均衡状态的方法。",
    "source": "/western/需求与供给",
    "cite": [
      {
        "label": "Wikipedia · Comparative statics",
        "url": "https://en.wikipedia.org/wiki/Comparative_statics"
      }
    ]
  },
  {
    "term": "流动偏好",
    "course": "西方经济学",
    "def": "流动偏好也称流动性偏好，是指人们持有货币的偏好。",
    "source": "/western/产品市场和货币市场的一般均衡",
    "cite": [
      {
        "label": "维基百科 · 流动偏好",
        "url": "https://zh.wikipedia.org/wiki/%E6%B5%81%E5%8A%A8%E5%81%8F%E5%A5%BD"
      }
    ]
  },
  {
    "term": "流动偏好陷阱",
    "course": "西方经济学",
    "def": "流动性陷阱又称凯恩斯陷阱，是指当利率水平极低时，人们对货币的投机性需求趋于无限大，货币当局即使增加货币供给，也难以继续压低利率并刺激投资的一种经济状态。",
    "source": "/western/产品市场和货币市场的一般均衡",
    "cite": [
      {
        "label": "Wikipedia · Liquidity trap",
        "url": "https://en.wikipedia.org/wiki/Liquidity_trap"
      },
      {
        "label": "维基百科 · 流动性陷阱",
        "url": "https://zh.wikipedia.org/wiki/%E6%B5%81%E5%8A%A8%E6%80%A7%E9%99%B7%E9%98%B1"
      }
    ]
  },
  {
    "term": "消费物价指数",
    "course": "西方经济学",
    "def": "消费物价指数是消费者物价指数的简称，它反映消费品（包括劳务）价格水平变动状况，一般用加权平均法来编制。",
    "source": "/western/通货膨胀理论",
    "cite": [
      {
        "label": "维基百科 · 消费物价指数",
        "url": "https://zh.wikipedia.org/wiki/%E6%B6%88%E8%B4%B9%E7%89%A9%E4%BB%B7%E6%8C%87%E6%95%B0"
      }
    ]
  },
  {
    "term": "消费者均衡",
    "course": "西方经济学",
    "def": "消费者均衡是指在其他条件不变的情况下，消费者实现效用最大化并将保持不变的一种状态。",
    "source": "/western/效用论",
    "cite": [
      {
        "label": "Wikipedia · Consumer choice",
        "url": "https://en.wikipedia.org/wiki/Consumer_choice"
      }
    ]
  },
  {
    "term": "理性预期假设",
    "course": "西方经济学",
    "def": "理性预期假说是指经济当事人对价格、利率、利润或收入等经济变量未来的变动可以作出符合理性的估计。",
    "source": "/western/宏观经济学的意见分歧",
    "cite": [
      {
        "label": "Wikipedia · Rational expectations",
        "url": "https://en.wikipedia.org/wiki/Rational_expectations"
      },
      {
        "label": "维基百科 · 理性预期",
        "url": "https://zh.wikipedia.org/wiki/%E7%90%86%E6%80%A7%E9%A2%84%E6%9C%9F"
      }
    ]
  },
  {
    "term": "瓦尔拉斯定律",
    "course": "西方经济学",
    "def": "瓦尔拉斯定律也称为瓦尔拉斯法则，是由经济学家瓦尔拉斯在其完全竞争市场的一般均衡理论体系中提出一个恒等关系式。",
    "source": "/western/一般均衡论和福利经济学",
    "cite": [
      {
        "label": "维基百科 · 瓦尔拉斯定律",
        "url": "https://zh.wikipedia.org/wiki/%E7%93%A6%E5%B0%94%E6%8B%89%E6%96%AF%E5%AE%9A%E5%BE%8B"
      }
    ]
  },
  {
    "term": "生产符合帕累托最优的条件",
    "course": "西方经济学",
    "def": "生产符合帕累托最优的条件指对于有多个个人、多种商品、多种生产要素的经济，达到均衡时要求在生产方面，任何一对生产要素之间的边际技术替代率在用这两种投入要素生产的所有商品的生产中都相等，即 <span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>R</mi><mi>T</mi><msubsup><mi>S</mi><mrow><mi>L</mi><mi>K</mi></mrow><mn>1</mn></msubsup><mo>=</mo><mi>R</mi><mi>T</mi><msubsup><mi>S</mi><mrow><mi>L</mi><mi>K</mi></mrow><mn>2</mn></msubsup></mrow><annotation encoding=\"application/x-tex\">RTS_{LK}^{1} = RTS_{LK}^2</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:1.0894em;vertical-align:-0.2753em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0077em;\">R</span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8141em;\"><span style=\"top:-2.4247em;margin-left:-0.0576em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"katex-sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">L</span><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0715em;\">K</span></span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"katex-sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">1</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2753em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:1.0894em;vertical-align:-0.2753em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0077em;\">R</span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8141em;\"><span style=\"top:-2.4247em;margin-left:-0.0576em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"katex-sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">L</span><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0715em;\">K</span></span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"katex-sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2753em;\"><span></span></span></span></span></span></span></span></span></span> ，此时该社会达到了帕累托最优状态。",
    "source": "/western/一般均衡论和福利经济学",
    "cite": [
      {
        "label": "维基百科 · 帕累托最优",
        "url": "https://zh.wikipedia.org/wiki/%E5%B8%95%E7%B4%AF%E6%89%98%E6%9C%80%E4%BC%98"
      },
      {
        "label": "Wikipedia · Pareto efficiency",
        "url": "https://en.wikipedia.org/wiki/Pareto_efficiency"
      }
    ]
  },
  {
    "term": "生产要素最优组合",
    "course": "西方经济学",
    "def": "生产要素最优组合是指在生产技术和要素价格不变的条件下，生产者在成本既定时实现产量最大或在产量既定时实现成本最小目标时所使用的各种生产要素的数量组合。",
    "source": "/western/生产和成本论",
    "cite": [
      {
        "label": "维基百科 · 生产要素最优组合",
        "url": "https://zh.wikipedia.org/wiki/%E7%94%9F%E4%BA%A7%E8%A6%81%E7%B4%A0%E6%9C%80%E4%BC%98%E7%BB%84%E5%90%88"
      },
      {
        "label": "维基百科 · 生产要素最优组合",
        "url": "https://zh.wikipedia.org/wiki/%E7%94%9F%E4%BA%A7%E8%A6%81%E7%B4%A0%E6%9C%80%E4%BC%98%E7%BB%84%E5%90%88"
      }
    ]
  },
  {
    "term": "科斯定理",
    "course": "西方经济学",
    "def": "科斯定理是一种产权理论。",
    "source": "/western/市场失灵和微观经济政策",
    "cite": [
      {
        "label": "维基百科 · 科斯定理",
        "url": "https://zh.wikipedia.org/wiki/%E7%A7%91%E6%96%AF%E5%AE%9A%E7%90%86"
      },
      {
        "label": "维基百科 · 科斯定理",
        "url": "https://zh.wikipedia.org/wiki/%E7%A7%91%E6%96%AF%E5%AE%9A%E7%90%86"
      }
    ]
  },
  {
    "term": "等产量曲线",
    "course": "西方经济学",
    "def": "等产量曲线是在技术水平不变的条件下，生产同一产量的两种生产要素投入量的各种不同组合的轨迹。",
    "source": "/western/生产和成本论",
    "cite": [
      {
        "label": "维基百科 · 等产量曲线",
        "url": "https://zh.wikipedia.org/wiki/%E7%AD%89%E4%BA%A7%E9%87%8F%E6%9B%B2%E7%BA%BF"
      },
      {
        "label": "维基百科 · 等产量曲线",
        "url": "https://zh.wikipedia.org/wiki/%E7%AD%89%E4%BA%A7%E9%87%8F%E6%9B%B2%E7%BA%BF"
      }
    ]
  },
  {
    "term": "等成本方程",
    "course": "西方经济学",
    "def": "厂商的等成本方程是指在要素价格一定的条件下，表示厂商花费相同成本可以使用的所有不同的要素组合的代数式。",
    "source": "/western/生产和成本论",
    "cite": []
  },
  {
    "term": "纳什均衡",
    "course": "西方经济学",
    "def": "纳什均衡指的是这样一种策略组合：如果其他参与者不改变策略，任何一个参与者都不会改变自己的策略。",
    "source": "/western/市场理论",
    "cite": [
      {
        "label": "维基百科 · 纳什均衡",
        "url": "https://zh.wikipedia.org/wiki/%E7%BA%B3%E4%BB%80%E5%9D%87%E8%A1%A1"
      },
      {
        "label": "维基百科 · 纳什均衡",
        "url": "https://zh.wikipedia.org/wiki/%E7%BA%B3%E4%BB%80%E5%9D%87%E8%A1%A1"
      }
    ]
  },
  {
    "term": "自然率假说",
    "course": "西方经济学",
    "def": "自然率假说是指在没有货币因素干扰的情况下，劳动市场在竞争条件下达到均衡时所决定的就业率。",
    "source": "/western/宏观经济学的意见分歧",
    "cite": [
      {
        "label": "Wikipedia · Natural rate of unemployment",
        "url": "https://en.wikipedia.org/wiki/Natural_rate_of_unemployment"
      },
      {
        "label": "维基百科 · 自然失業率",
        "url": "https://zh.wikipedia.org/wiki/%E8%87%AA%E7%84%B6%E5%A4%B1%E6%A5%AD%E7%8E%87"
      }
    ]
  },
  {
    "term": "菲利普斯曲线",
    "course": "西方经济学",
    "def": "菲利普斯曲线由英国经济学家 A.W. 菲利普斯首先提出；其原始研究描述的是失业率与货币工资增长率之间的负相关关系，后来才常被引申为通货膨胀率与失业率之间的短期替代关系。",
    "source": "/western/宏观经济学的意见分歧",
    "cite": [
      {
        "label": "维基百科 · 菲利普斯曲线",
        "url": "https://zh.wikipedia.org/wiki/%E8%8F%B2%E5%88%A9%E6%99%AE%E6%96%AF%E6%9B%B2%E7%BA%BF"
      }
    ]
  },
  {
    "term": "规模收益递增、不变和递减",
    "course": "西方经济学",
    "def": "作为规模经济与规模不经济的一种特殊的情况，如果产量的增加是借助于生产要素的同比例扩大实现的，那么相应的可定义规模收益的概念：①如果产量增加的比例大于生产要素增加的比例，则称生产是规模收益递增的；②若产量增加的比例等于生产要素增加的比例，则称生产是规模收益不变的；③若产量增加的比例小于生产要素增加的比例，则称生产是规模收益递减的。",
    "source": "/western/生产和成本论",
    "cite": [
      {
        "label": "Wikipedia · Returns to scale",
        "url": "https://en.wikipedia.org/wiki/Returns_to_scale"
      },
      {
        "label": "维基百科 · 规模报酬",
        "url": "https://zh.wikipedia.org/wiki/%E8%A7%84%E6%A8%A1%E6%8A%A5%E9%85%AC"
      }
    ]
  },
  {
    "term": "规模经济与规模不经济",
    "course": "西方经济学",
    "def": "规模经济和规模不经济用来说明厂商产量变动从而规模变动与成本之间的关系。",
    "source": "/western/生产和成本论",
    "cite": [
      {
        "label": "Wikipedia · Economies of scale",
        "url": "https://en.wikipedia.org/wiki/Economies_of_scale"
      },
      {
        "label": "维基百科 · 规模经济",
        "url": "https://zh.wikipedia.org/wiki/%E8%A7%84%E6%A8%A1%E7%BB%8F%E6%B5%8E"
      }
    ]
  },
  {
    "term": "货币主义",
    "course": "西方经济学",
    "def": "货币主义又称货币学派，它以制止通货膨胀和反对国家干预为主旨，以现代货币数量论为理论基础，坚信货币供给量的变动是物价水平和经济活动变动的最根本原因；强调货币及货币政策的重要性，主张实行单一规则的货币政策。",
    "source": "/western/宏观经济学的意见分歧",
    "cite": [
      {
        "label": "维基百科 · 货币主义",
        "url": "https://zh.wikipedia.org/wiki/%E8%B4%A7%E5%B8%81%E4%B8%BB%E4%B9%89"
      }
    ]
  },
  {
    "term": "货币工资刚性",
    "course": "西方经济学",
    "def": "货币工资刚性是指货币工资不随劳动需求和供给的变化而迅速做出相应的调整的现象。",
    "source": "/western/总需求和总供给分析",
    "cite": [
      {
        "label": "Wikipedia · Sticky wages",
        "url": "https://en.wikipedia.org/wiki/Sticky_wages"
      }
    ]
  },
  {
    "term": "资本的边际效率",
    "course": "西方经济学",
    "def": "资本的边际效率是一种贴现率，这一贴现率恰好使一项资本品在使用期内各预期收益的贴现值之和等于该项资本品的供给价格或重置成本。",
    "source": "/western/产品市场和货币市场的一般均衡",
    "cite": [
      {
        "label": "Wikipedia · Marginal efficiency of capital",
        "url": "https://en.wikipedia.org/wiki/Marginal_efficiency_of_capital"
      }
    ]
  },
  {
    "term": "边际产品价值",
    "course": "西方经济学",
    "def": "边际产品价值指增加一单位生产要素所增加的产量的价值，它等于边际产量与产品价格的乘积，即： <span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>V</mi><mi>M</mi><mi>P</mi><mo>=</mo><mi>P</mi><mo>⋅</mo><mi>M</mi><mi>P</mi></mrow><annotation encoding=\"application/x-tex\">VMP=P \\cdot MP</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">M</span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">P</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">P</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">⋅</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">M</span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">P</span></span></span></span> 。",
    "source": "/western/生产要素市场",
    "cite": []
  },
  {
    "term": "边际产量",
    "course": "西方经济学",
    "def": "边际产量是指在生产技术水平和其他投入要素不变的情况下，每增加一单位可变投入要素所得到的总产量的增加量。",
    "source": "/western/生产和成本论",
    "cite": [
      {
        "label": "Wikipedia · Marginal product",
        "url": "https://en.wikipedia.org/wiki/Marginal_product"
      }
    ]
  },
  {
    "term": "边际成本",
    "course": "西方经济学",
    "def": "边际成本是指产量变动某一数量所引起的成本变动的数量，也即厂商在短期内增加一单位产量时所增加的总成本。",
    "source": "/western/生产和成本论",
    "cite": [
      {
        "label": "维基百科 · 边际成本",
        "url": "https://zh.wikipedia.org/wiki/%E8%BE%B9%E9%99%85%E6%88%90%E6%9C%AC"
      },
      {
        "label": "维基百科 · 边际成本",
        "url": "https://zh.wikipedia.org/wiki/%E8%BE%B9%E9%99%85%E6%88%90%E6%9C%AC"
      }
    ]
  },
  {
    "term": "边际技术替代率",
    "course": "西方经济学",
    "def": "在维持产量水平不变的条件下，增加一单位某种生产要素投入量时所减少的另一种要素的投入数量，被称为边际技术替代率，其英文缩写为 <span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>M</mi><mi>R</mi><mi>T</mi><mi>S</mi></mrow><annotation encoding=\"application/x-tex\">MRTS</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">M</span><span class=\"mord mathnormal\" style=\"margin-right:0.0077em;\">R</span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span></span></span></span> 。",
    "source": "/western/生产和成本论",
    "cite": [
      {
        "label": "Wikipedia · Marginal rate of technical substitution",
        "url": "https://en.wikipedia.org/wiki/Marginal_rate_of_technical_substitution"
      }
    ]
  },
  {
    "term": "边际技术替代率递减规律",
    "course": "西方经济学",
    "def": "边际技术替代率递减规律是指，在维持产量不变的前提下，当一种生产要素的投入量不断增加时，每一单位的这种生产要素所能替代的另一种生产要素的数量是递减的。",
    "source": "/western/生产和成本论",
    "cite": [
      {
        "label": "Wikipedia · Marginal rate of technical substitution",
        "url": "https://en.wikipedia.org/wiki/Marginal_rate_of_technical_substitution"
      }
    ]
  },
  {
    "term": "边际收益产品",
    "course": "西方经济学",
    "def": "边际收益产品是指在其他生产要素的投入量固定不变时追加一单位的某种生产要素投入所带来的收益。",
    "source": "/western/生产要素市场",
    "cite": [
      {
        "label": "Wikipedia · Marginal revenue product",
        "url": "https://en.wikipedia.org/wiki/Marginal_revenue_product"
      }
    ]
  },
  {
    "term": "边际收益递减规律",
    "course": "西方经济学",
    "def": "在技术水平不变的条件下，在连续等量地把某一种可变生产要素增加到其他一种或几种数量不变的生产要素上去的过程中，当这种可变生产要素的投入量小于某一特定值时，增加该要素投入所带来的边际产量是递增的；当这种可变要素的投入量连续增加并超过这个特定值时，增加该要素投入所带来的边际产量是递减的。",
    "source": "/western/生产和成本论",
    "cite": [
      {
        "label": "Wikipedia · Diminishing returns",
        "url": "https://en.wikipedia.org/wiki/Diminishing_returns"
      },
      {
        "label": "维基百科 · 边际收益递减",
        "url": "https://zh.wikipedia.org/wiki/%E8%BE%B9%E9%99%85%E6%94%B6%E7%9B%8A%E9%80%92%E5%87%8F"
      }
    ]
  },
  {
    "term": "边际效用递减规律",
    "course": "西方经济学",
    "def": "边际效用递减规律是指特定时期内，在其他商品的消费保持不变的条件下，消费者不断地增加某种商品的消费量，随着该商品消费数量的增加，消费者每增加一单位该商品的消费所获得的效用增加量逐渐减少。",
    "source": "/western/效用论",
    "cite": [
      {
        "label": "Wikipedia · Marginal utility",
        "url": "https://en.wikipedia.org/wiki/Marginal_utility"
      },
      {
        "label": "维基百科 · 边际效用",
        "url": "https://zh.wikipedia.org/wiki/%E8%BE%B9%E9%99%85%E6%95%88%E7%94%A8"
      }
    ]
  },
  {
    "term": "边际要素成本",
    "course": "西方经济学",
    "def": "边际要素成本是指厂商增加一单位生产要素投入量所带来的成本增加量。",
    "source": "/western/生产要素市场",
    "cite": []
  },
  {
    "term": "逆向选择",
    "course": "西方经济学",
    "def": "逆向选择指在次品市场上出现的高质量产品遭淘汰而低质量产品生存下来的现象。",
    "source": "/western/市场失灵和微观经济政策",
    "cite": [
      {
        "label": "维基百科 · 逆向选择",
        "url": "https://zh.wikipedia.org/wiki/%E9%80%86%E5%90%91%E9%80%89%E6%8B%A9"
      }
    ]
  },
  {
    "term": "道德风险",
    "course": "西方经济学",
    "def": "道德风险是指交易双方在签订交易合约后，信息占优势的一方为了最大化自己的收益而损坏另一方，同时也不承担后果的一种行为，即是市场的一方不能查知另一方的行动一种情形，又被称作隐藏行动问题。",
    "source": "/western/市场失灵和微观经济政策",
    "cite": [
      {
        "label": "维基百科 · 道德风险",
        "url": "https://zh.wikipedia.org/wiki/%E9%81%93%E5%BE%B7%E9%A3%8E%E9%99%A9"
      }
    ]
  },
  {
    "term": "长期平均成本曲线",
    "course": "西方经济学",
    "def": "长期平均成本曲线（ <span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>L</mi><mi>A</mi><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">LAC</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\">L</span><span class=\"mord mathnormal\">A</span><span class=\"mord mathnormal\" style=\"margin-right:0.0715em;\">C</span></span></span></span> ）是用于描述长期平均成本与产量关系的一条曲线。",
    "source": "/western/生产和成本论",
    "cite": [
      {
        "label": "维基百科 · 成本曲线",
        "url": "https://zh.wikipedia.org/wiki/%E6%88%90%E6%9C%AC%E6%9B%B2%E7%BA%BF"
      }
    ]
  },
  {
    "term": "限制价格",
    "course": "西方经济学",
    "def": "限制价格是指政府为了防止某些生活必需品的价格上涨而规定的这些产品的最高价格。",
    "source": "/western/需求与供给",
    "cite": [
      {
        "label": "Wikipedia · Price ceiling",
        "url": "https://en.wikipedia.org/wiki/Price_ceiling"
      },
      {
        "label": "维基百科 · 价格上限",
        "url": "https://zh.wikipedia.org/wiki/%E4%BB%B7%E6%A0%BC%E4%B8%8A%E9%99%90"
      }
    ]
  },
  {
    "term": "需求",
    "course": "西方经济学",
    "def": "消费者对一种商品的需求，是指在一个特定时期内消费者在各种可能的价格下愿意而且能够购买的该商品的数量。",
    "source": "/western/需求与供给",
    "cite": [
      {
        "label": "维基百科 · 需求",
        "url": "https://zh.wikipedia.org/wiki/%E9%9C%80%E6%B1%82"
      },
      {
        "label": "维基百科 · 需求",
        "url": "https://zh.wikipedia.org/wiki/%E9%9C%80%E6%B1%82"
      }
    ]
  },
  {
    "term": "需求拉动的通货膨胀",
    "course": "西方经济学",
    "def": "需求拉动通货膨胀是指由总需求增加所引起的一般价格水平的持续和显著的上涨。",
    "source": "/western/通货膨胀理论",
    "cite": [
      {
        "label": "Wikipedia · Demand-pull inflation",
        "url": "https://en.wikipedia.org/wiki/Demand-pull_inflation"
      }
    ]
  },
  {
    "term": "需求的交叉弹性",
    "course": "西方经济学",
    "def": "需求的交叉弹性是指在某特定时间内，某种商品或劳务需求量变动的百分比与另一种相关商品或劳务的价格变动百分比之比。",
    "source": "/western/需求与供给",
    "cite": [
      {
        "label": "维基百科 · 需求的交叉弹性",
        "url": "https://zh.wikipedia.org/wiki/%E9%9C%80%E6%B1%82%E7%9A%84%E4%BA%A4%E5%8F%89%E5%BC%B9%E6%80%A7"
      }
    ]
  },
  {
    "term": "需求的价格弹性",
    "course": "西方经济学",
    "def": "需求的价格弹性反映了相应于价格的变动，需求量变动的敏感程度，用弹性系数加以衡量，被定义为需求量变动的百分比除以价格变动的百分比。",
    "source": "/western/需求与供给",
    "cite": [
      {
        "label": "维基百科 · 需求的价格弹性",
        "url": "https://zh.wikipedia.org/wiki/%E9%9C%80%E6%B1%82%E7%9A%84%E4%BB%B7%E6%A0%BC%E5%BC%B9%E6%80%A7"
      }
    ]
  },
  {
    "term": "需求的收入弹性",
    "course": "西方经济学",
    "def": "需求的收入弹性是指相应于消费者收入的变动，需求量变动的敏感程度，其弹性系数定义为需求量变动的百分比除以收入变动的百分比。",
    "source": "/western/需求与供给",
    "cite": [
      {
        "label": "维基百科 · 需求的收入弹性",
        "url": "https://zh.wikipedia.org/wiki/%E9%9C%80%E6%B1%82%E7%9A%84%E6%94%B6%E5%85%A5%E5%BC%B9%E6%80%A7"
      }
    ]
  },
  {
    "term": "需求规律",
    "course": "西方经济学",
    "def": "需求规律也称为需求定理、需求法则或需求原则，指消费者的需求量与商品价格之间呈反方向变化的规律。",
    "source": "/western/需求与供给",
    "cite": [
      {
        "label": "维基百科 · 需求规律",
        "url": "https://zh.wikipedia.org/wiki/%E9%9C%80%E6%B1%82%E8%A7%84%E5%BE%8B"
      }
    ]
  },
  {
    "term": "预算约束线",
    "course": "西方经济学",
    "def": "预算约束线又称为预算线、消费可能线和价格线，表示在消费者的收入和商品的价格给定的条件下，消费者的全部收入所能购买到的两种商品的各种组合。",
    "source": "/western/效用论",
    "cite": [
      {
        "label": "Wikipedia · Budget constraint",
        "url": "https://en.wikipedia.org/wiki/Budget_constraint"
      },
      {
        "label": "维基百科 · 预算约束",
        "url": "https://zh.wikipedia.org/wiki/%E9%A2%84%E7%AE%97%E7%BA%A6%E6%9D%9F"
      }
    ]
  },
  {
    "term": "收入-消费曲线",
    "course": "西方经济学",
    "def": "在消费者的偏好和商品的价格不变的条件下，消费者的收入变动引起的消费者效用最大化的均衡点的轨迹。它反映收入变化引起的消费量变动的情况。",
    "source": "/western/效用论",
    "cite": [
      {
        "label": "Wikipedia · Income–consumption curve",
        "url": "https://en.wikipedia.org/wiki/Income%E2%80%93consumption_curve"
      }
    ]
  },
  {
    "term": "基数效用论",
    "course": "西方经济学",
    "def": "基数效用论认为效用可以用基数（1, 2, 3…）来衡量和加总，消费者通过比较不同商品组合的效用来做出选择。",
    "source": "/western/效用论",
    "cite": [
      {
        "label": "Wikipedia · Cardinal utility",
        "url": "https://en.wikipedia.org/wiki/Cardinal_utility"
      },
      {
        "label": "维基百科 · 基数效用",
        "url": "https://zh.wikipedia.org/wiki/%E5%9F%BA%E6%95%B0%E6%95%88%E7%94%A8"
      }
    ]
  },
  {
    "term": "政府购买乘数",
    "course": "西方经济学",
    "def": "政府购买乘数是指政府购买支出变动所引起的国民收入变动量与政府购买支出变动量的比率。",
    "source": "/western/简单国民收入决定理论",
    "cite": [
      {
        "label": "Wikipedia · Spending multiplier",
        "url": "https://en.wikipedia.org/wiki/Spending_multiplier"
      }
    ]
  },
  {
    "term": "丁伯根法则",
    "course": "货币银行学",
    "def": "丁伯根法则是由荷兰经济学家扬·丁伯根提出的政策目标与政策工具配置原则。丁伯根是 1969 年首届经济学奖共同得主之一。",
    "source": "/monetary/内外均衡理论",
    "cite": []
  },
  {
    "term": "互换",
    "course": "货币银行学",
    "def": "互换是指互换双方达成协议并在一定的期限内转换彼此货币种类、借贷利率基础及其他资产的一种交易。",
    "source": "/monetary/金融市场",
    "cite": [
      {
        "label": "维基百科 · 互换",
        "url": "https://zh.wikipedia.org/wiki/%E4%BA%92%E6%8D%A2"
      }
    ]
  },
  {
    "term": "全能型商业银行",
    "course": "货币银行学",
    "def": "全能型商业银行是指商业银行可以经营一切金融业务，包括各种期限和种类的存贷款，各种证券买卖以及信托，支付清算等金融业务。",
    "source": "/monetary/金融中介体系",
    "cite": []
  },
  {
    "term": "内外均衡",
    "course": "货币银行学",
    "def": "内外均衡是指经济的对内与对外均衡。",
    "source": "/monetary/内外均衡理论",
    "cite": []
  },
  {
    "term": "利率与收益率",
    "course": "货币银行学",
    "def": "利率是利息率的简称，是一定时期内利息额与贷出资本额的比率；收益率是向证券持有者支付的利息加上以购买价格百分比表示的价格变动率——利率不能准确衡量一定时期内投资人持有证券所能得到的收益状况，收益率则能准确衡量。",
    "source": "/monetary/利率理论",
    "cite": []
  },
  {
    "term": "名义利率和实际利率",
    "course": "货币银行学",
    "def": "名义利率是指以名义货币表示的利率，是借贷契约和有价证券上载明的利息率，也就是金融市场表现出的利率；实际利率是指名义利率剔除了物价变动（币值变动）因素之后的利率，是债务人使用资金的真实成本。",
    "source": "/monetary/利率理论",
    "cite": []
  },
  {
    "term": "国际货币体系",
    "course": "货币银行学",
    "def": "国际货币体系是指国际间的货币安排。",
    "source": "/monetary/国际货币体系",
    "cite": [
      {
        "label": "维基百科 · 国际货币体系",
        "url": "https://zh.wikipedia.org/wiki/%E5%9B%BD%E9%99%85%E8%B4%A7%E5%B8%81%E4%BD%93%E7%B3%BB"
      }
    ]
  },
  {
    "term": "基准利率",
    "course": "货币银行学",
    "def": "基准利率是指带动和影响其他利率的利率，也称为「中心利率」。",
    "source": "/monetary/利率理论",
    "cite": [
      {
        "label": "维基百科 · 基准利率",
        "url": "https://zh.wikipedia.org/wiki/%E5%9F%BA%E5%87%86%E5%88%A9%E7%8E%87"
      }
    ]
  },
  {
    "term": "基础货币",
    "course": "货币银行学",
    "def": "基础货币也称为「高能货币」、「强力货币」，是指中央银行所发行的现金货币和商业银行在中央银行的准备金存款的总和。",
    "source": "/monetary/货币供求理论",
    "cite": []
  },
  {
    "term": "存款保险制度",
    "course": "货币银行学",
    "def": "存款保险制度是一种对存款人利益提供保护、稳定金融体系的制度安排。",
    "source": "/monetary/金融中介体系",
    "cite": [
      {
        "label": "维基百科 · 存款保险制度",
        "url": "https://zh.wikipedia.org/wiki/%E5%AD%98%E6%AC%BE%E4%BF%9D%E9%99%A9%E5%88%B6%E5%BA%A6"
      }
    ]
  },
  {
    "term": "居民消费物价指数",
    "course": "货币银行学",
    "def": "居民消费物价指数是综合反映一定时期内居民生活消费品和服务项目价格变动的趋势和程度的价格指数。",
    "source": "/monetary/通货膨胀与通货紧缩",
    "cite": []
  },
  {
    "term": "布雷顿森林体系",
    "course": "货币银行学",
    "def": "布雷顿森林体系是指第二次世界大战后以固定汇率制为基本特征的国际货币体系。",
    "source": "/monetary/国际货币体系",
    "cite": [
      {
        "label": "维基百科 · 布雷顿森林体系",
        "url": "https://zh.wikipedia.org/wiki/%E5%B8%83%E9%9B%B7%E9%A1%BF%E6%A3%AE%E6%9E%97%E4%BD%93%E7%B3%BB"
      }
    ]
  },
  {
    "term": "强制储蓄效应",
    "course": "货币银行学",
    "def": "政府如果通过向中央银行借债，从而引起货币增发这类办法筹措建设资金，就会强制增加全社会的投资需求，结果将是物价上涨。在公众名义收入不变的条件下，按原来的模式和数量进行的消费和储蓄，两者的实际额均随物价的上涨而相应减少，其减少的部分大体相当于政府运用通货膨胀实现政府收入的部分，如此实现的政府储蓄是强制储蓄。",
    "source": "/monetary/通货膨胀与通货紧缩",
    "cite": []
  },
  {
    "term": "支出调整政策",
    "course": "货币银行学",
    "def": "支出调整政策是指通过影响国内收入和国内总支出，或者通过控制货币供给量、收缩或扩张国内投资和消费总需求来调控国内总供给与总需求以达到内部均衡目标的宏观经济政策。",
    "source": "/monetary/内外均衡理论",
    "cite": []
  },
  {
    "term": "支出转换政策",
    "course": "货币银行学",
    "def": "支出转换政策是指能够影响贸易商品的国际竞争力通过改变支出构成而使本国收入相对于支出增加的政策。",
    "source": "/monetary/内外均衡理论",
    "cite": []
  },
  {
    "term": "收入分配效应",
    "course": "货币银行学",
    "def": "由于社会各阶层收入来源极不相同，因此，在物价总水平上涨时，有些人的实际收入水平会下降，有些人的实际收入水平却反而会提高。",
    "source": "/monetary/通货膨胀与通货紧缩",
    "cite": []
  },
  {
    "term": "收益的资本化",
    "course": "货币银行学",
    "def": "收益的资本化是指，由于利息已转化为收益的一般形态，于是任何有收益的事物，即使它并不是一笔贷放出去的货币，甚至不是真正有一笔实实在在的资本存在，也可以通过收益与利率的对比而倒过来算出它相当于多大的资本金额。",
    "source": "/monetary/利率理论",
    "cite": []
  },
  {
    "term": "最终贷款人",
    "course": "货币银行学",
    "def": "最终贷款人是指在危机时刻中央银行应尽的融通责任，它应满足对高能货币的需求，以防止由恐慌引起的货币存量的收缩。",
    "source": "/monetary/金融中介体系",
    "cite": [
      {
        "label": "维基百科 · 最终贷款人",
        "url": "https://zh.wikipedia.org/wiki/%E6%9C%80%E7%BB%88%E8%B4%B7%E6%AC%BE%E4%BA%BA"
      }
    ]
  },
  {
    "term": "期权",
    "course": "货币银行学",
    "def": "期权合约赋予其持有者（即期权的购买者）一种权利，使其可以（但不必须）在未来约定的时期内以议定的价格向期权合约的出售者买入（看涨期权）或卖出（看跌期权）一定数量的资产。",
    "source": "/monetary/金融市场",
    "cite": [
      {
        "label": "维基百科 · 期权",
        "url": "https://zh.wikipedia.org/wiki/%E6%9C%9F%E6%9D%83"
      }
    ]
  },
  {
    "term": "期货",
    "course": "货币银行学",
    "def": "期货合约是在远期合约的基础上发展起来的一种标准化的买卖合约。",
    "source": "/monetary/金融市场",
    "cite": [
      {
        "label": "维基百科 · 期货",
        "url": "https://zh.wikipedia.org/wiki/%E6%9C%9F%E8%B4%A7"
      }
    ]
  },
  {
    "term": "汇率制度",
    "course": "货币银行学",
    "def": "汇率制度是指一个国家、一个经济体或一个经济区域或国际社会对于确定、维持、调整与管理汇率的原则、依据、方法和机构等所作出的系统规定。",
    "source": "/monetary/汇率理论",
    "cite": [
      {
        "label": "维基百科 · 汇率制度",
        "url": "https://zh.wikipedia.org/wiki/%E6%B1%87%E7%8E%87%E5%88%B6%E5%BA%A6"
      }
    ]
  },
  {
    "term": "泰勒规则",
    "course": "货币银行学",
    "def": "泰勒规则是根据产出和通货膨胀的相对变化而调整利率的操作方法。",
    "source": "/monetary/货币政策",
    "cite": []
  },
  {
    "term": "流动性偏好",
    "course": "货币银行学",
    "def": "个人对收入的支配有消费和储蓄两种形式，储蓄部分以现金货币形式持有还是以有价证券形式持有，取决于人们对金融资产流动性的偏好程度，即流动性偏好；凯恩斯认为它是影响货币需求的主要心理因素。",
    "source": "/monetary/货币供求理论",
    "cite": [
      {
        "label": "维基百科 · 流动性偏好",
        "url": "https://zh.wikipedia.org/wiki/%E6%B5%81%E5%8A%A8%E6%80%A7%E5%81%8F%E5%A5%BD"
      }
    ]
  },
  {
    "term": "滞胀",
    "course": "货币银行学",
    "def": "滞胀是指经济过程所呈现的并不是失业和通货膨胀之间的相互「替代」，而是经济停滞和通货膨胀相伴随，高的通货膨胀率与高的失业率相伴随。",
    "source": "/monetary/通货膨胀与通货紧缩",
    "cite": [
      {
        "label": "维基百科 · 滞胀",
        "url": "https://zh.wikipedia.org/wiki/%E6%BB%9E%E8%83%80"
      }
    ]
  },
  {
    "term": "特里芬难题",
    "course": "货币银行学",
    "def": "特里芬难题是指在布雷顿森林体系下，美元承担的两个责任，即保证美元按官价兑换黄金、维持各国对美元的信心和提供足够的国际清偿力（即美元）之间的矛盾。",
    "source": "/monetary/国际货币体系",
    "cite": [
      {
        "label": "维基百科 · 特里芬难题",
        "url": "https://zh.wikipedia.org/wiki/%E7%89%B9%E9%87%8C%E8%8A%AC%E9%9A%BE%E9%A2%98"
      }
    ]
  },
  {
    "term": "短期利率和长期利率",
    "course": "货币银行学",
    "def": "金融市场上的利率种类根据期限可分为短期利率和长期利率。短期利率反映的是货币市场上各种借贷利率，长期利率反映的是资本市场上各种借贷利率，短期利率一般低于长期利率，但其波动幅度往往大于长期利率。",
    "source": "/monetary/利率理论",
    "cite": []
  },
  {
    "term": "米德冲突",
    "course": "货币银行学",
    "def": "米德冲突是指在某些情况下，单独使用支出调整政策——货币政策和财政政策追求内、外部均衡，将会导致一国内部均衡与外部均衡之间的冲突。",
    "source": "/monetary/内外均衡理论",
    "cite": []
  },
  {
    "term": "菲利普斯曲线",
    "course": "货币银行学",
    "def": "菲利普斯曲线由英国经济学家 A.W. 菲利普斯首先提出；其原始研究描述的是失业率与货币工资增长率之间的负相关关系，后来才常被引申为通货膨胀率与失业率之间的短期替代关系。",
    "source": "/monetary/通货膨胀与通货紧缩",
    "cite": [
      {
        "label": "维基百科 · 菲利普斯曲线",
        "url": "https://zh.wikipedia.org/wiki/%E8%8F%B2%E5%88%A9%E6%99%AE%E6%96%AF%E6%9B%B2%E7%BA%BF"
      }
    ]
  },
  {
    "term": "表外业务",
    "course": "货币银行学",
    "def": "表外业务是指凡未列入银行资产负债表内且不影响资产负债总额的业务。",
    "source": "/monetary/金融中介体系",
    "cite": [
      {
        "label": "维基百科 · 表外业务",
        "url": "https://zh.wikipedia.org/wiki/%E8%A1%A8%E5%A4%96%E4%B8%9A%E5%8A%A1"
      }
    ]
  },
  {
    "term": "货币局制度",
    "course": "货币银行学",
    "def": "货币局制度是指从法律上明确承诺本国或地区货币按固定汇率兑换某种特定的外币，同时限制官方的货币发行，以确保履行法定义务，如阿根廷和我国香港特别行政区。",
    "source": "/monetary/汇率理论",
    "cite": [
      {
        "label": "维基百科 · 货币局制度",
        "url": "https://zh.wikipedia.org/wiki/%E8%B4%A7%E5%B8%81%E5%B1%80%E5%88%B6%E5%BA%A6"
      }
    ]
  },
  {
    "term": "货币层次",
    "course": "货币银行学",
    "def": "货币层次是指各国中央银行在确定货币供给的统计口径时以金融资产流动性的大小作为标准，并根据自身政策目的的特点和需要对货币所划分的层次。",
    "source": "/monetary/货币供求理论",
    "cite": []
  },
  {
    "term": "货币市场",
    "course": "货币银行学",
    "def": "货币市场是一年和一年以内短期资金融通的市场，包括同业拆借市场、银行间债券市场、大额可转让存单市场、商业票据市场和国库券市场等子市场。",
    "source": "/monetary/金融市场",
    "cite": [
      {
        "label": "维基百科 · 货币市场",
        "url": "https://zh.wikipedia.org/wiki/%E8%B4%A7%E5%B8%81%E5%B8%82%E5%9C%BA"
      },
      {
        "label": "维基百科 · 货币市场",
        "url": "https://zh.wikipedia.org/wiki/%E8%B4%A7%E5%B8%81%E5%B8%82%E5%9C%BA"
      }
    ]
  },
  {
    "term": "货币政策时滞",
    "course": "货币银行学",
    "def": "货币政策时滞是指政策从制定到获得主要的或全部的效果所经历的时间。",
    "source": "/monetary/货币政策",
    "cite": []
  },
  {
    "term": "购买力平价",
    "course": "货币银行学",
    "def": "购买力平价是由瑞典经济学家卡塞尔在 20 世纪初提出的，用来解释长期汇率决定的基础。",
    "source": "/monetary/汇率理论",
    "cite": [
      {
        "label": "维基百科 · 购买力平价",
        "url": "https://zh.wikipedia.org/wiki/%E8%B4%AD%E4%B9%B0%E5%8A%9B%E5%B9%B3%E4%BB%B7"
      },
      {
        "label": "维基百科 · 购买力平价",
        "url": "https://zh.wikipedia.org/wiki/%E8%B4%AD%E4%B9%B0%E5%8A%9B%E5%B9%B3%E4%BB%B7"
      }
    ]
  },
  {
    "term": "资产结构调整效应",
    "course": "货币银行学",
    "def": "资产结构调整效应也称财富分配效应，是指由物价上涨所带来的家庭财产不同构成部分的价值有升有降的现象。",
    "source": "/monetary/通货膨胀与通货紧缩",
    "cite": []
  },
  {
    "term": "资产证券化",
    "course": "货币银行学",
    "def": "资产证券化是指将已经存在的信贷资产集中起来并重新分割为证券进而转卖给市场上的投资者，从而使此项资产在原持有者的资产负债表上消失的融资形式。",
    "source": "/monetary/金融中介体系",
    "cite": [
      {
        "label": "维基百科 · 资产证券化",
        "url": "https://zh.wikipedia.org/wiki/%E8%B5%84%E4%BA%A7%E8%AF%81%E5%88%B8%E5%8C%96"
      }
    ]
  },
  {
    "term": "资本市场",
    "course": "货币银行学",
    "def": "资本市场一般指交易期限在一年以上的市场，主要包括股票市场和债券市场，满足工商企业的中长期投资需求和政府财政赤字的需要。",
    "source": "/monetary/金融市场",
    "cite": [
      {
        "label": "维基百科 · 资本市场",
        "url": "https://zh.wikipedia.org/wiki/%E8%B5%84%E6%9C%AC%E5%B8%82%E5%9C%BA"
      }
    ]
  },
  {
    "term": "远期",
    "course": "货币银行学",
    "def": "远期是指在确定的未来某一时期，按照确定的价格买卖一定数量的某种资产的协议。",
    "source": "/monetary/金融市场",
    "cite": []
  },
  {
    "term": "通货膨胀",
    "course": "货币银行学",
    "def": "在西方经济学教科书中，通常将通货膨胀定义为商品和服务的货币价格总水平持续上涨的现象。",
    "source": "/monetary/通货膨胀与通货紧缩",
    "cite": [
      {
        "label": "维基百科 · 通货膨胀",
        "url": "https://zh.wikipedia.org/wiki/%E9%80%9A%E8%B4%A7%E8%86%A8%E8%83%80"
      }
    ]
  },
  {
    "term": "通货膨胀目标制",
    "course": "货币银行学",
    "def": "通货膨胀目标制是一套用于货币政策决策的框架，是中央银行直接以通货膨胀为目标并对外公布该目标的货币政策制度。",
    "source": "/monetary/货币政策",
    "cite": []
  },
  {
    "term": "金融工具",
    "course": "货币银行学",
    "def": "金融工具又称金融资产，它是一种能够证明金融交易的金额、期限以及价格的书面文件，对于债权、债务双方的权利和义务具有法律上的约束意义。",
    "source": "/monetary/金融市场",
    "cite": [
      {
        "label": "维基百科 · 金融工具",
        "url": "https://zh.wikipedia.org/wiki/%E9%87%91%E8%9E%8D%E5%B7%A5%E5%85%B7"
      }
    ]
  },
  {
    "term": "金融监管成本",
    "course": "货币银行学",
    "def": "金融监管成本，大致分为显性成本和隐性成本两个部分。",
    "source": "/monetary/金融监管体系",
    "cite": []
  },
  {
    "term": "同比",
    "course": "货币银行学",
    "def": "与上年同月相比的读数，用于看趋势、剔除季节因素；CPI 公报通常同时公布同比与环比两种读数。",
    "source": "/monetary/通货膨胀与通货紧缩",
    "cite": [
      {
        "label": "维基百科 · 同比",
        "url": "https://zh.wikipedia.org/wiki/%E5%90%8C%E6%AF%94"
      }
    ]
  },
  {
    "term": "环比",
    "course": "货币银行学",
    "def": "与上月相比的读数，用于看短期波动，对季节因素敏感。",
    "source": "/monetary/通货膨胀与通货紧缩",
    "cite": [
      {
        "label": "维基百科 · 环比",
        "url": "https://zh.wikipedia.org/wiki/%E7%8E%AF%E6%AF%94"
      }
    ]
  },
  {
    "term": "基期",
    "course": "货币银行学",
    "def": "作为比较基准的时期；购买力平价公式中 r₀ 与 P₀ 的下标 0 即基期，汇率与物价指数都取基期值参与比较。",
    "source": "/monetary/汇率理论",
    "cite": [
      {
        "label": "维基百科 · 基期",
        "url": "https://zh.wikipedia.org/wiki/%E5%9F%BA%E6%9C%9F"
      },
      {
        "label": "维基百科 · 基期",
        "url": "https://zh.wikipedia.org/wiki/%E5%9F%BA%E6%9C%9F"
      }
    ]
  },
  {
    "term": "「收支两条线」管理",
    "course": "财政学",
    "def": "「收支两条线」管理是指国家机关、事业单位、社会团体及其他组织，按照国家有关规定依法取得的政府非税收入全额缴入国库或者财政专户，支出通过财政部门编制预算进行统筹安排，资金通过国库或财政专户收缴和拨付的管理制度。",
    "source": "/finance/国家预算与预算管理体制",
    "cite": []
  },
  {
    "term": "价内税与价外税",
    "course": "财政学",
    "def": "以税收与价格的关系为标准，税收可分为价内税和价外税。价内税是指税额包含在商品价格之中，购买者购买商品时即缴纳应缴之税；价外税是指在商品价格之外对购买者所征的税：价格中不含税金，购买者除支付价款外，还要依据所支付的价格另行纳税。",
    "source": "/finance/税收原理",
    "cite": []
  },
  {
    "term": "免费搭车行为",
    "course": "财政学",
    "def": "免费搭车行为是指不承担任何成本而消费或使用公共物品的行为，有这种行为的人或具有让别人付钱而自己享受公共物品收益动机的人称为免费搭车者。",
    "source": "/finance/财政职能",
    "cite": []
  },
  {
    "term": "公共定价法",
    "course": "财政学",
    "def": "公共定价法是指政府对公共企业生产的商品和服务的定价或政府对私人部门定价的管制。",
    "source": "/finance/财政支出规模与结构",
    "cite": []
  },
  {
    "term": "分类所得税",
    "course": "财政学",
    "def": "分类所得税是指对纳税人的各种应纳税所得分为若干类别，不同类别（或来源）的所得适用不同的税率，分别课征所得税。",
    "source": "/finance/税收制度",
    "cite": []
  },
  {
    "term": "国债发行市场",
    "course": "财政学",
    "def": "国债发行市场是指国债发行场所，又称国债一级市场或初级市场，是国债交易的初始环节，即国债最初发行的市场。",
    "source": "/finance/国债理论与管理",
    "cite": []
  },
  {
    "term": "国债流通市场",
    "course": "财政学",
    "def": "国债流通市场又称国债二级市场，是指国债交易的第二阶段，即已经上市发行的国债进行买卖、转让和流通的市场。",
    "source": "/finance/国债理论与管理",
    "cite": []
  },
  {
    "term": "国债限度",
    "course": "财政学",
    "def": "国债限度是指国家债务规模的最高额度或国债的适度规模。",
    "source": "/finance/国债理论与管理",
    "cite": []
  },
  {
    "term": "国家预算",
    "course": "财政学",
    "def": "国家预算是指政府的基本财政收支计划。",
    "source": "/finance/国家预算与预算管理体制",
    "cite": [
      {
        "label": "维基百科 · 国家预算调节基金",
        "url": "https://zh.wikipedia.org/wiki/%E5%9B%BD%E5%AE%B6%E9%A2%84%E7%AE%97%E8%B0%83%E8%8A%82%E5%9F%BA%E9%87%91"
      }
    ]
  },
  {
    "term": "国家预算法",
    "course": "财政学",
    "def": "国家预算法是国家预算管理的法律规范，是组织和管理国家预算的法律依据。",
    "source": "/finance/国家预算与预算管理体制",
    "cite": []
  },
  {
    "term": "寻租行为",
    "course": "财政学",
    "def": "寻租行为是指通过游说政府活动获得某种垄断权或特许权，以赚取超常利润或租金的行为。",
    "source": "/finance/财政职能",
    "cite": []
  },
  {
    "term": "就业创造标准",
    "course": "财政学",
    "def": "就业创造标准是指政府应当选择单位投资额能够动员最大数量劳动力的项目。",
    "source": "/finance/财政投资支出和社会保障支出",
    "cite": []
  },
  {
    "term": "建设－经营－转让投资方式",
    "course": "财政学",
    "def": "建设－经营－转让投资（BOT）方式是指政府将一些拟建的基础设施建设项目通过招商转让给某一财团或公司，由其组建一个经营公司进行建设经营，并在双方协定的一定时期内，由该项目公司通过经营该项目偿还债务，收回投资，协议期满，项目产权转让给政府。",
    "source": "/finance/财政投资支出和社会保障支出",
    "cite": []
  },
  {
    "term": "成本—效益分析法",
    "course": "财政学",
    "def": "成本—效益分析法是指针对政府确定的建设目标，提出若干实现建设目标的方案，详列各种方案的全部预期成本和全部预期效益，通过分析比较，选择出最优的政府投资项目的一种分析方法。",
    "source": "/finance/财政支出规模与结构",
    "cite": []
  },
  {
    "term": "投票规则",
    "course": "财政学",
    "def": "投票规则是通过投票进行决策的一种公共选择程序规则。",
    "source": "/finance/财政职能",
    "cite": []
  },
  {
    "term": "拉弗曲线",
    "course": "财政学",
    "def": "拉弗曲线是指反映税率与税收总额之间关系的曲线。",
    "source": "/finance/税收原理",
    "cite": [
      {
        "label": "维基百科 · 拉弗曲线",
        "url": "https://zh.wikipedia.org/wiki/%E6%8B%89%E5%BC%97%E6%9B%B2%E7%BA%BF"
      }
    ]
  },
  {
    "term": "政府失灵",
    "course": "财政学",
    "def": "政府失灵是指政府的活动或干预措施缺乏效率，或者说，政府作出了降低经济效率的决策或不能实施改善经济效率的政策。",
    "source": "/finance/财政职能",
    "cite": [
      {
        "label": "维基百科 · 政府失灵",
        "url": "https://zh.wikipedia.org/wiki/%E6%94%BF%E5%BA%9C%E5%A4%B1%E7%81%B5"
      }
    ]
  },
  {
    "term": "政府采购制度",
    "course": "财政学",
    "def": "政府采购制度是指中央政府、地方政府及法律规定的其他实体以法定的方式向社会采购物资、工程或服务，并对采购过程进行监督管理的一种控制制度。",
    "source": "/finance/财政支出规模与结构",
    "cite": []
  },
  {
    "term": "最低费用选择法",
    "course": "财政学",
    "def": "最低费用选择法一般不用货币单位来计量备选的财政支出项目的社会效益，只计算每项备选项目的有形成本，并以成本最低为择优的标准。",
    "source": "/finance/财政支出规模与结构",
    "cite": []
  },
  {
    "term": "社会保障",
    "course": "财政学",
    "def": "社会保障是指政府通过专款专用税筹措资金，向老年人、无工作能力的人、失去工作机会的人、病人等提供基本生活保障的计划。",
    "source": "/finance/财政投资支出和社会保障支出",
    "cite": [
      {
        "label": "维基百科 · 社会保障",
        "url": "https://zh.wikipedia.org/wiki/%E7%A4%BE%E4%BC%9A%E4%BF%9D%E9%9A%9C"
      }
    ]
  },
  {
    "term": "税制改革",
    "course": "财政学",
    "def": "税制改革是指通过税制设计和税制结构的边际改变来增进社会福利的过程。",
    "source": "/finance/税收制度",
    "cite": [
      {
        "label": "维基百科 · 1994年分税制改革",
        "url": "https://zh.wikipedia.org/wiki/1994%E5%B9%B4%E5%88%86%E7%A8%8E%E5%88%B6%E6%94%B9%E9%9D%A9"
      }
    ]
  },
  {
    "term": "税制类型",
    "course": "财政学",
    "def": "税制类型是以一定标准对税收制度进行分类而形成的税制形态。以税制总体设计为标准，可分为单一税制和复合税制：在一个税收管辖权范围内只征收一种税的称为单一税制，同时征收两种以上税种的称为复合税制。",
    "source": "/finance/税收制度",
    "cite": []
  },
  {
    "term": "税制结构与税制模式",
    "course": "财政学",
    "def": "税制结构是指一国税收体系的整体布局和总体结构，是国家根据当时经济条件和发展要求，在特定税收制度下，由税类、税种、税制要素和征收管理层次所组成的，分别主次，相互协调、相互补充的整体系统；税制模式是指在一国税制结构中以哪类税作为主体税种，主体税种决定税制体系的总体功能。",
    "source": "/finance/税收制度",
    "cite": []
  },
  {
    "term": "税收中性",
    "course": "财政学",
    "def": "税收中性是指政府课税不扭曲市场机制的运行，或者说不影响私人部门原有的资源配置状况。",
    "source": "/finance/税收原理",
    "cite": []
  },
  {
    "term": "税负转嫁",
    "course": "财政学",
    "def": "税负转嫁是指在商品交换过程中，纳税人通过提高销售价格或压低购进价格的方法，将税负转移给购买者或供应者的一种经济现象。",
    "source": "/finance/税收原理",
    "cite": []
  },
  {
    "term": "累进税率",
    "course": "财政学",
    "def": "累进税率是指按课税对象数额的大小，划分若干等级，每个等级由低到高规定相应的税率，课税对象数额越大税率越高，数额越小税率越低。",
    "source": "/finance/税收原理",
    "cite": [
      {
        "label": "维基百科 · 累进税率",
        "url": "https://zh.wikipedia.org/wiki/%E7%B4%AF%E8%BF%9B%E7%A8%8E%E7%8E%87"
      }
    ]
  },
  {
    "term": "综合所得税",
    "course": "财政学",
    "def": "综合所得税是指对纳税人个人的各种应税所得（如工薪收入、利息、股息、财产所得等）综合征收。",
    "source": "/finance/税收制度",
    "cite": []
  },
  {
    "term": "财政平衡",
    "course": "财政学",
    "def": "财政平衡是指国家财政的收入与支出等量。",
    "source": "/finance/财政平衡与财政赤字",
    "cite": []
  },
  {
    "term": "财政投融资",
    "course": "财政学",
    "def": "财政投融资是指以国家的信用为基础，通过多种渠道筹措资金，有偿地投资于具有公共性的领域。",
    "source": "/finance/财政投资支出和社会保障支出",
    "cite": []
  },
  {
    "term": "购买性支出",
    "course": "财政学",
    "def": "购买性支出是指政府购买商品和服务的开支，包括购买进行日常政务活动所需的或用于国家投资所需的商品和服务的支出，它体现的是政府的市场性再分配活动；购买性支出占较大比重的财政活动，执行资源配置的职能较强。",
    "source": "/finance/财政支出规模与结构",
    "cite": []
  },
  {
    "term": "赤字依存度和赤字比率",
    "course": "财政学",
    "def": "赤字依存度是财政赤字占财政支出的比例，说明一国当年总支出中有多大比例依赖赤字支出实现；赤字比率是财政赤字占 GDP 的比例，说明一国在某年以赤字方式动员了多大比例的社会资源。",
    "source": "/finance/财政平衡与财政赤字",
    "cite": []
  },
  {
    "term": "转移性支出",
    "course": "财政学",
    "def": "转移性支出是指政府资金无偿的、单方面的转移，主要有补助支出、捐赠支出和债务利息支出，它体现的是政府的非市场性再分配活动；转移性支出占较大比重的财政活动，执行收入分配的职能较强。",
    "source": "/finance/财政支出规模与结构",
    "cite": []
  },
  {
    "term": "预算外资金",
    "course": "财政学",
    "def": "预算外资金是指按国家财政制度规定不纳入国家预算的、允许地方财政部门和由预算拨款的行政事业单位自收自支的资金。",
    "source": "/finance/国家预算与预算管理体制",
    "cite": []
  },
  {
    "term": "预算管理体制",
    "course": "财政学",
    "def": "预算管理体制是指处理中央和地方以及地方各级政府之间的财政关系的各种制度的总称。",
    "source": "/finance/国家预算与预算管理体制",
    "cite": []
  },
  {
    "term": "预算调整",
    "course": "财政学",
    "def": "预算调整是预算执行的一项重要程序，指经过批准的各级预算，在执行中因特殊情况需要增加支出或者减少收入，使总支出超过总收入、或使原举借债务数额增加等，部分改变原预算。",
    "source": "/finance/国家预算与预算管理体制",
    "cite": []
  },
  {
    "term": "预算赤字",
    "course": "财政学",
    "def": "预算赤字是指在某一财政年度，政府计划安排的总支出超过经常性收入并存在于决算中的差额。",
    "source": "/finance/财政平衡与财政赤字",
    "cite": []
  },
  {
    "term": "非税收入",
    "course": "财政学",
    "def": "非税收入是指政府通过非税收形式取得的财政收入，包括行政事业性收费、政府性基金、国有资源有偿使用收入等。",
    "source": "/finance/财政职能",
    "cite": []
  },
  {
    "term": "国债结构",
    "course": "财政学",
    "def": "国债结构是指不同类型国债之间的组合比例关系，包括期限结构、持有者结构、利率结构等。",
    "source": "/finance/国债理论与管理",
    "cite": []
  },
  {
    "term": "财政赤字排挤效应",
    "course": "财政学",
    "def": "财政赤字排挤效应是指政府通过增加支出或减税实施扩张性财政政策时，导致利率上升，从而挤出了私人投资。",
    "source": "/finance/财政平衡与财政赤字",
    "cite": []
  },
  {
    "term": "逆弹性命题",
    "course": "财政学",
    "def": "逆弹性命题是指在最优商品税制下，对各种商品征税的税率应与该商品的需求价格弹性成反比，即弹性越小的商品税率应越高。",
    "source": "/finance/税收原理",
    "cite": []
  },
  {
    "term": "赤字财政",
    "course": "财政学",
    "def": "赤字财政是指政府有意识、有计划地利用预算赤字，以熨平经济波动，是一种扩张性财政政策。",
    "source": "/finance/财政平衡与财政赤字",
    "cite": []
  },
  {
    "term": "一价定律",
    "course": "国际经济学",
    "def": "一价定律是关于在自由贸易条件下国际商品价格定价规律的一种理论。",
    "source": "/international/汇率决定的一般理论",
    "cite": [
      {
        "label": "维基百科 · 一价定律",
        "url": "https://zh.wikipedia.org/wiki/%E4%B8%80%E4%BB%B7%E5%AE%9A%E5%BE%8B"
      }
    ]
  },
  {
    "term": "倾销",
    "course": "国际经济学",
    "def": "倾销是指出口商以低于国内市场价格的价格，甚至以低于成本的价格在国际市场销售商品的行为。",
    "source": "/international/国际贸易政策分析",
    "cite": [
      {
        "label": "维基百科 · 倾销",
        "url": "https://zh.wikipedia.org/wiki/%E5%80%BE%E9%94%80"
      }
    ]
  },
  {
    "term": "偿债率",
    "course": "国际经济学",
    "def": "偿债率是指一国在某一时期，所举借外债的还本付息额与其各种出口收入总和之比。",
    "source": "/international/要素的国际流动",
    "cite": [
      {
        "label": "Wikipedia · Debt service ratio",
        "url": "https://en.wikipedia.org/wiki/Debt_service_ratio"
      }
    ]
  },
  {
    "term": "关税同盟",
    "course": "国际经济学",
    "def": "关税同盟是指两个或两个以上国家结盟划为一个关税区域，在区域内相互取消关税与非关税壁垒，实行自由贸易，同时对非加盟国实行统一的关税和贸易限制的关税区域。",
    "source": "/international/经济一体化与国际经济秩序分析",
    "cite": [
      {
        "label": "维基百科 · 关税同盟",
        "url": "https://zh.wikipedia.org/wiki/%E5%85%B3%E7%A8%8E%E5%90%8C%E7%9B%9F"
      },
      {
        "label": "维基百科 · 南部非洲关税同盟",
        "url": "https://zh.wikipedia.org/wiki/%E5%8D%97%E9%83%A8%E9%9D%9E%E6%B4%B2%E5%85%B3%E7%A8%8E%E5%90%8C%E7%9B%9F"
      }
    ]
  },
  {
    "term": "关税壁垒与非关税壁垒",
    "course": "国际经济学",
    "def": "关税壁垒是指为了保护本国市场、扶持本国某些产业发展，对进口商品征收关税，特别是高额关税，以限制外国商品进口的贸易措施。",
    "source": "/international/国际贸易政策分析",
    "cite": [
      {
        "label": "Wikipedia · Non-tariff barriers to trade",
        "url": "https://en.wikipedia.org/wiki/Non-tariff_barriers_to_trade"
      },
      {
        "label": "维基百科 · 非关税壁垒",
        "url": "https://zh.wikipedia.org/wiki/%E9%9D%9E%E5%85%B3%E7%A8%8E%E5%A3%81%E5%9E%92"
      }
    ]
  },
  {
    "term": "升水与贴水",
    "course": "国际经济学",
    "def": "升水是贴水的对称，两者描述远期汇率与即期汇率的偏离方向：升水是指一种货币的远期汇率高于其即期汇率，贴水是指远期汇率低于即期汇率；在直接标价法下，外币远期升水表示外币币值上涨（远期汇率上升），贴水表示外币币值下跌（远期汇率下降）。",
    "source": "/international/汇率决定的一般理论",
    "cite": [
      {
        "label": "Wikipedia · Forward exchange rate",
        "url": "https://en.wikipedia.org/wiki/Forward_exchange_rate"
      },
      {
        "label": "维基百科 · 远期汇率",
        "url": "https://zh.wikipedia.org/wiki/%E8%BF%9C%E6%9C%9F%E6%B1%87%E7%8E%87"
      }
    ]
  },
  {
    "term": "固定借贷",
    "course": "国际经济学",
    "def": "固定借贷是指国际借贷中形成了借贷关系，但尚未进入实际支付的那种债权、债务关系。",
    "source": "/international/汇率决定的一般理论",
    "cite": []
  },
  {
    "term": "固定汇率与浮动汇率",
    "course": "国际经济学",
    "def": "固定汇率是指政府用行政手段或法律手段选择一基本参照物，并确定、公布和维持本国货币与该单位参照物的固定比价的汇率制度；浮动汇率指一国货币汇率根据市场供求自由涨落、国家没有义务维持的汇率，实践中存在完全自由浮动与有管理的浮动两种。",
    "source": "/international/汇率决定的一般理论",
    "cite": []
  },
  {
    "term": "国际分工",
    "course": "国际经济学",
    "def": "国际分工即各国之间的劳动分工，生产的国际专业化。",
    "source": "/international/绪论",
    "cite": []
  },
  {
    "term": "国际收支",
    "course": "国际经济学",
    "def": "国际收支的概念有狭义和广义之分。狭义的国际收支指一国在一定时期（一般为一年）内，同其他国家由于贸易、劳务、资本等往来而引起的资产转移，仅计入现在或将来有外汇收支的交易；广义的国际收支指在特定时期内，一个经济体与世界其他地方的各项经济交易，包括货物、服务与收入交易，金融资产和负债交易，以及无偿转让。",
    "source": "/international/国际收支分析",
    "cite": [
      {
        "label": "维基百科 · 国际收支",
        "url": "https://zh.wikipedia.org/wiki/%E5%9B%BD%E9%99%85%E6%94%B6%E6%94%AF"
      }
    ]
  },
  {
    "term": "国际经济学",
    "course": "国际经济学",
    "def": "国际经济学是指以经济学的一般理论为基础来研究国际经济活动与国际经济关系的经济学分支学科。",
    "source": "/international/绪论",
    "cite": [
      {
        "label": "维基百科 · 国际经济学",
        "url": "https://zh.wikipedia.org/wiki/%E5%9B%BD%E9%99%85%E7%BB%8F%E6%B5%8E%E5%AD%A6"
      }
    ]
  },
  {
    "term": "外汇",
    "course": "国际经济学",
    "def": "外汇是货币行政当局（中央银行、货币机构、外汇平准基金组织以及财政部）以银行存款、财政部库券、长短期政府证券等形式保有的在国际收支逆差时可以用作支付使用的国际支付手段或债权。",
    "source": "/international/汇率决定的一般理论",
    "cite": [
      {
        "label": "维基百科 · 外汇",
        "url": "https://zh.wikipedia.org/wiki/%E5%A4%96%E6%B1%87"
      }
    ]
  },
  {
    "term": "官方储备",
    "course": "国际经济学",
    "def": "官方储备是指一个国家的中央银行或其他官方货币机构所掌握的外币储备资产及其对外债权。",
    "source": "/international/国际收支分析",
    "cite": []
  },
  {
    "term": "幼稚产业",
    "course": "国际经济学",
    "def": "如果某种产业由于技术不足、劳动生产率低下、产品成本高于世界市场，因而无法与国外产业竞争，但在关税、补贴等保护措施下继续生产一段时间，经过一段时间的生产能够在自由贸易条件下获利，达到其他国家水平而自立，形成比较优势并良性发展，这类产业就是幼稚产业。",
    "source": "/international/国际贸易政策分析",
    "cite": []
  },
  {
    "term": "开放经济",
    "course": "国际经济学",
    "def": "开放经济也称「开放型经济」，与「封闭经济」相对，是指一个国家或地区的经济活动与世界市场或外地市场有着密切联系（如存在国际贸易、国际金融往来）的经济。",
    "source": "/international/绪论",
    "cite": [
      {
        "label": "维基百科 · 开放经济",
        "url": "https://zh.wikipedia.org/wiki/%E5%BC%80%E6%94%BE%E7%BB%8F%E6%B5%8E"
      }
    ]
  },
  {
    "term": "所有权特定优势",
    "course": "国际经济学",
    "def": "所有权特定优势是指企业具有的组织管理能力、金融融资方面的优势、技术方面的特点和优势、企业的规模与其垄断地位及其他能力等优势。",
    "source": "/international/要素的国际流动",
    "cite": []
  },
  {
    "term": "提供曲线",
    "course": "国际经济学",
    "def": "提供曲线又称为供应条件曲线，也称相互需求曲线，是由马歇尔和埃奇沃思提出的，它表明一个国家为了进口一定量的商品，必须向其他国家出口一定量的商品，因此提供曲线即对应某一进口量愿意提供的出口量的轨迹。",
    "source": "/international/国际贸易纯理论",
    "cite": []
  },
  {
    "term": "比较利益",
    "course": "国际经济学",
    "def": "比较利益是指贸易双方根据各自的比较优势进行生产，然后交换产品而取得的贸易利益。",
    "source": "/international/国际贸易纯理论",
    "cite": [
      {
        "label": "维基百科 · 比较利益",
        "url": "https://zh.wikipedia.org/wiki/%E6%AF%94%E8%BE%83%E5%88%A9%E7%9B%8A"
      }
    ]
  },
  {
    "term": "汇率",
    "course": "国际经济学",
    "def": "汇率又称「汇价」、「外汇牌价」或「外汇行市」，指外汇买卖的价格。",
    "source": "/international/汇率决定的一般理论",
    "cite": [
      {
        "label": "维基百科 · 汇率",
        "url": "https://zh.wikipedia.org/wiki/%E6%B1%87%E7%8E%87"
      },
      {
        "label": "维基百科 · 汇率",
        "url": "https://zh.wikipedia.org/wiki/%E6%B1%87%E7%8E%87"
      }
    ]
  },
  {
    "term": "流动借贷",
    "course": "国际经济学",
    "def": "流动借贷是国际金融中汇率决定理论——国际借贷学说中的重要概念。",
    "source": "/international/汇率决定的一般理论",
    "cite": []
  },
  {
    "term": "现值债务率",
    "course": "国际经济学",
    "def": "现值债务率是指一个债务国当年未偿还债务的现值与当年国民生产总值（或出口）的比率，分为经济现值债务率（未偿债务现值占当年 GNP 的比重，临界值 80%）与出口现值债务率（未偿债务现值占当年出口的比重，临界值 20%）。",
    "source": "/international/要素的国际流动",
    "cite": []
  },
  {
    "term": "直接标价法与间接标价法",
    "course": "国际经济学",
    "def": "直接标价法又称「应付标价法」，是指以一定单位的外国货币作为标准，折算为一定数量的本国货币，即是以本国货币来表示外国货币价格的方法。",
    "source": "/international/汇率决定的一般理论",
    "cite": []
  },
  {
    "term": "经济全球化",
    "course": "国际经济学",
    "def": "联合国贸发会议对经济全球化定义如下：全球化是世界各国在经济上跨国界联系和相互依存日益加强的过程，运输、通讯和信息技术的迅速进步有力地促进了这一过程。",
    "source": "/international/经济全球化趋势",
    "cite": [
      {
        "label": "维基百科 · 经济全球化",
        "url": "https://zh.wikipedia.org/wiki/%E7%BB%8F%E6%B5%8E%E5%85%A8%E7%90%83%E5%8C%96"
      }
    ]
  },
  {
    "term": "绝对利益",
    "course": "国际经济学",
    "def": "绝对利益是指贸易双方根据各自的绝对优势进行生产，然后交换产品而取得的贸易利益。",
    "source": "/international/国际贸易纯理论",
    "cite": [
      {
        "label": "维基百科 · 绝对利益",
        "url": "https://zh.wikipedia.org/wiki/%E7%BB%9D%E5%AF%B9%E5%88%A9%E7%9B%8A"
      }
    ]
  },
  {
    "term": "贷方与借方项目",
    "course": "国际经济学",
    "def": "贷方项目是指在国际收支平衡表中表示一国资产减少或负债增加的项目，该项目意味着本国商品、劳务的输出或外国金融资产的流入；借方项目表示一国资产增加或负债减少，意味着本国商品、劳务的进口或外国金融资产的流出。",
    "source": "/international/国际收支分析",
    "cite": []
  },
  {
    "term": "贸易乘数",
    "course": "国际经济学",
    "def": "贸易乘数指乘数理论在对外贸易研究中的作用，探讨对外贸易与国民收入和就业之间的关系。",
    "source": "/international/宏观经济的内外均衡",
    "cite": []
  },
  {
    "term": "贸易创造与贸易转移",
    "course": "国际经济学",
    "def": "贸易创造是「贸易转移」的对称，是指两国或两个以上国家之间结成关税同盟之后，签约国之间的特惠贸易协定导致成员国之间的贸易代替了过去各自的国内生产和消费，即创造出了新的贸易的现象；贸易转移是「贸易创造」的对称，指同盟成员之间的特惠安排使成员国之间的贸易代替了原来它们同非成员国之间的贸易，而非创造出新的贸易。",
    "source": "/international/经济一体化与国际经济秩序分析",
    "cite": []
  },
  {
    "term": "贸易条件",
    "course": "国际经济学",
    "def": "贸易条件又称「交换比价」或「贸易比价」，是指一个国家在一定时期内出口商品价格与进口商品价格之间的比例关系。",
    "source": "/international/国际贸易纯理论",
    "cite": [
      {
        "label": "维基百科 · 贸易条件",
        "url": "https://zh.wikipedia.org/wiki/%E8%B4%B8%E6%98%93%E6%9D%A1%E4%BB%B6"
      }
    ]
  },
  {
    "term": "边际进口倾向",
    "course": "国际经济学",
    "def": "边际进口倾向是指进口量的变动对引起这种变动的收入变动的比率，即每增加一单位国民收入的变动量所能引起进口变动的比率。",
    "source": "/international/宏观经济的内外均衡",
    "cite": []
  },
  {
    "term": "汇兑心理理论",
    "course": "国际经济学",
    "def": "汇兑心理说是国际借贷说与购买力平价说的结合。它的理论基础是主观效用论，认为人们需要外汇是因为要购买商品和服务以满足人们的欲望，效用是外汇的价值基础，真正的价值在于其边际效用，而这又是人们主观心理决定的。",
    "source": "/international/汇率决定的一般理论",
    "cite": []
  },
  {
    "term": "国际收支失衡",
    "course": "国际经济学",
    "def": "国际收支失衡是指经常账户、资本和金融账户的余额出现问题，即对外经济出现了需要调整的情况。",
    "source": "/international/国际收支分析",
    "cite": []
  },
  {
    "term": "两缺口模型",
    "course": "国际经济学",
    "def": "两缺口模型由钱纳里和斯特劳特提出，认为发展中国家在经济发展过程中面临储蓄缺口和外汇缺口的约束。",
    "source": "/international/要素的国际流动",
    "cite": []
  },
  {
    "term": "「三个有利于」标准",
    "course": "社会主义经济学",
    "def": "「三个有利于」标准指是否有利于发展社会主义社会的生产力、是否有利于增强社会主义国家的综合国力、是否有利于提高人民的生活水平，并以此作为判断改革和各方面工作是非得失的标准。",
    "source": "/socialist/社会主义经济制度的本质特征",
    "cite": [
      {
        "label": "维基百科 · 三个有利于",
        "url": "https://zh.wikipedia.org/wiki/%E4%B8%89%E4%B8%AA%E6%9C%89%E5%88%A9%E4%BA%8E"
      }
    ]
  },
  {
    "term": "「华盛顿共识」与「北京共识」",
    "course": "社会主义经济学",
    "def": "华盛顿共识这一术语最初由经济学家约翰·威廉姆森于 1989 年提出。",
    "source": "/socialist/向社会主义市场经济体制的渐进过渡",
    "cite": [
      {
        "label": "维基百科 · 华盛顿共识",
        "url": "https://zh.wikipedia.org/wiki/%E5%8D%8E%E7%9B%9B%E9%A1%BF%E5%85%B1%E8%AF%86"
      }
    ]
  },
  {
    "term": "「后起者优势」",
    "course": "社会主义经济学",
    "def": "「后起者优势」是指后起发展国家面临的外部环境相对较好，尤其是技术高度发达，这样它就可以跳过某些技术发展阶段，直接采用新技术。",
    "source": "/socialist/社会主义市场经济条件下的经济结构调整",
    "cite": []
  },
  {
    "term": "「市场失灵」",
    "course": "社会主义经济学",
    "def": "市场失灵是指市场竞争所实现的资源配置没有达到帕累托最优，或指市场机制不能实现某些合意的社会经济目标。",
    "source": "/socialist/社会主义市场经济条件下的政府调节",
    "cite": []
  },
  {
    "term": "「看不见的手」",
    "course": "社会主义经济学",
    "def": "「看不见的手」是亚当·斯密提出的经济自由主义的政策思想，推崇市场机制的作用。",
    "source": "/socialist/社会主义市场经济条件下的政府调节",
    "cite": []
  },
  {
    "term": "「诺思悖论」",
    "course": "社会主义经济学",
    "def": "「诺思悖论」是指一个能促进经济持续快速增长的有效率产权制度依赖于国家对产权进行有效的界定与保护，但受双重目标的驱动，国家在界定与保护产权过程中受交易费用和竞争的双重约束，会对不同的利益集团采取歧视性的政策，从而会容忍低效率的产权结构长期存在。",
    "source": "/socialist/向社会主义市场经济体制的渐进过渡",
    "cite": []
  },
  {
    "term": "中间扩散型制度变迁方式",
    "course": "社会主义经济学",
    "def": "当利益独立化的地方政府成为沟通权力中心的制度供给意愿与微观主体的制度创新需求的中介环节时，就有可能突破权力中心设置的制度创新进入壁垒，从而使权力中心的垄断租金最大化与保护有效率的产权结构之间达成一致，化解「诺思悖论」，这一有别于供给主导型与需求诱致型的制度变迁形态被称为中间扩散型制度变迁方式。",
    "source": "/socialist/向社会主义市场经济体制的渐进过渡",
    "cite": []
  },
  {
    "term": "二元反差指数",
    "course": "社会主义经济学",
    "def": "二元反差指数是指工业或非农业产值比重与劳动力比重之差的绝对值。",
    "source": "/socialist/社会主义市场经济条件下的经济结构调整",
    "cite": []
  },
  {
    "term": "二元对比系数",
    "course": "社会主义经济学",
    "def": "二元对比系数是指二元经济结构中农业比较劳动生产率与非农业比较劳动生产率的比率。",
    "source": "/socialist/社会主义市场经济条件下的经济结构调整",
    "cite": []
  },
  {
    "term": "二元经济结构",
    "course": "社会主义经济学",
    "def": "二元经济结构是指以城市工业为主的现代部门与以农村农业为主的传统部门并存，传统部门比重过大、现代部门发展不足，以及城乡差距十分明显的经济结构。",
    "source": "/socialist/社会主义市场经济条件下的经济结构调整",
    "cite": []
  },
  {
    "term": "产业",
    "course": "社会主义经济学",
    "def": "产业是指生产相似或相同产品的一系列企业。",
    "source": "/socialist/社会主义市场经济条件下的经济结构调整",
    "cite": [
      {
        "label": "维基百科 · 产业",
        "url": "https://zh.wikipedia.org/wiki/%E4%BA%A7%E4%B8%9A"
      }
    ]
  },
  {
    "term": "产业结构",
    "course": "社会主义经济学",
    "def": "产业结构是指国民经济内部各产业之间在再生产过程中形成的经济联系和数量比例关系。",
    "source": "/socialist/社会主义市场经济条件下的经济结构调整",
    "cite": [
      {
        "label": "维基百科 · 产业结构",
        "url": "https://zh.wikipedia.org/wiki/%E4%BA%A7%E4%B8%9A%E7%BB%93%E6%9E%84"
      }
    ]
  },
  {
    "term": "产权",
    "course": "社会主义经济学",
    "def": "产权是一种通过社会强制而实现的对某种经济物品的多种用途进行选择的权利。",
    "source": "/socialist/社会主义企业制度与国有企业改革",
    "cite": [
      {
        "label": "维基百科 · 产权",
        "url": "https://zh.wikipedia.org/wiki/%E4%BA%A7%E6%9D%83"
      }
    ]
  },
  {
    "term": "产权制度",
    "course": "社会主义经济学",
    "def": "产权制度是指既定产权关系和产权规则结合而成的且能对产权关系实行有效的组合、调节和保护的制度安排。",
    "source": "/socialist/社会主义企业制度与国有企业改革",
    "cite": [
      {
        "label": "维基百科 · 韩国知识产权制度",
        "url": "https://zh.wikipedia.org/wiki/%E9%9F%A9%E5%9B%BD%E7%9F%A5%E8%AF%86%E4%BA%A7%E6%9D%83%E5%88%B6%E5%BA%A6"
      }
    ]
  },
  {
    "term": "产权规则",
    "course": "社会主义经济学",
    "def": "产权规则是指一个人拥有资源配置权力的大小与其所拥有的资产数量正相关，即拥有的资产越多，所拥有的资源配置权力就越大。",
    "source": "/socialist/向社会主义市场经济体制的渐进过渡",
    "cite": []
  },
  {
    "term": "代理成本",
    "course": "社会主义经济学",
    "def": "代理成本是指在所有权与控制权相分离的条件下，由于委托人与代理人的效用函数不完全一致，代理制的引入必然会诱发一定的成本。",
    "source": "/socialist/国有企业治理结构的创新",
    "cite": [
      {
        "label": "维基百科 · 代理成本",
        "url": "https://zh.wikipedia.org/wiki/%E4%BB%A3%E7%90%86%E6%88%90%E6%9C%AC"
      },
      {
        "label": "维基百科 · 代理成本",
        "url": "https://zh.wikipedia.org/wiki/%E4%BB%A3%E7%90%86%E6%88%90%E6%9C%AC"
      }
    ]
  },
  {
    "term": "代理问题",
    "course": "社会主义经济学",
    "def": "代理人除了追求更高的货币收益外，还力图通过对非货币物品的追求实现尽可能多的非货币收益。",
    "source": "/socialist/国有企业治理结构的创新",
    "cite": [
      {
        "label": "维基百科 · 代理问题",
        "url": "https://zh.wikipedia.org/wiki/%E4%BB%A3%E7%90%86%E9%97%AE%E9%A2%98"
      }
    ]
  },
  {
    "term": "企业共同治理",
    "course": "社会主义经济学",
    "def": "企业共同治理强调决策的共同参与和监督的相互制约。",
    "source": "/socialist/国有企业治理结构的创新",
    "cite": []
  },
  {
    "term": "企业所有权",
    "course": "社会主义经济学",
    "def": "企业所有权指企业对其合法占有的财产所拥有的使用、收益和处分的权利。",
    "source": "/socialist/国有企业治理结构的创新",
    "cite": []
  },
  {
    "term": "企业治理结构",
    "course": "社会主义经济学",
    "def": "企业治理结构也称为公司法人治理结构，是指所有者、经营者和监督者之间透过公司权力机关（股东大会），经营决策与执行机关（董事会、经理），监督机关（监事会）而形成权责明确，相互制约，协调运转和科学决策的联系，并依法律、法规、规章和公司章程等规定予以制度化的统一机制。",
    "source": "/socialist/国有企业治理结构的创新",
    "cite": []
  },
  {
    "term": "使用权能",
    "course": "社会主义经济学",
    "def": "使用权能是指不改变财产的所有和占有性质，依其用途而对其加以利用的可能性，是人与人之间因利用财产而产生的权利义务关系。",
    "source": "/socialist/社会主义企业制度与国有企业改革",
    "cite": []
  },
  {
    "term": "供给主导型制度变迁方式",
    "course": "社会主义经济学",
    "def": "供给主导型制度变迁方式是指由权力中心推进的强制性制度变迁，其含义是在一定的宪法秩序和行为的伦理道德规范下，权力中心提供新的制度安排的能力与意愿是决定制度变迁的主导因素，而这种能力与意愿主要决定于一个社会的各既得利益集团的权力结构与力量对比。",
    "source": "/socialist/向社会主义市场经济体制的渐进过渡",
    "cite": []
  },
  {
    "term": "充分就业",
    "course": "社会主义经济学",
    "def": "充分就业是指每一个愿意工作的劳动者按其能够接受的工资全部找到职业的一种经济状态。",
    "source": "/socialist/社会主义市场经济条件下的政府调节",
    "cite": [
      {
        "label": "维基百科 · 充分就业",
        "url": "https://zh.wikipedia.org/wiki/%E5%85%85%E5%88%86%E5%B0%B1%E4%B8%9A"
      }
    ]
  },
  {
    "term": "公共产品",
    "course": "社会主义经济学",
    "def": "公共产品是指那些消费不具有排他性和可耗竭性，但收费存在困难的产品。",
    "source": "/socialist/社会主义企业制度与国有企业改革",
    "cite": []
  },
  {
    "term": "公共服务均等化",
    "course": "社会主义经济学",
    "def": "公共服务均等化，主要是指全体公民享有基本公共服务的机会均等、结果大体相等，同时尊重社会成员的自由选择权。",
    "source": "/socialist/社会主义市场经济条件下的分配制度",
    "cite": []
  },
  {
    "term": "内部人控制",
    "course": "社会主义经济学",
    "def": "内部人控制是指国有企业的经营者在经济转型过程中逐渐掌握了大部分控制权，并且这种控制权的获得往往是通过与职工「合谋」完成的。",
    "source": "/socialist/国有企业治理结构的创新",
    "cite": []
  },
  {
    "term": "制度",
    "course": "社会主义经济学",
    "def": "制度是指一系列被制定出来的规则、守法程序和行为的伦理道德规范，旨在约束追求主体福利或效用最大化的个人行为。",
    "source": "/socialist/社会主义经济增长与经济发展",
    "cite": [
      {
        "label": "维基百科 · 制度",
        "url": "https://zh.wikipedia.org/wiki/%E5%88%B6%E5%BA%A6"
      },
      {
        "label": "维基百科 · 制度",
        "url": "https://zh.wikipedia.org/wiki/%E5%88%B6%E5%BA%A6"
      }
    ]
  },
  {
    "term": "制度安排",
    "course": "社会主义经济学",
    "def": "制度安排是在宪法秩序下约束特定行为模式和关系、界定交换条件的一系列具体的操作规则。",
    "source": "/socialist/社会主义经济增长与经济发展",
    "cite": []
  },
  {
    "term": "刺激一致性约束",
    "course": "社会主义经济学",
    "def": "刺激一致性约束指由于代理人是合同的接受者，机制所提供的刺激必须要能诱使代理人自愿地选择根据他们所属类型而设定的合同。",
    "source": "/socialist/国有企业治理结构的创新",
    "cite": []
  },
  {
    "term": "占有权能",
    "course": "社会主义经济学",
    "def": "占有权能是指人对财产直接加以控制的可能性，是所有者与他人之间因对财产进行实际控制而产生的权利义务关系。",
    "source": "/socialist/社会主义企业制度与国有企业改革",
    "cite": []
  },
  {
    "term": "参与约束",
    "course": "社会主义经济学",
    "def": "参与约束也称为个人理性约束，是对代理人的行为提出一种理性化假设。",
    "source": "/socialist/国有企业治理结构的创新",
    "cite": []
  },
  {
    "term": "可持续发展",
    "course": "社会主义经济学",
    "def": "可持续发展理论是人类发展观的重大进步，它强调经济、社会、资源和环境保护的协调发展。",
    "source": "/socialist/社会主义经济增长与经济发展",
    "cite": [
      {
        "label": "维基百科 · 可持续发展",
        "url": "https://zh.wikipedia.org/wiki/%E5%8F%AF%E6%8C%81%E7%BB%AD%E5%8F%91%E5%B1%95"
      }
    ]
  },
  {
    "term": "国内生产总值（GDP）",
    "course": "社会主义经济学",
    "def": "国内生产总值则是指一国在一定时期（通常是一年）内，在其领土范围内，本国居民与外国居民生产的最终产品和劳务总量的货币表现。",
    "source": "/socialist/社会主义经济增长与经济发展",
    "cite": []
  },
  {
    "term": "国民生产总值（GNP）",
    "course": "社会主义经济学",
    "def": "国民生产总值是指一个国家（或地区）的常住居民（国民）在一定时期（通常为一年）内生产的全部最终产品和劳务价值的总和，按国民原则核算，与按领土范围核算的国内生产总值（GDP）相区别。",
    "source": "/socialist/社会主义经济增长与经济发展",
    "cite": []
  },
  {
    "term": "基础产业",
    "course": "社会主义经济学",
    "def": "基础产业是指在一国的国民经济发展中处于基础地位，对其他产业的发展起着制约和决定作用，决定其他产业发展水平的产业群，包括基础工业与基础设施，其产品通常要成为后续产业部门加工、再加工及生产过程中缺一不可的投入品或消耗品，投资通常具有巨额性与不可分性。",
    "source": "/socialist/社会主义企业制度与国有企业改革",
    "cite": []
  },
  {
    "term": "增量改革",
    "course": "社会主义经济学",
    "def": "增量改革是指在不率先触动既得利益格局的前提下，在边际上推进市场取向的改革，也就是说，在等级规则作用较小的边际上，选择具有帕累托改进意义的利益调整方式进行体制变革，逐渐向市场经济体制过渡。",
    "source": "/socialist/社会主义市场经济理论",
    "cite": []
  },
  {
    "term": "处分权能",
    "course": "社会主义经济学",
    "def": "处分权能是指为法律所保障的实施旨在改变财产的经济用途或状态的行为的可能性，它所反映的是人在变更财产的过程中所产生的权利义务关系。",
    "source": "/socialist/社会主义企业制度与国有企业改革",
    "cite": []
  },
  {
    "term": "外向型工业化战略",
    "course": "社会主义经济学",
    "def": "外向型工业化战略的基本内涵就是： 利用开放与全球产业结构调整和转移的趋势，基于劳动成本优势构建我国开放背景下的工业化模式。",
    "source": "/socialist/社会主义对外经济关系",
    "cite": []
  },
  {
    "term": "外部约束均衡",
    "course": "社会主义经济学",
    "def": "理性的委托人将在约束成本在边际上等于代理成本的水平上实现对代理人的外部约束均衡，这一均衡调整过程将使约束成本和代理成本之和达到最小化。",
    "source": "/socialist/国有企业治理结构的创新",
    "cite": []
  },
  {
    "term": "宏观收入分配过程",
    "course": "社会主义经济学",
    "def": "宏观层次的收入调节过程是建立在微观收入分配过程基础上并独立于这一分配过程的再分配过程。",
    "source": "/socialist/社会主义市场经济条件下的分配制度",
    "cite": []
  },
  {
    "term": "宪法秩序",
    "course": "社会主义经济学",
    "def": "宪法秩序是指用以界定国家的产权和控制的基本结构，它包括确立生产、交换和分配的一整套政治、社会和法律的基本规则，它为集体选择确立了原则，从而是制定规则的规则。",
    "source": "/socialist/向社会主义市场经济体制的渐进过渡",
    "cite": []
  },
  {
    "term": "市场",
    "course": "社会主义经济学",
    "def": "市场是指交换的场所、渠道和纽带。",
    "source": "/socialist/社会主义市场经济理论",
    "cite": [
      {
        "label": "维基百科 · 市场",
        "url": "https://zh.wikipedia.org/wiki/%E5%B8%82%E5%9C%BA"
      }
    ]
  },
  {
    "term": "市场机制",
    "course": "社会主义经济学",
    "def": "市场机制是指在市场交易关系中形成的以价格、供求和竞争三位一体的互动关系为基础的经济运行和调节的一套有机系统。",
    "source": "/socialist/社会主义市场经济理论",
    "cite": [
      {
        "label": "维基百科 · 市场机制",
        "url": "https://zh.wikipedia.org/wiki/%E5%B8%82%E5%9C%BA%E6%9C%BA%E5%88%B6"
      }
    ]
  },
  {
    "term": "市场经济",
    "course": "社会主义经济学",
    "def": "市场经济是指由市场机制配置资源的经济。",
    "source": "/socialist/社会主义市场经济理论",
    "cite": [
      {
        "label": "维基百科 · 市场经济",
        "url": "https://zh.wikipedia.org/wiki/%E5%B8%82%E5%9C%BA%E7%BB%8F%E6%B5%8E"
      }
    ]
  },
  {
    "term": "微观收入分配过程",
    "course": "社会主义经济学",
    "def": "微观收入分配过程是通过市场机制的作用实现的。",
    "source": "/socialist/社会主义市场经济条件下的分配制度",
    "cite": []
  },
  {
    "term": "所有权",
    "course": "社会主义经济学",
    "def": "按照马克思的定义，所有权是确定物的最终归属，表明主体对确定物的独占和垄断的财产权利，是同一物上不依赖于其他权利而独立存在的财产权利。",
    "source": "/socialist/社会主义企业制度与国有企业改革",
    "cite": [
      {
        "label": "维基百科 · 所有权",
        "url": "https://zh.wikipedia.org/wiki/%E6%89%80%E6%9C%89%E6%9D%83"
      }
    ]
  },
  {
    "term": "技术进步",
    "course": "社会主义经济学",
    "def": "技术进步是指人们在生产中使用效率更高的劳动手段和工艺方法推动社会生产力发展的运动过程。",
    "source": "/socialist/社会主义市场经济条件下的经济结构调整",
    "cite": []
  },
  {
    "term": "按劳分配",
    "course": "社会主义经济学",
    "def": "按劳分配是指社会总产品在作了必要的扣除之后，按劳动者向社会提供的有效劳动量来分配个人消费品，多劳多得，少劳少得，不劳不得的分配制度。",
    "source": "/socialist/社会主义市场经济条件下的分配制度",
    "cite": [
      {
        "label": "维基百科 · 按劳分配",
        "url": "https://zh.wikipedia.org/wiki/%E6%8C%89%E5%8A%B3%E5%88%86%E9%85%8D"
      }
    ]
  },
  {
    "term": "收益权能",
    "course": "社会主义经济学",
    "def": "收益权能是指获取基于所有者财产而产生的经济利益的可能性，是人们因获取追加财产而产生的权利义务关系。",
    "source": "/socialist/社会主义企业制度与国有企业改革",
    "cite": []
  },
  {
    "term": "比较劳动生产率",
    "course": "社会主义经济学",
    "def": "比较劳动生产率是指一个部门的产值比重（或收入比重）与在此部门就业的劳动力比重的比率。",
    "source": "/socialist/社会主义市场经济条件下的经济结构调整",
    "cite": []
  },
  {
    "term": "法人企业制度",
    "course": "社会主义经济学",
    "def": "按照财产的组织形式和所承担的法律责任，企业的组织形式可分为自然人企业和法人企业，法人企业制度即以法人企业为组织形式的企业制度：企业拥有独立的法人财产，以其全部财产独立承担民事责任，出资人以出资额为限承担有限责任，公司是其典型形态。",
    "source": "/socialist/社会主义企业制度与国有企业改革",
    "cite": []
  },
  {
    "term": "混合所有制经济",
    "course": "社会主义经济学",
    "def": "混合所有制经济是由不同性质的所有制经济组合而成的一种经济形式。",
    "source": "/socialist/社会主义经济制度的本质特征",
    "cite": []
  },
  {
    "term": "渐进式改革",
    "course": "社会主义经济学",
    "def": "渐进式改革是在工业化和社会主义宪法制度的基础上进行的市场化改革，强调利用已有的组织资源推进改革，在基本不触动既得利益格局的前提下实行增量改革。",
    "source": "/socialist/社会主义市场经济理论",
    "cite": []
  },
  {
    "term": "激励核心",
    "course": "社会主义经济学",
    "def": "激励的核心是将代理人对个人效用的追求转化为对企业利润最大化的追求。",
    "source": "/socialist/国有企业治理结构的创新",
    "cite": []
  },
  {
    "term": "物价稳定",
    "course": "社会主义经济学",
    "def": "物价稳定不是指各种商品和要素之间相对价格的稳定，而是指全社会范围内价格总水平的稳定。",
    "source": "/socialist/社会主义市场经济条件下的政府调节",
    "cite": [
      {
        "label": "维基百科 · 物价稳定",
        "url": "https://zh.wikipedia.org/wiki/%E7%89%A9%E4%BB%B7%E7%A8%B3%E5%AE%9A"
      }
    ]
  },
  {
    "term": "相机治理机制",
    "course": "社会主义经济学",
    "def": "相机治理机制是企业所有权状态依存性的制度化：相对于不同的企业经营状态，对应着不同的企业所有权安排；其设计目的是确保在非正常经营状态下，受损失的利益相关者有合适的制度完成再谈判意愿，主要通过控制权的争夺来改变既定利益格局，构成针对企业决策者行为的外在约束。",
    "source": "/socialist/国有企业治理结构的创新",
    "cite": []
  },
  {
    "term": "社会主义初级阶段",
    "course": "社会主义经济学",
    "def": "社会主义初级阶段是指我国在生产力落后、商品经济不发达条件下建设社会主义必然要经历的特定历史阶段，即从我国进入社会主义到基本实现社会主义现代化的整个历史阶段。",
    "source": "/socialist/社会主义经济制度的本质特征",
    "cite": [
      {
        "label": "维基百科 · 社会主义初级阶段",
        "url": "https://zh.wikipedia.org/wiki/%E7%A4%BE%E4%BC%9A%E4%B8%BB%E4%B9%89%E5%88%9D%E7%BA%A7%E9%98%B6%E6%AE%B5"
      }
    ]
  },
  {
    "term": "社会保障",
    "course": "社会主义经济学",
    "def": "社会保障是指国家和社会通过立法对国民收入进行分配和再分配，为社会成员特别是生活有特殊困难的个人或家庭提供基本生活保障的一种制度。",
    "source": "/socialist/社会主义市场经济条件下的分配制度",
    "cite": [
      {
        "label": "维基百科 · 社会保障",
        "url": "https://zh.wikipedia.org/wiki/%E7%A4%BE%E4%BC%9A%E4%BF%9D%E9%9A%9C"
      }
    ]
  },
  {
    "term": "竞争性国有企业",
    "course": "社会主义经济学",
    "def": "竞争性国有企业是指那些国家投资建成的、基本上不存在进入与退出障碍、同一产业部门内存在众多企业、企业产品基本上具有同质性和可分性、以利润为经营目标的国有企业。",
    "source": "/socialist/社会主义企业制度与国有企业改革",
    "cite": []
  },
  {
    "term": "等级规则",
    "course": "社会主义经济学",
    "def": "等级规则是指首先构建一个层层隶属的金字塔形的等级构架，再界定每一个行为人在这个等级构架中所处的位置，然后再进一步界定与这个等级位置相适应的资源配置权力。",
    "source": "/socialist/向社会主义市场经济体制的渐进过渡",
    "cite": []
  },
  {
    "term": "经济全球化",
    "course": "社会主义经济学",
    "def": "从广义上理解，经济全球化这一概念代表着经济活动从国内向全球范围扩张的过程以及随之而出现的种种经济、社会、政治、生活等诸多方面的改变过程。",
    "source": "/socialist/社会主义对外经济关系",
    "cite": [
      {
        "label": "维基百科 · 经济全球化",
        "url": "https://zh.wikipedia.org/wiki/%E7%BB%8F%E6%B5%8E%E5%85%A8%E7%90%83%E5%8C%96"
      }
    ]
  },
  {
    "term": "经济发展",
    "course": "社会主义经济学",
    "def": "经济发展是指一个国家或地区经济增长以及经济结构、社会结构不断优化和高度化的演进过程。",
    "source": "/socialist/社会主义经济增长与经济发展",
    "cite": [
      {
        "label": "维基百科 · 经济发展",
        "url": "https://zh.wikipedia.org/wiki/%E7%BB%8F%E6%B5%8E%E5%8F%91%E5%B1%95"
      }
    ]
  },
  {
    "term": "经济发展模式",
    "course": "社会主义经济学",
    "def": "经济发展模式是指在一定时期内国民经济发展战略及其生产力要素增长机制、运行原则的特殊类型，它包括经济发展的目标、方式、发展重心、步骤等一系列要素。",
    "source": "/socialist/社会主义经济增长与经济发展",
    "cite": []
  },
  {
    "term": "经济增长",
    "course": "社会主义经济学",
    "def": "经济增长是指一个经济社会的实际产量（或实际收入）的长期增加，即按不变价格水平所测定的充分就业产量的增加。",
    "source": "/socialist/社会主义经济增长与经济发展",
    "cite": [
      {
        "label": "维基百科 · 经济增长",
        "url": "https://zh.wikipedia.org/wiki/%E7%BB%8F%E6%B5%8E%E5%A2%9E%E9%95%BF"
      }
    ]
  },
  {
    "term": "经济增长方式转变",
    "course": "社会主义经济学",
    "def": "经济增长方式的转变，是指经济增长从主要依靠生产要素的数量扩张转向主要通过提高投入生产要素的使用效率来实现，即从粗放型向集约型增长方式的转变。",
    "source": "/socialist/社会主义经济增长与经济发展",
    "cite": []
  },
  {
    "term": "经济开放",
    "course": "社会主义经济学",
    "def": "经济开放是指经济体系通过产品、服务、技术、要素等的流动与外界发生联系。",
    "source": "/socialist/社会主义对外经济关系",
    "cite": []
  },
  {
    "term": "经济政策手段",
    "course": "社会主义经济学",
    "def": "经济政策手段是国家为了实现经济政策目标所采取的方法，它包括政策工具和实施政策方法两个方面。",
    "source": "/socialist/社会主义市场经济条件下的政府调节",
    "cite": []
  },
  {
    "term": "经济法制手段",
    "course": "社会主义经济学",
    "def": "经济法制手段是指国家依靠法律的强制力量来保证经济政策目标实现的手段。",
    "source": "/socialist/社会主义市场经济条件下的政府调节",
    "cite": []
  },
  {
    "term": "绿色 GDP",
    "course": "社会主义经济学",
    "def": "1993 年联合国有关统计机构提出了生态国内生产总值「EDP」的概念，即绿色 GDP，也就是在 GDP 的基础上减掉创造 GDP 所消耗的资源价值，然后再减掉创造 GDP 所造成污染的治理成本。",
    "source": "/socialist/社会主义经济增长与经济发展",
    "cite": [
      {
        "label": "维基百科 · 绿色GDP",
        "url": "https://zh.wikipedia.org/wiki/%E7%BB%BF%E8%89%B2GDP"
      }
    ]
  },
  {
    "term": "股份公司",
    "course": "社会主义经济学",
    "def": "股份公司是由一定人数以上的股东所发起组织、全部资本被划分为若干等额股份、股东就其所认购的股份对公司承担有限责任、股票可以在社会上公开发行和自由转让的公司。",
    "source": "/socialist/社会主义企业制度与国有企业改革",
    "cite": [
      {
        "label": "维基百科 · 股份公司",
        "url": "https://zh.wikipedia.org/wiki/%E8%82%A1%E4%BB%BD%E5%85%AC%E5%8F%B8"
      }
    ]
  },
  {
    "term": "自然人企业制度",
    "course": "社会主义经济学",
    "def": "按照财产的组织形式和所承担的法律责任，企业的组织形式可分为自然人企业和法人企业，自然人企业制度即以自然人企业为组织形式的企业制度：企业不具有法人资格，业主对企业债务承担无限责任，个人业主制与合伙制是其典型形态。",
    "source": "/socialist/社会主义企业制度与国有企业改革",
    "cite": []
  },
  {
    "term": "行为的伦理道德规范",
    "course": "社会主义经济学",
    "def": "行为的伦理道德规范来源于人们对现实的理解和意识形态，是与对现实契约关系的正义或公平的判断相连的，它对于赋予宪法秩序和制度安排的合法性是至关重要的。",
    "source": "/socialist/社会主义经济增长与经济发展",
    "cite": []
  },
  {
    "term": "行政干预下的经营者控制",
    "course": "社会主义经济学",
    "def": "我国的国有企业改革主要是通过政企关系的市场化和契约化来实现权责利的再分配，政府赋予经营者很大的经营权，并监控经营者的行为，从而形成了有别于内部人控制的行政干预下的经营者控制型企业治理结构。",
    "source": "/socialist/国有企业治理结构的创新",
    "cite": []
  },
  {
    "term": "行政管制手段",
    "course": "社会主义经济学",
    "def": "行政管制手段是国家行政管理部门凭借政权的威力，通过发布命令、指示等形式来干预经济生活的手段。",
    "source": "/socialist/社会主义市场经济条件下的政府调节",
    "cite": []
  },
  {
    "term": "财政政策手段",
    "course": "社会主义经济学",
    "def": "财政政策的核心是通过政府的收入和支出调节供求关系，实现一定的政策目标。",
    "source": "/socialist/社会主义市场经济条件下的政府调节",
    "cite": []
  },
  {
    "term": "货币政策手段",
    "course": "社会主义经济学",
    "def": "货币政策的核心是中央银行通过金融系统和金融市场，调节国民经济中的货币供应量和利率，影响投资和消费活动，进而实现一定的政策目标。",
    "source": "/socialist/社会主义市场经济条件下的政府调节",
    "cite": []
  },
  {
    "term": "道德风险",
    "course": "社会主义经济学",
    "def": "道德风险是指由于信息不对称，从事经济活动的人在最大限度地增进自身效用时作出不利于他人的行动。",
    "source": "/socialist/国有企业治理结构的创新",
    "cite": [
      {
        "label": "维基百科 · 道德风险",
        "url": "https://zh.wikipedia.org/wiki/%E9%81%93%E5%BE%B7%E9%A3%8E%E9%99%A9"
      }
    ]
  },
  {
    "term": "集体经济",
    "course": "社会主义经济学",
    "def": "集体经济是由部分劳动群众共同占有生产资料的一种公有制形式。",
    "source": "/socialist/社会主义经济制度的本质特征",
    "cite": [
      {
        "label": "维基百科 · 中华人民共和国农村集体经济组织法",
        "url": "https://zh.wikipedia.org/wiki/%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E5%86%9C%E6%9D%91%E9%9B%86%E4%BD%93%E7%BB%8F%E6%B5%8E%E7%BB%84%E7%BB%87%E6%B3%95"
      }
    ]
  },
  {
    "term": "需求诱致型制度变迁方式",
    "course": "社会主义经济学",
    "def": "需求诱致型制度变迁方式指个人或一群人在给定的约束条件下，为确立预期能导致自身利益最大化的制度安排和权利界定而自发组织实施制度创新。",
    "source": "/socialist/向社会主义市场经济体制的渐进过渡",
    "cite": []
  },
  {
    "term": "非货币物品",
    "course": "社会主义经济学",
    "def": "指那些通常不以货币来进行买卖，但和那些能以货币买卖的物品一样可以给当事人带来效用的消费项目。",
    "source": "/socialist/国有企业治理结构的创新",
    "cite": []
  }
]

export const GLOSSARY_EN: GlossaryEntryEn[] = [
  {
    "term": "IS curve",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "The IS curve is the curve describing the combinations of national income and the interest rate at which the product market is in equilibrium.",
    "source": "/western/产品市场和货币市场的一般均衡",
    "cite": [
      {
        "label": "维基百科 · IS曲线",
        "url": "https://zh.wikipedia.org/wiki/IS%E6%9B%B2%E7%BA%BF"
      }
    ]
  },
  {
    "term": "LM curve",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "The LM curve depicts the combinations of the interest rate and national income at which the money market is in equilibrium.",
    "source": "/western/产品市场和货币市场的一般均衡",
    "cite": [
      {
        "label": "维基百科 · LM曲线",
        "url": "https://zh.wikipedia.org/wiki/LM%E6%9B%B2%E7%BA%BF"
      }
    ]
  },
  {
    "term": "Disposable personal income",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "Disposable personal income (DPI) is the portion of personal income that is actually available for consumption and saving after personal income taxes are deducted. Formula: DPI = personal income − personal income taxes.",
    "source": "/western/宏观经济活动与宏观经济学",
    "cite": [
      {
        "label": "维基百科 · 可支配收入",
        "url": "https://zh.wikipedia.org/wiki/%E5%8F%AF%E6%94%AF%E9%85%8D%E6%94%B6%E5%85%A5"
      },
      {
        "label": "Wikipedia · Disposable and discretionary income",
        "url": "https://en.wikipedia.org/wiki/Disposable_and_discretionary_income"
      }
    ]
  },
  {
    "term": "Condition for simultaneous Pareto optimality in exchange and production",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "The condition for simultaneous Pareto optimality in exchange and production is that, for all goods, the marginal rate of substitution between any two goods equals the marginal rate of transformation in their production, namely <span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>R</mi><mi>C</mi><msub><mi>S</mi><mrow><mi>X</mi><mi>Y</mi></mrow></msub><mo>=</mo><mi>R</mi><mi>P</mi><msub><mi>T</mi><mrow><mi>X</mi><mi>Y</mi></mrow></msub></mrow><annotation encoding=\"application/x-tex\">RCS_{XY}=RPT_{XY}</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:0.8333em;vertical-align:-0.15em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0077em;\">R</span><span class=\"mord mathnormal\" style=\"margin-right:0.0715em;\">C</span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3283em;\"><span style=\"top:-2.55em;margin-left:-0.0576em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"katex-sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0785em;\">X</span><span class=\"mord mathnormal mtight\" style=\"margin-right:0.2222em;\">Y</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:0.8333em;vertical-align:-0.15em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0077em;\">R</span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">P</span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3283em;\"><span style=\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"katex-sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0785em;\">X</span><span class=\"mord mathnormal mtight\" style=\"margin-right:0.2222em;\">Y</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span>.",
    "source": "/western/一般均衡论和福利经济学",
    "cite": [
      {
        "label": "维基百科 · 帕累托最优",
        "url": "https://zh.wikipedia.org/wiki/%E5%B8%95%E7%B4%AF%E6%89%98%E6%9C%80%E4%BC%98"
      },
      {
        "label": "Wikipedia · Pareto efficiency",
        "url": "https://en.wikipedia.org/wiki/Pareto_efficiency"
      }
    ]
  },
  {
    "term": "Condition for Pareto optimality in exchange",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "The condition for Pareto optimality in exchange is that in exchange, the marginal rate of substitution between any pair of goods is the same for every individual who uses those two goods, namely <span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>R</mi><mi>C</mi><msubsup><mi>S</mi><mn>12</mn><mi>A</mi></msubsup><mo>=</mo><mi>R</mi><mi>C</mi><msubsup><mi>S</mi><mn>12</mn><mi>B</mi></msubsup></mrow><annotation encoding=\"application/x-tex\">RCS_{12}^{A} = RCS_{12}^B</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:1.0894em;vertical-align:-0.2481em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0077em;\">R</span><span class=\"mord mathnormal\" style=\"margin-right:0.0715em;\">C</span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8413em;\"><span style=\"top:-2.4519em;margin-left:-0.0576em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"katex-sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">12</span></span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"katex-sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">A</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2481em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:1.0894em;vertical-align:-0.2481em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0077em;\">R</span><span class=\"mord mathnormal\" style=\"margin-right:0.0715em;\">C</span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8413em;\"><span style=\"top:-2.4519em;margin-left:-0.0576em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"katex-sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">12</span></span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"katex-sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0502em;\">B</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2481em;\"><span></span></span></span></span></span></span></span></span></span>; at this point the society has reached the Pareto-optimal state of product distribution and thus achieves efficiency in exchange.",
    "source": "/western/一般均衡论和福利经济学",
    "cite": [
      {
        "label": "维基百科 · 帕累托最优",
        "url": "https://zh.wikipedia.org/wiki/%E5%B8%95%E7%B4%AF%E6%89%98%E6%9C%80%E4%BC%98"
      },
      {
        "label": "Wikipedia · Pareto efficiency",
        "url": "https://en.wikipedia.org/wiki/Pareto_efficiency"
      }
    ]
  },
  {
    "term": "Rate of product transformation",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "The marginal rate of transformation is the proportion by which the output of one good must be reduced in order to increase the output of another good by one unit.",
    "source": "/western/一般均衡论和福利经济学",
    "cite": [
      {
        "label": "Wikipedia · Marginal rate of transformation",
        "url": "https://en.wikipedia.org/wiki/Marginal_rate_of_transformation"
      }
    ]
  },
  {
    "term": "Price discrimination",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "Price discrimination refers to a monopolist selling the same good at different prices within the same period.",
    "source": "/western/市场理论",
    "cite": [
      {
        "label": "维基百科 · 价格歧视",
        "url": "https://zh.wikipedia.org/wiki/%E4%BB%B7%E6%A0%BC%E6%AD%A7%E8%A7%86"
      }
    ]
  },
  {
    "term": "Price adjustment equation",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "The price adjustment equation is the equation expressing the relationship between the inflation rate and the forces that generate inflationary pressure.",
    "source": "/western/通货膨胀理论",
    "cite": [
      {
        "label": "Wikipedia · Phillips curve",
        "url": "https://en.wikipedia.org/wiki/Phillips_curve"
      },
      {
        "label": "维基百科 · 菲利普斯曲线",
        "url": "https://zh.wikipedia.org/wiki/%E8%8F%B2%E5%88%A9%E6%99%AE%E6%96%AF%E6%9B%B2%E7%BA%BF"
      }
    ]
  },
  {
    "term": "Supply",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "Supply is the quantity of a good that producers are willing and able to offer at each possible price within a given period, other things being equal.",
    "source": "/western/需求与供给",
    "cite": [
      {
        "label": "维基百科 · 供给",
        "url": "https://zh.wikipedia.org/wiki/%E4%BE%9B%E7%BB%99"
      }
    ]
  },
  {
    "term": "Price elasticity of supply",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "The price elasticity of supply is, within a given period, the responsiveness of the quantity supplied of a good to a change in its price.",
    "source": "/western/需求与供给",
    "cite": [
      {
        "label": "维基百科 · 供给的价格弹性",
        "url": "https://zh.wikipedia.org/wiki/%E4%BE%9B%E7%BB%99%E7%9A%84%E4%BB%B7%E6%A0%BC%E5%BC%B9%E6%80%A7"
      }
    ]
  },
  {
    "term": "Law of supply",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "The law of supply, also called the supply theorem, supply law, or supply principle, states that the quantity supplied by producers changes in the same direction as the price of the good.",
    "source": "/western/需求与供给",
    "cite": [
      {
        "label": "Wikipedia · Law of supply",
        "url": "https://en.wikipedia.org/wiki/Law_of_supply"
      }
    ]
  },
  {
    "term": "Free-rider problem",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "The free-rider problem is the market failure that arises in an economy because consumption satisfaction can be obtained without payment.",
    "source": "/western/市场失灵和微观经济政策",
    "cite": [
      {
        "label": "维基百科 · 搭便车问题",
        "url": "https://zh.wikipedia.org/wiki/%E6%90%AD%E4%BE%BF%E8%BD%A6%E9%97%AE%E9%A2%98"
      },
      {
        "label": "Wikipedia · Free-rider problem",
        "url": "https://en.wikipedia.org/wiki/Free-rider_problem"
      }
    ]
  },
  {
    "term": "Public goods",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "Goods that lack exclusivity or (and) rivalry, so that once produced some people cannot be excluded from consuming them, are called (pure) public goods.",
    "source": "/western/市场失灵和微观经济政策",
    "cite": [
      {
        "label": "维基百科 · 公共物品",
        "url": "https://zh.wikipedia.org/wiki/%E5%85%AC%E5%85%B1%E7%89%A9%E5%93%81"
      },
      {
        "label": "维基百科 · 公共物品",
        "url": "https://zh.wikipedia.org/wiki/%E5%85%AC%E5%85%B1%E7%89%A9%E5%93%81"
      }
    ]
  },
  {
    "term": "Single monetary rule",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "The single monetary rule is a monetarist policy proposition and the most important theoretical rule of monetarist economics.",
    "source": "/western/宏观经济学的意见分歧",
    "cite": [
      {
        "label": "Wikipedia · Monetarism",
        "url": "https://en.wikipedia.org/wiki/Monetarism"
      },
      {
        "label": "维基百科 · 货币主义",
        "url": "https://zh.wikipedia.org/wiki/%E8%B4%A7%E5%B8%81%E4%B8%BB%E4%B9%89"
      }
    ]
  },
  {
    "term": "Profit-maximization principle of the firm",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "The profit-maximization principle is the general rule a firm follows when making production decisions: the additional revenue from each extra unit of output (or factor) must equal the additional cost it brings, that is, marginal revenue equals marginal cost: <span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>M</mi><mi>R</mi><mo>=</mo><mi>M</mi><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">MR =MC</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">M</span><span class=\"mord mathnormal\" style=\"margin-right:0.0077em;\">R</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">M</span><span class=\"mord mathnormal\" style=\"margin-right:0.0715em;\">C</span></span></span></span>.",
    "source": "/western/市场理论",
    "cite": [
      {
        "label": "Wikipedia · Profit maximization",
        "url": "https://en.wikipedia.org/wiki/Profit_maximization"
      },
      {
        "label": "维基百科 · 利潤最大化",
        "url": "https://zh.wikipedia.org/wiki/%E5%88%A9%E6%BD%A4%E6%9C%80%E5%A4%A7%E5%8C%96"
      }
    ]
  },
  {
    "term": "Cournot model",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "The Cournot model is a simple model containing only two oligopolistic firms, that is, a duopoly model.",
    "source": "/western/市场理论",
    "cite": [
      {
        "label": "维基百科 · 古诺模型",
        "url": "https://zh.wikipedia.org/wiki/%E5%8F%A4%E8%AF%BA%E6%A8%A1%E5%9E%8B"
      }
    ]
  },
  {
    "term": "Nominal and real national income",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "(1) Nominal national income is national income computed at the current-year prices of goods and services; it does not take inflation into account. (2) Real national income is national income computed at the prices of some earlier base year, or national income deflated by a price index.",
    "source": "/western/宏观经济活动与宏观经济学",
    "cite": [
      {
        "label": "Wikipedia · Real and nominal value",
        "url": "https://en.wikipedia.org/wiki/Real_and_nominal_value"
      }
    ]
  },
  {
    "term": "Backward-bending labor supply curve",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "According to workers' optimizing behavior, for a given wage rate the worker determines the optimal labor supply at the point of utility maximization, thereby yielding the supply curve of labor.",
    "source": "/western/生产要素市场",
    "cite": [
      {
        "label": "Wikipedia · Backward bending labour supply curve",
        "url": "https://en.wikipedia.org/wiki/Backward_bending_labour_supply_curve"
      }
    ]
  },
  {
    "term": "Harrod-Domar model",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "The Harrod-Domar model is a model for analyzing economic growth proposed successively by Harrod and Domar in the 1940s.",
    "source": "/western/经济增长",
    "cite": [
      {
        "label": "维基百科 · 哈罗德-多马模型",
        "url": "https://zh.wikipedia.org/wiki/%E5%93%88%E7%BD%97%E5%BE%B7-%E5%A4%9A%E9%A9%AC%E6%A8%A1%E5%9E%8B"
      },
      {
        "label": "维基百科 · 哈罗德-多马模型",
        "url": "https://zh.wikipedia.org/wiki/%E5%93%88%E7%BD%97%E5%BE%B7-%E5%A4%9A%E9%A9%AC%E6%A8%A1%E5%9E%8B"
      }
    ]
  },
  {
    "term": "Marginal rate of substitution of commodities",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "The marginal rate of substitution of commodities is the amount of the other good a consumer must give up in order to increase consumption of the first good by one unit while the utility level remains unchanged.",
    "source": "/western/效用论",
    "cite": [
      {
        "label": "维基百科 · 边际替代率",
        "url": "https://zh.wikipedia.org/wiki/%E8%BE%B9%E9%99%85%E6%9B%BF%E4%BB%A3%E7%8E%87"
      },
      {
        "label": "Wikipedia · Marginal rate of substitution",
        "url": "https://en.wikipedia.org/wiki/Marginal_rate_of_substitution"
      }
    ]
  },
  {
    "term": "Gross domestic product",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "Gross domestic product (GDP) is the total market value of all final goods and services produced by an economy (a country or a region) using its factors of production within a given period.",
    "source": "/western/宏观经济活动与宏观经济学",
    "cite": [
      {
        "label": "维基百科 · 国内生产总值",
        "url": "https://zh.wikipedia.org/wiki/%E5%9B%BD%E5%86%85%E7%94%9F%E4%BA%A7%E6%80%BB%E5%80%BC"
      }
    ]
  },
  {
    "term": "Gross national product",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "Gross national product (GNP) is the total market value of final products produced by all the factors of production owned by a country's residents within a given period, that is, the total market value of final products produced by the country's permanent residents.",
    "source": "/western/宏观经济活动与宏观经济学",
    "cite": [
      {
        "label": "维基百科 · 国民生产总值",
        "url": "https://zh.wikipedia.org/wiki/%E5%9B%BD%E6%B0%91%E7%94%9F%E4%BA%A7%E6%80%BB%E5%80%BC"
      }
    ]
  },
  {
    "term": "Equilibrium price",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "The equilibrium price is the price at which the market demand for a good equals its market supply.",
    "source": "/western/需求与供给",
    "cite": [
      {
        "label": "维基百科 · 经济均衡",
        "url": "https://zh.wikipedia.org/wiki/%E7%BB%8F%E6%B5%8E%E5%9D%87%E8%A1%A1"
      },
      {
        "label": "Wikipedia · Economic equilibrium",
        "url": "https://en.wikipedia.org/wiki/Economic_equilibrium"
      }
    ]
  },
  {
    "term": "Monopolistically competitive market",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "A monopolistically competitive market is a market in which many firms produce and sell differentiated products of the same kind; the market contains both monopoly and competition, being neither perfectly competitive nor perfectly monopolistic.",
    "source": "/western/市场理论",
    "cite": [
      {
        "label": "Wikipedia · Monopolistic competition",
        "url": "https://en.wikipedia.org/wiki/Monopolistic_competition"
      }
    ]
  },
  {
    "term": "Externality",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "An externality, also called an external economic effect, is the effect of one economic agent's activity on the welfare of another agent that is not reflected through market transactions.",
    "source": "/western/市场失灵和微观经济政策",
    "cite": [
      {
        "label": "维基百科 · 外部性",
        "url": "https://zh.wikipedia.org/wiki/%E5%A4%96%E9%83%A8%E6%80%A7"
      },
      {
        "label": "Wikipedia · Externality",
        "url": "https://en.wikipedia.org/wiki/Externality"
      }
    ]
  },
  {
    "term": "External economies and external diseconomies",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "External economies refer to a case in which one agent's economic activity brings benefits to other members of society while the agent receives no corresponding compensation, that is, the activity exerts positive external effects; external diseconomies refer to a case in which one agent's economic activity imposes costs on other members of society while the agent does not bear all of them, that is, the activity exerts negative external effects.",
    "source": "/western/市场理论",
    "cite": [
      {
        "label": "维基百科 · 外部性",
        "url": "https://zh.wikipedia.org/wiki/%E5%A4%96%E9%83%A8%E6%80%A7"
      },
      {
        "label": "Wikipedia · Externality",
        "url": "https://en.wikipedia.org/wiki/Externality"
      }
    ]
  },
  {
    "term": "Unemployment rate",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "The unemployment rate is the ratio of the number of unemployed to the total labor force (the employed plus the unemployed) within a given period.",
    "source": "/western/宏观经济活动与宏观经济学",
    "cite": [
      {
        "label": "维基百科 · 失业率",
        "url": "https://zh.wikipedia.org/wiki/%E5%A4%B1%E4%B8%9A%E7%8E%87"
      },
      {
        "label": "维基百科 · 中国大陆失业率",
        "url": "https://zh.wikipedia.org/wiki/%E4%B8%AD%E5%9B%BD%E5%A4%A7%E9%99%86%E5%A4%B1%E4%B8%9A%E7%8E%87"
      }
    ]
  },
  {
    "term": "Perfectly competitive market",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "A perfectly competitive market is a market structure in which competition is unimpeded and undisturbed.",
    "source": "/western/市场理论",
    "cite": [
      {
        "label": "维基百科 · 完全竞争市场",
        "url": "https://zh.wikipedia.org/wiki/%E5%AE%8C%E5%85%A8%E7%AB%9E%E4%BA%89%E5%B8%82%E5%9C%BA"
      },
      {
        "label": "维基百科 · 完全竞争",
        "url": "https://zh.wikipedia.org/wiki/%E5%AE%8C%E5%85%A8%E7%AB%9E%E4%BA%89"
      }
    ]
  },
  {
    "term": "Oligopolistic market",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "An oligopolistic market is a form of market organization in which only a few sellers exist in a given industry.",
    "source": "/western/市场理论",
    "cite": [
      {
        "label": "维基百科 · 寡头垄断",
        "url": "https://zh.wikipedia.org/wiki/%E5%AF%A1%E5%A4%B4%E5%9E%84%E6%96%AD"
      }
    ]
  },
  {
    "term": "Partial equilibrium and general equilibrium",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "Partial equilibrium is the equilibrium of the market for one particular product or factor, on the assumption that other markets are unchanged; general equilibrium is the state in which the supply and demand of all markets in an economic system reach equilibrium simultaneously. General equilibrium analysis proceeds from the behavior of microeconomic agents and examines the conditions required for the supply and demand of every product and every factor to reach equilibrium simultaneously, together with the corresponding equilibrium prices and equilibrium quantities.",
    "source": "/western/一般均衡论和福利经济学",
    "cite": []
  },
  {
    "term": "Market clearing",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "Market clearing means that both wages in the labor market and commodity prices in the product market are fully flexible and adjust rapidly according to supply and demand, so as to reach an equilibrium in which the two sides are equal.",
    "source": "/western/宏观经济学的意见分歧",
    "cite": [
      {
        "label": "维基百科 · 市场出清",
        "url": "https://zh.wikipedia.org/wiki/%E5%B8%82%E5%9C%BA%E5%87%BA%E6%B8%85"
      }
    ]
  },
  {
    "term": "Market failure",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "Market failure means that the market mechanism fails to allocate resources efficiently.",
    "source": "/western/市场失灵和微观经济政策",
    "cite": [
      {
        "label": "维基百科 · 市场失灵",
        "url": "https://zh.wikipedia.org/wiki/%E5%B8%82%E5%9C%BA%E5%A4%B1%E7%81%B5"
      },
      {
        "label": "维基百科 · 市场失灵",
        "url": "https://zh.wikipedia.org/wiki/%E5%B8%82%E5%9C%BA%E5%A4%B1%E7%81%B5"
      }
    ]
  },
  {
    "term": "Pareto-optimal state",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "The Pareto-optimal state, also called economic efficiency, is the state in which no one can improve his or her own condition without making someone else worse off.",
    "source": "/western/一般均衡论和福利经济学",
    "cite": [
      {
        "label": "维基百科 · 帕累托最优",
        "url": "https://zh.wikipedia.org/wiki/%E5%B8%95%E7%B4%AF%E6%89%98%E6%9C%80%E4%BC%98"
      },
      {
        "label": "Wikipedia · Pareto efficiency",
        "url": "https://en.wikipedia.org/wiki/Pareto_efficiency"
      }
    ]
  },
  {
    "term": "Average cost",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "Average cost is the cost a firm incurs on average for each unit of output.",
    "source": "/western/生产和成本论",
    "cite": [
      {
        "label": "维基百科 · 平均成本法",
        "url": "https://zh.wikipedia.org/wiki/%E5%B9%B3%E5%9D%87%E6%88%90%E6%9C%AC%E6%B3%95"
      }
    ]
  },
  {
    "term": "Average factor cost",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "Average factor cost is the cost a firm pays on average for each unit of a factor of production it purchases.",
    "source": "/western/生产要素市场",
    "cite": [
      {
        "label": "Wikipedia · Factor market",
        "url": "https://en.wikipedia.org/wiki/Factor_market"
      },
      {
        "label": "维基百科 · 生产要素",
        "url": "https://zh.wikipedia.org/wiki/%E7%94%9F%E4%BA%A7%E8%A6%81%E7%B4%A0"
      }
    ]
  },
  {
    "term": "Derived demand",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "Derived demand refers to the demand by firms for factors of production that arises from consumers' demand for products.",
    "source": "/western/生产要素市场",
    "cite": [
      {
        "label": "Wikipedia · Derived demand",
        "url": "https://en.wikipedia.org/wiki/Derived_demand"
      }
    ]
  },
  {
    "term": "Aggregate supply curve",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "The aggregate supply curve is the curve showing the relationship between the economy's aggregate supply and the general price level; aggregate supply usually moves in the same direction as the general price level, so the curve slopes upward to the right.",
    "source": "/western/总需求和总供给分析",
    "cite": [
      {
        "label": "维基百科 · 总供给",
        "url": "https://zh.wikipedia.org/wiki/%E6%80%BB%E4%BE%9B%E7%BB%99"
      },
      {
        "label": "Wikipedia · Aggregate supply",
        "url": "https://en.wikipedia.org/wiki/Aggregate_supply"
      }
    ]
  },
  {
    "term": "Total revenue, average revenue, and marginal revenue",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "(1) A firm's total revenue (<span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mi>R</mi></mrow><annotation encoding=\"application/x-tex\">TR</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"mord mathnormal\" style=\"margin-right:0.0077em;\">R</span></span></span></span>) is the entire income obtained by selling a given quantity of product at a given price, that is, <span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mi>R</mi><mo>=</mo><mi>p</mi><mo stretchy=\"false\">(</mo><mi>y</mi><mo stretchy=\"false\">)</mo><mo>⋅</mo><mi>y</mi></mrow><annotation encoding=\"application/x-tex\">TR=p(y)\\cdot y</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"mord mathnormal\" style=\"margin-right:0.0077em;\">R</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\">p</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">⋅</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span></span></span></span>. In the formula, <span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mi>R</mi></mrow><annotation encoding=\"application/x-tex\">TR</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"mord mathnormal\" style=\"margin-right:0.0077em;\">R</span></span></span></span> is total revenue, <span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>p</mi><mo stretchy=\"false\">(</mo><mi>y</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">p(y)</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\">p</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span></span></span></span> is the price the firm faces when selling the product, and <span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>y</mi></mrow><annotation encoding=\"application/x-tex\">y</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:0.625em;vertical-align:-0.1944em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span></span></span></span> is total sales. (2) Average revenue (<span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mi>R</mi></mrow><annotation encoding=\"application/x-tex\">AR</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\">A</span><span class=\"mord mathnormal\" style=\"margin-right:0.0077em;\">R</span></span></span></span>) is the revenue the firm obtains per unit of product sold on average, that is, <span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mi>R</mi><mo>=</mo><mi>T</mi><mi>R</mi><mi mathvariant=\"normal\">/</mi><mi>y</mi><mo>=</mo><mi>p</mi><mo stretchy=\"false\">(</mo><mi>y</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">AR=TR/y=p(y)</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\">A</span><span class=\"mord mathnormal\" style=\"margin-right:0.0077em;\">R</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"mord mathnormal\" style=\"margin-right:0.0077em;\">R</span><span class=\"mord\">/</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\">p</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">y</span><span class=\"mclose\">)</span></span></span></span>; average revenue equals the price of the product, and the demand curve facing the firm is its average revenue curve. (3) Marginal revenue (<span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>M</mi><mi>R</mi></mrow><annotation encoding=\"application/x-tex\">MR</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">M</span><span class=\"mord mathnormal\" style=\"margin-right:0.0077em;\">R</span></span></span></span>) is the increment of revenue obtained when the firm sells one additional unit of product.",
    "source": "/western/市场理论",
    "cite": [
      {
        "label": "Wikipedia · Marginal revenue",
        "url": "https://en.wikipedia.org/wiki/Marginal_revenue"
      }
    ]
  },
  {
    "term": "Aggregate demand curve",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "The aggregate demand curve is the curve showing the correspondence between the economy's aggregate demand and the general price level; aggregate demand usually moves in the opposite direction to the general price level, so the curve slopes downward to the right.",
    "source": "/western/总需求和总供给分析",
    "cite": [
      {
        "label": "维基百科 · 总需求",
        "url": "https://zh.wikipedia.org/wiki/%E6%80%BB%E9%9C%80%E6%B1%82"
      },
      {
        "label": "Wikipedia · Aggregate demand",
        "url": "https://en.wikipedia.org/wiki/Aggregate_demand"
      }
    ]
  },
  {
    "term": "Cost-push inflation",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "Cost-push inflation, also called cost inflation or supply-side inflation, is a sustained and significant rise in the general price level caused by increases in supply costs.",
    "source": "/western/通货膨胀理论",
    "cite": [
      {
        "label": "Wikipedia · Cost-push inflation",
        "url": "https://en.wikipedia.org/wiki/Cost-push_inflation"
      }
    ]
  },
  {
    "term": "Investment function",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "On the condition that the marginal efficiency of capital is unchanged, investment depends on the interest rate and is a decreasing function of it; investment and the interest rate move in opposite directions, expressed by the formula <span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>I</mi><mo>=</mo><mi>I</mi><mo stretchy=\"false\">(</mo><mi>r</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">I=I(r)</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0785em;\">I</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0785em;\">I</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\" style=\"margin-right:0.0278em;\">r</span><span class=\"mclose\">)</span></span></span></span>.",
    "source": "/western/产品市场和货币市场的一般均衡",
    "cite": [
      {
        "label": "Wikipedia · Investment (macroeconomics)",
        "url": "https://en.wikipedia.org/wiki/Investment_%28macroeconomics%29"
      },
      {
        "label": "维基百科 · 投资",
        "url": "https://zh.wikipedia.org/wiki/%E6%8A%95%E8%B5%84"
      }
    ]
  },
  {
    "term": "Support price",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "The support price, also called the floor price, is the minimum price the government sets for an industry's products in order to foster that industry's production.",
    "source": "/western/需求与供给",
    "cite": [
      {
        "label": "Wikipedia · Price floor",
        "url": "https://en.wikipedia.org/wiki/Price_floor"
      }
    ]
  },
  {
    "term": "Income indexation",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "Income indexation is a measure the government adopts in dealing with cost-push inflation.",
    "source": "/western/通货膨胀理论",
    "cite": [
      {
        "label": "Wikipedia · Indexation",
        "url": "https://en.wikipedia.org/wiki/Indexation"
      },
      {
        "label": "维基百科 · 指数化",
        "url": "https://zh.wikipedia.org/wiki/%E6%8C%87%E6%95%B0%E5%8C%96"
      }
    ]
  },
  {
    "term": "Income effect",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "The income effect is the influence on the quantity demanded that arises because a change in a good's price changes the consumer's real income level and thereby causes the consumer to change the quantities consumed.",
    "source": "/western/效用论",
    "cite": [
      {
        "label": "维基百科 · 收入效应",
        "url": "https://zh.wikipedia.org/wiki/%E6%94%B6%E5%85%A5%E6%95%88%E5%BA%94"
      }
    ]
  },
  {
    "term": "Utility",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "Utility is the capacity of a good or service to satisfy human wants, that is, the degree of satisfaction a consumer feels when consuming the good or service.",
    "source": "/western/效用论",
    "cite": [
      {
        "label": "维基百科 · 效用",
        "url": "https://zh.wikipedia.org/wiki/%E6%95%88%E7%94%A8"
      },
      {
        "label": "维基百科 · 效用",
        "url": "https://zh.wikipedia.org/wiki/%E6%95%88%E7%94%A8"
      }
    ]
  },
  {
    "term": "Neoclassical growth model",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "The neoclassical growth model is a model of national economic growth proposed by the American economist Solow and others.",
    "source": "/western/经济增长",
    "cite": [
      {
        "label": "维基百科 · 新古典增长模型",
        "url": "https://zh.wikipedia.org/wiki/%E6%96%B0%E5%8F%A4%E5%85%B8%E5%A2%9E%E9%95%BF%E6%A8%A1%E5%9E%8B"
      }
    ]
  },
  {
    "term": "New classical macroeconomics",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "New classical macroeconomics, also called the &quot;new classical&quot; school, is a school of economics that follows the tradition of classical economics and believes in the effectiveness of market forces; it holds that if the market mechanism is allowed to function spontaneously, it can solve a series of macroeconomic problems such as unemployment and recession.",
    "source": "/western/宏观经济学的意见分歧",
    "cite": [
      {
        "label": "Wikipedia · New classical macroeconomics",
        "url": "https://en.wikipedia.org/wiki/New_classical_macroeconomics"
      }
    ]
  },
  {
    "term": "Indifference curve",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "The indifference curve is an analytical device of ordinal utility theory used to represent all the combinations of quantities of two goods between which the consumer's preferences are identical.",
    "source": "/western/效用论",
    "cite": [
      {
        "label": "维基百科 · 无差异曲线",
        "url": "https://zh.wikipedia.org/wiki/%E6%97%A0%E5%B7%AE%E5%BC%82%E6%9B%B2%E7%BA%BF"
      },
      {
        "label": "维基百科 · 无差异曲线",
        "url": "https://zh.wikipedia.org/wiki/%E6%97%A0%E5%B7%AE%E5%BC%82%E6%9B%B2%E7%BA%BF"
      }
    ]
  },
  {
    "term": "Substitution effect",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "The substitution effect is the change in the quantity demanded of a good that arises because the change in its price alters its relative price, and the change in relative price in turn alters the quantity demanded.",
    "source": "/western/效用论",
    "cite": [
      {
        "label": "维基百科 · 替代效应",
        "url": "https://zh.wikipedia.org/wiki/%E6%9B%BF%E4%BB%A3%E6%95%88%E5%BA%94"
      }
    ]
  },
  {
    "term": "Warranted rate of growth",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "The warranted rate of growth <span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>G</mi><mi>w</mi></msub></mrow><annotation encoding=\"application/x-tex\">G_w</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:0.8333em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">G</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"katex-sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0269em;\">w</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span> is given by the formula <span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>G</mi><mi>w</mi></msub><mo>=</mo><mfrac><msub><mi>S</mi><mi>d</mi></msub><msub><mi>v</mi><mi>r</mi></msub></mfrac></mrow><annotation encoding=\"application/x-tex\">G_w=\\frac{S_d}{v_r}</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:0.8333em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">G</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:0em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"katex-sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0269em;\">w</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:1.3393em;vertical-align:-0.4451em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8942em;\"><span style=\"top:-2.655em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"katex-sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0359em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1645em;\"><span style=\"top:-2.357em;margin-left:-0.0359em;margin-right:0.0714em;\"><span class=\"pstrut\" style=\"height:2.5em;\"></span><span class=\"katex-sizing reset-size3 size1 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0278em;\">r</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.143em;\"><span></span></span></span></span></span></span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.4159em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"katex-sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3448em;\"><span style=\"top:-2.3488em;margin-left:-0.0576em;margin-right:0.0714em;\"><span class=\"pstrut\" style=\"height:2.5em;\"></span><span class=\"katex-sizing reset-size3 size1 mtight\"><span class=\"mord mathnormal mtight\">d</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1512em;\"><span></span></span></span></span></span></span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.4451em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span></span></span></span>, where <span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>S</mi><mi>d</mi></msub></mrow><annotation encoding=\"application/x-tex\">S_d</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:0.8333em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.3361em;\"><span style=\"top:-2.55em;margin-left:-0.0576em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"katex-sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\">d</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span> is the desired saving rate (assumed given) and <span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>v</mi><mi>r</mi></msub></mrow><annotation encoding=\"application/x-tex\">v_r</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:0.5806em;vertical-align:-0.15em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0359em;\">v</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.1514em;\"><span style=\"top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"katex-sizing reset-size6 size3 mtight\"><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0278em;\">r</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.15em;\"><span></span></span></span></span></span></span></span></span></span> is the capital-output ratio entrepreneurs require as they envisage it.",
    "source": "/western/经济增长",
    "cite": [
      {
        "label": "Wikipedia · Harrod–Domar model",
        "url": "https://en.wikipedia.org/wiki/Harrod%E2%80%93Domar_model"
      },
      {
        "label": "维基百科 · 哈罗德-多马模型",
        "url": "https://zh.wikipedia.org/wiki/%E5%93%88%E7%BD%97%E5%BE%B7-%E5%A4%9A%E9%A9%AC%E6%A8%A1%E5%9E%8B"
      }
    ]
  },
  {
    "term": "Comparative static analysis",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "Comparative static analysis is the method of comparing and analyzing different static equilibrium states.",
    "source": "/western/需求与供给",
    "cite": [
      {
        "label": "Wikipedia · Comparative statics",
        "url": "https://en.wikipedia.org/wiki/Comparative_statics"
      }
    ]
  },
  {
    "term": "Liquidity preference",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "Liquidity preference, also called the preference for liquidity, is people's preference for holding money.",
    "source": "/western/产品市场和货币市场的一般均衡",
    "cite": [
      {
        "label": "维基百科 · 流动偏好",
        "url": "https://zh.wikipedia.org/wiki/%E6%B5%81%E5%8A%A8%E5%81%8F%E5%A5%BD"
      }
    ]
  },
  {
    "term": "Liquidity preference trap",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "The liquidity trap, also called the Keynesian trap, is an economic state in which, when the interest rate is extremely low, people's speculative demand for money tends toward infinity, so that even if the monetary authority increases the money supply it can hardly push the interest rate down further and stimulate investment.",
    "source": "/western/产品市场和货币市场的一般均衡",
    "cite": [
      {
        "label": "Wikipedia · Liquidity trap",
        "url": "https://en.wikipedia.org/wiki/Liquidity_trap"
      },
      {
        "label": "维基百科 · 流动性陷阱",
        "url": "https://zh.wikipedia.org/wiki/%E6%B5%81%E5%8A%A8%E6%80%A7%E9%99%B7%E9%98%B1"
      }
    ]
  },
  {
    "term": "Consumer price index",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "The consumer price index is short for the index of consumer prices; it reflects changes in the price level of consumer goods (including services) and is generally compiled by the weighted average method.",
    "source": "/western/通货膨胀理论",
    "cite": [
      {
        "label": "维基百科 · 消费物价指数",
        "url": "https://zh.wikipedia.org/wiki/%E6%B6%88%E8%B4%B9%E7%89%A9%E4%BB%B7%E6%8C%87%E6%95%B0"
      }
    ]
  },
  {
    "term": "Consumer equilibrium",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "Consumer equilibrium is the state in which, other conditions unchanged, the consumer achieves maximum utility and will keep it unchanged.",
    "source": "/western/效用论",
    "cite": [
      {
        "label": "Wikipedia · Consumer choice",
        "url": "https://en.wikipedia.org/wiki/Consumer_choice"
      }
    ]
  },
  {
    "term": "Rational expectations hypothesis",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "The rational expectations hypothesis holds that economic agents can form rational estimates of the future movements of economic variables such as prices, interest rates, profits, or income.",
    "source": "/western/宏观经济学的意见分歧",
    "cite": [
      {
        "label": "Wikipedia · Rational expectations",
        "url": "https://en.wikipedia.org/wiki/Rational_expectations"
      },
      {
        "label": "维基百科 · 理性预期",
        "url": "https://zh.wikipedia.org/wiki/%E7%90%86%E6%80%A7%E9%A2%84%E6%9C%9F"
      }
    ]
  },
  {
    "term": "Walras's law",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "Walras's law, also called Walras's rule, is an identity proposed by the economist Walras within his general equilibrium theory of perfectly competitive markets.",
    "source": "/western/一般均衡论和福利经济学",
    "cite": [
      {
        "label": "维基百科 · 瓦尔拉斯定律",
        "url": "https://zh.wikipedia.org/wiki/%E7%93%A6%E5%B0%94%E6%8B%89%E6%96%AF%E5%AE%9A%E5%BE%8B"
      }
    ]
  },
  {
    "term": "Condition for Pareto optimality in production",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "The condition for Pareto optimality in production states that, for an economy with many individuals, many goods, and many factors, equilibrium requires on the production side that the marginal rate of technical substitution between any pair of factors be equal in the production of all goods produced with those two inputs, namely <span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>R</mi><mi>T</mi><msubsup><mi>S</mi><mrow><mi>L</mi><mi>K</mi></mrow><mn>1</mn></msubsup><mo>=</mo><mi>R</mi><mi>T</mi><msubsup><mi>S</mi><mrow><mi>L</mi><mi>K</mi></mrow><mn>2</mn></msubsup></mrow><annotation encoding=\"application/x-tex\">RTS_{LK}^{1} = RTS_{LK}^2</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:1.0894em;vertical-align:-0.2753em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0077em;\">R</span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8141em;\"><span style=\"top:-2.4247em;margin-left:-0.0576em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"katex-sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">L</span><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0715em;\">K</span></span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"katex-sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">1</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2753em;\"><span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:1.0894em;vertical-align:-0.2753em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.0077em;\">R</span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"mord\"><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span><span class=\"msupsub\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8141em;\"><span style=\"top:-2.4247em;margin-left:-0.0576em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"katex-sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mathnormal mtight\">L</span><span class=\"mord mathnormal mtight\" style=\"margin-right:0.0715em;\">K</span></span></span></span><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"katex-sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.2753em;\"><span></span></span></span></span></span></span></span></span></span>; at this point the society has reached the Pareto-optimal state.",
    "source": "/western/一般均衡论和福利经济学",
    "cite": [
      {
        "label": "维基百科 · 帕累托最优",
        "url": "https://zh.wikipedia.org/wiki/%E5%B8%95%E7%B4%AF%E6%89%98%E6%9C%80%E4%BC%98"
      },
      {
        "label": "Wikipedia · Pareto efficiency",
        "url": "https://en.wikipedia.org/wiki/Pareto_efficiency"
      }
    ]
  },
  {
    "term": "Optimal combination of factors of production",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "The optimal combination of factors refers to the combination of factor quantities a producer uses, with production technology and factor prices unchanged, to maximize output at a given cost or to minimize cost at a given output.",
    "source": "/western/生产和成本论",
    "cite": [
      {
        "label": "维基百科 · 生产要素最优组合",
        "url": "https://zh.wikipedia.org/wiki/%E7%94%9F%E4%BA%A7%E8%A6%81%E7%B4%A0%E6%9C%80%E4%BC%98%E7%BB%84%E5%90%88"
      },
      {
        "label": "维基百科 · 生产要素最优组合",
        "url": "https://zh.wikipedia.org/wiki/%E7%94%9F%E4%BA%A7%E8%A6%81%E7%B4%A0%E6%9C%80%E4%BC%98%E7%BB%84%E5%90%88"
      }
    ]
  },
  {
    "term": "Coase theorem",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "The Coase theorem is a theory of property rights.",
    "source": "/western/市场失灵和微观经济政策",
    "cite": [
      {
        "label": "维基百科 · 科斯定理",
        "url": "https://zh.wikipedia.org/wiki/%E7%A7%91%E6%96%AF%E5%AE%9A%E7%90%86"
      },
      {
        "label": "维基百科 · 科斯定理",
        "url": "https://zh.wikipedia.org/wiki/%E7%A7%91%E6%96%AF%E5%AE%9A%E7%90%86"
      }
    ]
  },
  {
    "term": "Isoquant curve",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "The isoquant curve is the locus of the various combinations of the inputs of two factors of production that produce the same output under a constant level of technology.",
    "source": "/western/生产和成本论",
    "cite": [
      {
        "label": "维基百科 · 等产量曲线",
        "url": "https://zh.wikipedia.org/wiki/%E7%AD%89%E4%BA%A7%E9%87%8F%E6%9B%B2%E7%BA%BF"
      },
      {
        "label": "维基百科 · 等产量曲线",
        "url": "https://zh.wikipedia.org/wiki/%E7%AD%89%E4%BA%A7%E9%87%8F%E6%9B%B2%E7%BA%BF"
      }
    ]
  },
  {
    "term": "Isocost equation",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "A firm's isocost equation is the algebraic expression representing all the different factor combinations the firm can use at equal cost when factor prices are given.",
    "source": "/western/生产和成本论",
    "cite": []
  },
  {
    "term": "Nash equilibrium",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "A Nash equilibrium refers to a strategy combination in which no participant changes his or her own strategy as long as the other participants do not change theirs.",
    "source": "/western/市场理论",
    "cite": [
      {
        "label": "维基百科 · 纳什均衡",
        "url": "https://zh.wikipedia.org/wiki/%E7%BA%B3%E4%BB%80%E5%9D%87%E8%A1%A1"
      },
      {
        "label": "维基百科 · 纳什均衡",
        "url": "https://zh.wikipedia.org/wiki/%E7%BA%B3%E4%BB%80%E5%9D%87%E8%A1%A1"
      }
    ]
  },
  {
    "term": "Natural rate hypothesis",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "The natural rate hypothesis refers to the employment rate determined when the labor market reaches equilibrium under competitive conditions in the absence of interference from monetary factors.",
    "source": "/western/宏观经济学的意见分歧",
    "cite": [
      {
        "label": "Wikipedia · Natural rate of unemployment",
        "url": "https://en.wikipedia.org/wiki/Natural_rate_of_unemployment"
      },
      {
        "label": "维基百科 · 自然失業率",
        "url": "https://zh.wikipedia.org/wiki/%E8%87%AA%E7%84%B6%E5%A4%B1%E6%A5%AD%E7%8E%87"
      }
    ]
  },
  {
    "term": "Phillips curve",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "The Phillips curve was first proposed by the British economist A.W. Phillips; his original study described the negative correlation between the unemployment rate and the growth rate of money wages, and only later was it often extended to the short-run trade-off between the inflation rate and the unemployment rate.",
    "source": "/western/宏观经济学的意见分歧",
    "cite": [
      {
        "label": "维基百科 · 菲利普斯曲线",
        "url": "https://zh.wikipedia.org/wiki/%E8%8F%B2%E5%88%A9%E6%99%AE%E6%96%AF%E6%9B%B2%E7%BA%BF"
      }
    ]
  },
  {
    "term": "Increasing, constant, and decreasing returns to scale",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "As a special case of economies and diseconomies of scale, if output is expanded by expanding the factors of production in the same proportion, the corresponding concept of returns to scale can be defined: (1) if output increases in a greater proportion than the factors of production, production exhibits increasing returns to scale; (2) if output increases in the same proportion as the factors, production exhibits constant returns to scale; (3) if output increases in a smaller proportion than the factors, production exhibits decreasing returns to scale.",
    "source": "/western/生产和成本论",
    "cite": [
      {
        "label": "Wikipedia · Returns to scale",
        "url": "https://en.wikipedia.org/wiki/Returns_to_scale"
      },
      {
        "label": "维基百科 · 规模报酬",
        "url": "https://zh.wikipedia.org/wiki/%E8%A7%84%E6%A8%A1%E6%8A%A5%E9%85%AC"
      }
    ]
  },
  {
    "term": "Economies and diseconomies of scale",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "Economies and diseconomies of scale describe the relationship between changes in a firm's output, and hence in its scale, and its costs.",
    "source": "/western/生产和成本论",
    "cite": [
      {
        "label": "Wikipedia · Economies of scale",
        "url": "https://en.wikipedia.org/wiki/Economies_of_scale"
      },
      {
        "label": "维基百科 · 规模经济",
        "url": "https://zh.wikipedia.org/wiki/%E8%A7%84%E6%A8%A1%E7%BB%8F%E6%B5%8E"
      }
    ]
  },
  {
    "term": "Monetarism",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "Monetarism, also called the monetarist school, takes curbing inflation and opposing state intervention as its main tenets and the modern quantity theory of money as its theoretical foundation; it firmly believes that changes in the money supply are the most fundamental cause of movements in the price level and economic activity, emphasizes the importance of money and monetary policy, and advocates a single-rule monetary policy.",
    "source": "/western/宏观经济学的意见分歧",
    "cite": [
      {
        "label": "维基百科 · 货币主义",
        "url": "https://zh.wikipedia.org/wiki/%E8%B4%A7%E5%B8%81%E4%B8%BB%E4%B9%89"
      }
    ]
  },
  {
    "term": "Money wage rigidity",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "Money wage rigidity is the phenomenon that money wages do not adjust rapidly in response to changes in labor demand and supply.",
    "source": "/western/总需求和总供给分析",
    "cite": [
      {
        "label": "Wikipedia · Sticky wages",
        "url": "https://en.wikipedia.org/wiki/Sticky_wages"
      }
    ]
  },
  {
    "term": "Marginal efficiency of capital",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "The marginal efficiency of capital is that discount rate which exactly equates the sum of the present values of the expected returns over the life of a capital asset with the supply price or replacement cost of that capital asset.",
    "source": "/western/产品市场和货币市场的一般均衡",
    "cite": [
      {
        "label": "Wikipedia · Marginal efficiency of capital",
        "url": "https://en.wikipedia.org/wiki/Marginal_efficiency_of_capital"
      }
    ]
  },
  {
    "term": "Value of marginal product",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "The value of marginal product is the value of the extra output obtained by adding one unit of a factor of production; it equals the marginal product multiplied by the price of the product, that is, <span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>V</mi><mi>M</mi><mi>P</mi><mo>=</mo><mi>P</mi><mo>⋅</mo><mi>M</mi><mi>P</mi></mrow><annotation encoding=\"application/x-tex\">VMP=P \\cdot MP</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.2222em;\">V</span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">M</span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">P</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2778em;\"></span></span><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">P</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span><span class=\"mbin\">⋅</span><span class=\"mspace\" style=\"margin-right:0.2222em;\"></span></span><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">M</span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">P</span></span></span></span>.",
    "source": "/western/生产要素市场",
    "cite": []
  },
  {
    "term": "Marginal product",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "The marginal product is the increment in total output obtained from each additional unit of a variable input when the production technology and other inputs are unchanged.",
    "source": "/western/生产和成本论",
    "cite": [
      {
        "label": "Wikipedia · Marginal product",
        "url": "https://en.wikipedia.org/wiki/Marginal_product"
      }
    ]
  },
  {
    "term": "Marginal cost",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "Marginal cost is the amount by which cost changes when output changes by a given quantity, that is, the increase in total cost when the firm adds one unit of output in the short run.",
    "source": "/western/生产和成本论",
    "cite": [
      {
        "label": "维基百科 · 边际成本",
        "url": "https://zh.wikipedia.org/wiki/%E8%BE%B9%E9%99%85%E6%88%90%E6%9C%AC"
      },
      {
        "label": "维基百科 · 边际成本",
        "url": "https://zh.wikipedia.org/wiki/%E8%BE%B9%E9%99%85%E6%88%90%E6%9C%AC"
      }
    ]
  },
  {
    "term": "Marginal rate of technical substitution",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "The marginal rate of technical substitution is the amount by which the input of one factor is reduced when the input of another factor is increased by one unit while the output level is maintained; its English abbreviation is <span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>M</mi><mi>R</mi><mi>T</mi><mi>S</mi></mrow><annotation encoding=\"application/x-tex\">MRTS</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\" style=\"margin-right:0.109em;\">M</span><span class=\"mord mathnormal\" style=\"margin-right:0.0077em;\">R</span><span class=\"mord mathnormal\" style=\"margin-right:0.1389em;\">T</span><span class=\"mord mathnormal\" style=\"margin-right:0.0576em;\">S</span></span></span></span>.",
    "source": "/western/生产和成本论",
    "cite": [
      {
        "label": "Wikipedia · Marginal rate of technical substitution",
        "url": "https://en.wikipedia.org/wiki/Marginal_rate_of_technical_substitution"
      }
    ]
  },
  {
    "term": "Law of diminishing marginal rate of technical substitution",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "The law of the diminishing marginal rate of technical substitution states that, with output held constant, as the input of one factor of production is continuously increased, the amount of the other factor that each additional unit of this factor can replace diminishes.",
    "source": "/western/生产和成本论",
    "cite": [
      {
        "label": "Wikipedia · Marginal rate of technical substitution",
        "url": "https://en.wikipedia.org/wiki/Marginal_rate_of_technical_substitution"
      }
    ]
  },
  {
    "term": "Marginal revenue product",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "The marginal revenue product is the additional revenue obtained by adding one unit of a factor input when the inputs of all other factors of production are held fixed.",
    "source": "/western/生产要素市场",
    "cite": [
      {
        "label": "Wikipedia · Marginal revenue product",
        "url": "https://en.wikipedia.org/wiki/Marginal_revenue_product"
      }
    ]
  },
  {
    "term": "Law of diminishing marginal returns",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "Under a constant level of technology, in the process of adding successive equal amounts of one variable factor of production to one or more factors whose quantities are fixed, when the input of the variable factor is below a certain specific value, the marginal product brought by additional input of the factor increases; when the input of the variable factor continues to increase beyond that specific value, the marginal product brought by additional input of the factor diminishes.",
    "source": "/western/生产和成本论",
    "cite": [
      {
        "label": "Wikipedia · Diminishing returns",
        "url": "https://en.wikipedia.org/wiki/Diminishing_returns"
      },
      {
        "label": "维基百科 · 边际收益递减",
        "url": "https://zh.wikipedia.org/wiki/%E8%BE%B9%E9%99%85%E6%94%B6%E7%9B%8A%E9%80%92%E5%87%8F"
      }
    ]
  },
  {
    "term": "Law of diminishing marginal utility",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "The law of diminishing marginal utility states that, within a given period and with the consumption of other goods unchanged, as a consumer keeps increasing the consumption of a certain good, the additional utility obtained from each additional unit of that good gradually decreases.",
    "source": "/western/效用论",
    "cite": [
      {
        "label": "Wikipedia · Marginal utility",
        "url": "https://en.wikipedia.org/wiki/Marginal_utility"
      },
      {
        "label": "维基百科 · 边际效用",
        "url": "https://zh.wikipedia.org/wiki/%E8%BE%B9%E9%99%85%E6%95%88%E7%94%A8"
      }
    ]
  },
  {
    "term": "Marginal factor cost",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "The marginal factor cost is the increase in cost that results when a firm adds one unit of a factor of production.",
    "source": "/western/生产要素市场",
    "cite": []
  },
  {
    "term": "Adverse selection",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "Adverse selection refers to the phenomenon in the lemons market whereby high-quality products are eliminated and low-quality products survive.",
    "source": "/western/市场失灵和微观经济政策",
    "cite": [
      {
        "label": "维基百科 · 逆向选择",
        "url": "https://zh.wikipedia.org/wiki/%E9%80%86%E5%90%91%E9%80%89%E6%8B%A9"
      }
    ]
  },
  {
    "term": "Moral hazard",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "Moral hazard refers to behavior after a transaction contract is signed in which the better-informed party, in order to maximize its own gain, harms the other party while bearing none of the consequences; it is a situation in which one side of the market cannot observe the other side's actions, also called the hidden action problem.",
    "source": "/western/市场失灵和微观经济政策",
    "cite": [
      {
        "label": "维基百科 · 道德风险",
        "url": "https://zh.wikipedia.org/wiki/%E9%81%93%E5%BE%B7%E9%A3%8E%E9%99%A9"
      }
    ]
  },
  {
    "term": "Long-run average cost curve",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "The long-run average cost curve (<span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>L</mi><mi>A</mi><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">LAC</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:0.6833em;\"></span><span class=\"mord mathnormal\">L</span><span class=\"mord mathnormal\">A</span><span class=\"mord mathnormal\" style=\"margin-right:0.0715em;\">C</span></span></span></span>) is the curve used to describe the relationship between long-run average cost and output.",
    "source": "/western/生产和成本论",
    "cite": [
      {
        "label": "维基百科 · 成本曲线",
        "url": "https://zh.wikipedia.org/wiki/%E6%88%90%E6%9C%AC%E6%9B%B2%E7%BA%BF"
      }
    ]
  },
  {
    "term": "Ceiling price",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "The ceiling price is the maximum price the government sets for certain daily necessities in order to prevent their prices from rising.",
    "source": "/western/需求与供给",
    "cite": [
      {
        "label": "Wikipedia · Price ceiling",
        "url": "https://en.wikipedia.org/wiki/Price_ceiling"
      },
      {
        "label": "维基百科 · 价格上限",
        "url": "https://zh.wikipedia.org/wiki/%E4%BB%B7%E6%A0%BC%E4%B8%8A%E9%99%90"
      }
    ]
  },
  {
    "term": "Demand",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "Consumers' demand for a good is the quantity of the good they are willing and able to buy at each possible price within a specific period.",
    "source": "/western/需求与供给",
    "cite": [
      {
        "label": "维基百科 · 需求",
        "url": "https://zh.wikipedia.org/wiki/%E9%9C%80%E6%B1%82"
      },
      {
        "label": "维基百科 · 需求",
        "url": "https://zh.wikipedia.org/wiki/%E9%9C%80%E6%B1%82"
      }
    ]
  },
  {
    "term": "Demand-pull inflation",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "Demand-pull inflation is a sustained and significant rise in the general price level caused by an increase in aggregate demand.",
    "source": "/western/通货膨胀理论",
    "cite": [
      {
        "label": "Wikipedia · Demand-pull inflation",
        "url": "https://en.wikipedia.org/wiki/Demand-pull_inflation"
      }
    ]
  },
  {
    "term": "Cross-price elasticity of demand",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "The cross-price elasticity of demand is, within a specific period, the ratio of the percentage change in the quantity demanded of one good or service to the percentage change in the price of another related good or service.",
    "source": "/western/需求与供给",
    "cite": [
      {
        "label": "维基百科 · 需求的交叉弹性",
        "url": "https://zh.wikipedia.org/wiki/%E9%9C%80%E6%B1%82%E7%9A%84%E4%BA%A4%E5%8F%89%E5%BC%B9%E6%80%A7"
      }
    ]
  },
  {
    "term": "Price elasticity of demand",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "The price elasticity of demand reflects the sensitivity of the quantity demanded to a change in price; it is measured by the elasticity coefficient, defined as the percentage change in quantity demanded divided by the percentage change in price.",
    "source": "/western/需求与供给",
    "cite": [
      {
        "label": "维基百科 · 需求的价格弹性",
        "url": "https://zh.wikipedia.org/wiki/%E9%9C%80%E6%B1%82%E7%9A%84%E4%BB%B7%E6%A0%BC%E5%BC%B9%E6%80%A7"
      }
    ]
  },
  {
    "term": "Income elasticity of demand",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "The income elasticity of demand is the sensitivity of the quantity demanded to a change in consumer income; its elasticity coefficient is defined as the percentage change in quantity demanded divided by the percentage change in income.",
    "source": "/western/需求与供给",
    "cite": [
      {
        "label": "维基百科 · 需求的收入弹性",
        "url": "https://zh.wikipedia.org/wiki/%E9%9C%80%E6%B1%82%E7%9A%84%E6%94%B6%E5%85%A5%E5%BC%B9%E6%80%A7"
      }
    ]
  },
  {
    "term": "Law of demand",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "The law of demand, also called the demand theorem, demand law, or demand principle, states that consumers' quantity demanded changes in the opposite direction to the price of the good.",
    "source": "/western/需求与供给",
    "cite": [
      {
        "label": "维基百科 · 需求规律",
        "url": "https://zh.wikipedia.org/wiki/%E9%9C%80%E6%B1%82%E8%A7%84%E5%BE%8B"
      }
    ]
  },
  {
    "term": "Budget constraint line",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "The budget constraint line, also called the budget line, consumption possibility line, or price line, represents the various combinations of two goods that a consumer's entire income can buy when the consumer's income and the prices of the goods are given.",
    "source": "/western/效用论",
    "cite": [
      {
        "label": "Wikipedia · Budget constraint",
        "url": "https://en.wikipedia.org/wiki/Budget_constraint"
      },
      {
        "label": "维基百科 · 预算约束",
        "url": "https://zh.wikipedia.org/wiki/%E9%A2%84%E7%AE%97%E7%BA%A6%E6%9D%9F"
      }
    ]
  },
  {
    "term": "Income-consumption curve",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "The income-consumption curve is the locus of the consumer's utility-maximizing equilibrium points as the consumer's income changes, with the consumer's preferences and the prices of the goods unchanged. It reflects how changes in income alter the quantities consumed.",
    "source": "/western/效用论",
    "cite": [
      {
        "label": "Wikipedia · Income–consumption curve",
        "url": "https://en.wikipedia.org/wiki/Income%E2%80%93consumption_curve"
      }
    ]
  },
  {
    "term": "Cardinal utility theory",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "Cardinal utility theory holds that utility can be measured and aggregated with cardinal numbers (1, 2, 3…), and that consumers make choices by comparing the utilities of different bundles of goods.",
    "source": "/western/效用论",
    "cite": [
      {
        "label": "Wikipedia · Cardinal utility",
        "url": "https://en.wikipedia.org/wiki/Cardinal_utility"
      },
      {
        "label": "维基百科 · 基数效用",
        "url": "https://zh.wikipedia.org/wiki/%E5%9F%BA%E6%95%B0%E6%95%88%E7%94%A8"
      }
    ]
  },
  {
    "term": "Government purchase multiplier",
    "course": "西方经济学",
    "courseEn": "Western Economics",
    "def": "The government purchase multiplier is the ratio of the change in national income caused by a change in government purchases to the change in government purchases.",
    "source": "/western/简单国民收入决定理论",
    "cite": [
      {
        "label": "Wikipedia · Spending multiplier",
        "url": "https://en.wikipedia.org/wiki/Spending_multiplier"
      }
    ]
  },
  {
    "term": "Tinbergen's rule",
    "course": "货币银行学",
    "courseEn": "Money and Banking",
    "def": "Tinbergen's rule is the principle for allocating policy targets and policy instruments proposed by the Dutch economist Jan Tinbergen, one of the joint winners of the first Nobel Memorial Prize in Economic Sciences in 1969.",
    "source": "/monetary/内外均衡理论",
    "cite": []
  },
  {
    "term": "Swaps",
    "course": "货币银行学",
    "courseEn": "Money and Banking",
    "def": "A swap is a transaction in which the two parties reach an agreement and, within a definite term, exchange each other's currency types, interest-rate bases of borrowing and other assets.",
    "source": "/monetary/金融市场",
    "cite": [
      {
        "label": "维基百科 · 互换",
        "url": "https://zh.wikipedia.org/wiki/%E4%BA%92%E6%8D%A2"
      }
    ]
  },
  {
    "term": "Universal commercial banks",
    "course": "货币银行学",
    "courseEn": "Money and Banking",
    "def": "Universal commercial banks are commercial banks permitted to carry on every kind of financial business, including deposits and loans of all maturities and types, the buying and selling of securities, trusts, payment and clearing, and other financial services.",
    "source": "/monetary/金融中介体系",
    "cite": []
  },
  {
    "term": "Internal and external balance",
    "course": "货币银行学",
    "courseEn": "Money and Banking",
    "def": "Internal and external balance refers to the economy's internal and external balance respectively.",
    "source": "/monetary/内外均衡理论",
    "cite": []
  },
  {
    "term": "Interest rate and yield",
    "course": "货币银行学",
    "courseEn": "Money and Banking",
    "def": "The interest rate, short for the rate of interest, is the ratio of the amount of interest to the amount of capital lent over a given period; the yield is the interest paid to the security holder plus the rate of price change expressed as a percentage of the purchase price — the interest rate cannot accurately measure the return an investor obtains from holding a security over a period, whereas the yield can.",
    "source": "/monetary/利率理论",
    "cite": []
  },
  {
    "term": "Nominal and real interest rates",
    "course": "货币银行学",
    "courseEn": "Money and Banking",
    "def": "The nominal interest rate is the rate expressed in nominal money — the rate of interest written into loan contracts and securities, that is, the rate observable in the financial market; the real interest rate is the rate left after the nominal rate has been stripped of changes in prices (changes in the value of money), and is the true cost to the debtor of using the funds.",
    "source": "/monetary/利率理论",
    "cite": []
  },
  {
    "term": "International monetary system",
    "course": "货币银行学",
    "courseEn": "Money and Banking",
    "def": "The international monetary system refers to the monetary arrangements among nations.",
    "source": "/monetary/国际货币体系",
    "cite": [
      {
        "label": "维基百科 · 国际货币体系",
        "url": "https://zh.wikipedia.org/wiki/%E5%9B%BD%E9%99%85%E8%B4%A7%E5%B8%81%E4%BD%93%E7%B3%BB"
      }
    ]
  },
  {
    "term": "Benchmark interest rate",
    "course": "货币银行学",
    "courseEn": "Money and Banking",
    "def": "The benchmark interest rate is the rate that leads and influences the other rates, also called the &quot;central rate&quot;.",
    "source": "/monetary/利率理论",
    "cite": [
      {
        "label": "维基百科 · 基准利率",
        "url": "https://zh.wikipedia.org/wiki/%E5%9F%BA%E5%87%86%E5%88%A9%E7%8E%87"
      }
    ]
  },
  {
    "term": "Base money",
    "course": "货币银行学",
    "courseEn": "Money and Banking",
    "def": "Base money, also called &quot;high-powered money&quot; or &quot;strong money&quot;, is the sum of the cash currency issued by the central bank and the reserve deposits that commercial banks hold at the central bank.",
    "source": "/monetary/货币供求理论",
    "cite": []
  },
  {
    "term": "Deposit insurance system",
    "course": "货币银行学",
    "courseEn": "Money and Banking",
    "def": "The deposit insurance system is an institutional arrangement that protects depositors' interests and stabilizes the financial system.",
    "source": "/monetary/金融中介体系",
    "cite": [
      {
        "label": "维基百科 · 存款保险制度",
        "url": "https://zh.wikipedia.org/wiki/%E5%AD%98%E6%AC%BE%E4%BF%9D%E9%99%A9%E5%88%B6%E5%BA%A6"
      }
    ]
  },
  {
    "term": "Consumer price index",
    "course": "货币银行学",
    "courseEn": "Money and Banking",
    "def": "The consumer price index is a price index that comprehensively reflects the trend and the degree of change in the prices of the consumer goods and services entering residents' lives over a given period.",
    "source": "/monetary/通货膨胀与通货紧缩",
    "cite": []
  },
  {
    "term": "Bretton Woods system",
    "course": "货币银行学",
    "courseEn": "Money and Banking",
    "def": "The Bretton Woods system refers to the international monetary system after the Second World War whose basic feature was the fixed exchange rate regime.",
    "source": "/monetary/国际货币体系",
    "cite": [
      {
        "label": "维基百科 · 布雷顿森林体系",
        "url": "https://zh.wikipedia.org/wiki/%E5%B8%83%E9%9B%B7%E9%A1%BF%E6%A3%AE%E6%9E%97%E4%BD%93%E7%B3%BB"
      }
    ]
  },
  {
    "term": "Forced saving effect",
    "course": "货币银行学",
    "courseEn": "Money and Banking",
    "def": "If the government raises construction funds by borrowing from the central bank and thereby brings about an increase in the money supply, it forcibly increases investment demand across society as a whole, and the result is a rise in prices. With the public's nominal income unchanged, the real amounts of both consumption and saving carried on in the original pattern and quantities fall as prices rise, and the portion lost broadly corresponds to the revenue the government obtains through inflation; the government saving thus realized is forced saving.",
    "source": "/monetary/通货膨胀与通货紧缩",
    "cite": []
  },
  {
    "term": "Expenditure-changing policies",
    "course": "货币银行学",
    "courseEn": "Money and Banking",
    "def": "Expenditure-changing policies are macroeconomic policies that regulate a country's aggregate supply and demand in order to reach the goal of internal balance, by influencing domestic income and total domestic expenditure, or by controlling the money supply and contracting or expanding total domestic investment and consumption demand.",
    "source": "/monetary/内外均衡理论",
    "cite": []
  },
  {
    "term": "Expenditure-switching policies",
    "course": "货币银行学",
    "courseEn": "Money and Banking",
    "def": "Expenditure-switching policies are policies that can affect the international competitiveness of traded goods and raise domestic income relative to expenditure by changing the composition of expenditure.",
    "source": "/monetary/内外均衡理论",
    "cite": []
  },
  {
    "term": "Income distribution effect",
    "course": "货币银行学",
    "courseEn": "Money and Banking",
    "def": "Because the income sources of the various strata of society differ greatly, when the general price level rises the real income of some people falls, while the real income of others is actually raised.",
    "source": "/monetary/通货膨胀与通货紧缩",
    "cite": []
  },
  {
    "term": "Capitalization of income",
    "course": "货币银行学",
    "courseEn": "Money and Banking",
    "def": "The capitalization of income refers to the fact that, since interest has become the general form taken by income, anything that yields an income — even if it is not a sum of money lent out, and even if no real, tangible capital actually exists — can have the capital sum to which it is equivalent computed backwards, by comparing the income with the interest rate.",
    "source": "/monetary/利率理论",
    "cite": []
  },
  {
    "term": "Lender of last resort",
    "course": "货币银行学",
    "courseEn": "Money and Banking",
    "def": "The lender of last resort is the accommodation duty the central bank ought to perform in a moment of crisis: it should satisfy the demand for high-powered money so as to prevent the contraction of the money stock brought on by panic.",
    "source": "/monetary/金融中介体系",
    "cite": [
      {
        "label": "维基百科 · 最终贷款人",
        "url": "https://zh.wikipedia.org/wiki/%E6%9C%80%E7%BB%88%E8%B4%B7%E6%AC%BE%E4%BA%BA"
      }
    ]
  },
  {
    "term": "Options",
    "course": "货币银行学",
    "courseEn": "Money and Banking",
    "def": "An option contract gives its holder (the buyer of the option) a right — but not an obligation — to buy from the seller of the option contract (a call option), or to sell to that seller (a put option), a definite quantity of an asset at an agreed price within an agreed future period.",
    "source": "/monetary/金融市场",
    "cite": [
      {
        "label": "维基百科 · 期权",
        "url": "https://zh.wikipedia.org/wiki/%E6%9C%9F%E6%9D%83"
      }
    ]
  },
  {
    "term": "Futures",
    "course": "货币银行学",
    "courseEn": "Money and Banking",
    "def": "A futures contract is a standardized purchase-and-sale contract developed on the basis of the forward contract.",
    "source": "/monetary/金融市场",
    "cite": [
      {
        "label": "维基百科 · 期货",
        "url": "https://zh.wikipedia.org/wiki/%E6%9C%9F%E8%B4%A7"
      }
    ]
  },
  {
    "term": "Exchange rate regime",
    "course": "货币银行学",
    "courseEn": "Money and Banking",
    "def": "An exchange rate regime is the systematic set of principles, bases, methods and institutions laid down by a country, an economy or an economic region, or by the international community, for determining, maintaining, adjusting and managing exchange rates.",
    "source": "/monetary/汇率理论",
    "cite": [
      {
        "label": "维基百科 · 汇率制度",
        "url": "https://zh.wikipedia.org/wiki/%E6%B1%87%E7%8E%87%E5%88%B6%E5%BA%A6"
      }
    ]
  },
  {
    "term": "Taylor rule",
    "course": "货币银行学",
    "courseEn": "Money and Banking",
    "def": "The Taylor rule is an operating method that adjusts the interest rate according to the relative changes in output and inflation.",
    "source": "/monetary/货币政策",
    "cite": []
  },
  {
    "term": "Liquidity preference",
    "course": "货币银行学",
    "courseEn": "Money and Banking",
    "def": "Individuals dispose of their income in two forms, consumption and saving; whether the saved portion is held in the form of cash money or in the form of securities depends on the degree of people's preference for the liquidity of financial assets — their liquidity preference. Keynes held it to be the main psychological factor affecting the demand for money.",
    "source": "/monetary/货币供求理论",
    "cite": [
      {
        "label": "维基百科 · 流动性偏好",
        "url": "https://zh.wikipedia.org/wiki/%E6%B5%81%E5%8A%A8%E6%80%A7%E5%81%8F%E5%A5%BD"
      }
    ]
  },
  {
    "term": "Stagflation",
    "course": "货币银行学",
    "courseEn": "Money and Banking",
    "def": "Stagflation means that what the economic process exhibits is not a mutual &quot;trade-off&quot; between unemployment and inflation, but economic stagnation accompanied by inflation — a high inflation rate side by side with a high unemployment rate.",
    "source": "/monetary/通货膨胀与通货紧缩",
    "cite": [
      {
        "label": "维基百科 · 滞胀",
        "url": "https://zh.wikipedia.org/wiki/%E6%BB%9E%E8%83%80"
      }
    ]
  },
  {
    "term": "Triffin dilemma",
    "course": "货币银行学",
    "courseEn": "Money and Banking",
    "def": "The Triffin dilemma refers, under the Bretton Woods system, to the contradiction between the two responsibilities the dollar bore: guaranteeing the convertibility of the dollar into gold at the official price and maintaining other countries' confidence in the dollar, on the one hand, and providing sufficient international liquidity (that is, dollars), on the other.",
    "source": "/monetary/国际货币体系",
    "cite": [
      {
        "label": "维基百科 · 特里芬难题",
        "url": "https://zh.wikipedia.org/wiki/%E7%89%B9%E9%87%8C%E8%8A%AC%E9%9A%BE%E9%A2%98"
      }
    ]
  },
  {
    "term": "Short-term and long-term interest rates",
    "course": "货币银行学",
    "courseEn": "Money and Banking",
    "def": "The kinds of interest rate in the financial market are classified by maturity into short-term and long-term rates. Short-term rates reflect the various lending rates of the money market, and long-term rates those of the capital market; short-term rates are generally lower than long-term rates, but the range of their fluctuations is often wider than that of long-term rates.",
    "source": "/monetary/利率理论",
    "cite": []
  },
  {
    "term": "Meade's conflict",
    "course": "货币银行学",
    "courseEn": "Money and Banking",
    "def": "Meade's conflict refers to the fact that in certain circumstances the use of expenditure-changing policies alone — monetary and fiscal policy — in pursuit of internal and external balance will produce a conflict between a country's internal balance and its external balance.",
    "source": "/monetary/内外均衡理论",
    "cite": []
  },
  {
    "term": "Phillips curve",
    "course": "货币银行学",
    "courseEn": "Money and Banking",
    "def": "The Phillips curve was first proposed by the British economist A.W. Phillips; his original study described the negative correlation between the unemployment rate and the growth rate of money wages, and only later did it come to be commonly extended to the short-run trade-off between the inflation rate and the unemployment rate.",
    "source": "/monetary/通货膨胀与通货紧缩",
    "cite": [
      {
        "label": "维基百科 · 菲利普斯曲线",
        "url": "https://zh.wikipedia.org/wiki/%E8%8F%B2%E5%88%A9%E6%99%AE%E6%96%AF%E6%9B%B2%E7%BA%BF"
      }
    ]
  },
  {
    "term": "Off-balance-sheet business",
    "course": "货币银行学",
    "courseEn": "Money and Banking",
    "def": "Off-balance-sheet business refers to any business that is not entered in a bank's balance sheet and does not affect the totals of its assets and liabilities.",
    "source": "/monetary/金融中介体系",
    "cite": [
      {
        "label": "维基百科 · 表外业务",
        "url": "https://zh.wikipedia.org/wiki/%E8%A1%A8%E5%A4%96%E4%B8%9A%E5%8A%A1"
      }
    ]
  },
  {
    "term": "Currency board system",
    "course": "货币银行学",
    "courseEn": "Money and Banking",
    "def": "The currency board system is a legally explicit commitment that the currency of the country or region will be exchanged for a particular foreign currency at a fixed rate, combined with a restriction on official money issuance so as to ensure the statutory obligation is honoured — Argentina and China's Hong Kong Special Administrative Region are examples.",
    "source": "/monetary/汇率理论",
    "cite": [
      {
        "label": "维基百科 · 货币局制度",
        "url": "https://zh.wikipedia.org/wiki/%E8%B4%A7%E5%B8%81%E5%B1%80%E5%88%B6%E5%BA%A6"
      }
    ]
  },
  {
    "term": "Monetary tiers",
    "course": "货币银行学",
    "courseEn": "Money and Banking",
    "def": "Monetary tiers are the divisions of money that the central banks of various countries draw up, taking the liquidity of financial assets as their standard when fixing the statistical caliber of the money supply, and dividing money according to the characteristics and needs of their own policy purposes.",
    "source": "/monetary/货币供求理论",
    "cite": []
  },
  {
    "term": "Money market",
    "course": "货币银行学",
    "courseEn": "Money and Banking",
    "def": "The money market is the market for short-term financing within and up to one year, comprising such sub-markets as the interbank lending market, the interbank bond market, the market for large-denomination negotiable certificates of deposit, the commercial paper market and the treasury bill market.",
    "source": "/monetary/金融市场",
    "cite": [
      {
        "label": "维基百科 · 货币市场",
        "url": "https://zh.wikipedia.org/wiki/%E8%B4%A7%E5%B8%81%E5%B8%82%E5%9C%BA"
      },
      {
        "label": "维基百科 · 货币市场",
        "url": "https://zh.wikipedia.org/wiki/%E8%B4%A7%E5%B8%81%E5%B8%82%E5%9C%BA"
      }
    ]
  },
  {
    "term": "Time lag of monetary policy",
    "course": "货币银行学",
    "courseEn": "Money and Banking",
    "def": "The time lag of monetary policy is the time the policy takes from its adoption to the attainment of its principal or its full effect.",
    "source": "/monetary/货币政策",
    "cite": []
  },
  {
    "term": "Purchasing power parity",
    "course": "货币银行学",
    "courseEn": "Money and Banking",
    "def": "Purchasing power parity was put forward by the Swedish economist Cassel at the beginning of the twentieth century to explain the basis of long-run exchange rate determination.",
    "source": "/monetary/汇率理论",
    "cite": [
      {
        "label": "维基百科 · 购买力平价",
        "url": "https://zh.wikipedia.org/wiki/%E8%B4%AD%E4%B9%B0%E5%8A%9B%E5%B9%B3%E4%BB%B7"
      },
      {
        "label": "维基百科 · 购买力平价",
        "url": "https://zh.wikipedia.org/wiki/%E8%B4%AD%E4%B9%B0%E5%8A%9B%E5%B9%B3%E4%BB%B7"
      }
    ]
  },
  {
    "term": "Portfolio adjustment effect",
    "course": "货币银行学",
    "courseEn": "Money and Banking",
    "def": "The portfolio adjustment effect, also called the wealth distribution effect, refers to the phenomenon in which the rise of prices causes the various components of household wealth to rise and fall in value.",
    "source": "/monetary/通货膨胀与通货紧缩",
    "cite": []
  },
  {
    "term": "Asset securitization",
    "course": "货币银行学",
    "courseEn": "Money and Banking",
    "def": "Asset securitization is a form of financing in which existing credit assets are pooled together and re-divided into securities that are then resold to investors in the market, so that the assets disappear from the original holder's balance sheet.",
    "source": "/monetary/金融中介体系",
    "cite": [
      {
        "label": "维基百科 · 资产证券化",
        "url": "https://zh.wikipedia.org/wiki/%E8%B5%84%E4%BA%A7%E8%AF%81%E5%88%B8%E5%8C%96"
      }
    ]
  },
  {
    "term": "Capital market",
    "course": "货币银行学",
    "courseEn": "Money and Banking",
    "def": "The capital market generally refers to the market in instruments with maturities of more than one year, consisting mainly of the stock market and the bond market, which meet the medium- and long-term investment needs of industrial and commercial enterprises and the needs of government fiscal deficits.",
    "source": "/monetary/金融市场",
    "cite": [
      {
        "label": "维基百科 · 资本市场",
        "url": "https://zh.wikipedia.org/wiki/%E8%B5%84%E6%9C%AC%E5%B8%82%E5%9C%BA"
      }
    ]
  },
  {
    "term": "Forwards",
    "course": "货币银行学",
    "courseEn": "Money and Banking",
    "def": "A forward is an agreement to buy or sell a definite quantity of a given asset at a definite price at a definite future time.",
    "source": "/monetary/金融市场",
    "cite": []
  },
  {
    "term": "Inflation",
    "course": "货币银行学",
    "courseEn": "Money and Banking",
    "def": "In Western economics textbooks, inflation is usually defined as the phenomenon of a sustained rise in the general level of the money prices of goods and services.",
    "source": "/monetary/通货膨胀与通货紧缩",
    "cite": [
      {
        "label": "维基百科 · 通货膨胀",
        "url": "https://zh.wikipedia.org/wiki/%E9%80%9A%E8%B4%A7%E8%86%A8%E8%83%80"
      }
    ]
  },
  {
    "term": "Inflation targeting",
    "course": "货币银行学",
    "courseEn": "Money and Banking",
    "def": "Inflation targeting is a framework for monetary policy decision-making — a monetary policy regime in which the central bank takes inflation directly as its target and announces that target publicly.",
    "source": "/monetary/货币政策",
    "cite": []
  },
  {
    "term": "Financial instruments",
    "course": "货币银行学",
    "courseEn": "Money and Banking",
    "def": "Financial instruments, also called financial assets, are written documents able to evidence the amount, the term and the price of a financial transaction, and they are legally binding on the rights and obligations of both parties, the creditor and the debtor.",
    "source": "/monetary/金融市场",
    "cite": [
      {
        "label": "维基百科 · 金融工具",
        "url": "https://zh.wikipedia.org/wiki/%E9%87%91%E8%9E%8D%E5%B7%A5%E5%85%B7"
      }
    ]
  },
  {
    "term": "Costs of financial regulation",
    "course": "货币银行学",
    "courseEn": "Money and Banking",
    "def": "The costs of financial regulation fall roughly into two parts, explicit costs and implicit costs.",
    "source": "/monetary/金融监管体系",
    "cite": []
  },
  {
    "term": "Year on year",
    "course": "货币银行学",
    "courseEn": "Money and Banking",
    "def": "The year-on-year reading compares a figure with the same month of the previous year; it is used to see trends and to strip out seasonal factors, and CPI bulletins usually publish the year-on-year and month-on-month readings together.",
    "source": "/monetary/通货膨胀与通货紧缩",
    "cite": [
      {
        "label": "维基百科 · 同比",
        "url": "https://zh.wikipedia.org/wiki/%E5%90%8C%E6%AF%94"
      }
    ]
  },
  {
    "term": "Month on month",
    "course": "货币银行学",
    "courseEn": "Money and Banking",
    "def": "The month-on-month reading compares a figure with the previous month; it is used to see short-term fluctuations and is sensitive to seasonal factors.",
    "source": "/monetary/通货膨胀与通货紧缩",
    "cite": [
      {
        "label": "维基百科 · 环比",
        "url": "https://zh.wikipedia.org/wiki/%E7%8E%AF%E6%AF%94"
      }
    ]
  },
  {
    "term": "Base period",
    "course": "货币银行学",
    "courseEn": "Money and Banking",
    "def": "The base period is the period taken as the benchmark of comparison; in the purchasing power parity formula the subscript 0 of r₀ and P₀ denotes the base period, and both the exchange rate and the price indexes take their base-period values in the comparison.",
    "source": "/monetary/汇率理论",
    "cite": [
      {
        "label": "维基百科 · 基期",
        "url": "https://zh.wikipedia.org/wiki/%E5%9F%BA%E6%9C%9F"
      },
      {
        "label": "维基百科 · 基期",
        "url": "https://zh.wikipedia.org/wiki/%E5%9F%BA%E6%9C%9F"
      }
    ]
  },
  {
    "term": "\"Two separate lines\" revenue and expenditure management",
    "course": "财政学",
    "courseEn": "Public Finance",
    "def": "The &quot;two separate lines&quot; system is a management arrangement under which state organs, public institutions, social organizations and other organizations pay the government non-tax revenue they lawfully obtain under relevant state regulations in full into the treasury or a special fiscal account, while expenditures are coordinated through budgets compiled by the finance departments and funds are collected and disbursed through the treasury or the special fiscal accounts.",
    "source": "/finance/国家预算与预算管理体制",
    "cite": []
  },
  {
    "term": "Price-inclusive and price-exclusive taxes",
    "course": "财政学",
    "courseEn": "Public Finance",
    "def": "Judged by the relationship between taxation and price, taxes fall into price-inclusive and price-exclusive categories. A price-inclusive tax is one whose tax amount is contained in the commodity price, so the purchaser pays the tax due when buying the commodity; a price-exclusive tax is levied on the purchaser in addition to the commodity price: the price contains no tax, and the purchaser must pay tax separately, on the basis of the price paid, beyond the purchase payment itself.",
    "source": "/finance/税收原理",
    "cite": []
  },
  {
    "term": "Free riding",
    "course": "财政学",
    "courseEn": "Public Finance",
    "def": "Free riding is the act of consuming or using a public good without bearing any of its cost; people who behave this way, or who have the motive of enjoying the benefits of a public good while letting others pay for it, are called free riders.",
    "source": "/finance/财政职能",
    "cite": []
  },
  {
    "term": "Public pricing",
    "course": "财政学",
    "courseEn": "Public Finance",
    "def": "Public pricing refers to the government's pricing of the goods and services produced by public enterprises, or the government's regulation of prices set by the private sector.",
    "source": "/finance/财政支出规模与结构",
    "cite": []
  },
  {
    "term": "Schedular income tax",
    "course": "财政学",
    "courseEn": "Public Finance",
    "def": "A schedular income tax levies income tax separately by dividing a taxpayer's various taxable incomes into several categories, with the incomes of different categories (or sources) subject to different tax rates.",
    "source": "/finance/税收制度",
    "cite": []
  },
  {
    "term": "Primary market for government bonds",
    "course": "财政学",
    "courseEn": "Public Finance",
    "def": "The government bond issuance market is the venue where government bonds are issued, also called the primary or initial market for government bonds; it is the initial link of government bond trading, that is, the market in which government bonds are first issued.",
    "source": "/finance/国债理论与管理",
    "cite": []
  },
  {
    "term": "Secondary market for government bonds",
    "course": "财政学",
    "courseEn": "Public Finance",
    "def": "The government bond circulation market, also known as the secondary market for government bonds, is the second stage of government bond trading, that is, the market in which listed government bonds are bought, sold, transferred and circulated.",
    "source": "/finance/国债理论与管理",
    "cite": []
  },
  {
    "term": "Limit of government debt",
    "course": "财政学",
    "courseEn": "Public Finance",
    "def": "The limit of government debt refers to the maximum scale of the national debt, or the appropriate scale of government bonds.",
    "source": "/finance/国债理论与管理",
    "cite": []
  },
  {
    "term": "State budget",
    "course": "财政学",
    "courseEn": "Public Finance",
    "def": "The state budget is the government's basic plan for fiscal revenue and expenditure.",
    "source": "/finance/国家预算与预算管理体制",
    "cite": [
      {
        "label": "维基百科 · 国家预算调节基金",
        "url": "https://zh.wikipedia.org/wiki/%E5%9B%BD%E5%AE%B6%E9%A2%84%E7%AE%97%E8%B0%83%E8%8A%82%E5%9F%BA%E9%87%91"
      }
    ]
  },
  {
    "term": "State budget law",
    "course": "财政学",
    "courseEn": "Public Finance",
    "def": "The state budget law is the body of legal norms governing state budget management and the legal basis for organizing and administering the state budget.",
    "source": "/finance/国家预算与预算管理体制",
    "cite": []
  },
  {
    "term": "Rent-seeking",
    "course": "财政学",
    "courseEn": "Public Finance",
    "def": "Rent-seeking is the act of obtaining some monopoly or franchise through lobbying the government in order to earn abnormal profits or rents.",
    "source": "/finance/财政职能",
    "cite": []
  },
  {
    "term": "Employment creation criterion",
    "course": "财政学",
    "courseEn": "Public Finance",
    "def": "The employment creation criterion holds that the government should choose the projects that mobilize the largest number of workers per unit of investment.",
    "source": "/finance/财政投资支出和社会保障支出",
    "cite": []
  },
  {
    "term": "Build–operate–transfer (BOT) investment mode",
    "course": "财政学",
    "courseEn": "Public Finance",
    "def": "Under the build–operate–transfer (BOT) investment mode, the government transfers proposed infrastructure construction projects through investment promotion to a consortium or company, which sets up an operating company to build and run them; within an agreed period the project company repays its debts and recovers its investment by operating the project, and when the agreement expires the project's property rights are transferred to the government.",
    "source": "/finance/财政投资支出和社会保障支出",
    "cite": []
  },
  {
    "term": "Cost–benefit analysis",
    "course": "财政学",
    "courseEn": "Public Finance",
    "def": "Cost–benefit analysis is an analytical method that, for the construction goals set by the government, proposes several plans for achieving them, lists in detail all the expected costs and all the expected benefits of each plan, and selects the optimal government investment project through analysis and comparison.",
    "source": "/finance/财政支出规模与结构",
    "cite": []
  },
  {
    "term": "Voting rules",
    "course": "财政学",
    "courseEn": "Public Finance",
    "def": "Voting rules are the procedural rules of public choice under which decisions are made by voting.",
    "source": "/finance/财政职能",
    "cite": []
  },
  {
    "term": "Laffer curve",
    "course": "财政学",
    "courseEn": "Public Finance",
    "def": "The Laffer curve is the curve that reflects the relationship between tax rates and total tax revenue.",
    "source": "/finance/税收原理",
    "cite": [
      {
        "label": "维基百科 · 拉弗曲线",
        "url": "https://zh.wikipedia.org/wiki/%E6%8B%89%E5%BC%97%E6%9B%B2%E7%BA%BF"
      }
    ]
  },
  {
    "term": "Government failure",
    "course": "财政学",
    "courseEn": "Public Finance",
    "def": "Government failure means that government activities or intervention measures lack efficiency — in other words, that the government makes decisions that reduce economic efficiency, or fails to implement policies that would improve it.",
    "source": "/finance/财政职能",
    "cite": [
      {
        "label": "维基百科 · 政府失灵",
        "url": "https://zh.wikipedia.org/wiki/%E6%94%BF%E5%BA%9C%E5%A4%B1%E7%81%B5"
      }
    ]
  },
  {
    "term": "Government procurement system",
    "course": "财政学",
    "courseEn": "Public Finance",
    "def": "The government procurement system is a control system under which the central government, local governments and other entities prescribed by law procure goods, works or services from society in statutory ways, with the procurement process supervised and managed.",
    "source": "/finance/财政支出规模与结构",
    "cite": []
  },
  {
    "term": "Minimum-cost selection method",
    "course": "财政学",
    "courseEn": "Public Finance",
    "def": "The minimum-cost selection method generally does not measure the social benefits of alternative fiscal expenditure items in monetary units; it calculates only the tangible costs of each alternative and takes the lowest cost as the criterion of choice.",
    "source": "/finance/财政支出规模与结构",
    "cite": []
  },
  {
    "term": "Social security",
    "course": "财政学",
    "courseEn": "Public Finance",
    "def": "Social security refers to programs through which the government raises funds by means of earmarked taxes to provide basic living guarantees for the elderly, people unable to work, people who have lost their jobs, the sick, and others.",
    "source": "/finance/财政投资支出和社会保障支出",
    "cite": [
      {
        "label": "维基百科 · 社会保障",
        "url": "https://zh.wikipedia.org/wiki/%E7%A4%BE%E4%BC%9A%E4%BF%9D%E9%9A%9C"
      }
    ]
  },
  {
    "term": "Tax reform",
    "course": "财政学",
    "courseEn": "Public Finance",
    "def": "Tax reform is the process of improving social welfare through marginal changes in tax design and tax structure.",
    "source": "/finance/税收制度",
    "cite": [
      {
        "label": "维基百科 · 1994年分税制改革",
        "url": "https://zh.wikipedia.org/wiki/1994%E5%B9%B4%E5%88%86%E7%A8%8E%E5%88%B6%E6%94%B9%E9%9D%A9"
      }
    ]
  },
  {
    "term": "Types of tax system",
    "course": "财政学",
    "courseEn": "Public Finance",
    "def": "Tax system types are the forms of tax system obtained by classifying tax systems according to a given criterion. Judged by overall design, they divide into the single tax system and the composite tax system: a system that levies only one tax within a tax jurisdiction is a single tax system, and one that levies two or more taxes simultaneously is a composite tax system.",
    "source": "/finance/税收制度",
    "cite": []
  },
  {
    "term": "Tax structure and tax pattern",
    "course": "财政学",
    "courseEn": "Public Finance",
    "def": "Tax structure denotes the overall layout and general configuration of a country's tax system — the integral system composed, under a specific tax system in light of prevailing economic conditions and development requirements, of tax categories, tax types, tax system elements and levels of collection and administration, ranked in importance and mutually coordinated and complementary; the tax pattern denotes which category of tax serves as the principal tax in a country's tax structure, and the principal tax determines the overall function of the tax system.",
    "source": "/finance/税收制度",
    "cite": []
  },
  {
    "term": "Tax neutrality",
    "course": "财政学",
    "courseEn": "Public Finance",
    "def": "Tax neutrality means that government levies do not distort the operation of the market mechanism — in other words, they leave the private sector's original allocation of resources unchanged.",
    "source": "/finance/税收原理",
    "cite": []
  },
  {
    "term": "Tax shifting",
    "course": "财政学",
    "courseEn": "Public Finance",
    "def": "Tax shifting is the economic phenomenon in which, in the course of commodity exchange, the taxpayer passes the tax burden on to purchasers or suppliers by raising selling prices or pressing down purchase prices.",
    "source": "/finance/税收原理",
    "cite": []
  },
  {
    "term": "Progressive tax rates",
    "course": "财政学",
    "courseEn": "Public Finance",
    "def": "Under progressive tax rates, the object of taxation is divided into several brackets by amount, each bracket carrying a corresponding rate that rises from low to high: the larger the taxable amount, the higher the rate, and the smaller the amount, the lower the rate.",
    "source": "/finance/税收原理",
    "cite": [
      {
        "label": "维基百科 · 累进税率",
        "url": "https://zh.wikipedia.org/wiki/%E7%B4%AF%E8%BF%9B%E7%A8%8E%E7%8E%87"
      }
    ]
  },
  {
    "term": "Comprehensive income tax",
    "course": "财政学",
    "courseEn": "Public Finance",
    "def": "A comprehensive income tax levies tax on the whole of a taxpayer's various taxable incomes (such as wage and salary income, interest, dividends and property income) on a combined basis.",
    "source": "/finance/税收制度",
    "cite": []
  },
  {
    "term": "Fiscal balance",
    "course": "财政学",
    "courseEn": "Public Finance",
    "def": "Fiscal balance means that the state's fiscal revenue equals its fiscal expenditure.",
    "source": "/finance/财政平衡与财政赤字",
    "cite": []
  },
  {
    "term": "Fiscal investment and financing",
    "course": "财政学",
    "courseEn": "Public Finance",
    "def": "Fiscal investment and financing raises funds through multiple channels on the basis of state credit and invests them, on a repayable basis, in fields with public characteristics.",
    "source": "/finance/财政投资支出和社会保障支出",
    "cite": []
  },
  {
    "term": "Purchasing expenditure",
    "course": "财政学",
    "courseEn": "Public Finance",
    "def": "Purchasing expenditure is government spending on the purchase of goods and services, including outlays on the goods and services needed for day-to-day government activity or for state investment; it embodies the government's market-based redistribution activity. Fiscal activities in which purchasing expenditure accounts for a large share perform the resource allocation function more strongly.",
    "source": "/finance/财政支出规模与结构",
    "cite": []
  },
  {
    "term": "Deficit dependence and deficit ratio",
    "course": "财政学",
    "courseEn": "Public Finance",
    "def": "Deficit dependence is the ratio of the fiscal deficit to fiscal expenditure, showing what proportion of a country's total spending in the current year is achieved through deficit spending; the deficit ratio is the ratio of the fiscal deficit to GDP, showing what proportion of society's resources a country mobilized through the deficit in a given year.",
    "source": "/finance/财政平衡与财政赤字",
    "cite": []
  },
  {
    "term": "Transfer expenditure",
    "course": "财政学",
    "courseEn": "Public Finance",
    "def": "Transfer expenditure is the gratuitous, one-way transfer of government funds, consisting mainly of subsidy spending, donations and debt-interest payments; it embodies the government's non-market redistribution activity. Fiscal activities in which transfer expenditure accounts for a large share perform the income distribution function more strongly.",
    "source": "/finance/财政支出规模与结构",
    "cite": []
  },
  {
    "term": "Extra-budgetary funds",
    "course": "财政学",
    "courseEn": "Public Finance",
    "def": "Extra-budgetary funds are funds that, under the provisions of the state fiscal system, are not included in the state budget and that local finance departments and the budget-funded administrative and public institutions are allowed to collect and spend on their own.",
    "source": "/finance/国家预算与预算管理体制",
    "cite": []
  },
  {
    "term": "Budget management system",
    "course": "财政学",
    "courseEn": "Public Finance",
    "def": "The budget management system is the general term for the various arrangements that handle the fiscal relations between the centre and the localities and among local governments at each level.",
    "source": "/finance/国家预算与预算管理体制",
    "cite": []
  },
  {
    "term": "Budget adjustment",
    "course": "财政学",
    "courseEn": "Public Finance",
    "def": "Budget adjustment is an important procedure of budget execution: where special circumstances during the execution of an approved budget at any level require additional spending or a reduction in revenue, so that total expenditure exceeds total revenue, or the amount of debt originally to be incurred increases, and the like, the original budget is partially altered.",
    "source": "/finance/国家预算与预算管理体制",
    "cite": []
  },
  {
    "term": "Budget deficit",
    "course": "财政学",
    "courseEn": "Public Finance",
    "def": "The budget deficit is, in a given fiscal year, the shortfall that exists in the final accounts when the total expenditure the government plans to arrange exceeds recurring revenue.",
    "source": "/finance/财政平衡与财政赤字",
    "cite": []
  },
  {
    "term": "Non-tax revenue",
    "course": "财政学",
    "courseEn": "Public Finance",
    "def": "Non-tax revenue is fiscal revenue obtained by the government in forms other than taxation, including administrative and institutional fees, government funds, and revenue from the paid use of state-owned resources.",
    "source": "/finance/财政职能",
    "cite": []
  },
  {
    "term": "Government bond structure",
    "course": "财政学",
    "courseEn": "Public Finance",
    "def": "Government bond structure is the compositional and proportional relationship among the different types of government bonds, including the maturity structure, the holder structure and the interest rate structure.",
    "source": "/finance/国债理论与管理",
    "cite": []
  },
  {
    "term": "Crowding-out effect of the fiscal deficit",
    "course": "财政学",
    "courseEn": "Public Finance",
    "def": "The crowding-out effect of the fiscal deficit refers to the fact that when the government pursues an expansionary fiscal policy by increasing spending or cutting taxes, interest rates rise and private investment is thereby crowded out.",
    "source": "/finance/财政平衡与财政赤字",
    "cite": []
  },
  {
    "term": "Inverse elasticity proposition",
    "course": "财政学",
    "courseEn": "Public Finance",
    "def": "The inverse elasticity proposition holds that under an optimal commodity tax system the tax rates levied on the various commodities should be inversely proportional to their price elasticity of demand — that is, commodities with smaller elasticity should carry higher tax rates.",
    "source": "/finance/税收原理",
    "cite": []
  },
  {
    "term": "Deficit financing",
    "course": "财政学",
    "courseEn": "Public Finance",
    "def": "Deficit financing means that the government deliberately and systematically makes use of budget deficits in order to smooth economic fluctuations; it is an expansionary fiscal policy.",
    "source": "/finance/财政平衡与财政赤字",
    "cite": []
  },
  {
    "term": "Law of one price",
    "course": "国际经济学",
    "courseEn": "International Economics",
    "def": "The law of one price is a theory about the pricing rule for internationally traded goods under free trade.",
    "source": "/international/汇率决定的一般理论",
    "cite": [
      {
        "label": "维基百科 · 一价定律",
        "url": "https://zh.wikipedia.org/wiki/%E4%B8%80%E4%BB%B7%E5%AE%9A%E5%BE%8B"
      }
    ]
  },
  {
    "term": "Dumping",
    "course": "国际经济学",
    "courseEn": "International Economics",
    "def": "Dumping is the act of an exporter selling goods on the international market at prices below the domestic market price, even below cost.",
    "source": "/international/国际贸易政策分析",
    "cite": [
      {
        "label": "维基百科 · 倾销",
        "url": "https://zh.wikipedia.org/wiki/%E5%80%BE%E9%94%80"
      }
    ]
  },
  {
    "term": "Debt service ratio",
    "course": "国际经济学",
    "courseEn": "International Economics",
    "def": "The debt service ratio is the ratio, in a given period, of a country's principal and interest payments on its borrowed external debt to the total of its various export earnings.",
    "source": "/international/要素的国际流动",
    "cite": [
      {
        "label": "Wikipedia · Debt service ratio",
        "url": "https://en.wikipedia.org/wiki/Debt_service_ratio"
      }
    ]
  },
  {
    "term": "Customs union",
    "course": "国际经济学",
    "courseEn": "International Economics",
    "def": "A customs union is a tariff area formed by two or more countries that ally to become a single tariff area: within the area they mutually abolish tariffs and non-tariff barriers and practice free trade, while imposing a common tariff and trade restrictions on non-member countries.",
    "source": "/international/经济一体化与国际经济秩序分析",
    "cite": [
      {
        "label": "维基百科 · 关税同盟",
        "url": "https://zh.wikipedia.org/wiki/%E5%85%B3%E7%A8%8E%E5%90%8C%E7%9B%9F"
      },
      {
        "label": "维基百科 · 南部非洲关税同盟",
        "url": "https://zh.wikipedia.org/wiki/%E5%8D%97%E9%83%A8%E9%9D%9E%E6%B4%B2%E5%85%B3%E7%A8%8E%E5%90%8C%E7%9B%9F"
      }
    ]
  },
  {
    "term": "Tariff barriers and non-tariff barriers",
    "course": "国际经济学",
    "courseEn": "International Economics",
    "def": "Tariff barriers are trade measures that levy tariffs on imported goods, especially high tariffs, in order to protect the domestic market and foster the development of certain domestic industries, thereby restricting the import of foreign goods.",
    "source": "/international/国际贸易政策分析",
    "cite": [
      {
        "label": "Wikipedia · Non-tariff barriers to trade",
        "url": "https://en.wikipedia.org/wiki/Non-tariff_barriers_to_trade"
      },
      {
        "label": "维基百科 · 非关税壁垒",
        "url": "https://zh.wikipedia.org/wiki/%E9%9D%9E%E5%85%B3%E7%A8%8E%E5%A3%81%E5%9E%92"
      }
    ]
  },
  {
    "term": "Premium and discount",
    "course": "国际经济学",
    "courseEn": "International Economics",
    "def": "Premium is the counterpart of discount; the two describe the direction in which the forward exchange rate deviates from the spot rate: a premium means a currency's forward exchange rate is above its spot rate, and a discount means the forward rate is below the spot rate; under the direct quotation method, a forward premium on a foreign currency indicates that the foreign currency is rising in value (the forward rate rising), and a discount indicates that it is falling in value (the forward rate falling).",
    "source": "/international/汇率决定的一般理论",
    "cite": [
      {
        "label": "Wikipedia · Forward exchange rate",
        "url": "https://en.wikipedia.org/wiki/Forward_exchange_rate"
      },
      {
        "label": "维基百科 · 远期汇率",
        "url": "https://zh.wikipedia.org/wiki/%E8%BF%9C%E6%9C%9F%E6%B1%87%E7%8E%87"
      }
    ]
  },
  {
    "term": "Fixed lending and borrowing",
    "course": "国际经济学",
    "courseEn": "International Economics",
    "def": "Fixed lending and borrowing refers to the creditor and debtor relationships that have formed in international lending but have not yet entered actual payment.",
    "source": "/international/汇率决定的一般理论",
    "cite": []
  },
  {
    "term": "Fixed and floating exchange rates",
    "course": "国际经济学",
    "courseEn": "International Economics",
    "def": "A fixed exchange rate is an exchange rate system in which the government chooses a basic reference unit by administrative or legal means and sets, publishes, and maintains a fixed parity between the domestic currency and that reference unit; a floating exchange rate is a rate that rises and falls freely with market supply and demand and which the state has no obligation to maintain; in practice there exist both freely floating and managed floating varieties.",
    "source": "/international/汇率决定的一般理论",
    "cite": []
  },
  {
    "term": "International division of labor",
    "course": "国际经济学",
    "courseEn": "International Economics",
    "def": "The international division of labor is the division of labor among countries, that is, the international specialization of production.",
    "source": "/international/绪论",
    "cite": []
  },
  {
    "term": "Balance of payments",
    "course": "国际经济学",
    "courseEn": "International Economics",
    "def": "The concept of the balance of payments has narrow and broad senses. In the narrow sense, the balance of payments refers to the asset transfers between a country and other countries arising from dealings in trade, services, capital, and the like within a given period (generally a year), counting only transactions with present or future foreign exchange receipts and payments; in the broad sense, it refers to the various economic transactions between an economy and the rest of the world in a specific period, including transactions in goods, services, and income, transactions in financial assets and liabilities, and unilateral transfers.",
    "source": "/international/国际收支分析",
    "cite": [
      {
        "label": "维基百科 · 国际收支",
        "url": "https://zh.wikipedia.org/wiki/%E5%9B%BD%E9%99%85%E6%94%B6%E6%94%AF"
      }
    ]
  },
  {
    "term": "International economics",
    "course": "国际经济学",
    "courseEn": "International Economics",
    "def": "International economics is the branch of economics that studies international economic activities and international economic relations on the basis of the general theory of economics.",
    "source": "/international/绪论",
    "cite": [
      {
        "label": "维基百科 · 国际经济学",
        "url": "https://zh.wikipedia.org/wiki/%E5%9B%BD%E9%99%85%E7%BB%8F%E6%B5%8E%E5%AD%A6"
      }
    ]
  },
  {
    "term": "Foreign exchange",
    "course": "国际经济学",
    "courseEn": "International Economics",
    "def": "Foreign exchange means the international means of payment or claims held by the monetary authorities (central bank, monetary institutions, foreign exchange stabilization fund organizations, and the treasury) in the form of bank deposits, treasury bills, long- and short-term government securities, and the like, which can be used for payment when the balance of payments is in deficit.",
    "source": "/international/汇率决定的一般理论",
    "cite": [
      {
        "label": "维基百科 · 外汇",
        "url": "https://zh.wikipedia.org/wiki/%E5%A4%96%E6%B1%87"
      }
    ]
  },
  {
    "term": "Official reserves",
    "course": "国际经济学",
    "courseEn": "International Economics",
    "def": "Official reserves are the foreign currency reserve assets and external claims held by a country's central bank or other official monetary institution.",
    "source": "/international/国际收支分析",
    "cite": []
  },
  {
    "term": "Infant industry",
    "course": "国际经济学",
    "courseEn": "International Economics",
    "def": "If an industry, owing to insufficient technology, low labor productivity, and product costs above world market levels, cannot compete with foreign industries, but under protective measures such as tariffs and subsidies continues production for a period of time and, after that period, becomes able to profit under free trade, reach the level of other countries, stand on its own, and form comparative advantages and develop soundly, such an industry is an infant industry.",
    "source": "/international/国际贸易政策分析",
    "cite": []
  },
  {
    "term": "Open economy",
    "course": "国际经济学",
    "courseEn": "International Economics",
    "def": "An open economy, also called an &quot;open-type economy,&quot; as opposed to a &quot;closed economy,&quot; is the economy of a country or region whose economic activities are closely linked with world markets or outside markets (for example, through international trade and international financial dealings).",
    "source": "/international/绪论",
    "cite": [
      {
        "label": "维基百科 · 开放经济",
        "url": "https://zh.wikipedia.org/wiki/%E5%BC%80%E6%94%BE%E7%BB%8F%E6%B5%8E"
      }
    ]
  },
  {
    "term": "Ownership-specific advantages",
    "course": "国际经济学",
    "courseEn": "International Economics",
    "def": "Ownership-specific advantages are the advantages a firm possesses in organizational and managerial capability, in financing, in the characteristics and strengths of its technology, in the firm's scale and monopoly position, and in other capabilities.",
    "source": "/international/要素的国际流动",
    "cite": []
  },
  {
    "term": "Offer curve",
    "course": "国际经济学",
    "courseEn": "International Economics",
    "def": "The offer curve, also called the supply-conditions curve or reciprocal demand curve, was advanced by Marshall and Edgeworth; it shows that for a country to import a certain quantity of goods it must export a certain quantity of goods to other countries, so the offer curve is the locus of the export quantities a country is willing to provide for a given import quantity.",
    "source": "/international/国际贸易纯理论",
    "cite": []
  },
  {
    "term": "Comparative advantage",
    "course": "国际经济学",
    "courseEn": "International Economics",
    "def": "Comparative advantage gains are the gains from trade obtained when the two trading parties produce according to their respective comparative advantages and then exchange products.",
    "source": "/international/国际贸易纯理论",
    "cite": [
      {
        "label": "维基百科 · 比较利益",
        "url": "https://zh.wikipedia.org/wiki/%E6%AF%94%E8%BE%83%E5%88%A9%E7%9B%8A"
      }
    ]
  },
  {
    "term": "Exchange rate",
    "course": "国际经济学",
    "courseEn": "International Economics",
    "def": "The exchange rate, also called the &quot;parity,&quot; the &quot;foreign exchange quotation,&quot; or the &quot;exchange market rate,&quot; is the price at which foreign exchange is bought and sold.",
    "source": "/international/汇率决定的一般理论",
    "cite": [
      {
        "label": "维基百科 · 汇率",
        "url": "https://zh.wikipedia.org/wiki/%E6%B1%87%E7%8E%87"
      },
      {
        "label": "维基百科 · 汇率",
        "url": "https://zh.wikipedia.org/wiki/%E6%B1%87%E7%8E%87"
      }
    ]
  },
  {
    "term": "Liquid lending and borrowing",
    "course": "国际经济学",
    "courseEn": "International Economics",
    "def": "Liquid lending and borrowing is an important concept in the international lending theory, a theory of exchange rate determination in international finance.",
    "source": "/international/汇率决定的一般理论",
    "cite": []
  },
  {
    "term": "Present-value debt ratio",
    "course": "国际经济学",
    "courseEn": "International Economics",
    "def": "The present-value debt ratio is the ratio of the present value of a debtor country's outstanding debt in the current year to its GNP (or exports) that year; it is divided into the economic present-value debt ratio (the present value of outstanding debt as a share of that year's GNP, with a critical value of 80%) and the export present-value debt ratio (the present value of outstanding debt as a share of that year's exports, with a critical value of 20%).",
    "source": "/international/要素的国际流动",
    "cite": []
  },
  {
    "term": "Direct and indirect quotation",
    "course": "国际经济学",
    "courseEn": "International Economics",
    "def": "The direct quotation method, also called the &quot;price quotation method,&quot; takes a given unit of foreign currency as the standard and converts it into a certain quantity of domestic currency, that is, it is the method of expressing the price of the foreign currency in terms of the domestic currency.",
    "source": "/international/汇率决定的一般理论",
    "cite": []
  },
  {
    "term": "Economic globalization",
    "course": "国际经济学",
    "courseEn": "International Economics",
    "def": "The United Nations Conference on Trade and Development defines economic globalization as follows: globalization is the process by which the economies of the world's countries are increasingly linked across borders and become mutually interdependent, a process powerfully promoted by the rapid progress of transport, communications, and information technology.",
    "source": "/international/经济全球化趋势",
    "cite": [
      {
        "label": "维基百科 · 经济全球化",
        "url": "https://zh.wikipedia.org/wiki/%E7%BB%8F%E6%B5%8E%E5%85%A8%E7%90%83%E5%8C%96"
      }
    ]
  },
  {
    "term": "Absolute advantage",
    "course": "国际经济学",
    "courseEn": "International Economics",
    "def": "Absolute advantage gains are the gains from trade obtained when the two trading parties produce according to their respective absolute advantages and then exchange products.",
    "source": "/international/国际贸易纯理论",
    "cite": [
      {
        "label": "维基百科 · 绝对利益",
        "url": "https://zh.wikipedia.org/wiki/%E7%BB%9D%E5%AF%B9%E5%88%A9%E7%9B%8A"
      }
    ]
  },
  {
    "term": "Credit and debit items",
    "course": "国际经济学",
    "courseEn": "International Economics",
    "def": "Credit items are the items in the balance of payments accounts that represent a reduction in a country's assets or an increase in its liabilities, meaning the export of domestic goods and services or an inflow of foreign financial assets; debit items represent an increase in a country's assets or a decrease in its liabilities, meaning the import of domestic goods and services or an outflow of foreign financial assets.",
    "source": "/international/国际收支分析",
    "cite": []
  },
  {
    "term": "Foreign trade multiplier",
    "course": "国际经济学",
    "courseEn": "International Economics",
    "def": "The foreign trade multiplier refers to the role of multiplier theory in the study of foreign trade, exploring the relationship between foreign trade and national income and employment.",
    "source": "/international/宏观经济的内外均衡",
    "cite": []
  },
  {
    "term": "Trade creation and trade diversion",
    "course": "国际经济学",
    "courseEn": "International Economics",
    "def": "Trade creation is the counterpart of &quot;trade diversion&quot;: after two or more countries form a customs union, the preferential trade agreements between the signatories cause trade among the member states to replace their former domestic production and consumption, that is, new trade is created; trade diversion is the counterpart of &quot;trade creation&quot;: the preferential arrangements among union members cause trade among the member states to replace the trade they formerly conducted with non-member countries, rather than creating new trade.",
    "source": "/international/经济一体化与国际经济秩序分析",
    "cite": []
  },
  {
    "term": "Terms of trade",
    "course": "国际经济学",
    "courseEn": "International Economics",
    "def": "The terms of trade, also called the &quot;exchange ratio&quot; or the &quot;trade ratio,&quot; refer to the proportional relationship between a country's export commodity prices and its import commodity prices within a given period.",
    "source": "/international/国际贸易纯理论",
    "cite": [
      {
        "label": "维基百科 · 贸易条件",
        "url": "https://zh.wikipedia.org/wiki/%E8%B4%B8%E6%98%93%E6%9D%A1%E4%BB%B6"
      }
    ]
  },
  {
    "term": "Marginal propensity to import",
    "course": "国际经济学",
    "courseEn": "International Economics",
    "def": "The marginal propensity to import is the ratio of the change in the volume of imports to the change in income that causes it, that is, the ratio of the change in imports induced by each additional unit of change in national income.",
    "source": "/international/宏观经济的内外均衡",
    "cite": []
  },
  {
    "term": "Psychological theory of exchange",
    "course": "国际经济学",
    "courseEn": "International Economics",
    "def": "The psychological theory of exchange is a combination of the international lending theory and the purchasing power parity theory. Its theoretical basis is subjective utility theory: people need foreign exchange in order to buy goods and services to satisfy their wants; utility is the value basis of foreign exchange, true value lies in its marginal utility, and this in turn is determined by people's subjective psychology.",
    "source": "/international/汇率决定的一般理论",
    "cite": []
  },
  {
    "term": "Balance of payments disequilibrium",
    "course": "国际经济学",
    "courseEn": "International Economics",
    "def": "Balance of payments disequilibrium means that problems arise in the balances of the current account and the capital and financial account, that is, the external economy has entered a situation requiring adjustment.",
    "source": "/international/国际收支分析",
    "cite": []
  },
  {
    "term": "Two-gap model",
    "course": "国际经济学",
    "courseEn": "International Economics",
    "def": "The two-gap model, proposed by Chenery and Strout, holds that developing countries face the constraints of a savings gap and a foreign exchange gap in the course of economic development.",
    "source": "/international/要素的国际流动",
    "cite": []
  },
  {
    "term": "\"Three favorables\" criterion",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "The &quot;three favorables&quot; criterion judges whether reform and work in all fields are right or wrong, a gain or a loss, by whether they are favorable to developing the productive forces of socialist society, to strengthening the comprehensive national power of the socialist state, and to raising the people's living standards.",
    "source": "/socialist/社会主义经济制度的本质特征",
    "cite": [
      {
        "label": "维基百科 · 三个有利于",
        "url": "https://zh.wikipedia.org/wiki/%E4%B8%89%E4%B8%AA%E6%9C%89%E5%88%A9%E4%BA%8E"
      }
    ]
  },
  {
    "term": "\"Washington Consensus\" and \"Beijing Consensus\"",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "The term Washington Consensus was first proposed by the economist John Williamson in 1989.",
    "source": "/socialist/向社会主义市场经济体制的渐进过渡",
    "cite": [
      {
        "label": "维基百科 · 华盛顿共识",
        "url": "https://zh.wikipedia.org/wiki/%E5%8D%8E%E7%9B%9B%E9%A1%BF%E5%85%B1%E8%AF%86"
      }
    ]
  },
  {
    "term": "\"Latecomer advantage\"",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "The &quot;latecomer advantage&quot; refers to the relatively favorable external environment facing late-developing countries — above all, highly developed technology — so that they can skip certain stages of technological development and adopt new technologies directly.",
    "source": "/socialist/社会主义市场经济条件下的经济结构调整",
    "cite": []
  },
  {
    "term": "\"Market failure\"",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "Market failure means that the allocation of resources achieved through market competition falls short of Pareto optimality, or that the market mechanism cannot bring about certain desirable social and economic goals.",
    "source": "/socialist/社会主义市场经济条件下的政府调节",
    "cite": []
  },
  {
    "term": "\"Invisible hand\"",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "The &quot;invisible hand&quot; is the policy idea of economic liberalism put forward by Adam Smith, which esteems the workings of the market mechanism.",
    "source": "/socialist/社会主义市场经济条件下的政府调节",
    "cite": []
  },
  {
    "term": "\"North paradox\"",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "The &quot;North paradox&quot; is that an efficient system of property rights capable of promoting sustained and rapid economic growth depends on the state's effective definition and protection of property rights, yet the state — driven by dual objectives and constrained in the process of defining and protecting property rights both by transaction costs and by competition — adopts discriminatory policies toward the various interest groups, and so tolerates the long-term persistence of inefficient structures of property rights.",
    "source": "/socialist/向社会主义市场经济体制的渐进过渡",
    "cite": []
  },
  {
    "term": "Intermediate-diffusion institutional change",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "When local governments whose interests have become independent become the intermediary link between the power centre's willingness to supply institutions and micro-level actors' demand for institutional innovation, it becomes possible to break through the entry barriers to institutional innovation erected by the power centre, thereby bringing the maximization of the power centre's monopoly rents into agreement with the protection of an efficient structure of property rights and dissolving the &quot;North paradox&quot;; this form of institutional change, distinct from the supply-dominated and the demand-induced kinds, is called intermediate-diffusion institutional change.",
    "source": "/socialist/向社会主义市场经济体制的渐进过渡",
    "cite": []
  },
  {
    "term": "Dual contrast index",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "The dual contrast index is the absolute value of the difference between the share of industrial (or non-agricultural) output value and the share of the labor force.",
    "source": "/socialist/社会主义市场经济条件下的经济结构调整",
    "cite": []
  },
  {
    "term": "Dual comparison coefficient",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "The dual comparison coefficient is the ratio of agriculture's comparative labor productivity to non-agriculture's comparative labor productivity in a dual economic structure.",
    "source": "/socialist/社会主义市场经济条件下的经济结构调整",
    "cite": []
  },
  {
    "term": "Dual economic structure",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "A dual economic structure is an economic structure in which a modern sector dominated by urban industry and a traditional sector dominated by rural agriculture coexist, the traditional sector's share being excessively large, the modern sector underdeveloped, and the urban–rural gap very pronounced.",
    "source": "/socialist/社会主义市场经济条件下的经济结构调整",
    "cite": []
  },
  {
    "term": "Industry",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "An industry is a series of enterprises producing similar or identical products.",
    "source": "/socialist/社会主义市场经济条件下的经济结构调整",
    "cite": [
      {
        "label": "维基百科 · 产业",
        "url": "https://zh.wikipedia.org/wiki/%E4%BA%A7%E4%B8%9A"
      }
    ]
  },
  {
    "term": "Industrial structure",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "Industrial structure refers to the economic linkages and the quantitative proportional relations formed in the process of reproduction among the various industries within the national economy.",
    "source": "/socialist/社会主义市场经济条件下的经济结构调整",
    "cite": [
      {
        "label": "维基百科 · 产业结构",
        "url": "https://zh.wikipedia.org/wiki/%E4%BA%A7%E4%B8%9A%E7%BB%93%E6%9E%84"
      }
    ]
  },
  {
    "term": "Property rights",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "Property rights are rights, realized through social enforcement, to choose among the various uses of some economic good.",
    "source": "/socialist/社会主义企业制度与国有企业改革",
    "cite": [
      {
        "label": "维基百科 · 产权",
        "url": "https://zh.wikipedia.org/wiki/%E4%BA%A7%E6%9D%83"
      }
    ]
  },
  {
    "term": "Property rights system",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "A property rights system is an institutional arrangement formed by the combination of given property rights relations and property rights rules, able to combine, regulate and protect property rights relations effectively.",
    "source": "/socialist/社会主义企业制度与国有企业改革",
    "cite": [
      {
        "label": "维基百科 · 韩国知识产权制度",
        "url": "https://zh.wikipedia.org/wiki/%E9%9F%A9%E5%9B%BD%E7%9F%A5%E8%AF%86%E4%BA%A7%E6%9D%83%E5%88%B6%E5%BA%A6"
      }
    ]
  },
  {
    "term": "Property rights rule",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "The property rights rule is that the size of a person's power over the allocation of resources is positively correlated with the quantity of assets the person owns — the more assets owned, the greater the power to allocate resources.",
    "source": "/socialist/向社会主义市场经济体制的渐进过渡",
    "cite": []
  },
  {
    "term": "Agency costs",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "Agency costs are the costs that the introduction of agency necessarily induces, under the condition that ownership and control are separated, because the utility functions of principal and agent are not fully identical.",
    "source": "/socialist/国有企业治理结构的创新",
    "cite": [
      {
        "label": "维基百科 · 代理成本",
        "url": "https://zh.wikipedia.org/wiki/%E4%BB%A3%E7%90%86%E6%88%90%E6%9C%AC"
      },
      {
        "label": "维基百科 · 代理成本",
        "url": "https://zh.wikipedia.org/wiki/%E4%BB%A3%E7%90%86%E6%88%90%E6%9C%AC"
      }
    ]
  },
  {
    "term": "Agency problem",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "Besides pursuing higher monetary returns, the agent also strives, through the pursuit of non-monetary goods, to obtain as many non-monetary gains as possible.",
    "source": "/socialist/国有企业治理结构的创新",
    "cite": [
      {
        "label": "维基百科 · 代理问题",
        "url": "https://zh.wikipedia.org/wiki/%E4%BB%A3%E7%90%86%E9%97%AE%E9%A2%98"
      }
    ]
  },
  {
    "term": "Enterprise co-governance",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "Enterprise co-governance emphasizes joint participation in decision-making and mutual restraint in supervision.",
    "source": "/socialist/国有企业治理结构的创新",
    "cite": []
  },
  {
    "term": "Ownership of the enterprise",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "Ownership of the enterprise denotes the rights of the enterprise, over the property it lawfully possesses, to use it, to enjoy its proceeds and to dispose of it.",
    "source": "/socialist/国有企业治理结构的创新",
    "cite": []
  },
  {
    "term": "Enterprise governance structure",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "The enterprise governance structure, also called the corporate legal-person governance structure, is the unified mechanism — institutionalized by law, regulations, rules and the company charter — through which owners, managers and supervisors form, by way of the company's organ of power (the shareholders' meeting), the organs of business decision-making and execution (the board of directors and the managers), and the organ of supervision (the board of supervisors), relations with clearly defined powers and responsibilities, mutual restraint, coordinated operation and scientific decision-making.",
    "source": "/socialist/国有企业治理结构的创新",
    "cite": []
  },
  {
    "term": "Right of use",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "The right of use is the possibility of utilizing property according to its purpose without changing the nature of its ownership or possession; it is the rights-and-obligations relation arising between people from the utilization of property.",
    "source": "/socialist/社会主义企业制度与国有企业改革",
    "cite": []
  },
  {
    "term": "Supply-dominated institutional change",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "Supply-dominated institutional change is compulsory institutional change pushed forward by the power centre; it means that, under a given constitutional order and the ethical norms of conduct, the power centre's capacity and willingness to provide new institutional arrangements are the dominant factors determining institutional change, and that this capacity and willingness are determined mainly by the power structure and the balance of forces among the various vested-interest groups of a society.",
    "source": "/socialist/向社会主义市场经济体制的渐进过渡",
    "cite": []
  },
  {
    "term": "Full employment",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "Full employment is that economic state in which every worker willing to work finds employment at a wage he or she can accept.",
    "source": "/socialist/社会主义市场经济条件下的政府调节",
    "cite": [
      {
        "label": "维基百科 · 充分就业",
        "url": "https://zh.wikipedia.org/wiki/%E5%85%85%E5%88%86%E5%B0%B1%E4%B8%9A"
      }
    ]
  },
  {
    "term": "Public goods",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "Public goods are those products whose consumption has neither exclusivity nor exhaustibility but for which charging is difficult.",
    "source": "/socialist/社会主义企业制度与国有企业改革",
    "cite": []
  },
  {
    "term": "Equalization of public services",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "Equalization of public services means chiefly that all citizens enjoy equal opportunity of access to basic public services and broadly equal results, while their freedom of choice as members of society is respected.",
    "source": "/socialist/社会主义市场经济条件下的分配制度",
    "cite": []
  },
  {
    "term": "Insider control",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "Insider control refers to the gradual acquisition, by the managers of state-owned enterprises in the course of economic transition, of the greater part of the control rights — an acquisition often accomplished through &quot;collusion&quot; with the workers.",
    "source": "/socialist/国有企业治理结构的创新",
    "cite": []
  },
  {
    "term": "Institutions",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "Institutions are a series of devised rules, compliance procedures and ethical-moral norms of behavior, intended to constrain the behavior of individuals in pursuit of the maximization of their own welfare or utility.",
    "source": "/socialist/社会主义经济增长与经济发展",
    "cite": [
      {
        "label": "维基百科 · 制度",
        "url": "https://zh.wikipedia.org/wiki/%E5%88%B6%E5%BA%A6"
      },
      {
        "label": "维基百科 · 制度",
        "url": "https://zh.wikipedia.org/wiki/%E5%88%B6%E5%BA%A6"
      }
    ]
  },
  {
    "term": "Institutional arrangement",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "An institutional arrangement is a series of concrete operating rules that, under the constitutional order, constrain particular patterns of behavior and relations and define the conditions of exchange.",
    "source": "/socialist/社会主义经济增长与经济发展",
    "cite": []
  },
  {
    "term": "Incentive-compatibility constraint",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "The incentive-compatibility constraint states that, since the agent is a taker of the contract, the incentives the mechanism provides must be able to induce the agent to choose voluntarily the contract designed for the type to which he or she belongs.",
    "source": "/socialist/国有企业治理结构的创新",
    "cite": []
  },
  {
    "term": "Right of possession",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "The right of possession is the possibility of a person exercising direct control over property; it is the rights-and-obligations relation arising between the owner and others from actual control of the property.",
    "source": "/socialist/社会主义企业制度与国有企业改革",
    "cite": []
  },
  {
    "term": "Participation constraint",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "The participation constraint, also called the individual-rationality constraint, imposes a rationalized assumption upon the agent's behavior.",
    "source": "/socialist/国有企业治理结构的创新",
    "cite": []
  },
  {
    "term": "Sustainable development",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "The theory of sustainable development is a major advance in humankind's view of development, stressing the coordinated development of the economy, society, resources and environmental protection.",
    "source": "/socialist/社会主义经济增长与经济发展",
    "cite": [
      {
        "label": "维基百科 · 可持续发展",
        "url": "https://zh.wikipedia.org/wiki/%E5%8F%AF%E6%8C%81%E7%BB%AD%E5%8F%91%E5%B1%95"
      }
    ]
  },
  {
    "term": "Gross domestic product (GDP)",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "Gross domestic product is the monetary expression of the total final goods and services produced, within a country's territory over a given period (usually a year), by that country's own residents and by foreign residents alike.",
    "source": "/socialist/社会主义经济增长与经济发展",
    "cite": []
  },
  {
    "term": "Gross national product (GNP)",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "Gross national product is the sum of the value of all final goods and services produced over a given period (usually a year) by the resident (national) population of a country (or region); it is accounted on the national principle, and is distinguished from GDP, which is accounted by territorial extent.",
    "source": "/socialist/社会主义经济增长与经济发展",
    "cite": []
  },
  {
    "term": "Basic industries",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "Basic industries are the group of industries that occupy a foundational position in a country's national economic development, constraining and determining the development of other industries and setting the level they attain; they include basic industry and infrastructure, their products usually becoming indispensable inputs or consumables in the processing, reprocessing and production processes of the downstream sectors, and their investment usually being of huge magnitude and indivisible.",
    "source": "/socialist/社会主义企业制度与国有企业改革",
    "cite": []
  },
  {
    "term": "Incremental reform",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "Incremental reform means advancing market-oriented reform at the margin without being the first to disturb the existing pattern of vested interests — that is to say, on the margin where hierarchical rules act less, choosing ways of adjusting interests that carry the meaning of Pareto improvements, so as to carry out systemic change and pass gradually toward a market economy system.",
    "source": "/socialist/社会主义市场经济理论",
    "cite": []
  },
  {
    "term": "Right of disposition",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "The right of disposition is the possibility, guaranteed by law, of performing acts aimed at changing the economic use or the state of property; it reflects the rights-and-obligations relations that arise in the process of a person altering property.",
    "source": "/socialist/社会主义企业制度与国有企业改革",
    "cite": []
  },
  {
    "term": "Export-oriented industrialization strategy",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "The basic import of the export-oriented industrialization strategy is to make use of opening up and of the global trend of industrial restructuring and transfer, building China's model of industrialization on the advantage of labor costs against the background of openness.",
    "source": "/socialist/社会主义对外经济关系",
    "cite": []
  },
  {
    "term": "Equilibrium of external constraint",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "A rational principal will set the external constraint upon the agent at the level where the marginal cost of constraint equals the agency cost; this process of adjustment toward equilibrium will minimize the sum of the constraint cost and the agency cost.",
    "source": "/socialist/国有企业治理结构的创新",
    "cite": []
  },
  {
    "term": "Macro income distribution process",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "The macro-level process of income regulation is a redistribution process built upon the micro income distribution process and independent of that distribution process.",
    "source": "/socialist/社会主义市场经济条件下的分配制度",
    "cite": []
  },
  {
    "term": "Constitutional order",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "The constitutional order is the basic structure used to define the state's property rights and control; it comprises the whole set of fundamental political, social and legal rules that establish production, exchange and distribution, and it establishes the principles for collective choice, being thus the rule for making rules.",
    "source": "/socialist/向社会主义市场经济体制的渐进过渡",
    "cite": []
  },
  {
    "term": "Market",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "The market is the venue, the channel and the bond of exchange.",
    "source": "/socialist/社会主义市场经济理论",
    "cite": [
      {
        "label": "维基百科 · 市场",
        "url": "https://zh.wikipedia.org/wiki/%E5%B8%82%E5%9C%BA"
      }
    ]
  },
  {
    "term": "Market mechanism",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "The market mechanism is an organic system of economic operation and regulation formed within market trading relations, resting on the three-in-one interactive relation of price, supply and demand, and competition.",
    "source": "/socialist/社会主义市场经济理论",
    "cite": [
      {
        "label": "维基百科 · 市场机制",
        "url": "https://zh.wikipedia.org/wiki/%E5%B8%82%E5%9C%BA%E6%9C%BA%E5%88%B6"
      }
    ]
  },
  {
    "term": "Market economy",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "A market economy is an economy in which the market mechanism allocates resources.",
    "source": "/socialist/社会主义市场经济理论",
    "cite": [
      {
        "label": "维基百科 · 市场经济",
        "url": "https://zh.wikipedia.org/wiki/%E5%B8%82%E5%9C%BA%E7%BB%8F%E6%B5%8E"
      }
    ]
  },
  {
    "term": "Micro income distribution process",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "The micro income distribution process is realized through the workings of the market mechanism.",
    "source": "/socialist/社会主义市场经济条件下的分配制度",
    "cite": []
  },
  {
    "term": "Ownership",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "In Marx's definition, ownership determines the ultimate attribution of a thing and signifies the property right of a subject to the exclusive and monopolistic holding of a definite thing — a property right existing independently, in respect of the same thing, of any other rights.",
    "source": "/socialist/社会主义企业制度与国有企业改革",
    "cite": [
      {
        "label": "维基百科 · 所有权",
        "url": "https://zh.wikipedia.org/wiki/%E6%89%80%E6%9C%89%E6%9D%83"
      }
    ]
  },
  {
    "term": "Technological progress",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "Technological progress is the process of motion by which people, using more efficient means of labor and techniques of production, propel the development of society's productive forces.",
    "source": "/socialist/社会主义市场经济条件下的经济结构调整",
    "cite": []
  },
  {
    "term": "Distribution according to work",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "Distribution according to work is the system of distribution under which, after the necessary deductions have been made from the total social product, personal consumption goods are distributed according to the effective amount of labor each worker supplies to society — more work, more gain; less work, less gain; no work, no gain.",
    "source": "/socialist/社会主义市场经济条件下的分配制度",
    "cite": [
      {
        "label": "维基百科 · 按劳分配",
        "url": "https://zh.wikipedia.org/wiki/%E6%8C%89%E5%8A%B3%E5%88%86%E9%85%8D"
      }
    ]
  },
  {
    "term": "Right to the proceeds",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "The right to the proceeds is the possibility of obtaining the economic benefits arising from the owner's property; it is the rights-and-obligations relation people enter into through acquiring additional property.",
    "source": "/socialist/社会主义企业制度与国有企业改革",
    "cite": []
  },
  {
    "term": "Comparative labor productivity",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "Comparative labor productivity is the ratio of a sector's share of output value (or of income) to the share of the labor force employed in that sector.",
    "source": "/socialist/社会主义市场经济条件下的经济结构调整",
    "cite": []
  },
  {
    "term": "Legal-person enterprise system",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "By the form in which property is organized and the legal liability borne, the organizational forms of enterprises divide into natural-person enterprises and legal-person enterprises; the legal-person enterprise system is the enterprise system that takes the legal-person enterprise as its organizational form: the enterprise owns independent legal-person property and bears civil liability independently with all of its property, the contributors bear limited liability up to the amount of their contributions, and the company is its typical form.",
    "source": "/socialist/社会主义企业制度与国有企业改革",
    "cite": []
  },
  {
    "term": "Mixed-ownership economy",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "A mixed-ownership economy is an economic form composed of ownership economies of different natures joined together.",
    "source": "/socialist/社会主义经济制度的本质特征",
    "cite": []
  },
  {
    "term": "Gradualist reform",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "Gradualist reform is market-oriented reform carried out on the foundation of industrialization and the socialist constitutional system, which emphasizes making use of the organizational resources already in hand to advance reform, and which implements incremental reform on the premise of not basically disturbing the existing pattern of vested interests.",
    "source": "/socialist/社会主义市场经济理论",
    "cite": []
  },
  {
    "term": "Core of incentives",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "The core of incentives is to convert the agent's pursuit of personal utility into a pursuit of the maximization of enterprise profit.",
    "source": "/socialist/国有企业治理结构的创新",
    "cite": []
  },
  {
    "term": "Price stability",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "Price stability means not the stability of the relative prices among the various goods and factors, but the stability of the general price level across the whole of society.",
    "source": "/socialist/社会主义市场经济条件下的政府调节",
    "cite": [
      {
        "label": "维基百科 · 物价稳定",
        "url": "https://zh.wikipedia.org/wiki/%E7%89%A9%E4%BB%B7%E7%A8%B3%E5%AE%9A"
      }
    ]
  },
  {
    "term": "Contingent governance mechanism",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "The contingent governance mechanism is the institutionalization of the state-contingency of enterprise ownership: different states of the enterprise's operation correspond to different arrangements of ownership over the enterprise. It is designed to ensure that, in abnormal operating states, the stakeholders who suffer losses have a suitable institution through which to carry out their wish to renegotiate, chiefly through the contest for control, so as to change the given pattern of interests, and it constitutes an external constraint upon the behavior of those who make the enterprise's decisions.",
    "source": "/socialist/国有企业治理结构的创新",
    "cite": []
  },
  {
    "term": "Primary stage of socialism",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "The primary stage of socialism is the particular historical stage through which building socialism must necessarily pass under the conditions of backward productive forces and an underdeveloped commodity economy in our country — the entire historical stage from China's entry into socialism to the basic realization of socialist modernization.",
    "source": "/socialist/社会主义经济制度的本质特征",
    "cite": [
      {
        "label": "维基百科 · 社会主义初级阶段",
        "url": "https://zh.wikipedia.org/wiki/%E7%A4%BE%E4%BC%9A%E4%B8%BB%E4%B9%89%E5%88%9D%E7%BA%A7%E9%98%B6%E6%AE%B5"
      }
    ]
  },
  {
    "term": "Social security",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "Social security is a system by which the state and society distribute and redistribute the national income through legislation, so as to provide basic living guarantees for the members of society, especially for individuals or families in special difficulty of livelihood.",
    "source": "/socialist/社会主义市场经济条件下的分配制度",
    "cite": [
      {
        "label": "维基百科 · 社会保障",
        "url": "https://zh.wikipedia.org/wiki/%E7%A4%BE%E4%BC%9A%E4%BF%9D%E9%9A%9C"
      }
    ]
  },
  {
    "term": "Competitive state-owned enterprises",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "Competitive state-owned enterprises are those state-owned enterprises built with state investment which face essentially no barriers to entry or exit, in whose industry numerous enterprises exist, whose products are essentially homogeneous and divisible, and whose goal of operation is profit.",
    "source": "/socialist/社会主义企业制度与国有企业改革",
    "cite": []
  },
  {
    "term": "Hierarchical rules",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "Hierarchical rules mean that first a pyramid-shaped hierarchy of layer-upon-layer subordination is constructed, then each actor's position within that hierarchy is defined, and then, further, the power to allocate resources suited to that hierarchical position is defined.",
    "source": "/socialist/向社会主义市场经济体制的渐进过渡",
    "cite": []
  },
  {
    "term": "Economic globalization",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "Understood in the broad sense, the concept of economic globalization stands for the process by which economic activity expands from the domestic to the global sphere, together with the process of change in the many economic, social, political and everyday aspects that attend it.",
    "source": "/socialist/社会主义对外经济关系",
    "cite": [
      {
        "label": "维基百科 · 经济全球化",
        "url": "https://zh.wikipedia.org/wiki/%E7%BB%8F%E6%B5%8E%E5%85%A8%E7%90%83%E5%8C%96"
      }
    ]
  },
  {
    "term": "Economic development",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "Economic development is the evolutionary process of a country's or a region's economic growth together with the continuous optimization and upgrading of its economic structure and social structure.",
    "source": "/socialist/社会主义经济增长与经济发展",
    "cite": [
      {
        "label": "维基百科 · 经济发展",
        "url": "https://zh.wikipedia.org/wiki/%E7%BB%8F%E6%B5%8E%E5%8F%91%E5%B1%95"
      }
    ]
  },
  {
    "term": "Economic development model",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "An economic development model is the particular type formed, over a given period, by the national economic development strategy together with its mechanism for the growth of the productive factors and its principles of operation; it comprises a whole series of elements, including the goals, the manner, the focal points and the steps of development.",
    "source": "/socialist/社会主义经济增长与经济发展",
    "cite": []
  },
  {
    "term": "Economic growth",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "Economic growth is the long-run increase in the real output (or the real income) of an economic society — that is, the increase in full-employment output measured at a constant price level.",
    "source": "/socialist/社会主义经济增长与经济发展",
    "cite": [
      {
        "label": "维基百科 · 经济增长",
        "url": "https://zh.wikipedia.org/wiki/%E7%BB%8F%E6%B5%8E%E5%A2%9E%E9%95%BF"
      }
    ]
  },
  {
    "term": "Transformation of the mode of economic growth",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "The transformation of the mode of economic growth means that economic growth turns from depending mainly on the quantitative expansion of the factors of production to being achieved mainly by raising the efficiency with which the input factors of production are used — that is, the transformation from the extensive to the intensive mode of growth.",
    "source": "/socialist/社会主义经济增长与经济发展",
    "cite": []
  },
  {
    "term": "Economic openness",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "Economic openness means that an economic system establishes contacts with the outside world through the flow of products, services, technology, factors and so on.",
    "source": "/socialist/社会主义对外经济关系",
    "cite": []
  },
  {
    "term": "Economic policy instruments",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "Economic policy instruments are the methods the state adopts in order to achieve its economic policy goals; they comprise the policy tools and the methods of implementing policy.",
    "source": "/socialist/社会主义市场经济条件下的政府调节",
    "cite": []
  },
  {
    "term": "Economic-legal means",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "The economic-legal means are the means by which the state relies on the coercive force of law to guarantee the achievement of its economic policy goals.",
    "source": "/socialist/社会主义市场经济条件下的政府调节",
    "cite": []
  },
  {
    "term": "Green GDP",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "In 1993 the relevant statistical bodies of the United Nations put forward the concept of the ecologically adjusted domestic product, &quot;EDP&quot; — that is, green GDP, which is GDP minus the value of the resources consumed in creating GDP, and then minus the cost of treating the pollution created in producing GDP.",
    "source": "/socialist/社会主义经济增长与经济发展",
    "cite": [
      {
        "label": "维基百科 · 绿色GDP",
        "url": "https://zh.wikipedia.org/wiki/%E7%BB%BF%E8%89%B2GDP"
      }
    ]
  },
  {
    "term": "Joint-stock company",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "A joint-stock company is a company initiated and organized by a number of shareholders above a certain minimum, whose entire capital is divided into shares of equal value, whose shareholders bear limited liability toward the company up to the shares they have subscribed, and whose stock may be publicly issued and freely transferred in society.",
    "source": "/socialist/社会主义企业制度与国有企业改革",
    "cite": [
      {
        "label": "维基百科 · 股份公司",
        "url": "https://zh.wikipedia.org/wiki/%E8%82%A1%E4%BB%BD%E5%85%AC%E5%8F%B8"
      }
    ]
  },
  {
    "term": "Natural-person enterprise system",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "By the form in which property is organized and the legal liability borne, the organizational forms of enterprises divide into natural-person enterprises and legal-person enterprises; the natural-person enterprise system is the enterprise system that takes the natural-person enterprise as its organizational form: the enterprise does not have the status of a legal person, and the proprietor bears unlimited liability for the enterprise's debts, the single-proprietorship and the partnership being its typical forms.",
    "source": "/socialist/社会主义企业制度与国有企业改革",
    "cite": []
  },
  {
    "term": "Ethical and moral norms of behavior",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "Ethical and moral norms of behavior spring from people's understanding of reality and from ideology, and are bound up with judgments of the justice or fairness of actual contractual relations; they are of vital importance for legitimizing the constitutional order and institutional arrangements.",
    "source": "/socialist/社会主义经济增长与经济发展",
    "cite": []
  },
  {
    "term": "Managerial control under administrative intervention",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "China's reform of the state-owned enterprises has mainly redistributed powers, responsibilities and interests through the marketization and contractualization of the relations between government and enterprise: the government grants the managers very wide managerial powers while monitoring their conduct, thereby forming a type of enterprise governance structure — managerial control under administrative intervention — distinct from insider control.",
    "source": "/socialist/国有企业治理结构的创新",
    "cite": []
  },
  {
    "term": "Administrative control means",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "Administrative control means are the means by which the state's administrative departments, relying on the might of state power, intervene in economic life through the issuance of orders, directives and the like.",
    "source": "/socialist/社会主义市场经济条件下的政府调节",
    "cite": []
  },
  {
    "term": "Fiscal policy instruments",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "The core of fiscal policy is to regulate the relations of supply and demand through the government's revenue and expenditure, so as to achieve given policy goals.",
    "source": "/socialist/社会主义市场经济条件下的政府调节",
    "cite": []
  },
  {
    "term": "Monetary policy instruments",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "The core of monetary policy is for the central bank, through the financial system and the financial market, to regulate the money supply and the interest rate in the national economy, influencing investment and consumption activity, and thereby to achieve given policy goals.",
    "source": "/socialist/社会主义市场经济条件下的政府调节",
    "cite": []
  },
  {
    "term": "Moral hazard",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "Moral hazard refers to the actions, taken by those engaged in economic activity because of information asymmetry, that are harmful to others while those agents maximize their own utility to the utmost.",
    "source": "/socialist/国有企业治理结构的创新",
    "cite": [
      {
        "label": "维基百科 · 道德风险",
        "url": "https://zh.wikipedia.org/wiki/%E9%81%93%E5%BE%B7%E9%A3%8E%E9%99%A9"
      }
    ]
  },
  {
    "term": "Collective economy",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "The collective economy is a form of public ownership in which part of the laboring masses jointly possess the means of production.",
    "source": "/socialist/社会主义经济制度的本质特征",
    "cite": [
      {
        "label": "维基百科 · 中华人民共和国农村集体经济组织法",
        "url": "https://zh.wikipedia.org/wiki/%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E5%86%9C%E6%9D%91%E9%9B%86%E4%BD%93%E7%BB%8F%E6%B5%8E%E7%BB%84%E7%BB%87%E6%B3%95"
      }
    ]
  },
  {
    "term": "Demand-induced institutional change",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "Demand-induced institutional change means that an individual or a group of people, under given constraints, spontaneously organize and carry out institutional innovation in order to establish the institutional arrangements and the definitions of rights expected to maximize their own interests.",
    "source": "/socialist/向社会主义市场经济体制的渐进过渡",
    "cite": []
  },
  {
    "term": "Non-monetary goods",
    "course": "社会主义经济学",
    "courseEn": "Socialist Economics",
    "def": "Non-monetary goods are those consumption items that are not usually bought and sold with money, but that, like the goods that are, can bring utility to the parties concerned.",
    "source": "/socialist/国有企业治理结构的创新",
    "cite": []
  }
]

export const COURSES = ["西方经济学","货币银行学","财政学","国际经济学","社会主义经济学"]

export const COURSE_LABELS_EN: Record<string, string> = {
  "西方经济学": "Western Economics",
  "货币银行学": "Money and Banking",
  "财政学": "Public Finance",
  "国际经济学": "International Economics",
  "社会主义经济学": "Socialist Economics"
}
