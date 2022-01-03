// @ts-ignore
import env from '~/utils/env'

import { allBlogs as allBlogsContent } from '.contentlayer/data'
// @ts-ignore
import type { Blog } from '.contentlayer/types'

const allBlogs = env.FF_PROJECTS ? allBlogsContent ?? [] : ([] as Blog[])

export type { Blog }

export { allBlogs }
