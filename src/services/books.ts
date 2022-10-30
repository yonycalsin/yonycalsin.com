import type { BookResponsePayload, ServerListResponse } from 'typings/services'
import { TIMINGS } from 'utils/constants'
import { API_ENDPOINTS, DEFAULT_HEADERS, formatResponse } from './shared'

export async function getAllBooksApi() {
  const response = await fetch(API_ENDPOINTS.ALL_BOOKS, {
    method: 'GET',
    headers: DEFAULT_HEADERS,
    next: {
      revalidate: TIMINGS.REVALIDATE_STATIC_PAGES_TIME,
    },
  })

  const payload = await formatResponse<ServerListResponse<BookResponsePayload>>(response)

  return payload
}

export async function getReadingBooksApi() {
  const response = await fetch(API_ENDPOINTS.READING_BOOKS, {
    method: 'GET',
    headers: DEFAULT_HEADERS,
    next: {
      revalidate: TIMINGS.REVALIDATE_STATIC_PAGES_TIME,
    },
  })

  const payload = await formatResponse<ServerListResponse<BookResponsePayload>>(response)

  return payload
}
