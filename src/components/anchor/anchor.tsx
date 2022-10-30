import * as React from 'react'
import clsx from 'clsx'

import type { AnchorProps } from 'typings/components'

const Anchor = React.forwardRef<HTMLAnchorElement, AnchorProps>((props, ref) => {
  const { className, children, ...restProps } = props

  return (
    <a
      {...restProps}
      className={clsx('font-medium text-primary-600 dark:text-primary-500 hover:underline', className)}
      ref={ref}
    >
      {children}
    </a>
  )
})

Anchor.displayName = 'Anchor'

export default Anchor
