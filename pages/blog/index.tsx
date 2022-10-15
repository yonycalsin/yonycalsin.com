import type { GetStaticPropsResult } from 'next'
import * as React from 'react'
import { dehydrate, QueryClient } from '@tanstack/react-query'

import type { BlogPageProps } from 'typings/pages'
import { getPostsApi } from 'services'
import { API_ENDPOINTS } from 'services/shared'
import BlogScreen from 'screens/blog'
import { Meta } from 'components'
import { NUMERICS, TIMINGS } from 'utils/constants'

function BlogPage() {
  return (
    <>
      <Meta title="Blog" />
      <BlogScreen />
    </>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<BlogPageProps>> {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: NUMERICS.RETRY_QUERY,
      },
    },
  })

  await queryClient.prefetchQuery([API_ENDPOINTS.POSTS], () => getPostsApi(), {
    staleTime: Infinity,
  })

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: TIMINGS.REVALIDATE_STATIC_PAGES_TIME,
  }
}

export default BlogPage
