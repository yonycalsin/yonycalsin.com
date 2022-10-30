import type { PageResponsePayload, ServerListResponse, ServerResponse } from 'typings/services'
import { TIMINGS } from 'utils/constants'
import { API_ENDPOINTS, DEFAULT_HEADERS, formatResponse } from './shared'

async function getAllPagesApi() {
  const response = await fetch(API_ENDPOINTS.ALL_PAGES, {
    method: 'GET',
    headers: DEFAULT_HEADERS,
  })

  const payload = await formatResponse<ServerListResponse<PageResponsePayload>>(response)

  return payload
}

async function getPageApi(pageSlug: string) {
  const response = await fetch(API_ENDPOINTS.PAGE(pageSlug), {
    method: 'GET',
    headers: DEFAULT_HEADERS,
    next: {
      revalidate: TIMINGS.REVALIDATE_STATIC_PAGES_TIME,
    },
  })

  const payload = formatResponse<ServerResponse<PageResponsePayload>>(response)

  return payload
}

export { getAllPagesApi, getPageApi }
