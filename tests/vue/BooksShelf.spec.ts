// BooksShelf（名著书架）：按流派的筛选、年份排序、详情开合、封面兜底与作者链接解析。
// 期望从 theme/data/books.ts / people.ts 真库推导。
import { describe, expect, it } from 'vitest'
import BooksShelf from '../../docs/.vitepress/theme/components/BooksShelf.vue'
import { BOOKS, SCHOOL_LABELS } from '../../docs/.vitepress/theme/data/books'
import { PEOPLE_BY_ID } from '../../docs/.vitepress/theme/data/people'
import { flush, mountTheme, siteHref } from './helpers'

const cardsOf = (wrapper: ReturnType<typeof mountTheme>) => wrapper.findAll('.card')

describe('BooksShelf 渲染与筛选', () => {
  it('全部书籍按出版年升序陈列，chip 计数与真库一致', () => {
    const wrapper = mountTheme(BooksShelf)
    const expected = [...BOOKS].sort((a, b) => a.year - b.year)
    const cards = cardsOf(wrapper)
    expect(cards).toHaveLength(BOOKS.length)
    expected.forEach((b, i) => {
      expect(cards[i].find('.b-title').text()).toBe(b.title)
      expect(cards[i].find('.b-year').text()).toBe(String(b.year))
      expect(cards[i].find('.b-author').text()).toBe(b.authors.map((a) => a.name).join('、'))
    })

    const chips = wrapper.findAll('.chip')
    expect(chips).toHaveLength(Object.keys(SCHOOL_LABELS).length + 1)
    expect(chips[0].text()).toContain(String(BOOKS.length))
    for (const [i, school] of Object.keys(SCHOOL_LABELS).entries()) {
      expect(chips[i + 1].text()).toContain(
        String(BOOKS.filter((b) => b.school === school).length),
      )
    }
  })

  it('点击流派 chip 只留该流派书籍', async () => {
    const wrapper = mountTheme(BooksShelf)
    const school = Object.keys(SCHOOL_LABELS)[1]
    await wrapper.findAll('.chip')[2].trigger('click')
    await flush()
    expect(wrapper.findAll('.chip')[2].classes()).toContain('is-active')

    const cards = cardsOf(wrapper)
    expect(cards).toHaveLength(BOOKS.filter((b) => b.school === school).length)
    const titles = cards.map((c) => c.find('.b-title').text())
    for (const b of BOOKS.filter((x) => x.school === school)) expect(titles).toContain(b.title)
  })
})

describe('BooksShelf 详情', () => {
  it('点击卡片展开详情：书名、年份、流派与作者；再点同一张卡收起', async () => {
    const wrapper = mountTheme(BooksShelf)
    const card = cardsOf(wrapper)[0]
    await card.trigger('click')
    await flush()

    const book = [...BOOKS].sort((a, b) => a.year - b.year)[0]
    const detail = wrapper.find('.detail')
    expect(detail.exists()).toBe(true)
    expect(detail.find('h2').text()).toBe(`《${book.title}》`)
    expect(detail.find('.year').text()).toBe(String(book.year))
    expect(detail.find('.meta').text()).toContain(SCHOOL_LABELS[book.school])
    expect(card.classes()).toContain('is-active')

    await card.trigger('click')
    await flush()
    expect(wrapper.find('.detail').exists()).toBe(false)
  })

  it('作者链接解析：站内人物 → /people#id，只有 wiki 的走维基，两者皆无的纯文本', async () => {
    const wrapper = mountTheme(BooksShelf)
    const withPeople = BOOKS.find((b) =>
      b.authors.some((a) => a.peopleId && PEOPLE_BY_ID[a.peopleId]),
    )!
    const withWikiOnly = BOOKS.find((b) =>
      b.authors.some((a) => !a.peopleId && a.wiki),
    )!
    const withNeither = BOOKS.find((b) =>
      b.authors.some((a) => !a.peopleId && !a.wiki),
    )
    expect(withPeople).toBeTruthy()
    expect(withWikiOnly).toBeTruthy()

    const open = async (id: string) => {
      const card = cardsOf(wrapper).find((c) =>
        c.findAll('.b-title').length && c.find('.b-title').text() === BOOKS.find((b) => b.id === id)!.title,
      )!
      // 详情是全局单份，先收起再开下一本，避免读到上一本的作者区
      if (wrapper.find('.detail').exists()) await wrapper.find('.close').trigger('click')
      await card.trigger('click')
      await flush()
    }

    await open(withPeople.id)
    const peopleAuthor = withPeople.authors.find((a) => a.peopleId && PEOPLE_BY_ID[a.peopleId])!
    const internalLink = wrapper
      .findAll('.authors a')
      .find((a) => a.text() === peopleAuthor.name)
    expect(internalLink).toBeTruthy()
    expect(internalLink!.attributes('href')).toBe(siteHref(`/people#${peopleAuthor.peopleId}`))
    expect(internalLink!.attributes('title')).toBe('查看站内词条')

    await open(withWikiOnly.id)
    const wikiAuthor = withWikiOnly.authors.find((a) => !a.peopleId && a.wiki)!
    const wikiLink = wrapper.findAll('.authors a').find((a) => a.text() === wikiAuthor.name)
    expect(wikiLink!.attributes('href')).toBe(wikiAuthor.wiki)
    expect(wikiLink!.attributes('title')).toBe('查看维基百科')

    if (withNeither) {
      await open(withNeither.id)
      const plain = withNeither.authors.find((a) => !a.peopleId && !a.wiki)!
      const links = wrapper.findAll('.authors a').map((a) => a.text())
      expect(links).not.toContain(plain.name)
      expect(wrapper.find('.authors').text()).toContain(plain.name)
    }
  })
})

describe('BooksShelf 封面', () => {
  it('有 Open Library 直链的用直链，没有的用本地占位 SVG（补 base）', () => {
    const wrapper = mountTheme(BooksShelf)
    const cards = cardsOf(wrapper)
    const expected = [...BOOKS].sort((a, b) => a.year - b.year)
    expected.forEach((b, i) => {
      expect(cards[i].find('img.cover').attributes('src')).toBe(b.cover ?? siteHref(b.fallback))
    })
  })

  it('直链加载失败（@error）切到本地占位 SVG', async () => {
    const withCover = [...BOOKS].sort((a, b) => a.year - b.year).find((b) => b.cover)!
    const wrapper = mountTheme(BooksShelf)
    const card = cardsOf(wrapper).find((c) =>
      c.find('.b-title').text() === withCover.title,
    )!
    expect(card.find('img.cover').attributes('src')).toBe(withCover.cover)

    await card.find('img.cover').trigger('error')
    await flush()
    expect(card.find('img.cover').attributes('src')).toBe(siteHref(withCover.fallback))
  })
})
