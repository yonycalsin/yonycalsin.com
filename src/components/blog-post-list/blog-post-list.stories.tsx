import type { ComponentMeta } from '@storybook/react'

import { allBlogs } from '~/lib/contentlayer-data/blog'

import BlogPostList, { BlogPostListProps } from './blog-post-list'

export default {
  title: 'Blog/Post/List',
  component: BlogPostList,
} as ComponentMeta<typeof BlogPostList>

export const Default = (args: BlogPostListProps) => {
  return <BlogPostList {...args} />
}

Default.args = {
  posts: allBlogs,
} as BlogPostListProps
