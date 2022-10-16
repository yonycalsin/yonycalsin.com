import type { PageResponsePayload } from 'typings/services'

export interface PagePageProps {
  page: PageResponsePayload
}

export type PagePageQueryParams = {
  slug: [string]
}
