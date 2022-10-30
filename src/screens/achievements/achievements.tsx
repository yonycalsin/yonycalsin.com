import * as React from 'react'
import { useQuery } from '@tanstack/react-query'

import type { AchievementResponsePayload, ServerListResponse } from 'typings/services'
import { getAllAchievementsApi } from 'services'
import { API_ENDPOINTS } from 'services/shared'
import { MainLayout } from 'layouts'
import { Achievements, Heading, LoaderBox } from 'components'

function AchievementsScreen() {
  const queryResult = useQuery<ServerListResponse<AchievementResponsePayload>>(
    [API_ENDPOINTS.ALL_ACHIEVEMENTS],
    getAllAchievementsApi,
    { staleTime: Infinity },
  )

  if (queryResult.isLoading) {
    return <LoaderBox />
  }

  const achievementsData = queryResult.data?.data ?? []

  return (
    <MainLayout>
      <main className="container py-10 space-y-6">
        <div className="space-y-3">
          <Heading size="h1">Achievements ({achievementsData.length})</Heading>
          <p>This page contains all the achievements I&apos;ve achieved along my career. </p>
        </div>
        <Achievements achievements={achievementsData} />
      </main>
    </MainLayout>
  )
}

export default AchievementsScreen
