import * as React from 'react'
import clsx from 'clsx'

import type { ButtonProps } from 'typings/components'
import buttonStyles from './button.styles'

function Button(props: ButtonProps) {
  const { children, palette = 'gray', variant = 'solid', className, leftElement, rightElement, ...restProps } = props

  return (
    <button
      className={clsx(
        buttonStyles({
          variant,
          palette,
        }),
        className,
      )}
      {...restProps}
    >
      {React.isValidElement(leftElement) && <div className="mr-2">{leftElement}</div>}
      {children}
      {React.isValidElement(rightElement) && <div className="ml-2">{rightElement}</div>}
    </button>
  )
}

export default Button
