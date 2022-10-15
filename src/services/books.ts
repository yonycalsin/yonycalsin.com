import type { BookResponsePayload, ServerListResponse } from 'typings/services'
import { API_ENDPOINTS, DEFAULT_HEADERS, formatResponse } from './shared'

export async function getAllBooks() {
  const response = await fetch(API_ENDPOINTS.ALL_BOOKS, {
    method: 'GET',
    headers: DEFAULT_HEADERS,
  })

  const payload = await formatResponse<ServerListResponse<BookResponsePayload>>(response)

  return payload
}

export async function getReadingBooks() {
  const response = await fetch(API_ENDPOINTS.READING_BOOKS, {
    method: 'GET',
    headers: DEFAULT_HEADERS,
  })

  const payload = await formatResponse<ServerListResponse<BookResponsePayload>>(response)

  return payload
}
