import { formatRequestUrl } from 'services/shared'

const MOCK_DOMAIN = 'https://www.yonycalsin.com'

function concatQueryParams(value: string) {
  return `${MOCK_DOMAIN}/?${value}`
}

describe('formatRequestUrl', () => {
  it('formats with string values', () => {
    const result = formatRequestUrl(MOCK_DOMAIN, {
      sort_by: 'desc',
      search_term: 'Article Term',
    })

    const expectedResult = concatQueryParams('sort_by=desc&search_term=Article+Term')

    expect(result).toStrictEqual(expectedResult)
  })

  it('formats with number values', () => {
    const result = formatRequestUrl(MOCK_DOMAIN, {
      page: 1,
      limit: 54654654,
      price_max: BigInt(9007199254740991),
    })

    const expectedResult = concatQueryParams('page=1&limit=54654654&price_max=9007199254740991')

    expect(result).toStrictEqual(expectedResult)
  })

  it('formats with boolean values', () => {
    const result = formatRequestUrl(MOCK_DOMAIN, {
      is_pinned: false,
      is_draft: true,
    })

    const expectedResult = concatQueryParams('is_pinned=false&is_draft=true')

    expect(result).toStrictEqual(expectedResult)
  })

  it('formats with array values', () => {
    const result = formatRequestUrl(MOCK_DOMAIN, {
      category_ids: [154, 'uuid', 87, 4, 5],
      statuses_ids: [],
    })

    const expectedResult = concatQueryParams(
      'category_ids=154&category_ids=uuid&category_ids=87&category_ids=4&category_ids=5',
    )

    expect(result).toStrictEqual(expectedResult)
  })

  it('formats with empty object', () => {
    const result = formatRequestUrl(MOCK_DOMAIN, {})

    expect(result).toStrictEqual(MOCK_DOMAIN)
  })
})
