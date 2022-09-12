import { render } from '@testing-library/react'

import { Footer } from '../components/footer/footer'

describe('Layouts / Main', () => {
  it('renders the layout footer', () => {
    const view = render(<Footer />)

    expect(view.baseElement).toMatchSnapshot()
  })
})
