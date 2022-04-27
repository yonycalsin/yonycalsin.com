import * as React from 'react'
import { VStack } from '@chakra-ui/react'

import type { IAchievement } from '~/module-types/api-rest/achievements'

import { Achievement } from './components/achievement'

export interface AchievementsProps {
  achievements: IAchievement[]
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
