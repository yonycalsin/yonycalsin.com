import * as React from 'react'
import { notFound } from 'next/navigation'

import type { BlogCategoryPageProps, BlogCategoryParams } from 'typings/app'
import { getCategoriesApi, getCategoryApi, getPostsApi } from 'services'
import BlogCategoryScreen from 'screens/blog-category'
import { PageTransition } from 'components'

export const dynamicParams = false

export const metadata = {
  /**
   * TODO: make this dynamic using 'generateMetadata' method
   */
  title: 'Category',
}

export async function generateStaticParams(): Promise<BlogCategoryParams[]> {
  const response = await getCategoriesApi()

  const categories = response.data.results

  return categories.map(category => ({
    slug: category.slug,
  }))
}

export default function BlogCategoryPage(props: BlogCategoryPageProps) {
  const { params } = props

  const categorySlug = params.slug

  const categoryResponse = React.use(getCategoryApi(categorySlug))

  const category = categoryResponse.data

  const postsResponse = React.use(
    getPostsApi({
      filters: { category: [categorySlug] },
    }),
  )

  if (!category) {
    return notFound()
  }

  return (
    <PageTransition>
      <BlogCategoryScreen category={category} posts={postsResponse.data.results} />
    </PageTransition>
  )
}
