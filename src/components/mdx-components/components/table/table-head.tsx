import * as React from 'react'
import { chakra, useColorModeValue } from '@chakra-ui/react'

export function TableHead(props: never) {
  return (
    <chakra.th
      bg={useColorModeValue('gray.50', 'whiteAlpha.100')}
      fontWeight="semibold"
      p={2}
      fontSize="sm"
      {...props}
    />
  )
}
