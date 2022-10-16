import type { MockContext, MockRequest, MockResponse } from 'typings/mock-server'
import { allPagesSuccess, pageSuccess } from './pages-mock'

function getAllPagesApi(request: MockRequest, response: MockResponse, context: MockContext) {
  const payload = allPagesSuccess

  return response(context.status(200), context.json(payload))
}

function getPageApi(request: MockRequest, response: MockResponse, context: MockContext) {
  const { slug } = request.params as { slug: string }

  const page = allPagesSuccess.data.find(item => item.slug === slug)

  if (!page) {
    return response(context.status(404))
  }

  const payload = {
    ...pageSuccess,
    data: page,
  }

  return response(context.status(200), context.json(payload))
}

export { getAllPagesApi, getPageApi }
