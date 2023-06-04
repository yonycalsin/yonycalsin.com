import * as React from 'react'

import { Separator } from 'components/ui/separator'
import { ENV } from 'utils/constants'
import { FeaturedAchievements, FeaturedRecommendations, IntroductionSection, PinnedProjects } from './components'

function HomeScreen() {
  return (
    <div className="container space-y-4 py-10">
      <IntroductionSection />
      {ENV.FF_PINNED_PROJECTS ? (
        <>
          <Separator />
          <PinnedProjects />
        </>
      ) : null}
      {ENV.FF_ACHIEVEMENTS ? (
        <>
          <Separator />
          <FeaturedAchievements />
        </>
      ) : null}
      {ENV.FF_RECOMMENDATIONS ? (
        <>
          <Separator />
          <FeaturedRecommendations />
        </>
      ) : null}
    </div>
  )
}

export default HomeScreen
