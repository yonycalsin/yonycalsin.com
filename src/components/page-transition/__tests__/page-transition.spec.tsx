import { render } from '@testing-library/react'

import { PageTransition } from 'components'

const setup = () =>
  render(
    <PageTransition>
      <h1>Content</h1>
    </PageTransition>,
  )

describe('PageTransaction', () => {
  it('wrappers a component with page-transaction correctly', () => {
    const view = setup()

    expect(view.baseElement).toMatchSnapshot()
  })
})
