import Link from 'next/link'

import type { Blog } from '~/lib/contentlayer-data/blog'

import { SectionHeader } from '../section/section-header'

import BlogPostList from './blog-post-list'

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
      <SectionHeader title={title} actionHref={actionHref} actionLabel={actionLabel} actionComponent={Link} />
      <div className="mt-2">
        <BlogPostList posts={posts} />
      </div>
    </div>
  )
}
