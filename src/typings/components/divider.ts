import type { VariantProps } from 'class-variance-authority'

import type dividerStyles from 'components/divider/divider.styles'

type DividerStylesProps = VariantProps<typeof dividerStyles>

interface DividerProps extends DividerStylesProps {
  className?: string
}

export type { DividerProps }
