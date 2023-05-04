import * as React from 'react'
import { clsx } from 'clsx'

import type { HeadingProps } from 'typings/components'
import headingStyles from './heading.styles'

function Heading(props: HeadingProps) {
  const { children, size = 'h5', className, ...restProps } = props

  return (
    <h1 className={clsx(headingStyles({ size }), className)} {...restProps}>
      {children}
    </h1>
  )
}

export default Heading
