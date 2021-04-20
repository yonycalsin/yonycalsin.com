import * as React from 'react'
import {
   Link,
   Trans,
   useI18next,
   useTranslation,
} from 'gatsby-plugin-react-i18next'

type NavbarProps = {
   isStandaloneBrand?: boolean
}

export const Navbar = (props: NavbarProps) => {
   const { isStandaloneBrand } = props

   const { languages, changeLanguage } = useI18next()

   const { t } = useTranslation()

   const languagesRender = languages.map(lang => (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <a
         key={lang}
         href="#"
         onClick={e => {
            e.preventDefault()
            changeLanguage(lang)
         }}
         className="mr-4 text-gray-600 font-semibold"
      >
         {t(`languages.${lang}`)}
      </a>
   ))

   return (
      <div>
         <div className="container prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto flex items-center justify-between  h-20">
            <div>
               {isStandaloneBrand ? (
                  languagesRender
               ) : (
                  <Link to="/">Yony Calsin</Link>
               )}
            </div>
            <div>
               <div>
                  {!isStandaloneBrand && languagesRender}
                  {!isStandaloneBrand && (
                     // eslint-disable-next-line jsx-a11y/anchor-is-valid
                     <a href="#" className="mr-4">
                        |
                     </a>
                  )}
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
