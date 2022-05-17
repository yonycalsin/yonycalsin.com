import * as React from 'react'
import type { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult, PreviewData } from 'next'

import { Meta } from '~/components/meta'
import { allBlogs, Blog } from '~/lib/contentlayer-data/blog'
import { BlogPostScreen } from '~/screens/blog-post'

interface BlogSlugPageProps {
  post: Blog
}

function BlogSlugPage(props: BlogSlugPageProps) {
  const { post } = props

  return (
    <>
      <Meta title={`${post.title} - Yony Calsin`} notRobots />
      <BlogPostScreen post={post} />
    </>
  )
}

export function getStaticPaths(): GetStaticPathsResult {
  return {
    fallback: false,
    paths: allBlogs.map(post => ({
      params: {
        slug: post.slug,
      },
    })),
  }
}

export function getStaticProps(
  context: GetStaticPropsContext<{ slug: string }, PreviewData>,
): GetStaticPropsResult<BlogSlugPageProps> {
  const { params } = context

  const post = allBlogs.find(post => post.slug === params?.slug)

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
    },
  }
}

export default BlogSlugPage
