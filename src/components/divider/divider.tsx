import clsx from 'clsx'

import type { DividerProps } from 'typings/components'
import dividerStyles from './divider.styles'

function Divider(props: DividerProps) {
  const { className, direction, variant } = props

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

Divider.defaultProps = {
  direction: 'horizontal',
  variant: 'solid',
}

export default Divider
