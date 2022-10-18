import { Box } from '@chakra-ui/react'

import type { LoaderBoxWrapperProps } from 'typings/components'

function LoaderBoxWrapper(props: LoaderBoxWrapperProps) {
  const { children } = props

  return (
    <Box w="full" h="full" display="flex" alignItems="center" justifyContent="center" minHeight="10">
      {children}
    </Box>
  )
}

export default LoaderBoxWrapper
