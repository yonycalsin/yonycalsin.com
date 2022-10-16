import type { MockContext, MockRequest, MockResponse } from 'typings/mock-server'
import { achievementsSuccess } from './achievements-mock'

function getAllAchievementsApi(request: MockRequest, response: MockResponse, context: MockContext) {
  const payload = achievementsSuccess

  return response(context.status(200), context.json(payload))
}

function getFeaturedAchievementsApi(request: MockRequest, response: MockResponse, context: MockContext) {
  /**
   * @todo return only featured achievements
   * @author yonycalsin
   */
  const payload = achievementsSuccess

  return response(context.status(200), context.json(payload))
}

export { getAllAchievementsApi, getFeaturedAchievementsApi }
