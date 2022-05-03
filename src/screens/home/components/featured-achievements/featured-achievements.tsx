import * as React from 'react'
import { useQuery } from 'react-query'
import { Box, Text } from '@chakra-ui/react'

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
      <SectionHeader title="Logros">
        <Text mt="3">Logros destacados que he conseguido a lo largo de mi carrera.</Text>
      </SectionHeader>
      <br />
      <Achievements achievements={achievements} />
    </Box>
  )
}
