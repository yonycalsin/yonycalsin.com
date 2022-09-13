import * as React from 'react'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import type { GetStaticPropsResult } from 'next'

import { Meta } from '~/components/meta'
import { BlogScreen } from '~/screens/blog'
import { getPostsApi } from '~/services/blog/posts'
import { blogApiEndpoints } from '~/services/blog/utils/blog-api-endpoints'
import type { BlogPageProps } from '~/typings/pages/blog'
import { timings } from '~/utils/constants/constants'
import { NUMERICS } from '~/utils/constants/numerics'

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

  await queryClient.prefetchQuery([blogApiEndpoints.POSTS], () => getPostsApi(), {
    staleTime: Infinity,
  })

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: timings.REVALIDATE_STATIC_PAGES_TIME,
  }
}

export default BlogPage
