import * as React from 'react'
import { BiMoon } from 'react-icons/bi'
import { BsToggles } from 'react-icons/bs'
import { RiComputerLine } from 'react-icons/ri'
import { useColorMode } from '@chakra-ui/react'
import { Action, useRegisterActions } from '@chakra-ui-kbar/core'

import { CommandBarSections } from './command-bar-utils'

export function CommandBarActions() {
  const { setColorMode, toggleColorMode } = useColorMode()

  const commandActions = React.useMemo(() => {
    const actions: Action[] = [
      {
        id: 'theme',
        name: 'Theme',
        shortcut: ['g', 't'],
        keywords: 'change-theme',
        section: CommandBarSections.GENERAL,
        icon: <RiComputerLine />,
      },
      {
        id: 'theme-toggle',
        name: 'Toggle',
        shortcut: [],
        keywords: 'Toggle Theme',
        icon: <BsToggles />,
        perform: () => toggleColorMode(),
        parent: 'theme',
      },
      {
        id: 'theme-dark',
        name: 'Dark',
        shortcut: [],
        keywords: 'Dark Theme',
        icon: <BiMoon />,
        perform: () => setColorMode('dark'),
        parent: 'theme',
      },
      {
        id: 'theme-light',
        name: 'Light',
        shortcut: [],
        keywords: 'Light Theme',
        icon: <BiMoon />,
        perform: () => setColorMode('light'),
        parent: 'theme',
      },
    ]

    return actions
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useRegisterActions(commandActions)

  return null
}
