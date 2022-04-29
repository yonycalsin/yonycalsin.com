import * as React from 'react'

import { Meta } from '~/components/meta'
import { NotFoundScreen } from '~/screens/not-found'

function NotFoundPage() {
  return (
    <>
      <Meta title="Page not found - Yony Calsin" notRobots />
      <NotFoundScreen />
    </>
  )
}

export default NotFoundPage
