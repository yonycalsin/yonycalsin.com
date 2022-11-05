import type { AchievementResponsePayload, ServerListResponse } from 'typings/services'
import { TIMINGS } from 'utils/constants'
import { API_ENDPOINTS, DEFAULT_HEADERS, formatResponse } from './shared'

async function getAllAchievementsApi() {
  const response = await fetch(API_ENDPOINTS.ALL_ACHIEVEMENTS, {
    method: 'GET',
    headers: DEFAULT_HEADERS,
    next: {
      revalidate: TIMINGS.REVALIDATE_STATIC_PAGES_TIME,
    },
  })

  const payload = await formatResponse<ServerListResponse<AchievementResponsePayload>>(response)

  return payload
}

async function getFeaturedAchievementsApi() {
  const response = await fetch(API_ENDPOINTS.FEATURED_ACHIEVEMENTS, {
    method: 'GET',
    headers: DEFAULT_HEADERS,
    next: {
      revalidate: TIMINGS.REVALIDATE_STATIC_PAGES_TIME,
    },
  })

  const payload = formatResponse<ServerListResponse<AchievementResponsePayload>>(response)

  return payload
}

export { getAllAchievementsApi, getFeaturedAchievementsApi }
