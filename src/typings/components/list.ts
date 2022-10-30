import type * as React from 'react'

interface UnorderedListProps extends React.HTMLAttributes<HTMLUListElement> {
  children: React.ReactNode
}

interface ListItemProps {
  children: React.ReactNode
}

export type { ListItemProps, UnorderedListProps }
