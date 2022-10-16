import type { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult, PreviewData } from 'next'
import * as React from 'react'
import { QueryClient } from '@tanstack/react-query'

import type { BlogPostPageProps, BlogPostPageQueryParams } from 'typings/pages'
import type { PostResponsePayload, ServerListResponse, ServerResponse } from 'typings/services'
import { getPostApi, getPostsApi } from 'services'
import { API_ENDPOINTS } from 'services/shared'
import BlogPostScreen from 'screens/blog-post'
import { Meta } from 'components'
import { NUMERICS, TIMINGS } from 'utils/constants'

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

  const postsResponse = await queryClient.fetchQuery<ServerListResponse<PostResponsePayload>>(
    [API_ENDPOINTS.POSTS],
    () => getPostsApi(),
    { staleTime: Infinity },
  )

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

  const postResponse = await queryClient.fetchQuery<ServerResponse<PostResponsePayload>>(
    [API_ENDPOINTS.POST(postSlug)],
    () => getPostApi(postSlug),
    { staleTime: Infinity },
  )

  if (!postResponse.data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post: postResponse.data,
    },
    revalidate: TIMINGS.REVALIDATE_STATIC_PAGES_TIME,
  }
}

export default BlogSlugPage
