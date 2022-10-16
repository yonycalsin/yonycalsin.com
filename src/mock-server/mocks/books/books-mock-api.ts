import type { MockContext, MockRequest, MockResponse } from 'typings/mock-server'
import { allBooksSuccess, readingBooksSuccess } from './books-mock'

function getAllBooksApi(request: MockRequest, response: MockResponse, context: MockContext) {
  const payload = allBooksSuccess

  return response(context.status(200), context.json(payload))
}

function getReadingBooksApi(request: MockRequest, response: MockResponse, context: MockContext) {
  const payload = readingBooksSuccess

  return response(context.status(200), context.json(payload))
}

export { getAllBooksApi, getReadingBooksApi }
