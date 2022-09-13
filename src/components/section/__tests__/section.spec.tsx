import * as React from 'react'
import { render } from '@testing-library/react'

import { Section } from '../section'

const setup = () => {
  return render(
    <Section>
      <div>Section Content</div>
    </Section>,
  )
}

describe('Components / Section', () => {
  it('renders an section', () => {
    const view = setup()

    expect(view.baseElement).toMatchSnapshot()
  })
})
