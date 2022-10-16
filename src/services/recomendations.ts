import type { RecommendationResponsePayload, ServerListResponse } from 'typings/services'
import { API_ENDPOINTS, DEFAULT_HEADERS, formatResponse } from './shared'

export async function getFeaturedRecommendations() {
  const response = await fetch(API_ENDPOINTS.FEATURED_RECOMMENDATIONS, {
    method: 'GET',
    headers: DEFAULT_HEADERS,
  })

  const payload = await formatResponse<ServerListResponse<RecommendationResponsePayload>>(response)

  return payload
}
