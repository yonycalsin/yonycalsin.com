import type { ComponentMeta } from '@storybook/react'

import BlogPostList, { BlogPostListProps } from './blog-post-list'
// @ts-ignore
import { allBlogs as allBlogsContent } from '.contentlayer/data'
// @ts-ignore
import type { Blog } from '.contentlayer/types'

const basicPosts = (allBlogsContent ?? []) as Blog[]

export default {
  title: 'Blog/Post/List',
  component: BlogPostList,
} as ComponentMeta<typeof BlogPostList>

export const Default = (args: BlogPostListProps) => {
  return <BlogPostList {...args} />
}

Default.args = {
  posts: basicPosts,
} as BlogPostListProps
