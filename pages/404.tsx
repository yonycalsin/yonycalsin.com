import * as React from 'react'

import { Meta } from '~/components/meta'
import { MainLayout } from '~/layouts'

const NotFoundPage = () => {
  return (
    <MainLayout>
      <Meta title="Page not found - Yony Calsin" notRobots />

      <div className="my-5">
        <div className="my-20">
          <h1 className="text-center my-5">Page Not Found</h1>
        </div>
      </div>
    </MainLayout>
  )
}

export default NotFoundPage
