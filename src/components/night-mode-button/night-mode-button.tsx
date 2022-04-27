import * as React from 'react'
import { Box, useColorMode } from '@chakra-ui/react'

import { cookieNames } from '~/utils/constants'

import { MoonIcon } from './components/moon-icon'
import { SunIcon } from './components/sun-icon'

export const NightModeButton = () => {
  const { colorMode, setColorMode } = useColorMode()

  const onToggleDark = () => {
    const isDark = document.documentElement.classList.contains('dark')

    localStorage.setItem(cookieNames.THEME_MODE, isDark ? 'light' : 'dark')

    if (isDark) {
      document.documentElement.classList.remove('dark')

      setColorMode('light')
    } else {
      document.documentElement.classList.add('dark')

      setColorMode('dark')
    }
  }

  return (
    <>
      <Box
        as="button"
        position="fixed"
        left={{
          base: 4,
          md: 8,
        }}
        top={{
          base: 20,
          md: 8,
        }}
        fontSize={{
          base: '2xl',
          md: '4xl',
        }}
        zIndex="sticky"
        onClick={onToggleDark}
      >
        {colorMode === 'dark' ? <SunIcon className="transition-all" /> : <MoonIcon className="transition-all" />}
      </Box>
    </>
  )
}
