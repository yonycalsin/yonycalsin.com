import * as React from 'react'
import { clsx } from 'clsx'

import type { UnorderedListProps } from 'typings/components'

function UnorderedList(props: UnorderedListProps) {
  const { children, className, ...restProps } = props

  return (
    <ul className={clsx('space-y-1 list-disc list-inside', className)} {...restProps}>
      {children}
    </ul>
  )
}

export default UnorderedList
