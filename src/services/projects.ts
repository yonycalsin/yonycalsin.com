import type { ProjectResponsePayload, ServerListResponse } from 'typings/services'
import { API_ENDPOINTS, DEFAULT_HEADERS, formatResponse } from './shared'

export async function getAllProjects() {
  const response = await fetch(API_ENDPOINTS.ALL_PROJECTS, {
    method: 'GET',
    headers: DEFAULT_HEADERS,
  })

  const payload = await formatResponse<ServerListResponse<ProjectResponsePayload>>(response)

  return payload
}

export async function getPinnedProjects() {
  const response = await fetch(API_ENDPOINTS.PINNED_PROJECTS, {
    method: 'GET',
    headers: DEFAULT_HEADERS,
  })

  const payload = await formatResponse<ServerListResponse<ProjectResponsePayload>>(response)

  return payload
}
