import Link from 'next/link'

import type { Blog } from '~/lib/contentlayer-data/blog'

export interface BlogPostListProps {
  posts: Blog[]
}

function BlogPostList(props: BlogPostListProps) {
  const { posts } = props

  return (
    <>
      {posts.map((post, index) => (
        <Link href={`/blog/${post.slug}`} key={post._id}>
          <a className="flex items-center font-normal justify-between dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 px-2 py-1 not">
            <h3 className="md:text-xl no-underline mb-0 font-medium">
              <span className="flex-shrink-0">{index + 1}.- </span> {post.title}
            </h3>
            <span className="text-base">{post.readingTime.text}</span>
          </a>
        </Link>
      ))}
    </>
  )
}

export default BlogPostList
