import { render, screen } from '@testing-library/react'

import { PageTransition } from 'components'

const setup = () =>
  render(
    <PageTransition>
      <div data-testid="mock-content" />
    </PageTransition>,
  )

describe('PageTransaction', () => {
  it('wrappers a component with page-transaction correctly', () => {
    const view = setup()

    const content = screen.queryByTestId('mock-content')

    expect(content).toBeInTheDocument()

    expect(view.baseElement).toMatchSnapshot()
  })
})
