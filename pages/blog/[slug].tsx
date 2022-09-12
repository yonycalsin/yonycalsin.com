import * as React from 'react'
import { QueryClient } from '@tanstack/react-query'
import type { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult, PreviewData } from 'next'

import { Meta } from '~/components/meta'
import { NUMERICS } from '~/constants/numerics'
import { BlogPostScreen } from '~/screens/blog-post'
import { getPostApi, getPostsApi } from '~/services/blog/posts'
import { blogApiEndpoints } from '~/services/blog/utils/blog-api-endpoints'
import type { BlogPostPageProps, BlogPostPageQueryParams } from '~/typings/pages/blog-post'
import { timings } from '~/utils/constants/constants'

function BlogSlugPage(props: BlogPostPageProps) {
  const { post } = props

  return (
    <>
      <Meta title={`${post.title} - Yony Calsin`} notRobots />
      <BlogPostScreen post={post} />
    </>
  )
}

export async function getStaticPaths(): Promise<GetStaticPathsResult<BlogPostPageQueryParams>> {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: NUMERICS.RETRY_QUERY,
      },
    },
  })

  const postsResponse = await queryClient.fetchQuery([blogApiEndpoints.POSTS], () => getPostsApi(), {
    staleTime: Infinity,
  })

  return {
    fallback: false,
    paths: postsResponse.data.map(post => ({
      params: {
        slug: post.slug,
      },
    })),
  }
}

export async function getStaticProps(
  context: GetStaticPropsContext<BlogPostPageQueryParams, PreviewData>,
): Promise<GetStaticPropsResult<BlogPostPageProps>> {
  const { params } = context

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: NUMERICS.RETRY_QUERY,
      },
    },
  })

  const postSlug = (params?.slug ?? '') as string

  const postResponse = await queryClient.fetchQuery([blogApiEndpoints.POST(postSlug)], () => getPostApi(postSlug), {
    staleTime: Infinity,
  })

  if (!postResponse.data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post: postResponse.data,
    },
    revalidate: timings.REVALIDATE_STATIC_PAGES_TIME,
  }
}

export default BlogSlugPage
