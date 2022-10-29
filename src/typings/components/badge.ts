import type * as React from 'react'
import type { VariantProps } from 'class-variance-authority'

import type badgeStyles from 'components/badge/badge.styles'

type BadgeStylesProps = VariantProps<typeof badgeStyles>

interface BadgeProps extends BadgeStylesProps {
  children: React.ReactNode
}

export type { BadgeProps }
