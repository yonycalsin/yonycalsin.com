import * as React from 'react'
import { Text, VStack } from '@chakra-ui/react'
import dayjs from 'dayjs'

import { Typography } from '~/components/typography/typography'
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
        <Text fontSize="sm">- {dayjs(achievement.date).format(dateFormats.HUMAN_DATE)}</Text>
      </VStack>
      <Typography className="hidden lg:block italic" variant="h6" fontWeight="light">
        -{dayjs(achievement.date).format(dateFormats.HUMAN_DATE)}
      </Typography>
    </div>
  )
}

export default Achievement
