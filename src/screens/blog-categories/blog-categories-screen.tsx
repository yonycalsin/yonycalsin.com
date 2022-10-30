import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'

import type { CategoryResponsePayload, ServerListResponse } from 'typings/services'
import { getCategoriesApi } from 'services'
import { API_ENDPOINTS } from 'services/shared'
import { MainLayout } from 'layouts'
import { Anchor, Breadcrumb, BreadcrumbItem, BreadcrumbSeparator, Button, Heading, LoaderBox } from 'components'

function BlogCategoriesScreen() {
  const categoriesResponse = useQuery<ServerListResponse<CategoryResponsePayload>>(
    [API_ENDPOINTS.CATEGORIES],
    getCategoriesApi,
    { staleTime: Infinity },
  )

  if (categoriesResponse.isLoading) {
    return <LoaderBox />
  }

  const categories = categoriesResponse.data?.data ?? []

  return (
    <MainLayout>
      <main className="container py-10 space-y-6">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link href="/" legacyBehavior passHref>
              <Anchor>Home</Anchor>
            </Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <Link href="/blog" legacyBehavior passHref>
              <Anchor>Blog</Anchor>
            </Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <Anchor>Categories</Anchor>
          </BreadcrumbItem>
        </Breadcrumb>
        <header className="space-y-3">
          <Heading size="h1">Blog Categories ({categories.length})</Heading>
          <p>This page contains all the categories.</p>
        </header>
        <div className="flex flex-wrap gap-3 flex-row" role="list" aria-label="List of categories">
          {categories.map(category => (
            <Link href={`/blog/categories/${category.slug}`} key={category.title} role="listitem">
              <Button variant="outline" palette="success">
                {category.title}
              </Button>
            </Link>
          ))}
        </div>
      </main>
    </MainLayout>
  )
}

export default BlogCategoriesScreen
