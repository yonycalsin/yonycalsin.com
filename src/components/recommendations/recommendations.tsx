import * as React from 'react'

import type { RecommendationsProps } from 'typings/components'
import { Recommendation } from './components'

function Recommendations(props: RecommendationsProps) {
  const { recommendations } = props

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
      {recommendations.map(recommendation => (
        <Recommendation key={recommendation.id} recommendation={recommendation} />
      ))}
    </div>
  )
}

export default Recommendations
