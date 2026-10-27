// 英文侧书架数据：与 books.ts 的 BOOKS 一一对应（按 id 配对、authors 数组按位置对齐）。
// 书名用 books.ts 已有的 en 字段；作者名里带 peopleId 的由渲染层查 people.ts 的 en 名，
// 这里只给 summary、无站内词条作者的英文名，以及流派标签。

type SchoolKey = 'classical' | 'neoclassical' | 'keynesian' | 'method' | 'liberal' | 'contemporary'

export interface BookEn {
  id: string
  summary: string
  authors: string[]
}

export const SCHOOL_LABELS_EN: Record<SchoolKey, string> = {
  classical: 'Classical economics',
  neoclassical: 'Neoclassical and synthesis',
  keynesian: 'Keynesian revolution',
  method: 'Methods and games',
  liberal: 'Free markets',
  contemporary: 'Contemporary and popular',
}

export const BOOKS_EN: BookEn[] = [
  {
    id: 'wealth-of-nations',
    summary:
      'The marker of political economy becoming a discipline of its own. Smith starts with the division of labour: it raises the productivity of labour, exchange arises out of self-interest, and the market as an "invisible hand" adds private gain together into public welfare. The book answers the central question of its age — where does a nation\'s wealth come from? Not from the stock of gold and silver, but from the productivity of labour. It draws the boundary of laissez-faire: beyond defence, justice and public works, the less government interferes the better. Its four principles of taxation (equity, certainty, convenience, economy) are still where the design of tax systems begins. For two hundred years after publication it has been reread, refuted and revised, but the question itself — how does a market coordinate the actions of tens of millions spontaneously? — was set by this book.',
    authors: ['Adam Smith'],
  },
  {
    id: 'principles-ricardo',
    summary:
      'Smith\'s system compressed into a deductive machine. Using the labour theory of value, differential rent and the laws of distribution, Ricardo shows: as population grows, the marginal cost of grain rises, rent devours profit, and capital accumulation must eventually stall — this is the core of "Ricardian pessimism". The theorem of comparative advantage is stated in full here for the first time: each country specializes in the goods where its relative cost is lower, and trade benefits both sides even when one country is cheaper in everything. The book also establishes the tradition of abstract modelling — assumptions so simple they astonish, inferences devastatingly sharp. Ricardian pessimism is not fate: his model pushes distribution to its limit precisely in order to expose the boundary of the system. Marx took the labour theory of value from it; Mill and Marshall revised its classical frame.',
    authors: ['David Ricardo'],
  },
  {
    id: 'capital',
    summary:
      'The most systematic dissection of capitalism. Volume One begins from the two properties of the commodity — the duality of use-value and value — and from there unfolds the duality of labour: concrete labour creates use-value, abstract labour determines value. Money turns into capital, and the secret of capital\'s self-expansion lies in the labour-power commodity: the worker sells labour-power, whose value is set by the cost of its reproduction, while its use creates more value than that — the difference is surplus value. Wages, accumulation and primitive accumulation come one after another, and the volume closes with the historical trend of capitalist accumulation. Volume Two studies the circulation of capital — the circuit of capital, the turnover of capital and the reproduction of social total capital; Volume Three turns to the general process of capitalist production, showing how surplus value is transformed into profit, how average profit and production prices are formed, and arguing the law of the tendency of the rate of profit to fall. It turns the categories of classical economics into weapons of critique, and their accuracy and their controversy have coexisted ever since: exploitation, crisis and the falling rate of profit — every one of those propositions has been tested again and again.',
    authors: ['Karl Marx'],
  },
  {
    id: 'principles-marshall',
    summary:
      'The founding textbook of neoclassical economics, and the first to elevate supply and demand into a general tool. Marshall folds in the discoveries of the three marginalist schools: value is no longer decided by cost alone or by utility alone, but by "the two blades of a pair of scissors" — demand by marginal utility, supply by marginal cost — and the time dimension (short run and long run) makes this law flexible and workable. Elasticity, consumer surplus, quasi-rent, the representative firm: most of the terminology was named by him; "the task of economics is to study normal human behaviour" freed him from the utilitarian burden and tied the subject to biological metaphor. The Cambridge school then ruled English-speaking economics for fifty years, until Keynes rebelled from within.',
    authors: ['Alfred Marshall'],
  },
  {
    id: 'general-theory',
    summary:
      'The book of heresy in the midst of the Great Depression. Say\'s law — supply automatically creates demand — had governed macroeconomic thought for over a century; Keynes denies it: effective demand decides output and employment, and none of its three components (consumption, investment, government spending) is stable. Consumption depends on income and its marginal propensity declines; saving is a consequence of income rather than its precondition; investment is governed by animal spirits and the preference for liquidity, and the interest rate is what balances idle money against speculative demand, so money is not merely a veil. The paradox of thrift, the multiplier effect, the causal chain of investment leading saving — all reversed. The unemployment of 1929-1933 is no longer a temporary friction but a spontaneous failure of the market at macro scale, and demand management by government gets its theoretical licence for the first time. For the next forty years Western economic policy was written along its extension.',
    authors: ['John Maynard Keynes'],
  },
  {
    id: 'game-theory',
    summary:
      'The founding work that forged strategic interaction into mathematical theory. Von Neumann and Morgenstern redefine the object of economics: not an isolated extremum problem, but a problem in which several decision-makers play against each other. Cooperative games and the minimax theorem handle conflict; the axioms of expected utility set the formal standard for choice under uncertainty — this is the starting point of expected utility theory and the root of rational pricing in finance. The book also contains pioneering results in growth theory (the expanding economy model). On publication almost nobody could read it, but a few years later Nash broke through at a small corner and the concept of equilibrium spread everywhere: industrial organization, auctions, trade negotiations and mechanism design were all rewritten in its terms. Half of modern economics\' methodological map originates here.',
    authors: ['John von Neumann', 'Oskar Morgenstern'],
  },
  {
    id: 'economics-samuelson',
    summary:
      'The most successful textbook of the twentieth century. Samuelson welded the Keynesian revolution to neoclassical micro into a "neoclassical synthesis": micro explains how the price mechanism allocates resources, macro how government stabilizes the aggregates; IS-LM, the multiplier-accelerator, comparative statics and dynamics enter the teaching materials as standard tools for the first time. Before, economics textbooks were commentaries on Smith and Marshall; afterwards they are commentaries on the Samuelson tradition. The argument for a "mixed economy" that runs through the book — market plus government regulation — defined the postwar Western mainstream consensus. It was translated into more than forty languages, issued in nineteen editions, and has been the starting point of a generation of students\' bookshelves. The textbook paradigm Piketty and others criticize, and the writing tradition Mankiw inherited, were both set here.',
    authors: ['Paul Samuelson'],
  },
  {
    id: 'capitalism-freedom',
    summary:
      'The manifesto of postwar economic liberalism. Friedman argues that economic freedom and political freedom are bound together: concentrated economic power will inevitably swallow political freedom, and market competition is the least restraining, most freedom-protecting mechanism of all. He puts the fashionable interventionist programmes on trial one by one — occupational licensing, price controls, minimum wages, the welfare system, social security, school vouchers — and offers substitutes: a negative income tax, school vouchers, floating exchange rates. Most of the book\'s proposals were treated as marginal at the time, but as the inflationary years set in (the natural-rate hypothesis took shape in his hands) they moved step by step into the mainstream policy vocabulary. Reagan and Thatcher put "small government, big market" into practice in the 1980s; this book was on both their desks.',
    authors: ['Milton Friedman'],
  },
  {
    id: 'freakonomics',
    summary:
      'The book that carried econometrics out of the classroom and into everyday life. Levitt\'s basic question: people respond to incentives, but those responses often hide in the last places you would look. Fingerprints of cheating on elementary school exams, a bribery network among sumo wrestlers, names and life statistics, the collapse of public order and the fall in crime — he insists on letting the data speak, and the data\'s conclusions often run counter to common sense. The book\'s best-known argument is the correlation between the decline in crime and the legalization of abortion: fewer children grew up in unwanted circumstances, and a generation later crime naturally fell. It sold millions of copies and turned "the economics way of thinking" into everyday vocabulary, and drew methodological fire for the same boldness — data can settle a coincidence, but causation still needs design.',
    authors: ['Steven Levitt', 'Stephen Dubner'],
  },
  {
    id: 'nudge',
    summary:
      'The policy manual of behavioural economics. Thaler and Sunstein argue that the choice architecture — default options, the way information is disclosed, the order in which options are laid out — is itself intervening in decisions; the only question is whether it has been designed consciously. "Nudging" is this design made proper: it forbids no option, it does not significantly change economic incentives, it simply arranges the structure better, so that people, keeping their freedom of choice, find it easier to make good decisions. Default enrolment in pension schemes, making "consent" the default for organ donation, calorie labelling — the UK\'s Behavioural Insights Team turned these ideas into a government unit, and the administrations of both Obama and Cameron had nudge teams. The policy toolbox gained a new instrument: do not move prices, move structure.',
    authors: ['Richard Thaler', 'Cass Sunstein'],
  },
  {
    id: 'poor-economics',
    summary:
      'The book that turned the fight against poverty from slogans into testable experiments. Banerjee and Duflo were dissatisfied with the "big debates" — marketization or subsidy, growth first or redistribution first — and insisted on breaking the problem down small: why do children not get vaccinated? Why do farmers not buy far cheaper insecticide-treated nets? Why do lenders charge usurious rates? They ran hundreds of randomized controlled trials across more than twenty countries (winning the 2019 Nobel Prize in Economics together with Kremer) and found that the poor are at once information-poor and risk-averse: a small friction (a registration fee, the round trip to a vaccination clinic) is enough to block action, and a small subsidy or insurance is enough to release investment. Policy therefore moved from grand narratives to targeted remedies. Critics say it sidesteps structural problems — which is exactly the battlefield the later debate went to.',
    authors: ['Abhijit Banerjee', 'Esther Duflo'],
  },
  {
    id: 'scarcity',
    summary:
      'The book that brought "scarcity" back to the centre of economics. Mullainathan and Shafir\'s experiments show that scarcity is not merely a state of insufficient resources but a state of mind: scarcity focuses attention on the most pressing thing at hand ("tunnel vision") while thinning attention to everything else. Poor people are not foolish — they are spending their bandwidth every moment on the arithmetic of money; busy people are not inefficient — their bandwidth is consumed by deadlines. The bandwidth burden causes myopia and impulsive spending, forming a self-reinforcing cycle of poverty. The rich, for all their riches, pay for the scarcity of time as well. The book connects "scarcity economics" to psychology: making bandwidth available to the poor, making slack available to the busy is a new dimension of institutional design — and it is the two sides of one coin with the choice architecture that nudging works on.',
    authors: ['Sendhil Mullainathan', 'Eldar Shafir'],
  },
  {
    id: 'capital-21',
    summary:
      'The book that brought inequality back to the centre of macroeconomics. Piketty stitches the tax and inheritance data of twenty countries into a three-hundred-year curve of the capital-to-income ratio: apart from the destructive intervals of war and depression, the ratio has risen over the long run, the rate of return on capital r has stayed stable at 4%-5%, while growth g has long hovered at 1%-2% — r > g means wealth grows faster than total income, the share of inherited wealth widens, and hereditary capitalism returns. Kuznets\' optimism that "growth smooths out inequality automatically" is overturned by the data. His proposed ideal remedy is a global progressive wealth tax — more controversial than the statistics themselves in its feasibility — and since then "capital tax" and "r > g" have become the default vocabulary of policy debate in every country, which is also the measure of this book\'s influence.',
    authors: ['Thomas Piketty'],
  },
]

export const BOOKS_EN_BY_ID: Record<string, BookEn> = Object.fromEntries(
  BOOKS_EN.map((b) => [b.id, b]),
)
