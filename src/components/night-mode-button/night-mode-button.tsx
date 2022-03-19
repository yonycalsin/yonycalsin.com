import * as React from 'react'

import { cookieNames } from '~/utils/constants'

import { MoonIcon } from './components/moon-icon'
import { SunIcon } from './components/sun-icon'

export const NightModeButton = () => {
  const onToggleDark = () => {
    const isDark = document.documentElement.classList.contains('dark')

    localStorage.setItem(cookieNames.THEME_MODE, isDark ? 'light' : 'dark')

    if (isDark) {
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
    }
  }

  return (
    <>
      <button
        className="fixed left-4 top-4 text-2xl md:text-4xl lg:left-6 lg:top-6 lg:text-5xl z-20"
        onClick={onToggleDark}
      >
        <SunIcon className="dark:block hidden transition-all" />
        <MoonIcon className="dark:hidden block transition-all" />
      </button>
    </>
  )
}
