import type { BadgeProps } from 'typings/components'
import badgeStyles from './badge.styles'

function Badge(props: BadgeProps) {
  const { children, palette } = props

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

Badge.defaultProps = {
  palette: 'primary',
}

export default Badge
