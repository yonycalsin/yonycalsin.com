import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

import { NightModeButton } from 'components'

const mockToggleColorMode = jest.fn()

const setup = () => {
  return render(<NightModeButton />)
}

describe.skip('NightModeButton', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders the moon icon', () => {
    const view = setup()

    expect(view.baseElement).toMatchSnapshot()
  })

  it('renders the sun icon', () => {
    const view = setup()

    expect(view.baseElement).toMatchSnapshot()
  })

  it('clicks on the toggle button', async () => {
    setup()

    const button = screen.getByRole('button')

    expect(button).toBeInTheDocument()

    await userEvent.click(button)

    expect(mockToggleColorMode).toHaveBeenCalledTimes(1)
  })
})
