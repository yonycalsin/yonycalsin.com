import * as React from 'react'

import { FloatSocials, Navbar } from '~/components'
import NightModeButton from '~/components/night-mode-button'

type HomeLayoutProps = {
   children: React.ReactNode
   isStandaloneBrand?: boolean
}

export const HomeLayout = (props: HomeLayoutProps) => {
   const { children } = props

   return (
      <>
         <NightModeButton />
         <Navbar />

         <div className="container">{children}</div>

         <footer className="bg-gray-50 dark:bg-gray-900">
            <div className="container border-t-2 border-gray-100 dark:border-gray-700">
               <div className="flex flex-col md:flex-row flex-wrap justify-between items-center ">
                  <p>
                     <small>
                        Created By{' '}
                        <i>
                           <b>Yony Calsin</b>
                        </i>{' '}
                     </small>
                  </p>

                  <p>
                     <small>
                        With NextJs, Typescript, TailwindCss, and Vercel
                     </small>
                  </p>
               </div>
            </div>
         </footer>

         <FloatSocials />
      </>
   )
}
