import * as React from 'react'

import { getAllBooksApi, getReadingBooksApi } from 'services'
import { Heading } from 'components'
import { BookItem } from './components'

function BooksScreen() {
  const allBooksResponse = React.use(getAllBooksApi())

  const readingBooksResponse = React.use(getReadingBooksApi())

  return (
    <main className="container space-y-6 py-10">
      <header className="space-y-3">
        <Heading size="h1">Books ({allBooksResponse.data.length})</Heading>
        <p>This page contains the books I have read along of my life.</p>
      </header>
      <div className="space-y-3">
        <Heading size="h3">Reading:</Heading>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6" role="list" aria-label="List of reading books">
          {readingBooksResponse.data.map(book => (
            <BookItem
              key={book.id}
              name={book.name}
              imageSrc={book.images[0].url}
              author={book.author}
              rating={book.rating}
            />
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <Heading size="h3">All:</Heading>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6" role="list" aria-label="List of all books">
          {allBooksResponse.data.map(book => (
            <BookItem
              key={book.id}
              name={book.name}
              imageSrc={book.images[0].url}
              author={book.author}
              rating={book.rating}
            />
          ))}
        </div>
      </div>
    </main>
  )
}

export default BooksScreen
