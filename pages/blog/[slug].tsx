import * as React from 'react'
import { QueryClient } from '@tanstack/react-query'
import type { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult, PreviewData } from 'next'

import { Meta } from '~/components/meta'
import { BlogPostScreen } from '~/screens/blog-post'
import { getPostApi, getPostsApi } from '~/services/blog/posts'
import { blogApiEndpoints } from '~/services/blog/utils/blog-api-endpoints'
import type { PostResponsePayload } from '~/typings/services'
import { timings } from '~/utils/constants'

interface BlogSlugPageProps {
  post: PostResponsePayload
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

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const queryClient = new QueryClient()

  const posts = await queryClient.fetchQuery([blogApiEndpoints.POSTS], getPostsApi, {
    staleTime: Infinity,
  })

  return {
    fallback: false,
    paths: posts.data.map(post => ({
      params: {
        slug: post.slug,
      },
    })),
  }
}

export async function getStaticProps(
  context: GetStaticPropsContext<{ slug: string }, PreviewData>,
): Promise<GetStaticPropsResult<BlogSlugPageProps>> {
  const { params } = context

  const queryClient = new QueryClient()

  const postSlug = (params?.slug ?? '') as string

  const response = await queryClient.fetchQuery([blogApiEndpoints.POST(postSlug)], () => getPostApi(postSlug), {
    staleTime: Infinity,
  })

  if (!response.data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post: response.data,
    },
    revalidate: timings.REVALIDATE_STATIC_PAGES_TIME,
  }
}

export default BlogSlugPage
