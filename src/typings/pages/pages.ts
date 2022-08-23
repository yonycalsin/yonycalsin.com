import type { PageResponsePayload } from '../services/page/pages'

export interface PagePageProps {
  page: PageResponsePayload
}

export type PagePageQueryParams = {
  slug: [string]
}
