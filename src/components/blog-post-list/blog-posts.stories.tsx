import type { ComponentMeta } from '@storybook/react'

import { allBlogs } from '~/lib/contentlayer-data/blog'

import { BlogPosts, BlogPostsProps } from './blog-posts'

export default {
  title: 'Blog/Post/Posts',
  component: BlogPosts,
} as ComponentMeta<typeof BlogPosts>

export const Default = (args: BlogPostsProps) => {
  return <BlogPosts {...args} />
}

Default.args = {
  title: 'All Posts',
  posts: allBlogs,
  actionHref: '/',
  actionLabel: 'See All',
} as BlogPostsProps
