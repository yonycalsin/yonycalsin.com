import * as React from 'react'
import { screen, within } from '@testing-library/react'

import { categoriesSuccess } from 'mock-server/mocks'
import { overrideFeatures, setupWithReactQuery, TEST_ENVS } from 'tests'
import { getCategoriesApi } from 'services'
import BlogCategoriesScreen from 'screens/blog-categories'

jest.mock('services/categories')

const mockGetCategoriesApi = getCategoriesApi as jest.Mock

function setup() {
  return setupWithReactQuery(<BlogCategoriesScreen />)
}

describe('BlogCategoriesScreen', () => {
  beforeAll(() => {
    process.env = overrideFeatures()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  afterAll(() => {
    process.env = TEST_ENVS
  })

  it('renders the blog categories screen', () => {
    mockGetCategoriesApi.mockReturnValueOnce(categoriesSuccess)

    const view = setup()

    const list = screen.getByRole('list', { name: /list of categories/i })

    const items = within(list).getAllByRole('listitem')

    expect(items).toHaveLength(categoriesSuccess.data.results.length)

    expect(view.baseElement).toMatchSnapshot()
  })

  it.todo('redirects to the category screen when click on the link')
})
