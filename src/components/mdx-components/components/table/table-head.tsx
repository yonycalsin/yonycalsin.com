import * as React from 'react'
import { chakra, useColorModeValue } from '@chakra-ui/react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function TableHead(props: any) {
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
