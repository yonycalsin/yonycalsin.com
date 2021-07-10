import * as React from 'react'
import { Link } from 'gatsby-plugin-react-i18next'

import { authorInfo } from 'utils/constants'

export const Navbar = () => {
   return (
      <div className="dark:bg-gray-900">
         <div className="container flex items-center justify-between flex-col h-auto md:flex-row md:h-7 lg:h-10">
            <div>
               <Link to="/" className="block no-underline">
                  <h1 className="text-2xl line-through text-gray">
                     <q>Yony Calsin</q>
                  </h1>
               </Link>
            </div>

            <div className="flex items-center space-x-3">
               <Link to="/projects/">Work</Link>
               <Link to="/me/">Sobre Mi</Link>
               <a href={authorInfo.RESUME} target="__blank">
                  Resume
               </a>
            </div>
         </div>
      </div>
   )
}
