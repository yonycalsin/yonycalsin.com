import type { PostResponsePayload } from '../services'

export interface BlogPostPageProps {
  post: PostResponsePayload
}

export type BlogPostPageQueryParams = {
  slug: string
}
