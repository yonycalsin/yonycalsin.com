import type { PostResponsePayload, ServerListResponse, ServerResponse } from '~/typings/services'

import { defaultHeaders, formatResponse } from '../shared'

import { blogApiEndpoints } from './utils/blog-api-endpoints'

export async function getPostsApi() {
  const response = await fetch(blogApiEndpoints.POSTS, {
    method: 'GET',
    headers: defaultHeaders,
  })

  const payload = await formatResponse<ServerListResponse<PostResponsePayload>>(response)

  return payload
}

export async function getPostApi(postSlug: string) {
  const response = await fetch(blogApiEndpoints.POST(postSlug), {
    method: 'GET',
    headers: defaultHeaders,
  })

  const payload = await formatResponse<ServerResponse<PostResponsePayload>>(response)

  return payload
}
