import * as React from 'react'
import { dehydrate, DehydratedState, QueryClient } from '@tanstack/react-query'
import type { GetStaticPropsResult } from 'next'

import { createQueryFn } from '~/clients/query-client'
import { Meta } from '~/components/meta'
import type { IAchievementQueryWithMeta } from '~/module-types/api-rest/achievements'
import AchievementsScreen from '~/screens/achievements'
import { queryKeys, timings } from '~/utils/constants'

export interface AchievementsPageProps {
  dehydratedState: DehydratedState
}

function AchievementsPage() {
  return (
    <>
      <Meta title="Achievements" notRobots />
      <AchievementsScreen />
    </>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<AchievementsPageProps>> {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        queryFn: createQueryFn(),
      },
    },
  })

  await queryClient.prefetchQuery<IAchievementQueryWithMeta>(queryKeys.PUBLISHED_ACHIEVEMENTS, {
    staleTime: Infinity,
  })

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: timings.REVALIDATE_STATIC_PAGES_TIME,
  }
}

export default AchievementsPage
