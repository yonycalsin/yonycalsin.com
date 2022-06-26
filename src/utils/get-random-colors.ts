import random from 'just-random'

export function getRandomBadgeColors() {
  return random([
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
  ])
}
