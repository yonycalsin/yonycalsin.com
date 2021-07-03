import * as React from 'react'
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'
import { Link, Trans, useTranslation } from 'gatsby-plugin-react-i18next'

export const Navbar = () => {
   const { t, i18n } = useTranslation()

   return (
      <div className="dark:bg-gray-900">
         <div className="container flex items-center justify-between flex-col h-auto md:flex-row md:h-14 lg:h-20">
            <div>
               <Link to="/" className="block no-underline">
                  <h1 className="text-2xl line-through text-gray-600">
                     <q>Yony Calsin</q>
                  </h1>
               </Link>
            </div>

            <div className="flex items-center space-x-3">
               <Link to="/projects/">Proyectos</Link>

               <Link
                  to="/me/"
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
   )
}
