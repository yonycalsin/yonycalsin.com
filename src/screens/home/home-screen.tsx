import * as React from 'react'

import { MainLayout } from 'layouts'
import { Divider } from 'components'
import { ENV } from 'utils/constants'
import { FeaturedAchievements, FeaturedRecommendations, IntroductionSection, PinnedProjects } from './components'

function HomeScreen() {
  return (
    <MainLayout>
      <div className="container  py-10">
        <IntroductionSection />
        {ENV.FF_PINNED_PROJECTS && (
          <>
            <Divider className="my-6" />
            <PinnedProjects />
          </>
        )}
        {ENV.FF_ACHIEVEMENTS && (
          <>
            <Divider className="my-6" />
            <FeaturedAchievements />
          </>
        )}
        {ENV.FF_RECOMMENDATIONS && (
          <>
            <Divider className="my-6" />
            <FeaturedRecommendations />
          </>
        )}
      </div>
    </MainLayout>
  )
}

export default HomeScreen
