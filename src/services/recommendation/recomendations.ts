import type { ServerListResponse } from '~/typings/services'
import type { RecommendationResponsePayload } from '~/typings/services/recommendation/recommendations'

import { defaultHeaders, formatResponse } from '../shared'

import { recommendationApiEndpoints } from './utils/recomendation-api-endpoints'

export async function getFeaturedRecommendations() {
  const response = await fetch(recommendationApiEndpoints.FEATURED_RECOMMENDATIONS, {
    method: 'GET',
    headers: defaultHeaders,
  })

  const payload = await formatResponse<ServerListResponse<RecommendationResponsePayload>>(response)

  return payload
}
