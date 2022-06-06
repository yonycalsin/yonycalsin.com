import * as React from 'react'
import { chakra } from '@chakra-ui/react'

// eslint-disable-next-line react/display-name, @typescript-eslint/no-explicit-any
export const Anchor = React.forwardRef((props: any, ref: any) => {
  const isNotExternal = props.href.startsWith('/')

  return (
    <chakra.a
      ref={ref}
      apply="mdx.a"
      {...props}
      target={isNotExternal ? undefined : '_blank'}
      rel={isNotExternal ? undefined : 'noopener noreferrer'}
    />
  )
})
