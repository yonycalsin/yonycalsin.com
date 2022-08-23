import type { ServerListResponse } from '~/typings/services'
import type { ProjectResponsePayload } from '~/typings/services/project/projects'

import { defaultHeaders, formatResponse } from '../shared'

import { projectApiEndpoints } from './utils/project-api-endpoints'

export async function getAllProjects() {
  const response = await fetch(projectApiEndpoints.ALL_PROJECTS, {
    method: 'GET',
    headers: defaultHeaders,
  })

  const payload = formatResponse<ServerListResponse<ProjectResponsePayload>>(response)

  return payload
}

export async function getPinnedProjects() {
  const response = await fetch(projectApiEndpoints.PINNED_PROJECTS, {
    method: 'GET',
    headers: defaultHeaders,
  })

  const payload = await formatResponse<ServerListResponse<ProjectResponsePayload>>(response)

  return payload
}
