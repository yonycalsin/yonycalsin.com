'use client'

import * as React from 'react'
import { BsFillCloudSunFill, BsMoonStarsFill } from 'react-icons/bs'

import { toggle } from './server'

function NightModeButton() {
  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form action={toggle}>
      <button type="submit" className="fixed left-4 lg:left-8 top-20 lg:top-8 z-50 text-2xl lg:text-4xl">
        <BsFillCloudSunFill className="hidden dark:block" />
        <BsMoonStarsFill className="block dark:hidden" />
      </button>
    </form>
  )
}

export default NightModeButton
