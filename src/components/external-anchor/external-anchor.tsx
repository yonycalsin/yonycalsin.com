import * as React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { Icon, Link, LinkProps, useColorModeValue as mode } from '@chakra-ui/react'

export interface ExternalAnchorProps extends LinkProps {
  children: React.ReactNode
}

export function ExternalAnchor(props: ExternalAnchorProps) {
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
      >
        {children}
      </Link>
      <Icon as={FiArrowUpRight} d="inline" color={mode('gray.700', 'white')} />
    </span>
  )
}
