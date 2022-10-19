import type { MockContext, MockRequest, MockResponse } from 'typings/mock-server'
import type { PostResponsePayload, ServerResponse } from 'typings/services'
import { postsSuccess } from './posts-mock'

function getPostsApi(request: MockRequest, response: MockResponse, context: MockContext) {
  const payload = postsSuccess

  return response(context.status(200), context.json(payload))
}

function getPostApi(request: MockRequest<never, { slug: string }>, response: MockResponse, context: MockContext) {
  const postSlug = request.params.slug

  const post = postsSuccess.data.find(post => post.slug === postSlug)

  if (!post) {
    return response(context.status(404))
  }

  const payload: ServerResponse<PostResponsePayload> = {
    error: null,
    data: post,
  }

  return response(context.status(200), context.json(payload))
}

export { getPostApi, getPostsApi }
