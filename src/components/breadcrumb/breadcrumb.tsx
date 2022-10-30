import * as React from 'react'

import type { BreadcrumbProps } from 'typings/components'

function Breadcrumb(props: BreadcrumbProps) {
  const { children } = props

  return (
    <nav className="flex">
      <ol className="inline-flex items-center space-x-2">{children}</ol>
    </nav>
  )
}

export default Breadcrumb
