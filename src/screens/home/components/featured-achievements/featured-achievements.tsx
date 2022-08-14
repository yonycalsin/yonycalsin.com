import * as React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'

import { Achievements } from '~/components/achievements'
import { SectionHeader } from '~/components/section/section-header'
import type { IAchievementQueryWithMeta } from '~/module-types/api-rest/achievements'
import { queryKeys } from '~/utils/constants'

export function FeaturedAchievements() {
  const queryResult = useQuery<IAchievementQueryWithMeta>(queryKeys.FEATURED_ACHIEVEMENTS, {
    staleTime: Infinity,
  })

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
