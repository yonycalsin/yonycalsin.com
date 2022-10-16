import * as React from 'react'
import { Box, Heading } from '@chakra-ui/react'

import type { SectionHeaderProps } from 'typings/components'

function SectionHeader(props: SectionHeaderProps) {
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

export default SectionHeader
