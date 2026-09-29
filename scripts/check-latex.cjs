#!/usr/bin/env node
// 全库 LaTeX 健康校验：防公式渲染回归。
// 背景：需求与供给.md 曾把 \infty 误写成 \infin（非法命令，MathJax 渲染为
// 错误提示/原文），上线后才被发现。本脚本在构建前拦住两类病灶：
//   1. 非法命令：\command 不在白名单（站点渲染器 KaTeX 支持的命令全集，
//      第二十批从 MathJax 换装 KaTeX 时逐条审计对齐：剔除 KaTeX 不支持
//      的 \label/\ref）内；
//   2. 定界符丢失：行内 $ 不配对（奇数个）或 $$ 块不闭合，公式原样外漏。
// 扫描范围 docs/**/*.md；代码围栏与行内代码中的 $ 与 \ 不参与判定。
// 白名单按「站内已用 + MathJax 常用」维护：新增合法命令被误报时，先确认
// MathJax 3 确实支持，再补进 WHITELIST / ENVIRONMENTS / PLAIN_ESCAPES。

const fs = require('fs')
const path = require('path')

const ROOT = path.resolve(__dirname, '..')
// 用法：node scripts/check-latex.cjs [扫描目录]（默认 docs，供 tests/ 夹具自测复用）
const DOCS = process.argv[2] ? path.resolve(ROOT, process.argv[2]) : path.join(ROOT, 'docs')

const WHITELIST = new Set([
  // 希腊字母（小写/变体/大写）
  'alpha','beta','gamma','delta','epsilon','varepsilon','zeta','eta','theta','vartheta',
  'iota','kappa','lambda','mu','nu','xi','pi','varpi','rho','varrho','sigma','varsigma',
  'tau','upsilon','phi','varphi','chi','psi','omega',
  'Gamma','Delta','Theta','Lambda','Xi','Pi','Sigma','Upsilon','Phi','Psi','Omega',
  // 二元运算与关系
  'times','div','pm','mp','cdot','ast','star','circ','bullet','oplus','ominus','otimes',
  'cup','cap','setminus','wedge','vee','sqcup','sqcap',
  'leq','le','geq','ge','neq','ne','sim','simeq','approx','cong','equiv','propto',
  'll','gg','prec','succ','preceq','succeq','subset','supset','subseteq','supseteq',
  'subsetneq','supsetneq','in','ni','notin','perp','parallel','mid','angle','infty',
  'to','rightarrow','leftarrow','leftrightarrow','Rightarrow','Leftarrow','Leftrightarrow',
  'longrightarrow','longleftarrow','longleftrightarrow','Longrightarrow','Longleftarrow',
  'Longleftrightarrow','mapsto','uparrow','downarrow','updownarrow','nearrow','searrow',
  'swarrow','nwarrow','rightharpoonup','rightharpoondown','rightleftharpoons',
  // 大算符与极限
  'sum','prod','coprod','int','iint','iiint','oint','bigcup','bigcap','bigsqcup','bigvee',
  'bigwedge','bigoplus','bigotimes','bigodot','lim','limsup','liminf','sup','inf','max','min',
  // 函数名
  'sin','cos','tan','cot','sec','csc','arcsin','arccos','arctan','sinh','cosh','tanh',
  'coth','ln','log','lg','exp','det','dim','ker','deg','gcd','arg','hom','Pr','varsupsetneq',
  // 定界符与构造
  'left','right','middle','big','Big','bigg','Bigg','bigl','bigr','Bigl','Bigr',
  'lbrace','rbrace','lceil','rceil','lfloor','rfloor','langle','rangle','Vert','vert',
  'frac','dfrac','tfrac','binom','dbinom','tbinom','sqrt','overline','underline','widehat',
  'widetilde','overbrace','underbrace','overrightarrow','overleftarrow','dot','ddot','dddot',
  'hat','bar','vec','tilde','acute','grave','breve','check','mathring',
  // 排版与间距
  'text','textrm','textbf','textit','textsf','texttt','mathrm','mathbf','mathit','mathcal',
  'mathbb','mathfrak','mathsf','mathtt','mathscr','boldsymbol','operatorname','mathop',
  'mathbin','mathrel','mathord','stackrel','overset','underset','substack','phantom','hphantom',
  'vphantom','smash','displaystyle','textstyle','scriptstyle','scriptscriptstyle',
  'quad','qquad','thinspace','medspace','thickspace','negthinspace','negmedspace',
  'negthickspace','enspace','hspace','limits','nolimits','notag','nonumber',
  'color','textcolor','boxed','fbox','cancel','bcancel','xcancel','sout',
  // 逻辑与集合杂项
  'forall','exists','nexists','neg','lnot','land','lor','implies','iff','models','vdash',
  'dashv','top','emptyset','varnothing','empty','complement','aleph','hbar','imath','jmath',
  'ell','wp','Re','Im','mho','prime','backprime','partial','nabla','triangledown','triangle',
  'square','blacksquare','diamondsuit','heartsuit','clubsuit','spadesuit','flat','natural',
  'sharp','checkmark','dagger','ddagger','S','P','copyright','dots','ldots','cdots','vdots',
  'ddots','dotsb','dotsc','dotsi','dotsm','dotso','bmod','pmod','mod','pod',
])

// \begin{...} 环境名白名单
const ENVIRONMENTS = new Set([
  'aligned','align','align*','gathered','gather','gather*','cases','matrix','pmatrix',
  'bmatrix','vmatrix','Bmatrix','Vmatrix','array','split','equation','equation*','alignat',
  'alignat*','smallmatrix',
])

