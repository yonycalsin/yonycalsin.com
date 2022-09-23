import * as React from 'react'
import { ChakraKBar } from '@chakra-ui-kbar/core'

import { CommandBarActions } from './command-bar-actions'

export interface CommandBarProps {
  children: React.ReactNode
}

export function CommandBar(props: CommandBarProps) {
  const { children } = props

  return (
    <ChakraKBar>
      <CommandBarActions />
      {children}
    </ChakraKBar>
  )
}
