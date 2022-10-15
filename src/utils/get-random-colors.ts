import random from 'just-random'

import { CHAKRA_BADGE_COLORS } from './constants'

function getRandomBadgeColors() {
  return random(CHAKRA_BADGE_COLORS)
}

export default getRandomBadgeColors
