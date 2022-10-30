import * as React from 'react'
import { useQuery } from '@tanstack/react-query'

import type { RecommendationResponsePayload, ServerListResponse } from 'typings/services'
import { getFeaturedRecommendationsApi } from 'services'
import { API_ENDPOINTS } from 'services/shared'
import { LoaderBox, Recommendations, SectionHeader } from 'components'

function FeaturedRecommendations() {
  const queryResult = useQuery<ServerListResponse<RecommendationResponsePayload>>(
    [API_ENDPOINTS.FEATURED_RECOMMENDATIONS],
    () => getFeaturedRecommendationsApi(),
    { staleTime: Infinity },
  )

  if (queryResult.isLoading) {
    return <LoaderBox />
  }

  const recommendations = queryResult.data?.data ?? []

  return (
    <div className="py-3">
      <SectionHeader title="Recommendations" className="mb-6" />
      <Recommendations recommendations={recommendations} />
    </div>
  )
}

export default FeaturedRecommendations
