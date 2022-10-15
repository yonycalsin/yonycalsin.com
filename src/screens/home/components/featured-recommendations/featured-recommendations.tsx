import * as React from 'react'
import { Box } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'

import type { RecommendationResponsePayload, ServerListResponse } from 'typings/services'
import { getFeaturedRecommendations } from 'services'
import { API_ENDPOINTS } from 'services/shared'
import { Recommendations, SectionHeader } from 'components'

function FeaturedRecommendations() {
  const queryResult = useQuery<ServerListResponse<RecommendationResponsePayload>>(
    [API_ENDPOINTS.FEATURED_RECOMMENDATIONS],
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

export default FeaturedRecommendations
