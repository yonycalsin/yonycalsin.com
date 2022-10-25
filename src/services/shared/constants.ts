import type { ServerListResponse } from 'typings/services'
import { ENV } from 'utils/constants'

const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  'X-Api-Public-Key': ENV.REST_API_PUBLIC_KEY,
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DEFAULT_SERVER_LIST_RESPONSE: ServerListResponse<Record<string, any>> = {
  error: null,
  data: [],
  meta: {
    hasNextPage: false,
    hasPrevPage: false,
    page: 0,
    pages: 0,
    total: 0,
  },
}

export { DEFAULT_HEADERS, DEFAULT_SERVER_LIST_RESPONSE }
