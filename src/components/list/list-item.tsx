import * as React from 'react'

import type { ListItemProps } from 'typings/components'

function ListItem(props: ListItemProps) {
  const { children } = props

  return <li>{children}</li>
}

export default ListItem
