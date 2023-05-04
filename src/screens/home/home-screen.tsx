import * as React from 'react'

import { Divider } from 'components'
import { ENV } from 'utils/constants'
import { FeaturedAchievements, FeaturedRecommendations, IntroductionSection, PinnedProjects } from './components'

function HomeScreen() {
  return (
    <div className="container  py-10">
      <IntroductionSection />
      {ENV.FF_PINNED_PROJECTS ? (
        <>
          <Divider className="my-6" />
          <PinnedProjects />
        </>
      ) : null}
      {ENV.FF_ACHIEVEMENTS ? (
        <>
          <Divider className="my-6" />
          <FeaturedAchievements />
        </>
      ) : null}
      {ENV.FF_RECOMMENDATIONS ? (
        <>
          <Divider className="my-6" />
          <FeaturedRecommendations />
        </>
      ) : null}
    </div>
  )
}

export default HomeScreen
