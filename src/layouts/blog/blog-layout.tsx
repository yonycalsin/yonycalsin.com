import * as React from 'react'

import { HomeLayout } from '..'

import type { Blog } from '.contentlayer/types'

interface BlogLayoutProps {
  children: React.ReactNode
  post: Blog
}

function BlogLayout(props: BlogLayoutProps) {
  const { post, children } = props

  return (
    <HomeLayout>
      <article className="flex flex-col items-start justify-center w-full mx-auto mb-8">
        <h1 className="mb-2 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">{post.title}</h1>
        <div className="w-full mt-2 prose dark:prose-dark max-w-none">{children}</div>
      </article>
    </HomeLayout>
  )
}

export default BlogLayout
