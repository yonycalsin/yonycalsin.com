import type { PostResponsePayload, ServerListResponse, ServerResponse } from 'typings/services'
import type { MockContext, MockRequest, MockResponse } from 'mock-server/mock-server-types'
import { getPostsDataResponseOk, getPostsResponseOk } from './posts-mock'

function getPostsApi(request: MockRequest, response: MockResponse, context: MockContext) {
  return response(context.status(200), context.json<ServerListResponse<PostResponsePayload>>(getPostsResponseOk))
}

function getPostApi(request: MockRequest<never, { slug: string }>, response: MockResponse, context: MockContext) {
  const postSlug = request.params.slug

  const post = getPostsDataResponseOk.find(post => post.slug === postSlug)

  if (!post) {
    return response(context.status(404))
  }

  return response(
    context.status(200),
    context.json<ServerResponse<PostResponsePayload>>({
      error: null,
      data: post,
    }),
  )
}

export { getPostApi, getPostsApi }
