import * as React from 'react'
import { render } from '@testing-library/react'

import { Section } from 'components'

const setup = () => {
  return render(
    <Section>
      <div>Section Content</div>
    </Section>,
  )
}

describe('Section', () => {
  it('renders an section', () => {
    const view = setup()

    expect(view.baseElement).toMatchSnapshot()
  })
})
