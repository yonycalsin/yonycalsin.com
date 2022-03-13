import * as React from 'react'
import clsx from 'clsx'

import type { IRecommendation } from '~/module-types/api-rest/recommendations'

import { Recommendation } from './components/recommendation'

export interface RecommendationsProps {
  recommendations: IRecommendation[]
  className?: string
}

export function Recommendations(props: RecommendationsProps) {
  const { recommendations, className } = props

  return (
    <div className={clsx('grid lg:grid-cols-2 gap-2 md:gap-3', className)}>
      {recommendations.map(recommendation => (
        <Recommendation key={recommendation.id} recommendation={recommendation} />
      ))}
    </div>
  )
}
