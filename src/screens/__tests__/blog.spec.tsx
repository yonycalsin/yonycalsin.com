import { screen, within } from '@testing-library/react'

import { postsSuccess } from 'mock-server/mocks'
import { setupWithReactQuery, TestProvider } from 'tests'
import { getPostsApi } from 'services'
import BlogScreen from 'screens/blog'

jest.mock('services/posts')

const mockGetPostsApi = getPostsApi as jest.Mock

function setup() {
  return setupWithReactQuery(
    <TestProvider>
      <BlogScreen />
    </TestProvider>,
  )
}

describe('BlogScreen', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders the blog screen', async () => {
    mockGetPostsApi.mockReturnValueOnce(postsSuccess)

    const view = setup()

    await screen.findByRole('progressbar')

    const list = await screen.findByRole('list', {
      name: /list of posts/i,
    })

    const items = within(list).getAllByRole('listitem')

    expect(items).toHaveLength(items.length)

    const title = screen.queryByRole('heading', { name: `Posts (${postsSuccess.data.length})` })

    expect(title).toBeInTheDocument()

    expect(view.baseElement).toMatchSnapshot()
  })
})
