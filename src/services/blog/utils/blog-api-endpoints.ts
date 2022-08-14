import env from '~/utils/env'

export const blogApiEndpoints = {
  POST: (postSlug: string) => `${env.REST_API_URL}/blog/posts/${postSlug}`,
  POSTS: `${env.REST_API_URL}/blog/posts`,
}
