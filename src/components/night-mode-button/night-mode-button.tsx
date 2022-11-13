'use client'

import * as React from 'react'

import { MoonIcon, SunIcon } from './components'

/**
 * @todo handle dark mode with tailwind
 * @author yonycalsin
 */
const colorMode = 'light' as 'light' | 'dark'

function NightModeButton() {
  return (
    <>
      <button className="fixed left-4 lg:left-8 top-20 lg:top-8 z-50 text-2xl lg:text-4xl" role="button">
        {colorMode === 'dark' ? <SunIcon className="transition-all" /> : <MoonIcon className="transition-all" />}
      </button>
    </>
  )
}

export default NightModeButton
