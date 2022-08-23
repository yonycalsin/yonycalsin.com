import env from '~/utils/env'

export const achievementApiEndpoints = {
  ALL_ACHIEVEMENTS: `${env.REST_API_URL}/achievements`,
  FEATURED_ACHIEVEMENTS: `${env.REST_API_URL}/achievements?isFeatured=true`,
}
