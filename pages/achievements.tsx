import type { GetStaticPropsResult } from 'next'
import * as React from 'react'
import { dehydrate, QueryClient } from '@tanstack/react-query'

import type { AchievementsPageProps } from 'typings/pages'
import type { AchievementResponsePayload, ServerListResponse } from 'typings/services'
import { getAllAchievementsApi } from 'services'
import { API_ENDPOINTS } from 'services/shared'
import AchievementsScreen from 'screens/achievements'
import { Meta } from 'components'
import { NUMERICS, TIMINGS } from 'utils/constants'

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
        retry: NUMERICS.RETRY_QUERY,
      },
    },
  })

  await queryClient.prefetchQuery<ServerListResponse<AchievementResponsePayload>>(
    [API_ENDPOINTS.ALL_ACHIEVEMENTS],
    () => getAllAchievementsApi(),
    { staleTime: Infinity },
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: TIMINGS.REVALIDATE_STATIC_PAGES_TIME,
  }
}

export default AchievementsPage
