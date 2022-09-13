import env from '~/utils/constants/env'

export const achievementApiEndpoints = {
  ALL_ACHIEVEMENTS: `${env.REST_API_URL}/achievements`,
  FEATURED_ACHIEVEMENTS: `${env.REST_API_URL}/achievements?isFeatured=true`,
}
