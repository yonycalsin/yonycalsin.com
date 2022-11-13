import * as React from 'react'

import BlogScreen from 'screens/blog'
import { PageTransition } from 'components'

function BlogPage() {
  return (
    <PageTransition>
      <BlogScreen />
    </PageTransition>
  )
}

export default BlogPage
