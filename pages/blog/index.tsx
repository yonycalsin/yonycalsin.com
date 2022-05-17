import type { GetStaticPropsResult } from 'next'

import { Meta } from '~/components/meta'
import { allBlogs, Blog } from '~/lib/contentlayer-data/blog'
import { BlogScreen } from '~/screens/blog'

interface BlogPageProps {
  allPosts: Blog[]
}

function BlogPage(props: BlogPageProps) {
  const { allPosts } = props

  return (
    <>
      <Meta title="Blog" />
      <BlogScreen posts={allPosts} />
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
