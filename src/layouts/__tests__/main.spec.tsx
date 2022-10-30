import { render } from '@testing-library/react'

import { overrideFeatures, TEST_ENVS } from 'tests'
import { MainLayout } from 'layouts'

describe('MainLayout', () => {
  beforeAll(() => {
    process.env = overrideFeatures()
  })

  afterAll(() => {
    process.env = TEST_ENVS
  })

  it('renders the main layout', () => {
    const view = render(
      <MainLayout>
        <h1>Content</h1>
      </MainLayout>,
    )

    expect(view.baseElement).toMatchSnapshot()
  })
})
