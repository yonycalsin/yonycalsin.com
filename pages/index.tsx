import * as React from 'react'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import type { GetStaticPropsResult } from 'next'

import { Meta } from '~/components/meta'
import { NUMERICS } from '~/constants/numerics'
import { HomeScreen } from '~/screens/home'
import { getFeaturedAchievements } from '~/services/achievement/achievements'
import { achievementApiEndpoints } from '~/services/achievement/utils/achievement-api-endpoints'
import { getPinnedProjects } from '~/services/project/projects'
import { projectApiEndpoints } from '~/services/project/utils/project-api-endpoints'
import { getFeaturedRecommendations } from '~/services/recommendation/recomendations'
import { recommendationApiEndpoints } from '~/services/recommendation/utils/recomendation-api-endpoints'
import type { HomePageProps } from '~/typings/pages/home'
import type { ServerListResponse } from '~/typings/services'
import type { AchievementResponsePayload } from '~/typings/services/achievement/achievements'
import type { ProjectResponsePayload } from '~/typings/services/project/projects'
import type { RecommendationResponsePayload } from '~/typings/services/recommendation/recommendations'
import { timings } from '~/utils/constants/constants'

function HomePage() {
  return (
    <>
      <Meta />
      <HomeScreen />
    </>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<HomePageProps>> {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: NUMERICS.RETRY_QUERY,
      },
    },
  })

  await queryClient.prefetchQuery<ServerListResponse<AchievementResponsePayload>>(
    [achievementApiEndpoints.FEATURED_ACHIEVEMENTS],
    () => getFeaturedAchievements(),
    { staleTime: Infinity },
  )

  await queryClient.prefetchQuery<ServerListResponse<RecommendationResponsePayload>>(
    [recommendationApiEndpoints.FEATURED_RECOMMENDATIONS],
    () => getFeaturedRecommendations(),
    { staleTime: Infinity },
  )

  await queryClient.prefetchQuery<ServerListResponse<ProjectResponsePayload>>(
    [projectApiEndpoints.PINNED_PROJECTS],
    () => getPinnedProjects(),
    { staleTime: Infinity },
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: timings.REVALIDATE_STATIC_PAGES_TIME,
  }
}

export default HomePage
