import * as React from 'react'
import { Box, useColorMode } from '@chakra-ui/react'

import { analytics, ANALYTICS_EVENTS } from 'analytics'
import { MoonIcon, SunIcon } from './components'

function NightModeButton() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <Box
        role="button"
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
        onClick={() => {
          analytics.event({
            action: ANALYTICS_EVENTS.TOGGLE_NIGHT_MODE_BUTTON,
            category: 'ui-theme',
            label: colorMode,
          })

          toggleColorMode()
        }}
      >
        {colorMode === 'dark' ? <SunIcon className="transition-all" /> : <MoonIcon className="transition-all" />}
      </Box>
    </>
  )
}

export default NightModeButton
