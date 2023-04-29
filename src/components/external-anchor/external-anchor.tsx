import * as React from 'react'
import { clsx } from 'clsx'
import { FiArrowUpRight } from 'react-icons/fi'

import type { ExternalAnchorProps } from 'typings/components'
import { Anchor } from 'components/anchor'
import { Icon } from 'components/icon'

function ExternalAnchor(props: ExternalAnchorProps) {
  const { children, className, ...restProps } = props

  return (
    <span>
      <Anchor
        {...restProps}
        className={clsx('inline-flex items-center', className)}
        target="_blank"
        rel="noreferrer"
        role="link"
      >
        {children}
      </Anchor>
      <Icon className="align-top">
        <FiArrowUpRight />
      </Icon>
    </span>
  )
}

export default ExternalAnchor
