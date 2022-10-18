import type { AchievementResponsePayload, ServerListResponse } from 'typings/services'
import { API_ENDPOINTS, DEFAULT_HEADERS, formatResponse } from './shared'

async function getAllAchievementsApi() {
  const response = await fetch(API_ENDPOINTS.ALL_ACHIEVEMENTS, {
    method: 'GET',
    headers: DEFAULT_HEADERS,
  })

  const payload = await formatResponse<ServerListResponse<AchievementResponsePayload>>(response)

  return payload
}

async function getFeaturedAchievementsApi() {
  const response = await fetch(API_ENDPOINTS.FEATURED_ACHIEVEMENTS, {
    method: 'GET',
    headers: DEFAULT_HEADERS,
  })

  const payload = formatResponse<ServerListResponse<AchievementResponsePayload>>(response)

  return payload
}

export { getAllAchievementsApi, getFeaturedAchievementsApi }
