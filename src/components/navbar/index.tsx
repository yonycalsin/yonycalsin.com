import * as React from 'react'
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'
import { Link, Trans, useTranslation } from 'gatsby-plugin-react-i18next'

import LanguagesNav from './languages-nav'

export const Navbar = () => {
   const { t, i18n } = useTranslation()

   return (
      <div className="dark:bg-gray-900">
         <div className="container prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto flex items-center justify-between h-14 lg:h-20">
            <div>
               <Link
                  to="/"
                  style={{
                     textDecoration: 'none',
                     fontWeight: 'bold',
                  }}
               >
                  Yony Calsin
               </Link>
            </div>

            <LanguagesNav className="hidden md:flex" />

            <div className="flex">
               <div>
                  <Link
                     to="/me/"
                     className="mr-4"
                     onClick={e => {
                        e.persist()

                        // Lets track that custom click
                        trackCustomEvent({
                           // string - required - The object that was interacted with (e.g.video)
                           category: 'Navbar Right Menu',
                           // string - required - Type of interaction (e.g. 'play')
                           action: 'link-click',
                           // string - optional - Useful for categorizing events (e.g. 'Spring Campaign')
                           label: `Click in about-me link - ${i18n.language} `,
                        })
                     }}
                  >
                     <Trans>{t('about-me.title')}</Trans>
                  </Link>
                  <Link
                     to="/contact/"
                     onClick={e => {
                        e.persist()

                        // Lets track that custom click
                        trackCustomEvent({
                           // string - required - The object that was interacted with (e.g.video)
                           category: 'Navbar Right Menu',
                           // string - required - Type of interaction (e.g. 'play')
                           action: 'link-click',
                           // string - optional - Useful for categorizing events (e.g. 'Spring Campaign')
                           label: `Click in contact link - ${i18n.language} `,
                        })
                     }}
                  >
                     <Trans>{t('contact.title')}</Trans>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   )
}
