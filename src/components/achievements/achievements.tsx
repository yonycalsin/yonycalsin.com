import * as React from 'react'
import { VStack } from '@chakra-ui/react'

import type { AchievementsProps } from 'typings/components'
import { Achievement } from './components'

function Achievements(props: AchievementsProps) {
  const { achievements } = props

  return (
    <VStack spacing="3" role="list" aria-label="List of achievements">
      {achievements.map(achievement => (
        <Achievement key={achievement.id} achievement={achievement} />
      ))}
    </VStack>
  )
}

export default Achievements
