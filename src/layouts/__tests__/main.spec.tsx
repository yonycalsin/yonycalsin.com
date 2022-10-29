import { ChakraKBar } from '@chakra-ui-kbar/core'
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
      <ChakraKBar>
        <MainLayout>
          <h1>Content</h1>
        </MainLayout>
      </ChakraKBar>,
    )

    expect(view.baseElement).toMatchSnapshot()
  })
})
