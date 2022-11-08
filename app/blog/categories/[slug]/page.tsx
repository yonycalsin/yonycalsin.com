import * as React from 'react'
import { notFound } from 'next/navigation'

import type { BlogCategoryPageProps, BlogCategoryParams } from 'typings/app'
import { getCategoriesApi, getCategoryApi, getPostsApi } from 'services'
import BlogCategoryScreen from 'screens/blog-category'

export const dynamicParams = false

export async function generateStaticParams(): Promise<BlogCategoryParams[]> {
  const categories = await getCategoriesApi()

  return categories.data.map(category => ({
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

  return <BlogCategoryScreen category={category} posts={postsResponse.data} />
}
