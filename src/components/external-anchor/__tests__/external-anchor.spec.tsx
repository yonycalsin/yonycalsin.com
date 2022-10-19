import { render, screen } from '@testing-library/react'

import { ExternalAnchor } from 'components'

describe('ExternalAnchor', () => {
  it('renders an external anchor', () => {
    const view = render(<ExternalAnchor href="https://domain.com">Go to home</ExternalAnchor>)

    const anchor = screen.queryByRole('link', { name: /go to home/i })

    expect(anchor).toBeInTheDocument()

    expect(view.baseElement).toMatchSnapshot()
  })
})
