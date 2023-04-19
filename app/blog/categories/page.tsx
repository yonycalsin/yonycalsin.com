import BlogCategoriesScreen from 'screens/blog-categories'
import { PageTransition } from 'components'

export const metadata = {
  title: 'Categories',
}

function BlogCategoriesPage() {
  return (
    <PageTransition>
      <BlogCategoriesScreen />
    </PageTransition>
  )
}

export default BlogCategoriesPage
