import type { MockContext, MockRequest, MockResponse } from 'typings/mock-server'
import { featuredRecommendationsSuccess } from './recommendations-mock'

function getFeaturedRecommendationsApi(request: MockRequest, response: MockResponse, context: MockContext) {
  const payload = featuredRecommendationsSuccess

  return response(context.status(200), context.json(payload))
}

export { getFeaturedRecommendationsApi }
