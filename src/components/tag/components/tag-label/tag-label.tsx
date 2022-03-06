import * as React from 'react'

export interface TagLabelProps {
  children: React.ReactNode
  className?: string
}

export function TagLabel(props: TagLabelProps) {
  const { children, className } = props

  return <span className={className}>{children}</span>
}
