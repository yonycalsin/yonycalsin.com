import type { CategoryResponsePayload, PostResponsePayload } from 'typings/services'

export interface BlogCategoryPageProps {
  category: CategoryResponsePayload
  posts: PostResponsePayload[]
}

export type BlogCategoryPageQueryParams = {
  slug: string
}
