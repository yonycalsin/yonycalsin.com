import type { ComponentMeta } from '@storybook/react'

import { BlogPosts, BlogPostsProps } from './blog-posts'
import { allBlogs as allBlogsContent } from '.contentlayer/data'
import type { Blog } from '.contentlayer/types'

const basicPosts = (allBlogsContent ?? []) as Blog[]

export default {
  title: 'Blog/Post/Posts',
  component: BlogPosts,
} as ComponentMeta<typeof BlogPosts>

export const Default = (args: BlogPostsProps) => {
  return <BlogPosts {...args} />
}

Default.args = {
  title: 'All Posts',
  posts: basicPosts,
  actionHref: '/',
  actionLabel: 'See All',
} as BlogPostsProps
