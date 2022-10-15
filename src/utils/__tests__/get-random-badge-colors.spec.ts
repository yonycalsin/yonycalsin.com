import { getRandomBadgeColors } from 'utils'
import { CHAKRA_BADGE_COLORS } from 'utils/constants'

describe('getRandomBadgeColors', () => {
  it('gets random badge color', () => {
    const result = getRandomBadgeColors()

    expect(CHAKRA_BADGE_COLORS).toContain(result)
  })
})
