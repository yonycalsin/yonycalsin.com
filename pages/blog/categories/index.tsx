import type { GetStaticPropsResult } from 'next'
import { dehydrate, QueryClient } from '@tanstack/react-query'

import type { BlogCategoriesPageProps } from 'typings/pages'
import type { CategoryResponsePayload, ServerListResponse } from 'typings/services'
import { getCategoriesApi } from 'services'
import { API_ENDPOINTS } from 'services/shared'
import BlogCategoriesScreen from 'screens/blog-categories'
import { Meta } from 'components'
import { NUMERICS, TIMINGS } from 'utils/constants'

function BlogCategoriesPage() {
  return (
    <>
      <Meta title="Blog Categories" />
      <BlogCategoriesScreen />
    </>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<BlogCategoriesPageProps>> {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: NUMERICS.RETRY_QUERY,
      },
    },
  })

  await queryClient.prefetchQuery<ServerListResponse<CategoryResponsePayload>>(
    [API_ENDPOINTS.CATEGORIES],
    getCategoriesApi,
    { staleTime: Infinity },
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: TIMINGS.REVALIDATE_STATIC_PAGES_TIME,
  }
}

export default BlogCategoriesPage
