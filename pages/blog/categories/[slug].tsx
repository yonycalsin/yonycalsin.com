import type { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult, PreviewData } from 'next'
import { QueryClient } from '@tanstack/react-query'

import type { BlogCategoryPageProps, BlogCategoryPageQueryParams } from 'typings/pages'
import type { CategoryResponsePayload, PostResponsePayload, ServerListResponse, ServerResponse } from 'typings/services'
import { getCategoriesApi, getCategoryApi, getPostsApi } from 'services'
import { API_ENDPOINTS } from 'services/shared'
import BlogCategoryScreen from 'screens/blog-category'
import { Meta } from 'components'
import { NUMERICS, TIMINGS } from 'utils/constants'

function BlogCategoryPage(props: BlogCategoryPageProps) {
  const { category, posts } = props

  return (
    <>
      <Meta title={`${category.title} - Yony Calsin`} />
      <BlogCategoryScreen category={category} posts={posts} />
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

  const categoriesResponse = await queryClient.fetchQuery<ServerListResponse<CategoryResponsePayload>>(
    [API_ENDPOINTS.CATEGORIES],
    getCategoriesApi,
    { staleTime: Infinity },
  )

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

  const categoryResponse = await queryClient.fetchQuery<ServerResponse<CategoryResponsePayload>>(
    [API_ENDPOINTS.CATEGORY(categorySlug)],
    () => getCategoryApi(categorySlug),
    { staleTime: Infinity },
  )

  if (!categoryResponse.data) {
    return {
      notFound: true,
    }
  }

  const postsResponse = await queryClient.fetchQuery<ServerListResponse<PostResponsePayload>>(
    [API_ENDPOINTS.POSTS, categorySlug],
    () => getPostsApi({ filters: { category: [categorySlug] } }),
    { staleTime: Infinity },
  )

  return {
    props: {
      category: categoryResponse.data,
      posts: postsResponse.data,
    },
    revalidate: TIMINGS.REVALIDATE_STATIC_PAGES_TIME,
  }
}

export default BlogCategoryPage
