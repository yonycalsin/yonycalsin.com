import * as React from 'react'
import { Box, Heading } from '@chakra-ui/react'

export interface SectionHeaderProps {
  title: string
  actionHref?: string
  actionLabel?: string
  actionHrefExternal?: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  actionComponent?: any
  children?: React.ReactNode
}

export function SectionHeader(props: SectionHeaderProps) {
  const {
    title,
    actionHref,
    actionLabel,
    actionComponent: ActionComponent = 'a',
    actionHrefExternal = false,
    children,
  } = props

  return (
    <div>
      <Box display="flex" alignItems="center" justifyContent="space-between" position="relative">
        <Heading size="lg" fontWeight="bold">
          {title}
        </Heading>
        {actionHref ? (
          <ActionComponent href={actionHref} target={actionHrefExternal ? '_blank' : null}>
            {actionLabel}
          </ActionComponent>
        ) : null}
      </Box>
      {children}
    </div>
  )
}
