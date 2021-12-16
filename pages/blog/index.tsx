import type { GetStaticPropsResult } from 'next'
import Link from 'next/link'

import BlogPostList from '~/components/blog-post-list/blog-post-list'
import { Meta } from '~/components/meta'
import { HomeLayout } from '~/layouts'

// @ts-ignore
import { allBlogs as allBlogsContent } from '.contentlayer/data'
// @ts-ignore
import type { Blog } from '.contentlayer/types'

const allBlogs = (allBlogsContent ?? []) as Blog[]

interface BlogPageProps {
  allPosts: Blog[]
}

function BlogPage(props: BlogPageProps) {
  const { allPosts } = props

  return (
    <>
      <HomeLayout>
        <Meta title="Blog" />
        <h1>Blog - Articles</h1>
        <p>
          Tutoriales, artículos técnicos, fragmentos, materiales de referencia y todos los recursos relacionados con el
          desarrollo que he escrito.
        </p>
        <BlogPostList posts={allPosts} />
      </HomeLayout>
    </>
  )
}

export function getStaticProps(): GetStaticPropsResult<BlogPageProps> {
  const allPosts = allBlogs.map(({ body, ...post }) => post) as Blog[]

  return {
    props: {
      allPosts,
    },
  }
}

export default BlogPage
