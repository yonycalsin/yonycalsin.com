// Create a Providers component to wrap your application with all the components requiring 'use client', such as next-nprogress-bar or your different contexts...
'use client'

import * as React from 'react'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'

function AppProviders(props: React.PropsWithChildren<unknown>) {
  const { children } = props

  return (
    <>
      {children}
      <ProgressBar height="8px" color="hsl(var(--primary))" options={{ showSpinner: true }} shallowRouting={true} />
    </>
  )
}

export default AppProviders
