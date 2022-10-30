import * as React from 'react'
import Link from 'next/link'

import type { AnchorProps } from 'typings/components'
import { Anchor } from 'components/anchor'

const MdxAnchor = React.forwardRef<HTMLAnchorElement, AnchorProps>((props, ref) => {
  const isNotExternal = props.href?.startsWith('/')

  if (isNotExternal && props.href) {
    return (
      <Link href={props.href} passHref legacyBehavior>
        <Anchor ref={ref} {...props} />
      </Link>
    )
  }

  return (
    <Anchor
      ref={ref}
      target={isNotExternal ? undefined : '_blank'}
      rel={isNotExternal ? undefined : 'noopener noreferrer'}
      {...props}
    />
  )
})

MdxAnchor.displayName = 'MdxAnchor'

export default MdxAnchor
