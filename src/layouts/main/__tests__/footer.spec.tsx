import { ChakraProvider } from '@chakra-ui/react'
import { render } from '@testing-library/react'

import { mainTheme } from '~/themes/main'

import { Footer } from '../components/footer/footer'

describe('Layouts / Main', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    })
  })

  it('renders the layout footer', () => {
    const view = render(
      <ChakraProvider theme={mainTheme}>
        <Footer />
      </ChakraProvider>,
    )

    expect(view.baseElement).toMatchSnapshot()
  })
})
