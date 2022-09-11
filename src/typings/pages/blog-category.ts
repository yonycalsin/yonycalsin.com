import type { CategoryResponsePayload } from '../services'

export interface BlogCategoryPageProps {
  category: CategoryResponsePayload
}

export type BlogCategoryPageQueryParams = {
  slug: string
}
