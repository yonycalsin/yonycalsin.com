import * as React from 'react'
import { dehydrate, DehydratedState, QueryClient } from '@tanstack/react-query'
import type { GetStaticPropsResult } from 'next'

import { createQueryFn } from '~/clients/query-client'
import { Meta } from '~/components/meta'
import { QUERY_KEY_FEATURED_RECOMMENDATIONS, QUERY_KEY_PINNED_PROJECTS } from '~/constants/query-keys'
import type { IAchievementQueryWithMeta } from '~/module-types/api-rest/achievements'
import type { IProjectQueryWithMeta } from '~/module-types/api-rest/projects'
import type { IRecommendationQueryWithMeta } from '~/module-types/api-rest/recommendations'
import { HomeScreen } from '~/screens/home'
import { queryKeys, timings } from '~/utils/constants'

interface HomePageProps {
  dehydratedState: DehydratedState
}

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
        queryFn: createQueryFn(),
      },
    },
  })

  await queryClient.prefetchQuery<IAchievementQueryWithMeta>(queryKeys.FEATURED_ACHIEVEMENTS, {
    staleTime: Infinity,
  })

  await queryClient.prefetchQuery<IRecommendationQueryWithMeta>(QUERY_KEY_FEATURED_RECOMMENDATIONS, {
    staleTime: Infinity,
  })

  await queryClient.prefetchQuery<IProjectQueryWithMeta>(QUERY_KEY_PINNED_PROJECTS, {
    staleTime: Infinity,
  })

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: timings.REVALIDATE_STATIC_PAGES_TIME,
  }
}

export default HomePage
