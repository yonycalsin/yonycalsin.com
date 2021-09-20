import * as React from 'react'
import Head from 'next/head'

import { HomeLayout } from '~/layouts'

const NotFoundPage = () => {
  return (
    <HomeLayout>
      <Head>
        <title>Page Not Found</title>
      </Head>

      <div className="my-5">
        <div className="my-20">
          <h1 className="text-center my-5">Page Not Found</h1>
        </div>
      </div>
    </HomeLayout>
  )
}

export default NotFoundPage
