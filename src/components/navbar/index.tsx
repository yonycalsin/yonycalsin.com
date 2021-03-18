import * as React from 'react'
import {
   Link,
   Trans,
   useI18next,
   useTranslation,
} from 'gatsby-plugin-react-i18next'

export const Navbar = (props: unknown) => {
   const { languages, changeLanguage } = useI18next()

   const { t } = useTranslation()

   return (
      <div className="navbar">
         <div className="container fx fx-aic fx-jcsb">
            <div className="languages-select">
               {languages.map(lang => (
                  // eslint-disable-next-line jsx-a11y/anchor-is-valid
                  <a
                     href="#"
                     onClick={e => {
                        e.preventDefault()
                        changeLanguage(lang)
                     }}
                  >
                     {t(`languages.${lang}`)}
                  </a>
               ))}
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
