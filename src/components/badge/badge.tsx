import * as React from 'react'

import type { BadgeProps } from 'typings/components'
import badgeStyles from './badge.styles'

/**
 * @deprecated
 */
function Badge(props: BadgeProps) {
  const { children, palette = 'primary' } = props

  return (
    <span
      className={badgeStyles({
        palette,
      })}
    >
      {children}
    </span>
  )
}

export default Badge
