import type { ServerListResponse } from '~/typings/services'
import type { BookResponsePayload } from '~/typings/services/book/books'

import { defaultHeaders, formatResponse } from '../shared'

import { bookApiEndpoints } from './utils/book-api-endpoints'

export async function getAllBooks() {
  const response = await fetch(bookApiEndpoints.ALL_BOOKS, {
    method: 'GET',
    headers: defaultHeaders,
  })

  const payload = await formatResponse<ServerListResponse<BookResponsePayload>>(response)

  return payload
}

export async function getReadingBooks() {
  const response = await fetch(bookApiEndpoints.READING_BOOKS, {
    method: 'GET',
    headers: defaultHeaders,
  })

  const payload = await formatResponse<ServerListResponse<BookResponsePayload>>(response)

  return payload
}
