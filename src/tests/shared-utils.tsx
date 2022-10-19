import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { ChakraKBar } from '@chakra-ui-kbar/core'
import { FeatureProvider } from 'toggled'

import type { MainTestProviderProps } from 'typings/tests'
import { ThemeMain } from 'themes'

function TestProvider(props: MainTestProviderProps) {
  const { features, children } = props

  return (
    <ChakraProvider theme={ThemeMain}>
      <ChakraKBar>
        <FeatureProvider features={features}>{children}</FeatureProvider>
      </ChakraKBar>
    </ChakraProvider>
  )
}

TestProvider.defaultProps = {
  features: [],
}

export { TestProvider }
