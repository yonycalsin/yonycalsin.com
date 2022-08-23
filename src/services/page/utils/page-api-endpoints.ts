import env from '~/utils/env'

export const pageApiEndpoints = {
  ALL_PAGES: `${env.REST_API_URL}/pages`,
  PAGE: (pageSlug: string) => `${env.REST_API_URL}/pages/${pageSlug}`,
}
