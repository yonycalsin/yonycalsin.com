import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { ChakraKBar } from '@chakra-ui-kbar/core'

import type { MainTestProviderProps } from 'typings/tests'
import { ThemeMain } from 'themes'
import { Features } from 'utils/constants'

function TestProvider(props: MainTestProviderProps) {
  const { children } = props

  return (
    <ChakraProvider theme={ThemeMain}>
      <ChakraKBar>{children}</ChakraKBar>
    </ChakraProvider>
  )
}

const TEST_ENVS = { ...process.env }

function overrideFeatures(features: Partial<Record<Features, boolean>> = {}) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const overrides = {} as any

  for (const [, featureEnv] of Object.entries(Features)) {
    const value = features[featureEnv as Features]

    if (value) {
      overrides[featureEnv] = true
    } else {
      overrides[featureEnv] = false
    }
  }

  return { ...TEST_ENVS, ...overrides }
}

export { overrideFeatures, TEST_ENVS, TestProvider }
