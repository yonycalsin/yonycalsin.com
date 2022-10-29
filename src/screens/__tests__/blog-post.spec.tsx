import { render, screen } from '@testing-library/react'

import type { BlogPostScreenProps } from 'typings/screens'
import { postsSuccess } from 'mock-server/mocks'
import { overrideFeatures, TEST_ENVS, TestProvider } from 'tests'
import BlogPostScreen from 'screens/blog-post'

const MOCK_POST = postsSuccess.data[0]

const setup = (post: BlogPostScreenProps['post']) => {
  return render(
    <TestProvider>
      <BlogPostScreen post={post} />
    </TestProvider>,
  )
}

describe('BlogPost', () => {
  beforeAll(() => {
    process.env = overrideFeatures()
  })

  afterAll(() => {
    process.env = TEST_ENVS
  })

  it('renders the blog post screen', () => {
    const view = setup(MOCK_POST)

    const title = screen.queryByRole('heading', { name: MOCK_POST.title })

    expect(title).toBeInTheDocument()

    const mdxContent = screen.queryByText(/hello from mdx content/i)

    expect(mdxContent).toBeInTheDocument()

    expect(view.baseElement).toMatchSnapshot()
  })
})
