import * as React from 'react'
import { chakra } from '@chakra-ui/react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Table(props: any) {
  return (
    <chakra.div overflowX="auto">
      <chakra.table textAlign="left" mt="32px" width="full" {...props} />
    </chakra.div>
  )
}

export default Table
