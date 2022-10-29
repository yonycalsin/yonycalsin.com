import { ChakraKBar } from '@chakra-ui-kbar/core'
import { render } from '@testing-library/react'

import { MainLayout } from 'layouts'

describe('MainLayout', () => {
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
