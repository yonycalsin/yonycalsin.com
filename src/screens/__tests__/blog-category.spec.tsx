import { render, screen, within } from '@testing-library/react'

import type { BlogCategoryScreenProps } from 'typings/screens'
import { categorySuccess, postsSuccess } from 'mock-server/mocks'
import { overrideFeatures, TEST_ENVS } from 'tests'
import BlogCategoryScreen from 'screens/blog-category'

const MOCK_POSTS = postsSuccess.data.results

const MOCK_CATEGORY = categorySuccess.data

function setup(posts: BlogCategoryScreenProps['posts'] = []) {
  return render(<BlogCategoryScreen category={MOCK_CATEGORY} posts={posts} />)
}

describe('BlogCategoryScreen', () => {
  beforeAll(() => {
    process.env = overrideFeatures()
  })

  afterAll(() => {
    process.env = TEST_ENVS
  })

  it('renders the blog category screen', () => {
    const view = setup()

    const title = screen.queryByRole('heading', { name: new RegExp(`Category: ${MOCK_CATEGORY.title}`, 'i') })

    expect(title).toBeInTheDocument()

    const mdxContent = screen.queryByTestId('mdx-content')

    expect(mdxContent).toBeInTheDocument()

    expect(view.baseElement).toMatchSnapshot()
  })

  it("renders the list of category's posts", () => {
    const view = setup(MOCK_POSTS)

    const list = screen.getByRole('list', { name: /list of category's posts/i })

    const items = within(list).getAllByRole('listitem')

    expect(items).toHaveLength(MOCK_POSTS.length)

    expect(view.baseElement).toMatchSnapshot()
  })
})
