import * as React from 'react'
import Link from 'next/link'

import type { AnchorProps } from 'typings/components'
import { Anchor } from 'components/anchor'

const MdxAnchor = React.forwardRef<HTMLAnchorElement, AnchorProps>((props, ref) => {
  const isNotExternal = props.href?.startsWith('/')

  if (isNotExternal && props.href) {
    return (
      // eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error, @typescript-eslint/ban-ts-comment
      // @ts-ignore
      <Link href={props.href} passHref={true} legacyBehavior={true}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Anchor ref={ref} {...props} />
      </Link>
    )
  }

  return (
    <Anchor
      ref={ref}
      target={isNotExternal ? undefined : '_blank'}
      rel={isNotExternal ? undefined : 'noopener noreferrer'}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  )
})

MdxAnchor.displayName = 'MdxAnchor'

export default MdxAnchor
