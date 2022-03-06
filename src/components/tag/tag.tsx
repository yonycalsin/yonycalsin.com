import * as React from 'react'
import clsx from 'clsx'

export interface TagProps {
  children: React.ReactNode
  className?: string
}

export function Tag(props: TagProps) {
  const { children, className } = props

  return (
    <span
      className={clsx(
        'text-secondary border-secondary inline py-[0.12em] px-[0.5em] text-[12px] font-medium leading-[18px] whitespace-nowrap border rounded-[2em]',
        className,
      )}
    >
      {children}
    </span>
  )
}
