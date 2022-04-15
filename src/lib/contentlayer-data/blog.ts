import { allBlogs as allBlogsContent, Blog } from '~/contentlayer/generated'
import env from '~/utils/env'

const allBlogs = (env.FF_PROJECTS ? allBlogsContent ?? [] : []) as Blog[]

export type { Blog }

export { allBlogs }
