import type { CategoryResponsePayload, PostResponsePayload } from 'typings/services'

interface BlogCategoryScreenProps {
  category: CategoryResponsePayload
  posts: PostResponsePayload[]
}

export type { BlogCategoryScreenProps }
