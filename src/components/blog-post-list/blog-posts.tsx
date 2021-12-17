import Link from 'next/link'

import BlogPostList from './blog-post-list'
// @ts-ignore
import type { Blog } from '.contentlayer/types'

export interface BlogPostsProps {
  posts: Blog[]
  title: string
  actionLabel?: string
  actionHref?: string
  className?: string
}

export function BlogPosts(props: BlogPostsProps) {
  const { posts, title, actionHref, actionLabel, className } = props

  return (
    <div className={className}>
      <div className="flex items-center justify-between">
        <h4 className="mb-0">{title}</h4>
        {actionHref ? (
          <Link href={actionHref}>
            <a>{actionLabel}</a>
          </Link>
        ) : null}
      </div>
      <div className="mt-2">
        <BlogPostList posts={posts} />
      </div>
    </div>
  )
}
