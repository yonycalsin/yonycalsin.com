import type { CategoryResponsePayload, ServerListResponse, ServerResponse } from '~/typings/services'

import { defaultHeaders, formatResponse } from '../shared'

import { blogApiEndpoints } from './utils/blog-api-endpoints'

export async function getCategoriesApi() {
  const response = await fetch(blogApiEndpoints.CATEGORIES, {
    method: 'GET',
    headers: defaultHeaders,
  })

  const payload = await formatResponse<ServerListResponse<CategoryResponsePayload>>(response)

  return payload
}

export async function getCategoryApi(categorySlug: string) {
  const response = await fetch(blogApiEndpoints.CATEGORY(categorySlug), {
    method: 'GET',
    headers: defaultHeaders,
  })

  const payload = await formatResponse<ServerResponse<CategoryResponsePayload>>(response)

  return payload
}
