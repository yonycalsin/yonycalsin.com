import * as React from 'react'

import { getFeaturedAchievementsApi } from 'services'
import { Achievements, SectionHeader } from 'components'

function FeaturedAchievements() {
  const response = React.use(getFeaturedAchievementsApi())

  const achievements = response?.data ?? []

  return (
    <div className="py-3">
      <SectionHeader title="Achievements">
        <p className="mt-3">Featured achievements that I have achieved along my career.</p>
      </SectionHeader>
      <br />
      <Achievements achievements={achievements} />
    </div>
  )
}

export default FeaturedAchievements
