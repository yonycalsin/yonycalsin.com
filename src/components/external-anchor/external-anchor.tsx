import * as React from 'react'
import { Icon, Link, useColorModeValue as mode } from '@chakra-ui/react'
import { FiArrowUpRight } from 'react-icons/fi'

import type { ExternalAnchorProps } from 'typings/components'

function ExternalAnchor(props: ExternalAnchorProps) {
  const { children, ...restProps } = props

  return (
    <span>
      <Link
        {...restProps}
        alignItems="center"
        d="inline-flex"
        color={mode('primary.500', 'primary.300')}
        isExternal
        target="_blank"
        rel="noreferrer"
        role="link"
      >
        {children}
      </Link>
      <Icon as={FiArrowUpRight} d="inline" color={mode('gray.700', 'white')} />
    </span>
  )
}

export default ExternalAnchor
