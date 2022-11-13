import BooksScreen from 'screens/books'
import { PageTransition } from 'components'

function BooksPage() {
  return (
    <PageTransition>
      <BooksScreen />
    </PageTransition>
  )
}

export default BooksPage
