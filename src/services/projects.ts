import type { ProjectResponsePayload, ServerListResponse } from 'typings/services'
import { API_ENDPOINTS, DEFAULT_HEADERS, formatResponse } from './shared'

export async function getAllProjectsApi() {
  const response = await fetch(API_ENDPOINTS.ALL_PROJECTS, {
    method: 'GET',
    headers: DEFAULT_HEADERS,
  })

  const payload = await formatResponse<ServerListResponse<ProjectResponsePayload>>(response)

  return payload
}

export async function getPinnedProjectsApi() {
  const response = await fetch(API_ENDPOINTS.PINNED_PROJECTS, {
    method: 'GET',
    headers: DEFAULT_HEADERS,
  })

  const payload = await formatResponse<ServerListResponse<ProjectResponsePayload>>(response)

  return payload
}
