import * as React from 'react'
import { SimpleGrid } from '@chakra-ui/react'

import type { IRecommendation } from '~/module-types/api-rest/recommendations'

import { Recommendation } from './components/recommendation'

export interface RecommendationsProps {
  recommendations: IRecommendation[]
}

export function Recommendations(props: RecommendationsProps) {
  const { recommendations } = props

  return (
    <SimpleGrid
      columns={{
        base: 1,
        md: 2,
      }}
      spacing={{
        base: 3,
        md: 4,
      }}
    >
      {recommendations.map(recommendation => (
        <Recommendation key={recommendation.id} recommendation={recommendation} />
      ))}
    </SimpleGrid>
  )
}
