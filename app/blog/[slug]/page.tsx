import * as React from 'react'
import { notFound } from 'next/navigation'

import type { BlogPostPageProps, BlogPostParams } from 'typings/app'
import { getPostApi, getPostsApi } from 'services'
import BlogPostScreen from 'screens/blog-post'
import { PageTransition } from 'components'

export const dynamicParams = false

export async function generateStaticParams(): Promise<BlogPostParams[]> {
  const postsResponse = await getPostsApi()

  const posts = postsResponse.data

  return posts.map(post => ({
    slug: post.slug,
  }))
}

function BlogPostPage(props: BlogPostPageProps) {
  const { params } = props

  const postSlug = params.slug

  const postResponse = React.use(getPostApi(postSlug))

  const post = postResponse.data

  if (!post) {
    return notFound()
  }

  return (
    <PageTransition>
      <BlogPostScreen post={post} />
    </PageTransition>
  )
}

export default BlogPostPage
