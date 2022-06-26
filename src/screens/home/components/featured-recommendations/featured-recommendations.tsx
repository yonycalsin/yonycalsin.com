import * as React from 'react'
import { useQuery } from 'react-query'
import { Box } from '@chakra-ui/react'

import { Recommendations } from '~/components/recommendations'
import { SectionHeader } from '~/components/section/section-header'
import { QUERY_KEY_FEATURED_RECOMMENDATIONS } from '~/constants/query-keys'
import type { IRecommendationQueryWithMeta } from '~/module-types/api-rest/recommendations'

export function FeaturedRecommendations() {
  const queryResult = useQuery<IRecommendationQueryWithMeta>(QUERY_KEY_FEATURED_RECOMMENDATIONS, {
    staleTime: Infinity,
  })

  const recommendations = queryResult.data?.data ?? []

  return (
    <Box py="3">
      <SectionHeader title="Recomendaciones" />
      {/* TODO: use a padding or margin instead of this */}
      <Box py="3" />
      <Recommendations recommendations={recommendations} />
    </Box>
  )
}
