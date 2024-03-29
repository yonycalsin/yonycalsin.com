'use client'

import * as React from 'react'
import dayjs from 'dayjs'
import Link from 'next/link'
import { decode } from 'next-base64'

import type { BlogPostScreenProps } from 'typings/screens'
import useMDXComponent from 'hooks/use-mdx-component'
import { Anchor, Breadcrumb, BreadcrumbItem, BreadcrumbSeparator, Heading, MDXComponents } from 'components'
import { DATE_FORMATS } from 'utils/constants'

function BlogPostScreen(props: BlogPostScreenProps) {
  const { post } = props

  const Component = useMDXComponent(decodeURIComponent(decodeURIComponent(decode(post.body.code))))

  return (
    <div className="container py-10 space-y-6">
      <Breadcrumb>
        <BreadcrumbItem>
          <Link href="/" legacyBehavior={true} passHref={true}>
            <Anchor>Home</Anchor>
          </Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <Link href="/blog" legacyBehavior={true} passHref={true}>
            <Anchor>Blog</Anchor>
          </Link>
        </BreadcrumbItem>
      </Breadcrumb>
      <header className="space-y-3">
        <Heading size="h1">{post.title}</Heading>
        <p className="italic text-gray-600">Last updated at {dayjs(post.updatedAt).format(DATE_FORMATS.HUMAN_DATE)}</p>
      </header>
      <Component components={MDXComponents} />
    </div>
  )
}

export default BlogPostScreen
