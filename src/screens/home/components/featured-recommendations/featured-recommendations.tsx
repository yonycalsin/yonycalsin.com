import * as React from 'react'

import { getFeaturedRecommendationsApi } from 'services'
import { Recommendations } from 'components/recommendations'
import { SectionHeader } from 'components/section'

function FeaturedRecommendations() {
  const response = React.use(getFeaturedRecommendationsApi())

  const recommendations = response.data ?? []

  return (
    <div className="py-3">
      <SectionHeader title="Recommendations" className="mb-6" />
      <Recommendations recommendations={recommendations} />
    </div>
  )
}

export default FeaturedRecommendations
