import { render, screen } from '@testing-library/react'

import { SectionHeader, SectionHeaderProps } from '../section-header'

const defaultSectionHeaderProps: SectionHeaderProps = {
  title: 'Customers',
}

const setup = (props?: Partial<SectionHeaderProps>) => {
  return render(<SectionHeader {...props} {...defaultSectionHeaderProps} />)
}

describe('Components / SectionHeader', () => {
  it('renders the section header', () => {
    const view = setup()

    expect(view.baseElement).toMatchSnapshot()
  })

  it('renders the section header with anchor', () => {
    const view = setup({
      actionHref: '/customers',
      actionLabel: 'See all',
    })

    const actionLink = screen.queryByRole('link', { name: /see all/i })

    expect(actionLink).toBeInTheDocument()

    expect(actionLink).not.toHaveAttribute('target', '_blank')

    expect(view.baseElement).toMatchSnapshot()
  })

  it('renders the section header with external anchor', () => {
    const view = setup({
      actionHref: '/customers',
      actionLabel: 'See all',
      actionHrefExternal: true,
    })

    const actionLink = screen.queryByRole('link', { name: /see all/i })

    expect(actionLink).toBeInTheDocument()

    expect(actionLink).toHaveAttribute('target', '_blank')

    expect(view.baseElement).toMatchSnapshot()
  })
})
