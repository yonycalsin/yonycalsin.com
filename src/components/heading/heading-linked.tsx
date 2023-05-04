import * as React from 'react'
import { clsx } from 'clsx'

import type { HeadingLinkedProps } from 'typings/components'
import { Anchor } from 'components/anchor'
import Heading from './heading'

function HeadingLinked(props: HeadingLinkedProps) {
  const { children, id, className, ...restProps } = props

  if (!id) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Heading {...props} />
  }

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Heading className={clsx('group', className)} id={id} {...restProps}>
      <span>{children}</span>
      <Anchor className="ml-2 opacity-0 group-hover:opacity-100" href={`#${id}`}>
        #
      </Anchor>
    </Heading>
  )
}

export default HeadingLinked
