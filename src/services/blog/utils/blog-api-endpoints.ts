import env from '~/utils/env'

export const blogApiEndpoints = {
  POST: (postSlug: string) => `${env.REST_API_URL}/blog/posts/${postSlug}`,
  POSTS: `${env.REST_API_URL}/blog/posts`,
  CATEGORY: (categorySlug: string) => `${env.REST_API_URL}/blog/categories/${categorySlug}`,
  CATEGORIES: `${env.REST_API_URL}/blog/categories`,
}