// 非字母单字符转义（\, \; \\ \% 等）——合法 TeX 逐字放行
const PLAIN_ESCAPES = new Set([
  '\\\\','\\,','\\;','\\:','\\!','\\ ','\\{','\\}','\\%','\\&','\\#','\\$','\\_','\\|','\\.',
])

/** 剥掉代码围栏与行内代码，避免把代码内容当公式扫。
 *  围栏内容逐行置空（保留换行结构）——若用跨行正则整体删除，
 *  围栏前后两段会并成一行，既错位行号又造出幻影配对。 */
function stripCode(src) {
  const lines = src.split('\n')
  let inFence = false
  for (let i = 0; i < lines.length; i++) {
    if (/^\s*(```|~~~)/.test(lines[i])) {
      inFence = !inFence
      lines[i] = ''
      continue
    }
    if (inFence) lines[i] = ''
  }
  return lines.join('\n').replace(/`[^`\n]*`/g, '')
}

function* walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) {
      if (e.name === 'dist' || e.name === 'node_modules' || e.name === '.temp') continue
      yield* walk(p)
    } else if (e.isFile() && e.name.endsWith('.md')) {
      yield p
    }
  }
}

const problems = []
let files = 0
let mathSnippets = 0

for (const file of walk(DOCS)) {
  const rel = path.relative(ROOT, file)
  const src = stripCode(fs.readFileSync(file, 'utf8'))
  files++

  // ---- 定界符配对 ----
  // $$ 只有贴行边界（行首/行尾或一侧留白）或一侧是 CJK/全角标点时才算
  // display 定界符；两个行内公式紧邻的结合部（如 $MU_X,MU_Y$$X$，两侧都是
  // ASCII）不算，否则错 toggle。
  const isCJK = (c) => c !== '' && c.charCodeAt(0) > 0x2e7f
  const isDisplayDelim = (line, i) => {
    const before = i > 0 ? line[i - 1] : ''
    const after = i + 2 < line.length ? line[i + 2] : ''
    return (
      before === '' ||
      after === '' ||
      /\s/.test(before) ||
      /\s/.test(after) ||
      isCJK(before) ||
      isCJK(after)
    )
  }
  const lines = src.split('\n')
  let inDisplay = false
  lines.forEach((line, i) => {
    let displayCount = 0
    let noDisplay = ''
    const delimPos = []
    for (let pos = 0; pos < line.length; ) {
      const idx = line.indexOf('$$', pos)
      if (idx === -1) {
        noDisplay += line.slice(pos)
        break
      }
      if (isDisplayDelim(line, idx)) {
        displayCount++
        delimPos.push(idx)
        noDisplay += line.slice(pos, idx)
        pos = idx + 2
      } else {
        noDisplay += line.slice(pos, idx + 2)
        pos = idx + 2
      }
    }
    // 行内 $：剥掉 display $$ 后按未转义 $ 计数；配对失败即原样外漏
    const inlineDollars = (noDisplay.replace(/\\\$/g, '').match(/\$/g) || []).length
    if (inlineDollars % 2 !== 0 && !inDisplay) {
      problems.push(`${rel}:${i + 1} 行内 $ 不配对（${inlineDollars} 个）——公式可能原样显示`)
    }
    // display 定界符必须贴行边界（trim 后行首或行尾，多行块的开/闭行各占一侧）。
    // 嵌在段落中间的 $$A$$（如「$$A$$或者：$$B$$」连写）markdown-it-mathjax3
    // 不按块解析，会漏出字面 $$（利率理论/要素的国际流动曾实测中招）。
    for (const idx of delimPos) {
      const before = line.slice(0, idx)
      const after = line.slice(idx + 2)
      if (before.trim() !== '' && after.trim() !== '') {
        problems.push(
          `${rel}:${i + 1} $$ 行中嵌入——display 公式须独立成块（定界符贴行首/行尾，段内嵌用行内 $…$）`
        )
        break
      }
    }
    inDisplay = inDisplay !== (displayCount % 2 === 1)
  })
  if (inDisplay) {
    problems.push(`${rel}: 文件结束仍有未闭合的 $$ 块`)
  }

  // ---- 命令白名单 ----
  const cmdRe = /\\([a-zA-Z]+)|\\(.)/g
  let m
  while ((m = cmdRe.exec(src)) !== null) {
    const [full, word, single] = m
    if (word) {
      if (word === 'begin' || word === 'end') {
        const env = /^\\(?:begin|end)\{([^}]*)\}/.exec(src.slice(m.index))
        const name = env ? env[1] : '(空)'
        if (!ENVIRONMENTS.has(name)) {
          problems.push(`${rel}: 非法环境 \\${word}{${name}}`)
        }
      } else if (!WHITELIST.has(word)) {
        const line = src.slice(0, m.index).split('\n').length
        problems.push(`${rel}:${line} 非法命令 \\${word}（白名单外，常见如 \\infin 应为 \\infty）`)
      }
    } else if (!PLAIN_ESCAPES.has(full)) {
      const line = src.slice(0, m.index).split('\n').length
      problems.push(`${rel}:${line} 可疑转义 ${JSON.stringify(full)}`)
    }
  }
  mathSnippets += (src.match(/\$\$|\$[^$\n]*\$/g) || []).length
}

if (problems.length) {
  console.error(`check-latex：${problems.length} 处问题\n` + problems.map((p) => `  - ${p}`).join('\n'))
  process.exit(1)
}
console.log(`check-latex：${files} 个 md 文件、约 ${mathSnippets} 段公式全部通过`)
