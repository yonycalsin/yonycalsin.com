import { badgeColors, getRandomBadgeColors } from '../get-random-colors'

describe('Utils / getRandomBadgeColors', () => {
  it('gets random badge color', () => {
    const result = getRandomBadgeColors()

    expect(badgeColors).toContain(result)
  })
})
