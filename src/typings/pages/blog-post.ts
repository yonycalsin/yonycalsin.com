import type { PostResponsePayload } from '../services'

interface BlogPostPageProps {
  post: PostResponsePayload
}

/**
 * @see https://stackoverflow.com/a/73665562/19694758
 */
type BlogPostPageQueryParams = {
  slug: string
}

export type { BlogPostPageProps, BlogPostPageQueryParams }
