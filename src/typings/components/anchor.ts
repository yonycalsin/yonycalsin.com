import type * as React from 'react'

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  href?: React.AnchorHTMLAttributes<HTMLAnchorElement>['href'] | (__next_route_internal_types__.RouteImpl<any> | URL)
}

export type { AnchorProps }
