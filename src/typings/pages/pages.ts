import type { PageResponsePayload } from '../services/pages'

export interface PagePageProps {
  page: PageResponsePayload
}

export type PagePageQueryParams = {
  slug: [string]
}
