import type { PageResponsePayload, ServerListResponse, ServerResponse } from 'typings/services'
import { API_ENDPOINTS, DEFAULT_HEADERS, formatResponse } from './shared'

export async function getAllPagesApi() {
  const response = await fetch(API_ENDPOINTS.ALL_PAGES, {
    method: 'GET',
    headers: DEFAULT_HEADERS,
  })

  const payload = await formatResponse<ServerListResponse<PageResponsePayload>>(response)

  return payload
}

export async function getPageApi(pageSlug: string) {
  const response = await fetch(API_ENDPOINTS.PAGE(pageSlug), {
    method: 'GET',
    headers: DEFAULT_HEADERS,
  })

  const payload = formatResponse<ServerResponse<PageResponsePayload>>(response)

  return payload
}
