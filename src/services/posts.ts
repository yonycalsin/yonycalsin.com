import type {
  ListQueryParamsRequest,
  PostListQueryParamsRequestPayload,
  PostResponsePayload,
  ServerListResponse,
  ServerResponse,
} from 'typings/services'
import { API_ENDPOINTS, DEFAULT_HEADERS, formatRequestUrl, formatResponse } from './shared'

export async function getPostsApi(queryParams?: ListQueryParamsRequest<PostListQueryParamsRequestPayload>) {
  const url = formatRequestUrl(API_ENDPOINTS.POSTS, queryParams ?? {})

  const response = await fetch(url, {
    method: 'GET',
    headers: DEFAULT_HEADERS,
  })

  const payload = await formatResponse<ServerListResponse<PostResponsePayload>>(response)

  return payload
}

export async function getPostApi(postSlug: string) {
  const response = await fetch(API_ENDPOINTS.POST(postSlug), {
    method: 'GET',
    headers: DEFAULT_HEADERS,
  })

  const payload = await formatResponse<ServerResponse<PostResponsePayload>>(response)

  return payload
}
