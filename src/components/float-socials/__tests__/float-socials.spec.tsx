import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { TestProvider } from 'tests'
import { FloatSocials } from 'components'

function setup() {
  return render(
    <TestProvider>
      <FloatSocials />
    </TestProvider>,
  )
}

describe('FloatSocials', () => {
  it('renders the float socials', () => {
    const view = setup()

    expect(view.container).toMatchSnapshot()
  })

  it('clicks on link', async () => {
    const view = setup()

    const github = screen.getByText(/github/i)

    await userEvent.click(github)

    const linkedin = screen.getByText(/linkedin/i)

    await userEvent.click(linkedin)

    const twitter = screen.getByText(/twitter/i)

    await userEvent.click(twitter)

    const email = screen.getByText(/email/i)

    await userEvent.click(email)

    expect(view.baseElement).toMatchSnapshot()
  })
})
