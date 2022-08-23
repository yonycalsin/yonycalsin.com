import * as React from 'react'
import { VStack } from '@chakra-ui/react'

import type { AchievementResponsePayload } from '~/typings/services/achievement/achievements'

import { Achievement } from './components/achievement'

export interface AchievementsProps {
  achievements: AchievementResponsePayload[]
}

export function Achievements(props: AchievementsProps) {
  const { achievements } = props

  return (
    <VStack spacing="3">
      {achievements.map(achievement => (
        <Achievement key={achievement.id} achievement={achievement} />
      ))}
    </VStack>
  )
}

export default Achievements
