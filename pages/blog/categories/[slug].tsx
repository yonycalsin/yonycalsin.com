import { QueryClient } from '@tanstack/react-query'
import type { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult, PreviewData } from 'next'

import { Meta } from '~/components/meta'
import { NUMERICS } from '~/constants/numerics'
import { BlogCategoryScreen } from '~/screens/blog-category'
import { getCategoriesApi, getCategoryApi } from '~/services/blog'
import { blogApiEndpoints } from '~/services/blog/utils/blog-api-endpoints'
import type { BlogCategoryPageProps, BlogCategoryPageQueryParams } from '~/typings/pages/blog-category'
import { timings } from '~/utils/constants'

function BlogCategoryPage(props: BlogCategoryPageProps) {
  const { category } = props

  return (
    <>
      <Meta title={`${category.title} - Yony Calsin`} />
      <BlogCategoryScreen category={category} />
    </>
  )
}

export async function getStaticPaths(): Promise<GetStaticPathsResult<BlogCategoryPageQueryParams>> {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: NUMERICS.RETRY_QUERY,
      },
    },
  })

  const categoriesResponse = await queryClient.fetchQuery([blogApiEndpoints.CATEGORIES], getCategoriesApi, {
    staleTime: Infinity,
  })

  return {
    fallback: false,
    paths: categoriesResponse.data.map(category => ({
      params: {
        slug: category.slug,
      },
    })),
  }
}

export async function getStaticProps(
  context: GetStaticPropsContext<BlogCategoryPageQueryParams, PreviewData>,
): Promise<GetStaticPropsResult<BlogCategoryPageProps>> {
  const { params } = context

  if (!params?.slug) {
    return {
      notFound: true,
    }
  }

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: NUMERICS.RETRY_QUERY,
      },
    },
  })

  const categorySlug = params.slug

  const categoryResponse = await queryClient.fetchQuery(
    [blogApiEndpoints.CATEGORY(categorySlug)],
    () => getCategoryApi(categorySlug),
    { staleTime: Infinity },
  )

  if (!categoryResponse.data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      category: categoryResponse.data,
    },
    revalidate: timings.REVALIDATE_STATIC_PAGES_TIME,
  }
}

export default BlogCategoryPage
