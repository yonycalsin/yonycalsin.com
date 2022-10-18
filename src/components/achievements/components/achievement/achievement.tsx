import * as React from 'react'
import { Grid, Text, VStack } from '@chakra-ui/react'
import dayjs from 'dayjs'

import type { AchievementProps } from 'typings/components'
import { DATE_FORMATS } from 'utils/constants'
import AchievementTypeIllustration from './achievement-type-illustration'

function Achievement(props: AchievementProps) {
  const { achievement } = props

  return (
    <Grid
      templateColumns={{
        base: 'var(--yony-space-14) 1fr',
        lg: 'var(--yony-space-20) 1fr var(--yony-space-24)',
      }}
      gap="6"
      alignItems="center"
      role="listitem"
    >
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
          - {dayjs(achievement.date).format(DATE_FORMATS.HUMAN_DATE)}
        </Text>
      </VStack>
      <Text
        fontStyle="italic"
        fontSize="sm"
        display={{
          base: 'none',
          lg: 'block',
        }}
        fontWeight="light"
      >
        -{dayjs(achievement.date).format(DATE_FORMATS.HUMAN_DATE)}
      </Text>
    </Grid>
  )
}

export default Achievement
