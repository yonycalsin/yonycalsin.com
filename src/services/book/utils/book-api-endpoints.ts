import env from '~/utils/constants/env'

export const bookApiEndpoints = {
  ALL_BOOKS: `${env.REST_API_URL}/books`,
  READING_BOOKS: `${env.REST_API_URL}/books?status=Reading`,
}
