import * as React from 'react'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'

import { getPostsApi } from 'services'
import { API_ENDPOINTS } from 'services/shared'
import { MainLayout } from 'layouts'
import { Anchor, Breadcrumb, BreadcrumbItem, BreadcrumbSeparator, Heading, LoaderBox } from 'components'
import { ListItem, UnorderedList } from 'components'

function BlogScreen() {
  const getPostsResponse = useQuery([API_ENDPOINTS.POSTS], () => getPostsApi(), {
    staleTime: Infinity,
  })

  if (getPostsResponse.isLoading) {
    return <LoaderBox />
  }

  const posts = getPostsResponse.data?.data ?? []

  return (
    <MainLayout>
      <div className="container py-10 space-y-6">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link href="/" legacyBehavior passHref>
              <Anchor>Home</Anchor>
            </Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <Anchor>Blog</Anchor>
          </BreadcrumbItem>
        </Breadcrumb>

        <div className="space-y-3">
          <Heading size="h1">Posts ({posts.length})</Heading>
          <p>
            Tutorials, tricks, personal articles, technical articles, fragments, reference resources and all resources
            related to the software development.
          </p>
        </div>

        <UnorderedList role="list" aria-label="List of posts">
          {posts.map(post => (
            <Link href={`/blog/${post.slug}`} key={post.slug} passHref legacyBehavior>
              <Anchor>
                <ListItem>{post.title}</ListItem>
              </Anchor>
            </Link>
          ))}
        </UnorderedList>
      </div>
    </MainLayout>
  )
}

export default BlogScreen
