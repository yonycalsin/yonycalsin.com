import * as React from 'react'

import NotFoundScreen from 'screens/not-found'
import { Meta } from 'components/meta'

function NotFoundPage() {
  return (
    <>
      <Meta title="Page not found - Yony Calsin" notRobots />
      <NotFoundScreen />
    </>
  )
}

export default NotFoundPage
