import clsx from 'clsx'

import type { HeadingProps } from 'typings/components'
import headingStyles from './heading.styles'

function Heading(props: HeadingProps) {
  const { children, className, size, ...restProps } = props

  return (
    <h1 className={clsx(headingStyles({ size }), className)} {...restProps}>
      {children}
    </h1>
  )
}

Heading.defaultProps = {
  size: 'h2',
}

export default Heading
