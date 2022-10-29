import * as React from 'react'
import { useFlag } from 'toggled'

import { MainLayout } from 'layouts'
import { Divider } from 'components'
import { Features } from 'utils/constants'
import { FeaturedAchievements, FeaturedRecommendations, IntroductionSection, PinnedProjects } from './components'

function HomeScreen() {
  const hasAchievementsFF = useFlag(Features.ACHIEVEMENTS)

  const hasRecommendationsFF = useFlag(Features.RECOMMENDATIONS)

  const hasPinnedProjectsFF = useFlag(Features.PINNED_PROJECTS)

  return (
    <MainLayout>
      <div className="container  py-10">
        <IntroductionSection />
        {hasPinnedProjectsFF && (
          <>
            <Divider className="my-6" />
            <PinnedProjects />
          </>
        )}
        {hasAchievementsFF && (
          <>
            <Divider className="my-6" />
            <FeaturedAchievements />
          </>
        )}
        {hasRecommendationsFF && (
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
