import * as React from 'react'
import { clsx } from 'clsx'

import type { IconProps } from 'typings/components'

function Icon(props: IconProps) {
  const { children, className } = props

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  return React.cloneElement(children, {
    role: 'icon',
    ...children.props,
    className: clsx('w-4 h-4 inline-block leading-4 shrink-0', className),
  })
}

export default Icon
