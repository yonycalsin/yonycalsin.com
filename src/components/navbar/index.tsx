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

   return (
      <div className="navbar">
         <div className="container fx fx-aic fx-jcsb">
            <div className="languages-select">
               {isStandaloneBrand ? (
                  languages.map(lang => (
                     // eslint-disable-next-line jsx-a11y/anchor-is-valid
                     <a
                        key={lang}
                        href="#"
                        onClick={e => {
                           e.preventDefault()
                           changeLanguage(lang)
                        }}
                     >
                        {t(`languages.${lang}`)}
                     </a>
                  ))
               ) : (
                  <Link to="/">Yony Calsin</Link>
               )}
            </div>
            <div className="actions">
               <div className="fx menu">
                  <Link to="/me/">
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
