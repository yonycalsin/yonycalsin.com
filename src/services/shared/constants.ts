import env from '~/utils/env'

export const defaultHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  'X-Api-Public-Key': env.REST_API_PUBLIC_KEY,
}
