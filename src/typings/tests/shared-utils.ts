import type * as React from 'react'
import type { DefaultFeature } from 'toggled'

interface MainTestProviderProps {
  features: DefaultFeature[]
  children: React.ReactNode
}

export type { MainTestProviderProps }
