import { dehydrate, QueryClient } from '@tanstack/react-query'
import type { GetStaticPropsResult } from 'next'

import { Meta } from '~/components/meta'
import { NUMERICS } from '~/constants/numerics'
import { BlogCategoriesScreen } from '~/screens/blog-categories'
import { getCategoriesApi } from '~/services/blog'
import { blogApiEndpoints } from '~/services/blog/utils/blog-api-endpoints'
import type { BlogCategoriesPageProps } from '~/typings/pages/blog-categories'
import type { CategoryResponsePayload, ServerListResponse } from '~/typings/services'
import { timings } from '~/utils/constants'

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
    [blogApiEndpoints.CATEGORIES],
    getCategoriesApi,
    { staleTime: Infinity },
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: timings.REVALIDATE_STATIC_PAGES_TIME,
  }
}

export default BlogCategoriesPage
