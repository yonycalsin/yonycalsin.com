import * as React from 'react'
import { Divider } from '@chakra-ui/react'
import { useFlag } from 'toggled'

import { Meta } from '~/components/meta'
import { MainLayout } from '~/layouts'
import Features from '~/utils/features-flags'

import { FeaturedRecommendations } from './components/featured-recommendations/featured-recommendations'
import { IntroductionSection } from './components/introduction-section'
import { PinnedProjects } from './components/pinned-projects'
import { FeaturedAchievements } from './components'

export function HomeScreen() {
  const hasAchievementsFF = useFlag(Features.ACHIEVEMENTS)

  const hasRecommendationsFF = useFlag(Features.RECOMMENDATIONS)

  const hasPinnedProjectsFF = useFlag(Features.PINNED_PROJECTS)

  return (
    <MainLayout>
      <Meta />
      <IntroductionSection />
      <Divider my="6" />
      {hasPinnedProjectsFF && <PinnedProjects />}
      <Divider my="6" />
      {hasAchievementsFF && <FeaturedAchievements />}
      <Divider my="6" />
      {hasRecommendationsFF && <FeaturedRecommendations />}
    </MainLayout>
  )
}
