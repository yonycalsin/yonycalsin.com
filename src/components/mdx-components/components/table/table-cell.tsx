import * as React from 'react'
import { chakra } from '@chakra-ui/react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function TableCell(props: any) {
  return <chakra.td p={2} borderTopWidth="1px" borderColor="inherit" fontSize="sm" whiteSpace="normal" {...props} />
}

export default TableCell
