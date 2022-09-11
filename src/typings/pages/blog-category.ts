import type { CategoryResponsePayload, PostResponsePayload } from '../services'

export interface BlogCategoryPageProps {
  category: CategoryResponsePayload
  posts: PostResponsePayload[]
}

export type BlogCategoryPageQueryParams = {
  slug: string
}
