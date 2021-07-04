import * as React from 'react'
import clsx from 'clsx'

export interface TagProps {
   children: React.ReactNode
   className?: string
}

export const Tag = (props: TagProps) => {
   const { children, className = 'bg-secondary-300' } = props

   return (
      <span
         className={clsx(
            className,
            'text-white px-1 py-0.5 rounded-md text-sm',
         )}
      >
         {children}
      </span>
   )
}
