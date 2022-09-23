import { ChakraProvider } from '@chakra-ui/react'
import { ChakraKBar } from '@chakra-ui-kbar/core'
import { render } from '@testing-library/react'

import { mainTheme } from '~/themes/main'

import { Footer } from '../components/footer/footer'

describe('Layouts / Main', () => {
  it('renders the layout footer', () => {
    const view = render(
      <ChakraProvider theme={mainTheme}>
        <ChakraKBar>
          <Footer />
        </ChakraKBar>
      </ChakraProvider>,
    )

    expect(view.baseElement).toMatchSnapshot()
  })
})
