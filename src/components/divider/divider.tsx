import { clsx } from 'clsx'

import type { DividerProps } from 'typings/components'
import dividerStyles from './divider.styles'

function Divider(props: DividerProps) {
  const { direction = 'horizontal', variant = 'solid', className } = props

  return (
    <hr
      className={clsx(
        dividerStyles({
          direction,
          variant,
        }),
        className,
      )}
    />
  )
}

export default Divider
