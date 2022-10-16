import * as React from 'react'
import { chakra } from '@chakra-ui/react'

// eslint-disable-next-line react/display-name, @typescript-eslint/no-explicit-any
const Anchor = React.forwardRef((props: any, ref: any) => {
  const isNotExternal = props.href.startsWith('/')

  if (isNotExternal) {
    return <chakra.a ref={ref} apply="mdx.a" {...props} />
  }

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

export default Anchor
