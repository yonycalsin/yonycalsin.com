import * as React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'

import { Achievements } from '~/components/achievements'
import { SectionHeader } from '~/components/section/section-header'
import { getFeaturedAchievements } from '~/services/achievement/achievements'
import { achievementApiEndpoints } from '~/services/achievement/utils/achievement-api-endpoints'
import type { ServerListResponse } from '~/typings/services'
import type { AchievementResponsePayload } from '~/typings/services/achievement/achievements'

export function FeaturedAchievements() {
  const queryResult = useQuery<ServerListResponse<AchievementResponsePayload>>(
    [achievementApiEndpoints.FEATURED_ACHIEVEMENTS],
    () => getFeaturedAchievements(),
    { staleTime: Infinity },
  )

  const achievements = queryResult.data?.data ?? []

  return (
    <Box py="3">
      <SectionHeader title="Achievements">
        <Text mt="3">Featured achievements that I have achieved along my career.</Text>
      </SectionHeader>
      <br />
      <Achievements achievements={achievements} />
    </Box>
  )
}
