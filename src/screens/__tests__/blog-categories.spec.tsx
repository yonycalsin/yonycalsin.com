import { screen, within } from '@testing-library/react'

import { categoriesSuccess } from 'mock-server/mocks'
import { setupWithReactQuery,TestProvider } from 'tests'
import { getCategoriesApi } from 'services'
import BlogCategoriesScreen from 'screens/blog-categories'

jest.mock('services/categories')

const mockGetCategoriesApi = getCategoriesApi as jest.Mock

function setup() {
  return setupWithReactQuery(
    <TestProvider>
      <BlogCategoriesScreen />
    </TestProvider>,
  )
}

describe('BlogCategoriesScreen', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders the blog categories screen', async () => {
    mockGetCategoriesApi.mockReturnValueOnce(categoriesSuccess)

    const view = setup()

    await screen.findByRole('progressbar')

    const list = await screen.findByRole('list', { name: /list of categories/i })

    const items = within(list).getAllByRole('listitem')

    expect(items).toHaveLength(categoriesSuccess.data.length)

    expect(view.baseElement).toMatchSnapshot()
  })

  it.todo('redirects to the category screen when click on the link')
})
