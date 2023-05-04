import * as React from 'react'
import { clsx } from 'clsx'

import type { BlockquoteProps } from 'typings/components'

function Blockquote(props: BlockquoteProps) {
  const { children, className } = props

  if (!children) {
    return null
  }

  return (
    <blockquote
      className={clsx(
        'p-4 my-4 border-l-8 border rounded-lg border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800',
        className,
      )}
    >
      {React.Children.map(children, child => {
        if (!React.isValidElement(child)) {
          return null
        }

        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        return React.cloneElement(child, {
          style: {
            margin: 0,
          },
          ...child.props,
        })
      })}
    </blockquote>
  )
}

export default Blockquote
