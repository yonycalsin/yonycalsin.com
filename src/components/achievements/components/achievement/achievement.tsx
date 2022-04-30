import * as React from 'react'
import { Text, VStack } from '@chakra-ui/react'
import dayjs from 'dayjs'

import type { IAchievement } from '~/module-types/api-rest/achievements'
import { dateFormats } from '~/utils/constants'

import { AchievementTypeIllustration } from './achievement-type-illustration'

export interface AchievementProps {
  achievement: IAchievement
}

export function Achievement(props: AchievementProps) {
  const { achievement } = props

  return (
    <div className="grid grid-cols-[50px_1fr] lg:grid-cols-[90px_1fr_150px] gap-6 items-center">
      <div>
        <AchievementTypeIllustration type={achievement.type} />
      </div>
      <VStack spacing="1" alignItems="flex-start">
        <Text fontWeight="bold">{achievement.title}</Text>
        <Text fontSize="sm" textColor="gray">
          {achievement.shortDescription}
        </Text>
        <Text
          display={{
            base: 'block',
            lg: 'none',
          }}
          fontSize="sm"
          fontStyle="italic"
        >
          - {dayjs(achievement.date).format(dateFormats.HUMAN_DATE)}
        </Text>
      </VStack>
      <Text
        fontStyle="italic"
        display={{
          base: 'none',
          lg: 'block',
        }}
        fontWeight="light"
      >
        -{dayjs(achievement.date).format(dateFormats.HUMAN_DATE)}
      </Text>
    </div>
  )
}

export default Achievement
