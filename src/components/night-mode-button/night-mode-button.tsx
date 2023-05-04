'use client'

import * as React from 'react'
import { useColorModeToggle } from '@rqbazan/set-initial-color-mode'
import { BsFillCloudSunFill, BsMoonStarsFill } from 'react-icons/bs'

function NightModeButton() {
  const { onToggle } = useColorModeToggle()

  return (
    <button
      type="button"
      className="fixed left-4 lg:left-8 top-20 lg:top-8 z-50 text-2xl lg:text-4xl"
      onClick={onToggle}
    >
      <BsFillCloudSunFill className="hidden dark:block" />
      <BsMoonStarsFill className="block dark:hidden" />
    </button>
  )
}

export default NightModeButton
