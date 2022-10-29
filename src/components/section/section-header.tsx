import * as React from 'react'

import type { SectionHeaderProps } from 'typings/components'
import { Heading } from 'components'

function SectionHeader(props: SectionHeaderProps) {
  const {
    title,
    actionHref,
    actionLabel,
    actionComponent: ActionComponent = 'a',
    actionHrefExternal = false,
    children,
    className,
  } = props

  return (
    <div className={className}>
      <div className="flex items-center justify-between relative">
        <Heading size="h3">{title}</Heading>
        {actionHref ? (
          <ActionComponent href={actionHref} target={actionHrefExternal ? '_blank' : null}>
            {actionLabel}
          </ActionComponent>
        ) : null}
      </div>
      {children}
    </div>
  )
}

export default SectionHeader
