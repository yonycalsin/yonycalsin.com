import { ChakraProvider } from '@chakra-ui/react'
import { ChakraKBar } from '@chakra-ui-kbar/core'
import { render } from '@testing-library/react'

import { ThemeMain } from 'themes'
import { Footer } from 'layouts/main'

describe('MainLayout/Footer', () => {
  it('renders the layout footer', () => {
    const view = render(
      <ChakraProvider theme={ThemeMain}>
        <ChakraKBar>
          <Footer />
        </ChakraKBar>
      </ChakraProvider>,
    )

    expect(view.baseElement).toMatchSnapshot()
  })
})
