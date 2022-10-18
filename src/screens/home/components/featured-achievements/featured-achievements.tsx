import * as React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'

import type { AchievementResponsePayload, ServerListResponse } from 'typings/services'
import { getFeaturedAchievementsApi } from 'services'
import { API_ENDPOINTS } from 'services/shared'
import { Achievements, LoaderBox, SectionHeader } from 'components'

function FeaturedAchievements() {
  const queryResult = useQuery<ServerListResponse<AchievementResponsePayload>>(
    [API_ENDPOINTS.FEATURED_ACHIEVEMENTS],
    () => getFeaturedAchievementsApi(),
    { staleTime: Infinity },
  )

  if (queryResult.isLoading) {
    return <LoaderBox />
  }

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

export default FeaturedAchievements
