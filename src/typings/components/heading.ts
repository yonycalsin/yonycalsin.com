import type * as React from 'react'
import type { VariantProps } from 'class-variance-authority'

import type headingStyles from 'components/heading/heading.styles'

type HeadingStylesProps = VariantProps<typeof headingStyles>

type HeadingProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> &
  HeadingStylesProps

type HeadingLinkedProps = HeadingProps

export type { HeadingLinkedProps, HeadingProps }
