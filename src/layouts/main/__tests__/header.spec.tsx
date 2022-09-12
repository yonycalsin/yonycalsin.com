import { render } from '@testing-library/react'
import { FeatureProvider } from 'toggled'

import { Header } from '../components/header'

describe('Layouts / Main', () => {
  it('renders a header', () => {
    const view = render(
      <FeatureProvider features={[]}>
        <Header />
      </FeatureProvider>,
    )

    expect(view.baseElement).toMatchSnapshot()
  })
})
