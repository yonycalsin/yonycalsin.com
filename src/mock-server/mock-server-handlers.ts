import { rest } from 'msw'

import { API_ENDPOINTS } from 'services/shared'
import { getPostApi, getPostsApi } from './mocks'

export const mockServerHandlers = [
  // Posts
  rest.get(API_ENDPOINTS.POST(':slug'), getPostApi),
  rest.get(API_ENDPOINTS.POSTS, getPostsApi),
]
