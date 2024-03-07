import * as React from 'react'

import type { PageTransitionProps } from 'typings/components'

function PageTransition(props: PageTransitionProps) {
  const { children } = props

  return <div className="page-transition">{children}</div>
}

export default PageTransition
