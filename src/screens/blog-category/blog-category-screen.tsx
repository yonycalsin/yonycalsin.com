'use client'

import dayjs from 'dayjs'
import Link from 'next/link'
import nextBase64 from 'next-base64'

import type { BlogCategoryScreenProps } from 'typings/screens'
import useMDXComponent from 'hooks/use-mdx-component'
import {
  Anchor,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbSeparator,
  Heading,
  ListItem,
  MDXComponents,
  UnorderedList,
} from 'components'
import { DATE_FORMATS } from 'utils/constants'

function BlogCategoryScreen(props: BlogCategoryScreenProps) {
  const { category, posts } = props

  const Component = useMDXComponent(decodeURIComponent(decodeURIComponent(nextBase64.decode(category.body.code))))

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
          <Link href="/blog/categories" legacyBehavior passHref>
            <Anchor>Categories</Anchor>
          </Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <Anchor>{category.title}</Anchor>
        </BreadcrumbItem>
      </Breadcrumb>
      <div className="space-y-3">
        <Heading size="h1">Category: {category.title}</Heading>
        <p className="italic text-gray-600">
          Last updated at {dayjs(category.updatedAt).format(DATE_FORMATS.HUMAN_DATE)}
        </p>
      </div>
      <Component components={MDXComponents} />
      <UnorderedList role="list" aria-label="List of category's posts">
        {posts.map(post => (
          <Link href={`/blog/${post.slug}`} key={post.title} passHref legacyBehavior>
            <Anchor>
              <ListItem>{post.title}</ListItem>
            </Anchor>
          </Link>
        ))}
      </UnorderedList>
    </main>
  )
}

export default BlogCategoryScreen
