import type { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult, PreviewData } from 'next'

import { allBlogs } from '.contentlayer/data'
import type { Blog } from '.contentlayer/types'

interface BlogSlugPageProps {
  post: Blog
}

function BlogSlugPage(props: BlogSlugPageProps) {
  return (
    <>
      <h1>This is a Blog page</h1>
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
