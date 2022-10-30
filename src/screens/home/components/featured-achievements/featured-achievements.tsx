import * as React from 'react'
import { useQuery } from '@tanstack/react-query'

import type { AchievementResponsePayload, ServerListResponse } from 'typings/services'
import { getFeaturedAchievementsApi } from 'services'
import { API_ENDPOINTS } from 'services/shared'
import { Achievements, LoaderBox, SectionHeader } from 'components'

function FeaturedAchievements() {
  const queryResult = useQuery<ServerListResponse<AchievementResponsePayload>>(
    [API_ENDPOINTS.FEATURED_ACHIEVEMENTS],
    () => getFeaturedAchievementsApi(),
    { staleTime: Infinity },
  )

  if (queryResult.isLoading) {
    return <LoaderBox />
  }

  const achievements = queryResult.data?.data ?? []

  return (
    <div className="py-3">
      <SectionHeader title="Achievements">
        <p className="mt-3">Featured achievements that I have achieved along my career.</p>
      </SectionHeader>
      <br />
      <Achievements achievements={achievements} />
    </div>
  )
}

export default FeaturedAchievements
