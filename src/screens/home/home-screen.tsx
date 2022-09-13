import * as React from 'react'
import { Container, Divider } from '@chakra-ui/react'
import { useFlag } from 'toggled'

import { MainLayout } from '~/layouts'
import Features from '~/utils/constants/features-flags'

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
      <Container maxW="container.md" as="main" py="10">
        <IntroductionSection />
        {hasPinnedProjectsFF && (
          <>
            <Divider my="6" />
            <PinnedProjects />
          </>
        )}
        {hasAchievementsFF && (
          <>
            <Divider my="6" />
            <FeaturedAchievements />
          </>
        )}
        {hasRecommendationsFF && (
          <>
            <Divider my="6" />
            <FeaturedRecommendations />
          </>
        )}
      </Container>
    </MainLayout>
  )
}
