import { screen, within } from '@testing-library/react'

import { allBooksSuccess, readingBooksSuccess } from 'mock-server/mocks'
import { overrideFeatures, setupWithReactQuery, TEST_ENVS, TestProvider } from 'tests'
import { getAllBooksApi, getReadingBooksApi } from 'services'
import BooksScreen from 'screens/books'

function setup() {
  return setupWithReactQuery(
    <TestProvider>
      <BooksScreen />
    </TestProvider>,
  )
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

  it('renders the books screen', async () => {
    mockGetAllBooksApi.mockReturnValueOnce(allBooksSuccess)

    mockGetReadingBooksApi.mockReturnValueOnce(readingBooksSuccess)

    const view = setup()

    await screen.findByRole('progressbar')

    const allBooksList = await screen.findByRole('list', { name: /list of all books/i })

    const allBooksListItems = within(allBooksList).getAllByRole('listitem')

    expect(allBooksListItems).toHaveLength(allBooksSuccess.data.length)

    const allReadingBooksList = await screen.findByRole('list', { name: /list of reading books/i })

    const allReadingBooksListItems = within(allReadingBooksList).getAllByRole('listitem')

    expect(allReadingBooksListItems).toHaveLength(readingBooksSuccess.data.length)

    expect(view.baseElement).toMatchSnapshot()
  })
})
