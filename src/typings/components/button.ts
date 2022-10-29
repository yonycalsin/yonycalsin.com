import type * as React from 'react'
import type { VariantProps } from 'class-variance-authority'

import type buttonStyles from 'components/button/button.styles'

type ButtonStylesProps = VariantProps<typeof buttonStyles>

interface ButtonProps extends ButtonStylesProps {
  className?: string
  children?: React.ReactNode
  leftElement?: React.ReactElement
  rightElement?: React.ReactElement
}

export type { ButtonProps }
