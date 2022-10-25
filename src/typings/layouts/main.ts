import type * as React from 'react'
import type { ContainerProps } from '@chakra-ui/react'

interface MainLayoutProps {
  children: React.ReactNode
}

interface HeaderProps {
  container: ContainerProps['maxW']
}

export type { HeaderProps, MainLayoutProps }
