import * as React from 'react'
import { Box, useColorMode } from '@chakra-ui/react'

import { MoonIcon } from './components/moon-icon'
import { SunIcon } from './components/sun-icon'

export const NightModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode()

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
        onClick={toggleColorMode}
      >
        {colorMode === 'dark' ? <SunIcon className="transition-all" /> : <MoonIcon className="transition-all" />}
      </Box>
    </>
  )
}
