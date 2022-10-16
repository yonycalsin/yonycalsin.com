import type { MockContext, MockRequest, MockResponse } from 'typings/mock-server'
import { allProjectsSuccess, pinnedProjectsSuccess } from './projects-mock'

function getAllProjectsApi(request: MockRequest, response: MockResponse, context: MockContext) {
  const payload = allProjectsSuccess

  return response(context.status(200), context.json(payload))
}

function getPinnedProjectsApi(request: MockRequest, response: MockResponse, context: MockContext) {
  const payload = pinnedProjectsSuccess

  return response(context.status(200), context.json(payload))
}

export { getAllProjectsApi, getPinnedProjectsApi }
