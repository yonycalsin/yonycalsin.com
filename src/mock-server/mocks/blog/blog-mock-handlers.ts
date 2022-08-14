import { rest } from 'msw'

import { blogApiEndpoints } from '~/services/blog/utils/blog-api-endpoints'

import { getPostApi, getPostsApi } from './blog-mock-api'

export const blogMockHandlers = [
  rest.get(blogApiEndpoints.POST(':slug'), getPostApi),
  rest.get(blogApiEndpoints.POSTS, getPostsApi),
]
