import type * as React from 'react'

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  href?: string
}

export type { AnchorProps }
