import * as React from 'react'

export interface TagLabelProps {
  children: React.ReactNode
}

export function TagLabel(props: TagLabelProps) {
  const { children } = props

  return <span>{children}</span>
}
