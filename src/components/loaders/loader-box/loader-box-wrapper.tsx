import * as React from 'react'

import type { LoaderBoxWrapperProps } from 'typings/components'

function LoaderBoxWrapper(props: LoaderBoxWrapperProps) {
  const { children } = props

  return <div className="w-full h-full flex items-center justify-center min-h-[2.5rem]">{children}</div>
}

export default LoaderBoxWrapper
