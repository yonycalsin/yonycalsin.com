import type { ServerListResponse, ServerResponse } from '~/typings/services'
import type { PageResponsePayload } from '~/typings/services/page/pages'

import { defaultHeaders, formatResponse } from '../shared'

import { pageApiEndpoints } from './utils/page-api-endpoints'

export async function getAllPages() {
  const response = await fetch(pageApiEndpoints.ALL_PAGES, {
    method: 'GET',
    headers: defaultHeaders,
  })

  const payload = await formatResponse<ServerListResponse<PageResponsePayload>>(response)

  return payload
}

export async function getPage(pageSlug: string) {
  const response = await fetch(pageApiEndpoints.PAGE(pageSlug), {
    method: 'GET',
    headers: defaultHeaders,
  })

  const payload = formatResponse<ServerResponse<PageResponsePayload>>(response)

  return payload
}
