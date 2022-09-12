import random from 'just-random'

export const badgeColors = [
  'red',
  'orange',
  'yellow',
  'green',
  'teal',
  'blue',
  'cyan',
  'purple',
  'pink',
  'linkedin',
  'facebook',
  'messenger',
  'whatsapp',
  'twitter',
  'telegram',
  'primary',
  'secondary',
]

export function getRandomBadgeColors() {
  return random(badgeColors)
}
