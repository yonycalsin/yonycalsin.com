import type { useColorMode } from '@chakra-ui/react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { NightModeButton } from '../night-mode-button'

const mockToggleColorMode = jest.fn()

const mockUseColorMode = jest.fn() as jest.Mock<Partial<ReturnType<typeof useColorMode>>>

jest.mock('@chakra-ui/react', () => ({
  ...jest.requireActual<typeof import('@chakra-ui/react')>('@chakra-ui/react'),
  useColorMode: () => mockUseColorMode(),
}))

const setup = () => {
  return render(<NightModeButton />)
}

describe('Components / NightModeButton', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders the moon icon', () => {
    mockUseColorMode.mockReturnValue({
      colorMode: 'dark',
    })

    const view = setup()

    expect(view.baseElement).toMatchSnapshot()
  })

  it('renders the sun icon', () => {
    mockUseColorMode.mockReturnValue({
      colorMode: 'light',
    })

    const view = setup()

    expect(view.baseElement).toMatchSnapshot()
  })

  it('clicks on the toggle button', async () => {
    mockUseColorMode.mockReturnValue({
      colorMode: 'dark',
      toggleColorMode: mockToggleColorMode,
    })

    setup()

    const button = screen.getByRole('button')

    expect(button).toBeInTheDocument()

    await userEvent.click(button)

    expect(mockToggleColorMode).toHaveBeenCalledTimes(1)
  })
})
