import type { ServerListResponse } from '~/typings/services'
import type { AchievementResponsePayload } from '~/typings/services/achievement/achievements'

import { defaultHeaders, formatResponse } from '../shared'

import { achievementApiEndpoints } from './utils/achievement-api-endpoints'

export async function getAllAchievements() {
  const response = await fetch(achievementApiEndpoints.ALL_ACHIEVEMENTS, {
    method: 'GET',
    headers: defaultHeaders,
  })

  const payload = await formatResponse<ServerListResponse<AchievementResponsePayload>>(response)

  return payload
}

export async function getFeaturedAchievements() {
  const response = await fetch(achievementApiEndpoints.FEATURED_ACHIEVEMENTS, {
    method: 'GET',
    headers: defaultHeaders,
  })

  const payload = formatResponse<ServerListResponse<AchievementResponsePayload>>(response)

  return payload
}
