import * as React from 'react'

import { HomeLayout } from 'layouts'
import siteConfig from 'utils/site-config'

export default function Home() {
   return (
      <HomeLayout>
         <div>Hola Mundo {siteConfig.siteTitle} Sitio Web!</div>
      </HomeLayout>
   )
}
