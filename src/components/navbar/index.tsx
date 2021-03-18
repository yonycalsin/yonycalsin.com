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
      >
         {t(`languages.${lang}`)}
      </a>
   ))

   return (
      <div className="navbar">
         <div className="container fx fx-aic fx-jcsb">
            <div className="languages-select">
               {isStandaloneBrand ? (
                  languagesRender
               ) : (
                  <Link to="/">Yony Calsin</Link>
               )}
            </div>
            <div className="actions">
               <div className="fx menu">
                  {!isStandaloneBrand && languagesRender}
                  {!isStandaloneBrand && (
                     // eslint-disable-next-line jsx-a11y/anchor-is-valid
                     <a href="#" style={{ borderBottom: 'none' }}>
                        |
                     </a>
                  )}
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
