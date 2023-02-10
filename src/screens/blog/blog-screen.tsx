import * as React from 'react'
import Link from 'next/link'

import { getPostsApi } from 'services'
import { Anchor, Breadcrumb, BreadcrumbItem, BreadcrumbSeparator, Heading, ListItem, UnorderedList } from 'components'

function BlogScreen() {
  const postsResponse = React.use(getPostsApi())

  const posts = postsResponse.data.results ?? []

  return (
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
  )
}

export default BlogScreen
