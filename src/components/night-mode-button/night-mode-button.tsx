'use client'

import * as React from 'react'
import { BsFillCloudSunFill, BsMoonStarsFill } from 'react-icons/bs'

function onToggle() {
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.remove('dark')

    localStorage.theme = 'light'
  } else {
    document.documentElement.classList.add('dark')

    localStorage.theme = 'dark'
  }
}

function NightModeButton() {
  React.useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  return (
    <button
      onClick={onToggle}
      type="button"
      className="fixed left-4 lg:left-8 top-20 lg:top-8 z-50 text-2xl lg:text-4xl"
    >
      <BsFillCloudSunFill className="hidden dark:block" />
      <BsMoonStarsFill className="block dark:hidden" />
    </button>
  )
}

export default NightModeButton
