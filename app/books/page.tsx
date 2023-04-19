import BooksScreen from 'screens/books'
import { PageTransition } from 'components'

export const metadata = {
  title: 'Books',
}

function BooksPage() {
  return (
    <PageTransition>
      <BooksScreen />
    </PageTransition>
  )
}

export default BooksPage
