import * as React from 'react'
import { screen, within } from '@testing-library/react'

import { allBooksSuccess, readingBooksSuccess } from 'mock-server/mocks'
import { overrideFeatures, setupWithReactQuery, TEST_ENVS } from 'tests'
import { getAllBooksApi, getReadingBooksApi } from 'services'
import BooksScreen from 'screens/books'

function setup() {
  return setupWithReactQuery(<BooksScreen />)
}

jest.mock('services/books')

const mockGetAllBooksApi = getAllBooksApi as jest.Mock

const mockGetReadingBooksApi = getReadingBooksApi as jest.Mock

describe('BooksScreen', () => {
  beforeAll(() => {
    process.env = overrideFeatures()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  afterAll(() => {
    process.env = TEST_ENVS
  })

  it('renders the books screen', () => {
    mockGetAllBooksApi.mockReturnValueOnce(allBooksSuccess)

    mockGetReadingBooksApi.mockReturnValueOnce(readingBooksSuccess)

    const view = setup()

    const allBooksList = screen.getByRole('list', { name: /list of all books/i })

    const allBooksListItems = within(allBooksList).getAllByRole('listitem')

    expect(allBooksListItems).toHaveLength(allBooksSuccess.data.results.length)

    const allReadingBooksList = screen.getByRole('list', { name: /list of reading books/i })

    const allReadingBooksListItems = within(allReadingBooksList).getAllByRole('listitem')

    expect(allReadingBooksListItems).toHaveLength(readingBooksSuccess.data.results.length)

    expect(view.baseElement).toMatchSnapshot()
  })
})
