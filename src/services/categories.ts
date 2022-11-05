import type { CategoryResponsePayload, ServerListResponse, ServerResponse } from 'typings/services'
import { TIMINGS } from 'utils/constants'
import { API_ENDPOINTS, DEFAULT_HEADERS, formatResponse } from './shared'

export async function getCategoriesApi() {
  const response = await fetch(API_ENDPOINTS.CATEGORIES, {
    method: 'GET',
    headers: DEFAULT_HEADERS,
    next: {
      revalidate: TIMINGS.REVALIDATE_STATIC_PAGES_TIME,
    },
  })

  const payload = await formatResponse<ServerListResponse<CategoryResponsePayload>>(response)

  return payload
}

export async function getCategoryApi(categorySlug: string) {
  const response = await fetch(API_ENDPOINTS.CATEGORY(categorySlug), {
    method: 'GET',
    headers: DEFAULT_HEADERS,
    next: {
      revalidate: TIMINGS.REVALIDATE_STATIC_PAGES_TIME,
    },
  })

  const payload = await formatResponse<ServerResponse<CategoryResponsePayload>>(response)

  return payload
}
