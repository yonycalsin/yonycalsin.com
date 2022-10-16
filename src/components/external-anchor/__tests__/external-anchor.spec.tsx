import { render } from '@testing-library/react'

import { ExternalAnchor } from 'components'

describe('ExternalAnchor', () => {
  it('renders an external anchor', () => {
    const view = render(<ExternalAnchor href="https://domain.com">Go to home</ExternalAnchor>)

    expect(view.baseElement).toMatchSnapshot()
  })
})
