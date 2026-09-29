// courses.ts——课程目录唯一数据源（侧边栏/课程条/首页书架三处消费）的回归防线。
// VitePress build 不校验侧边栏死链，这里补上：链接存在性 + 章号连续 + orphan 反向核对。
import { test } from 'node:test'
import assert from 'node:assert/strict'
import {
  COURSES, REFERENCE_COURSE, ALL_COURSES, SHELF, SITE_INDEX,
  courseById, sidebarFor, chapterCount,
} from '../docs/.vitepress/theme/data/courses.ts'
import { linkExists, walkMd } from './helpers.mjs'

const catalogLinks = (course) => [
  course.readme,
  ...course.aux.map((a) => a.link),
  ...course.chapters.flatMap((g) => g.items.map((i) => i.link)),
]

test('课程 id / base 唯一且格式规范', () => {
  const ids = ALL_COURSES.map((c) => c.id)
  assert.equal(new Set(ids).size, ids.length, `id 重复：${ids.join()}`)
  const bases = ALL_COURSES.map((c) => c.base)
  assert.equal(new Set(bases).size, bases.length, `base 重复：${bases.join()}`)
  for (const c of ALL_COURSES) {
    assert.ok(c.base.startsWith('/') && !c.base.endsWith('/'), `${c.id} base 须 /xxx 无尾斜杠`)
  }
})

test('全部目录链接（aux + 章节 + readme）指向存在的源文件', () => {
  for (const c of ALL_COURSES) {
    for (const link of catalogLinks(c)) {
      assert.ok(linkExists(link), `${c.id} 死链：${link}`)
    }
  }
  for (const item of SITE_INDEX) {
    assert.ok(linkExists(item.link), `SITE_INDEX 死链：${item.link}`)
  }
})

test('目录链接格式：无 .md 后缀、无 //、无锚点', () => {
  for (const c of ALL_COURSES) {
    for (const link of catalogLinks(c)) {
      assert.ok(!link.includes('.md'), `${c.id} link 带 .md：${link}`)
      assert.ok(!link.includes('//'), `${c.id} link 双斜杠：${link}`)
      assert.ok(!link.includes('#'), `${c.id} link 带锚点：${link}`)
    }
  }
})

test('章号跨分组连续 1..N（socialist 允许「导论」在前，math 无 H1 章号也按 1..N 记）', () => {
  for (const c of ALL_COURSES) {
    const items = c.chapters.flatMap((g) => g.items)
    const nums = items
      .filter((i) => /^\d+ · /.test(i.text))
      .map((i) => Number(i.text.split(' · ')[0]))
    if (!nums.length) continue
    assert.deepEqual(nums, Array.from({ length: nums.length }, (_, k) => k + 1),
      `${c.id} 章号不连续：${nums.join(',')}`)
    const unlabeled = items.filter((i) => !/^\d+ · /.test(i.text)).map((i) => i.text)
    if (c.id === 'socialist') {
      assert.deepEqual(unlabeled, ['导论'], 'socialist 仅允许「导论」不带章号')
    } else {
      assert.deepEqual(unlabeled, [], `${c.id} 存在不带章号的条目：${unlabeled.join(',')}`)
    }
  }
})

test('docs/<课程>/ 下无孤儿章节（磁盘 md 均已被目录收录）', () => {
  const known = new Set(
    ALL_COURSES.flatMap((c) => catalogLinks(c).map((l) => l.slice(1))),
  )
  const orphans = walkMd()
    .filter((f) => ALL_COURSES.some((c) => f.startsWith(c.base.slice(1) + '/')))
    .filter((f) => !known.has(f.replace(/\.md$/, '')))
  assert.deepEqual(orphans, [], `未进课程目录的孤儿文件：${orphans.join(', ')}`)
})

test('首页书架 SHELF：courseId 可解析、覆盖全部课程、书架条目与章节数一致', () => {
  const shelfCourseIds = new Set(SHELF.map((t) => t.courseId))
  for (const id of shelfCourseIds) assert.ok(courseById(id), `SHELF 未知课程：${id}`)
  // western 拆微观/宏观两 tab，其余课程各一 tab，外加 index 汇总 tab
  assert.equal(SHELF.length, COURSES.length + 2, 'SHELF 应为「每课一 tab + western 多拆一个 + index」')
  for (const t of SHELF) {
    const links = t.groups.flatMap((g) => g.items.map((i) => i.link))
    for (const link of links) assert.ok(linkExists(link), `SHELF[${t.id}] 死链：${link}`)
  }
})

test('sidebarFor / chapterCount 与数据一致', () => {
  for (const c of ALL_COURSES) {
    const groups = sidebarFor(c.id)
    const n = groups.reduce((t, g) => t + g.items.length, 0)
    assert.equal(n, chapterCount(c.id) + c.aux.length, `${c.id} 侧边栏条数 ≠ 章节 + aux`)
  }
  assert.deepEqual(sidebarFor('no-such-course'), [])
})
