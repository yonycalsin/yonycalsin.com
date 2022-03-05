import * as React from 'react'
import clsx from 'clsx'

import { Typography } from '../typography/typography'

export interface TagProps {
  children: React.ReactNode
  className?: string
}

export const Tag = (props: TagProps) => {
  const { children, className = 'bg-secondary-300' } = props

  return (
    <Typography
      variant="h6"
      as="span"
      fontWeight="normal"
      className={clsx(className, 'text-white px-1 py-0.5 rounded-md')}
    >
      {children}
    </Typography>
  )
}
