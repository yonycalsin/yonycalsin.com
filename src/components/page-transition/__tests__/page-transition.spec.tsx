import { render } from '@testing-library/react'

import { PageTransition } from '../page-transition'

describe('Components / Page Transaction', () => {
  it('wrappers a component with page-transaction correctly', () => {
    const view = render(
      <PageTransition>
        <h1>Content</h1>
      </PageTransition>,
    )

    expect(view.baseElement).toMatchSnapshot()
  })
})
