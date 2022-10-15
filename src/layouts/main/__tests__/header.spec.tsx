import { render } from '@testing-library/react'
import { FeatureProvider } from 'toggled'

import { Header } from 'layouts/main'

describe('MainLayout/Header', () => {
  it('renders a header', () => {
    const view = render(
      <FeatureProvider features={[]}>
        <Header />
      </FeatureProvider>,
    )

    expect(view.baseElement).toMatchSnapshot()
  })
})
