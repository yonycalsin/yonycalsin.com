import * as React from 'react'

import { Meta } from '~/components/meta'
import type { Blog } from '~/lib/contentlayer-data/blog'

import { MainLayout } from '../main/main.layout'

interface BlogLayoutProps {
  children: React.ReactNode
  post: Blog
}

export function BlogLayout(props: BlogLayoutProps) {
  const { post, children } = props

  return (
    <MainLayout>
      <Meta title={`${post.title} - Yony Calsin`} notRobots />
      <article className="flex flex-col items-start justify-center w-full mx-auto mb-8">
        <h1 className="mb-2 text-xl font-bold tracking-tight text-black md:text-4xl dark:text-white">{post.title}</h1>
        <div className="w-full mt-2 prose dark:prose-dark max-w-none">{children}</div>
      </article>
    </MainLayout>
  )
}
