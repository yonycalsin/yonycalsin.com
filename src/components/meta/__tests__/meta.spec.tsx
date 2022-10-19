/* eslint-disable testing-library/no-container, testing-library/no-node-access */
import * as React from 'react'
import { render } from '@testing-library/react'

import type { MetaProps } from 'typings/components'
import { Meta } from 'components'

function setup(props = {} as Partial<MetaProps>) {
  return render(<Meta {...props} />)
}

function HeadMock(props: React.PropsWithChildren<unknown>) {
  const { children } = props

  return <div>{children}</div>
}

jest.mock('next/head', () => HeadMock)

describe('Meta', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders the meta', () => {
    const view = setup()

    expect(view.baseElement).toMatchSnapshot()
  })

  it('renders the meta with custom title', () => {
    const view = setup({
      title: 'About Me',
    })

    const title = view.container.querySelector('title')

    expect(title).toHaveTextContent('About Me - Yony Calsin')

    expect(view.baseElement).toMatchSnapshot()
  })

  it('renders the meta with no-robots', () => {
    const view = setup({
      notRobots: true,
    })

    const robots = view.container.querySelector('meta[name=robots]')

    expect(robots).toBeInTheDocument()

    expect(robots).toHaveAttribute('content', 'noindex, nofollow, noimageindex, indexifembedded')

    const googlebot = view.container.querySelector('meta[name=googlebot]')

    expect(googlebot).toBeInTheDocument()

    expect(googlebot).toHaveAttribute('content', 'noindex, nofollow, noimageindex, indexifembedded')

    expect(view.baseElement).toMatchSnapshot()
  })
})
