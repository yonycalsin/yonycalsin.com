import * as React from 'react'
import Head from 'next/head'

import { Meta } from '~/components/meta'

import { HomeLayout } from '../home.layout'

// @ts-ignore
import type { Blog } from '.contentlayer/types'

interface BlogLayoutProps {
  children: React.ReactNode
  post: Blog
}

export function BlogLayout(props: BlogLayoutProps) {
  const { post, children } = props

  return (
    <HomeLayout>
      <Meta title={`${post.title} - Yony Calsin`} notRobots />
      <article className="flex flex-col items-start justify-center w-full mx-auto mb-8">
        <h1 className="mb-2 text-h3 font-bold tracking-tight text-black md:text-4xl dark:text-white">{post.title}</h1>
        <div className="w-full mt-2 prose dark:prose-dark max-w-none">{children}</div>
      </article>
    </HomeLayout>
  )
}
