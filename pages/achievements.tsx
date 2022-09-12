import * as React from 'react'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import type { GetStaticPropsResult } from 'next'

import { Meta } from '~/components/meta'
import { NUMERICS } from '~/constants/numerics'
import AchievementsScreen from '~/screens/achievements'
import { getAllAchievements } from '~/services/achievement/achievements'
import { achievementApiEndpoints } from '~/services/achievement/utils/achievement-api-endpoints'
import type { AchievementsPageProps } from '~/typings/pages/achievements'
import type { ServerListResponse } from '~/typings/services'
import type { AchievementResponsePayload } from '~/typings/services/achievement/achievements'
import { timings } from '~/utils/constants/constants'

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
    [achievementApiEndpoints.ALL_ACHIEVEMENTS],
    () => getAllAchievements(),
    { staleTime: Infinity },
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: timings.REVALIDATE_STATIC_PAGES_TIME,
  }
}

export default AchievementsPage
