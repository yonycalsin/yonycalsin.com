import env from '~/utils/constants/env'

export const pageApiEndpoints = {
  ALL_PAGES: `${env.REST_API_URL}/pages`,
  PAGE: (pageSlug: string) => `${env.REST_API_URL}/pages/${pageSlug}`,
}
