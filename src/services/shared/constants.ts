import { ENV } from 'utils/constants'

const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  'X-Api-Public-Key': ENV.REST_API_PUBLIC_KEY,
}

export { DEFAULT_HEADERS }
