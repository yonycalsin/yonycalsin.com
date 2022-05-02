import * as React from 'react'
import { chakra } from '@chakra-ui/react'

export function Table(props: never) {
  return (
    <chakra.div overflowX="auto">
      <chakra.table textAlign="left" mt="32px" width="full" {...props} />
    </chakra.div>
  )
}
