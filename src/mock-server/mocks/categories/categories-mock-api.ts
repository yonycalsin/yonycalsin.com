import type { MockContext, MockRequest, MockResponse } from 'typings/mock-server'
import { categoriesSuccess, categorySuccess } from './categories-mock'

function getCategoryApi(request: MockRequest, response: MockResponse, context: MockContext) {
  const payload = categorySuccess

  return response(context.status(200), context.json(payload))
}

function getCategoriesApi(request: MockRequest, response: MockResponse, context: MockContext) {
  const payload = categoriesSuccess

  return response(context.status(200), context.json(payload))
}

export { getCategoriesApi, getCategoryApi }
