import * as React from 'react'
import type { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult, PreviewData } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'

import MDXComponents from '~/components/mdx-components'
import { BlogLayout } from '~/layouts/blog/blog-layout'
import { allBlogs, Blog } from '~/lib/contentlayer-data/blog'

interface BlogSlugPageProps {
  post: Blog
}

function BlogSlugPage(props: BlogSlugPageProps) {
  const { post } = props

  const Component = useMDXComponent(post.body.code)

  return (
    <BlogLayout post={post}>
      <Component components={MDXComponents} />
    </BlogLayout>
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
