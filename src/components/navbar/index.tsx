import * as React from 'react'
import { Link, Trans, useTranslation } from 'gatsby-plugin-react-i18next'

export const Navbar = () => {
   const { t } = useTranslation()

   return (
      <div>
         <div className="container prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto flex items-center justify-between  h-20">
            <div>
               <Link to="/">Yony Calsin</Link>
            </div>
            <div>
               <div>
                  <Link to="/me/" className="mr-4">
                     <Trans>{t('about-me')}</Trans>
                  </Link>
                  <Link to="/contact/">
                     <Trans>{t('contact')}</Trans>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   )
}
