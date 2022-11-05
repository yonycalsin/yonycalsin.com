import type { RecommendationResponsePayload, ServerListResponse } from 'typings/services'
import { TIMINGS } from 'utils/constants'
import { API_ENDPOINTS, DEFAULT_HEADERS, formatResponse } from './shared'

export async function getFeaturedRecommendationsApi() {
  const response = await fetch(API_ENDPOINTS.FEATURED_RECOMMENDATIONS, {
    method: 'GET',
    headers: DEFAULT_HEADERS,
    next: {
      revalidate: TIMINGS.REVALIDATE_STATIC_PAGES_TIME,
    },
  })

  const payload = await formatResponse<ServerListResponse<RecommendationResponsePayload>>(response)

  return payload
}
