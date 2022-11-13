import * as React from 'react'
import Link from 'next/link'

import { getCategoriesApi } from 'services'
import { Anchor } from 'components/anchor'
import { Breadcrumb, BreadcrumbItem, BreadcrumbSeparator } from 'components/breadcrumb'
import { Button } from 'components/button'
import { Heading } from 'components/heading'

function BlogCategoriesScreen() {
  const categoriesResponse = React.use(getCategoriesApi())

  const categories = categoriesResponse.data

  return (
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
  )
}

export default BlogCategoriesScreen
