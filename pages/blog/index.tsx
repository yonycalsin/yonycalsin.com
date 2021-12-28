import type { GetStaticPropsResult } from 'next'

import { BlogPosts } from '~/components/blog-post-list/blog-posts'
import { Meta } from '~/components/meta'
import { MainLayout } from '~/layouts'

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
      <MainLayout>
        <Meta title="Blog" />
        <h1>Blog - Articles</h1>
        <p>
          Tutoriales, artículos técnicos, fragmentos, materiales de referencia y todos los recursos relacionados con el
          desarrollo que he escrito.
        </p>
        <BlogPosts title="All Articles" posts={allPosts} className="mt-4" />
      </MainLayout>
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
