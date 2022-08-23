import * as React from 'react'
import { Box } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'

import { Recommendations } from '~/components/recommendations'
import { SectionHeader } from '~/components/section/section-header'
import { getFeaturedRecommendations } from '~/services/recommendation/recomendations'
import { recommendationApiEndpoints } from '~/services/recommendation/utils/recomendation-api-endpoints'
import type { ServerListResponse } from '~/typings/services'
import type { RecommendationResponsePayload } from '~/typings/services/recommendation/recommendations'

export function FeaturedRecommendations() {
  const queryResult = useQuery<ServerListResponse<RecommendationResponsePayload>>(
    [recommendationApiEndpoints.FEATURED_RECOMMENDATIONS],
    () => getFeaturedRecommendations(),
    { staleTime: Infinity },
  )

  const recommendations = queryResult.data?.data ?? []

  return (
    <Box py="3">
      <SectionHeader title="Recommendations" />
      {/* TODO: use a padding or margin instead of this */}
      <Box py="3" />
      <Recommendations recommendations={recommendations} />
    </Box>
  )
}
