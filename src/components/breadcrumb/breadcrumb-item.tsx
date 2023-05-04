import * as React from 'react'

import type { BreadcrumbItemProps } from 'typings/components'

function BreadcrumbItem(props: BreadcrumbItemProps) {
  const { children } = props

  return <li>{children}</li>
}

export default BreadcrumbItem
