import type { GetStaticPropsResult } from 'next'
import Link from 'next/link'

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

        {allPosts.map((post, index) => {
          return (
            <Link href={`/blog/${post.slug}`} key={post._id}>
              <a
                className="flex items-center font-normal justify-between dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 px-2 py-1"
                style={{ textDecoration: 'none' }}
              >
                <h3 className="text-h3 no-underline">
                  <span className="flex-shrink-0">{index + 1}.- </span> {post.title}
                </h3>
                <span className="text-h5">{post.readingTime.text}</span>
              </a>
            </Link>
          )
        })}
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
