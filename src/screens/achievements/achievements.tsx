import * as React from 'react'

import { getAllAchievementsApi } from 'services'
import { Achievements, Heading } from 'components'

function AchievementsScreen() {
  const response = React.use(getAllAchievementsApi())

  const achievementsData = response.data.results ?? []

  return (
    <main className="container py-10 space-y-6">
      <div className="space-y-3">
        <Heading size="h1">Achievements ({achievementsData.length})</Heading>
        <p>This page contains all the achievements I&apos;ve achieved along my career. </p>
      </div>
      <Achievements achievements={achievementsData} />
    </main>
  )
}

export default AchievementsScreen
