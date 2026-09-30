// PeopleNetwork（名人篇）：领域筛选、生年排序、影响网络双列与深链定位。
// 期望从 theme/data/people.ts 真库推导。
import { beforeEach, describe, expect, it } from 'vitest'
import PeopleNetwork from '../../docs/.vitepress/theme/components/PeopleNetwork.vue'
import { FIELD_LABELS, PEOPLE, PEOPLE_BY_ID } from '../../docs/.vitepress/theme/data/people'
import { flush, mountTheme } from './helpers'
import { clearHash } from './setup'

const birthOf = (p: (typeof PEOPLE)[number]) => parseInt(p.years, 10)
const cardsOf = (wrapper: ReturnType<typeof mountTheme>) => wrapper.findAll('.card')

beforeEach(clearHash)

describe('PeopleNetwork 渲染与筛选', () => {
  it('按出生年升序陈列全部人物，领域 chip 计数与真库一致', () => {
    const wrapper = mountTheme(PeopleNetwork)
    const expected = [...PEOPLE].sort((a, b) => birthOf(a) - birthOf(b))
    const cards = cardsOf(wrapper)
    expect(cards).toHaveLength(PEOPLE.length)
    expected.forEach((p, i) => {
      expect(cards[i].find('.p-name').text()).toBe(p.name)
      expect(cards[i].find('.p-years').text()).toBe(p.years)
      expect(cards[i].find('.p-school').text()).toBe(p.school)
      expect(cards[i].find('.p-theory').text()).toBe(p.theories[0])
    })

    const chips = wrapper.findAll('.chip')
    expect(chips).toHaveLength(Object.keys(FIELD_LABELS).length + 1)
    expect(chips[0].text()).toContain(String(PEOPLE.length))
    for (const [i, field] of Object.keys(FIELD_LABELS).entries()) {
      expect(chips[i + 1].text()).toContain(
        String(PEOPLE.filter((p) => p.field === field).length),
      )
    }
  })

  it('点击领域 chip 只留该领域人物', async () => {
    const wrapper = mountTheme(PeopleNetwork)
    const field = Object.keys(FIELD_LABELS)[0]
    await wrapper.findAll('.chip')[1].trigger('click')
    await flush()

    const cards = cardsOf(wrapper)
    expect(cards).toHaveLength(PEOPLE.filter((p) => p.field === field).length)
    const names = cards.map((c) => c.find('.p-name').text())
    for (const p of PEOPLE.filter((x) => x.field === field)) expect(names).toContain(p.name)
  })
})

describe('PeopleNetwork 详情', () => {
  it('点击卡片展开：生卒/国别/学派/领域、理论清单与代表作', async () => {
    const wrapper = mountTheme(PeopleNetwork)
    const person = [...PEOPLE].sort((a, b) => birthOf(a) - birthOf(b))[0]
    const card = cardsOf(wrapper)[0]
    await card.trigger('click')
    await flush()

    const detail = wrapper.find('.detail')
    expect(detail.find('h2').text()).toBe(person.name)
    expect(detail.find('.years').text()).toBe(person.years)
    expect(detail.find('.meta').text()).toContain(person.country)
    expect(detail.find('.meta').text()).toContain(FIELD_LABELS[person.field])
    expect(detail.findAll('.theories li').map((li) => li.text())).toEqual(person.theories)
    if (person.works) {
      expect(detail.findAll('.works li').map((li) => li.text())).toEqual(person.works)
    }
    // 再点同一张卡收起
    await card.trigger('click')
    await flush()
    expect(wrapper.find('.detail').exists()).toBe(false)
  })

  it('生卒生命线落在时代带上：left/width 按 (year-1500)/600 计算', async () => {
    const wrapper = mountTheme(PeopleNetwork)
    const person = PEOPLE_BY_ID['adam-smith'] // 1723-1790
    const card = cardsOf(wrapper).find((c) => c.find('.p-name').text() === person.name)!
    await card.trigger('click')
    await flush()

    const life = wrapper.find('.life')
    // 组件里 left/width 直接数字拼 '%'（不 toFixed），期望按同样算式对齐
    expect(life.attributes('style')).toContain(`left: ${((1723 - 1500) / 600) * 100}%`)
    expect(life.attributes('style')).toContain(`width: ${((1790 - 1723) / 600) * 100}%`)
  })

  it('影响网络：受谁影响 ← 、影响了谁 →，点箭头芯片跳到对方词条', async () => {
    const wrapper = mountTheme(PeopleNetwork)
    const person = PEOPLE.find((p) => p.influencedBy.length > 0 && p.influenced.length > 0)!
    const card = cardsOf(wrapper).find((c) => c.find('.p-name').text() === person.name)!
    await card.trigger('click')
    await flush()

    const chips = wrapper.findAll('.person-chip').map((c) => c.text())
    for (const id of person.influencedBy) {
      expect(chips).toContain(`← ${PEOPLE_BY_ID[id].name}`)
    }
    for (const id of person.influenced) {
      expect(chips).toContain(`${PEOPLE_BY_ID[id].name} →`)
    }

    const target = person.influencedBy[0]
    await wrapper
      .findAll('.person-chip')
      .find((c) => c.text() === `← ${PEOPLE_BY_ID[target].name}`)!
      .trigger('click')
    await flush()
    expect(wrapper.find('.detail h2').text()).toBe(PEOPLE_BY_ID[target].name)
  })

  it('影响清单为空时给出口头说明而非空列表', async () => {
    const wrapper = mountTheme(PeopleNetwork)
    const noRoot = PEOPLE.find((p) => p.influencedBy.length === 0)
    const noHeir = PEOPLE.find((p) => p.influenced.length === 0)
    expect(noRoot).toBeTruthy()
    expect(noHeir).toBeTruthy()

    if (noRoot) {
      const card = cardsOf(wrapper).find((c) => c.find('.p-name').text() === noRoot.name)!
      await card.trigger('click')
      await flush()
      expect(wrapper.find('.cols').text()).toContain('思想源头在此之前的传统。')
      await wrapper.find('.close').trigger('click')
    }
    if (noHeir) {
      const card = cardsOf(wrapper).find((c) => c.find('.p-name').text() === noHeir.name)!
      await card.trigger('click')
      await flush()
      expect(wrapper.find('.cols').text()).toContain('这条线索在后辈处拐了弯')
    }
  })
})

describe('PeopleNetwork 深链', () => {
  it('挂载时 #person-id 直达词条；hashchange 实时响应；未知 id 不开详情', async () => {
    const person = PEOPLE[0]
    window.location.hash = `#${person.id}`
    const wrapper = mountTheme(PeopleNetwork)
    await flush() // openFromHash 在 onMounted 里写状态，渲染在微任务里落地
    expect(wrapper.find('.detail h2').text()).toBe(person.name)

    const next = PEOPLE[5]
    window.location.hash = `#${next.id}`
    window.dispatchEvent(new Event('hashchange'))
    await flush()
    expect(wrapper.find('.detail h2').text()).toBe(next.name)

    // 未知 id 不动既有选中（openFromHash 只认库内人物，不做清空）
    window.location.hash = '#not-a-person'
    window.dispatchEvent(new Event('hashchange'))
    await flush()
    expect(wrapper.find('.detail h2').text()).toBe(next.name)
  })
})
