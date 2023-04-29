import type {
  ListQueryParamsRequest,
  PostListQueryParamsRequestPayload,
  PostResponsePayload,
  ServerListResponse,
  ServerResponse,
} from 'typings/services'
import { TIMINGS } from 'utils/constants'
import { API_ENDPOINTS, DEFAULT_HEADERS, formatRequestUrl, formatResponse } from './shared'

export async function getPostsApi(queryParams?: ListQueryParamsRequest<PostListQueryParamsRequestPayload>) {
  const url = formatRequestUrl(API_ENDPOINTS.POSTS, queryParams ?? {})

  const response = await fetch(url, {
    method: 'GET',
    headers: DEFAULT_HEADERS,
    next: {
      revalidate: TIMINGS.REVALIDATE_STATIC_PAGES_TIME,
    },
  })

  const payload = await formatResponse<ServerListResponse<PostResponsePayload>>(response)

  return payload
}

export async function getPostApi(postSlug: string) {
  const response = await fetch(API_ENDPOINTS.POST(postSlug), {
    method: 'GET',
    headers: DEFAULT_HEADERS,
    next: {
      revalidate: TIMINGS.REVALIDATE_STATIC_PAGES_TIME,
    },
  })

  const payload = await formatResponse<ServerResponse<PostResponsePayload | null>>(response)

  return payload
}
