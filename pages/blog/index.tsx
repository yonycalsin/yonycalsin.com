import type { GetStaticPropsResult } from 'next'

import { BlogPosts } from '~/components/blog-post-list/blog-posts'
import { Meta } from '~/components/meta'
import { MainLayout } from '~/layouts'
import { allBlogs, Blog } from '~/lib/contentlayer-data/blog'

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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const allPosts = allBlogs.map(({ body, ...post }) => post) as Blog[]

  return {
    props: {
      allPosts,
    },
  }
}

export default BlogPage
