import { normalizeDisplayUrl } from 'utils'

describe('normalizeDisplayUrl', () => {
  it('removes the http prefix', () => {
    const result = normalizeDisplayUrl(`https://www.domain.com/endpoint`)

    expect(result).toStrictEqual('www.domain.com/endpoint')
  })

  it('removes the https prefix', () => {
    const result = normalizeDisplayUrl('http://www.domain.com/endpoint')

    expect(result).toStrictEqual('www.domain.com/endpoint')
  })
})
