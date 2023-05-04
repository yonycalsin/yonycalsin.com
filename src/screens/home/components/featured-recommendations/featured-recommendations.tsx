import * as React from 'react'

import { getFeaturedRecommendationsApi } from 'services'
import { Recommendations, SectionHeader } from 'components'

function FeaturedRecommendations() {
  const response = React.use(getFeaturedRecommendationsApi())

  const recommendations = response.data.results

  return (
    <div className="py-3">
      <SectionHeader title="Recommendations" className="mb-6" />
      <Recommendations recommendations={recommendations} />
    </div>
  )
}

export default FeaturedRecommendations
