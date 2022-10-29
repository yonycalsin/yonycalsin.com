import type { ProjectResponsePayload, ServerListResponse } from 'typings/services'
import { TIMINGS } from 'utils/constants'
import { API_ENDPOINTS, DEFAULT_HEADERS, formatResponse } from './shared'

export async function getAllProjectsApi() {
  const response = await fetch(API_ENDPOINTS.ALL_PROJECTS, {
    method: 'GET',
    headers: DEFAULT_HEADERS,
    next: {
      revalidate: TIMINGS.REVALIDATE_STATIC_PAGES_TIME,
    },
  })

  const payload = await formatResponse<ServerListResponse<ProjectResponsePayload>>(response)

  return payload
}

export async function getPinnedProjectsApi() {
  const response = await fetch(API_ENDPOINTS.PINNED_PROJECTS, {
    method: 'GET',
    headers: DEFAULT_HEADERS,
    next: {
      revalidate: TIMINGS.REVALIDATE_STATIC_PAGES_TIME,
    },
  })

  const payload = await formatResponse<ServerListResponse<ProjectResponsePayload>>(response)

  return payload
}
