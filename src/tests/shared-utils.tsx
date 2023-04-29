import * as React from 'react'

import type { MainTestProviderProps } from 'typings/tests'
import { Features } from 'utils/constants'

function TestProvider(props: MainTestProviderProps) {
  const { children } = props

  return <>{children}</>
}

const TEST_ENVS = { ...process.env }

function overrideFeatures(features: Partial<Record<Features, boolean>> = {}) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const overrides = {} as Record<string, any>

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
