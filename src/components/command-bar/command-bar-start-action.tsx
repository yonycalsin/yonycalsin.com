import * as React from 'react'
import { Button, Kbd } from '@chakra-ui/react'
import { useKBar } from '@chakra-ui-kbar/core'

function CommandBarStartAction(): JSX.Element {
  const { query } = useKBar()

  const [device, setDevice] = React.useState<string | null>(null)

  React.useEffect(() => {
    const isMobile = /iPhone|iPad|Android/i.test(window?.navigator?.userAgent)

    if (isMobile) {
      setDevice('mobile')

      return
    }

    const isMac = /(Mac)/i.test(navigator.userAgent)

    if (isMac) {
      setDevice('mac')

      return
    }

    setDevice('windows')

    return
  }, [setDevice])

  switch (device) {
    case 'mobile': {
      return (
        <Button colorScheme="green" variant="link" onClick={query.toggle}>
          Tap to start →
        </Button>
      )
    }

    case 'mac': {
      return (
        <Button colorScheme="green" variant="link" onClick={query.toggle}>
          Press <Kbd mx="2">⌘</Kbd>+<Kbd mx="2">K</Kbd> to start →
        </Button>
      )
    }

    case 'windows': {
      return (
        <Button colorScheme="green" variant="link" onClick={query.toggle}>
          Press <Kbd mx="2">Ctrl</Kbd>+<Kbd mx="2">K</Kbd> to start →
        </Button>
      )
    }

    default: {
      return null as never
    }
  }
}

export default CommandBarStartAction
