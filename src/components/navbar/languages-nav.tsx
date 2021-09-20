import * as React from 'react'
import clsx from 'clsx'
import { useI18next } from 'gatsby-plugin-react-i18next'

type LanguagesNavProps = {
  className?: string
}

const itemClass = 'h-6 p-1 md:h-9 md:p-2 cursor-pointer hover:bg-green-300 '

const LanguagesNav = (props: LanguagesNavProps) => {
  const { className } = props

  const { changeLanguage, language } = useI18next()

  return (
    <div className={clsx('flex items-center', className)}>
      <img
        src="https://media.flaticon.com/dist/min/img/flags/es.svg"
        alt="Español"
        style={{ margin: 0, marginRight: 10 }}
        className={clsx(itemClass, {
          'bg-green-400': language === 'es',
        })}
        onClick={() => {
          changeLanguage('es')
        }}
      />

      <img
        src="https://media.flaticon.com/dist/min/img/flags/en.svg"
        alt="English"
        className={clsx(itemClass, {
          'bg-green-400': language === 'en',
        })}
        style={{ margin: 0 }}
        onClick={() => {
          changeLanguage('en')
        }}
      />
    </div>
  )
}

export default LanguagesNav
