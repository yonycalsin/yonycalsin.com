import * as React from 'react'
import { screen, within } from '@testing-library/react'

import { postsSuccess } from 'mock-server/mocks'
import { overrideFeatures, setupWithReactQuery, TEST_ENVS } from 'tests'
import { getPostsApi } from 'services'
import BlogScreen from 'screens/blog'

jest.mock('services/posts')

const mockGetPostsApi = getPostsApi as jest.Mock

function setup() {
  return setupWithReactQuery(<BlogScreen />)
}

describe('BlogScreen', () => {
  beforeAll(() => {
    process.env = overrideFeatures()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  afterAll(() => {
    process.env = TEST_ENVS
  })

  it('renders the blog screen', () => {
    mockGetPostsApi.mockReturnValueOnce(postsSuccess)

    const view = setup()

    const list = screen.getByRole('list', {
      name: /list of posts/i,
    })

    const items = within(list).getAllByRole('listitem')

    expect(items).toHaveLength(items.length)

    const title = screen.queryByRole('heading', { name: `Posts (${postsSuccess.data.results.length})` })

    expect(title).toBeInTheDocument()

    expect(view.baseElement).toMatchSnapshot()
  })
})
