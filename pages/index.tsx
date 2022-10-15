import type { GetStaticPropsResult } from 'next'
import * as React from 'react'
import { dehydrate, QueryClient } from '@tanstack/react-query'

import type { HomePageProps } from 'typings/pages'
import type {
  AchievementResponsePayload,
  ProjectResponsePayload,
  RecommendationResponsePayload,
  ServerListResponse,
} from 'typings/services'
import { getFeaturedAchievements, getFeaturedRecommendations, getPinnedProjects } from 'services'
import { API_ENDPOINTS } from 'services/shared'
import HomeScreen from 'screens/home'
import { Meta } from 'components'
import { NUMERICS, TIMINGS } from 'utils/constants'

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
    [API_ENDPOINTS.FEATURED_ACHIEVEMENTS],
    () => getFeaturedAchievements(),
    { staleTime: Infinity },
  )

  await queryClient.prefetchQuery<ServerListResponse<RecommendationResponsePayload>>(
    [API_ENDPOINTS.FEATURED_RECOMMENDATIONS],
    () => getFeaturedRecommendations(),
    { staleTime: Infinity },
  )

  await queryClient.prefetchQuery<ServerListResponse<ProjectResponsePayload>>(
    [API_ENDPOINTS.PINNED_PROJECTS],
    () => getPinnedProjects(),
    { staleTime: Infinity },
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: TIMINGS.REVALIDATE_STATIC_PAGES_TIME,
  }
}

export default HomePage
