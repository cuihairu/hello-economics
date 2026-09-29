// theme/data 测试共享工具：站点根路径 → docs/ 下源文件存在性解析
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
export const DOCS = path.join(REPO_ROOT, 'docs')

/**
 * courses.ts 约定：link 写站点根路径（不含 base、不含 .md）。
 * 转成磁盘路径检查源文件在位；带锚点的链接去锚点后检查。
 */
export const linkToMd = (link) => {
  if (typeof link !== 'string' || !link.startsWith('/')) return null
  return path.join(DOCS, `${link.slice(1).split('#')[0]}.md`)
}

export const linkExists = (link) => {
  const md = linkToMd(link)
  return !!md && fs.existsSync(md)
}

/** 站内 md 文件集合（用于 orphan 反向核对），返回相对 docs/ 的 POSIX 路径 */
export const walkMd = (dir = DOCS, acc = []) => {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith('.') || e.name === 'node_modules') continue
    const p = path.join(dir, e.name)
    if (e.isDirectory()) walkMd(p, acc)
    else if (e.name.endsWith('.md')) acc.push(path.relative(DOCS, p).split(path.sep).join('/'))
  }
  return acc
}

/** 汇总断言失败项，一次性报全（避免逐条 test 只见第一条）；desc 给出可读描述 */
export const collect = (label, items, fn, desc = (x) => JSON.stringify(x)) => {
  const bad = items.filter(fn)
  return bad.length ? `${label} ×${bad.length}：${bad.slice(0, 5).map(desc).join(' | ')}${bad.length > 5 ? ' …' : ''}` : ''
}
