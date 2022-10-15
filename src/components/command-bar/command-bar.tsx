import * as React from 'react'
import { ChakraKBar } from '@chakra-ui-kbar/core'

import type { CommandBarProps } from 'typings/components'
import CommandBarActions from './command-bar-actions'

function CommandBar(props: CommandBarProps) {
  const { children } = props

  return (
    <ChakraKBar>
      <CommandBarActions />
      {children}
    </ChakraKBar>
  )
}

export default CommandBar
