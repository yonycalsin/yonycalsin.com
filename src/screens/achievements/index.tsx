import * as React from 'react'
import { Container, Heading, Text, VStack } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'

import { Achievements } from '~/components/achievements'
import { MainLayout } from '~/layouts'
import { getAllAchievements } from '~/services/achievement/achievements'
import { achievementApiEndpoints } from '~/services/achievement/utils/achievement-api-endpoints'
import type { ServerListResponse } from '~/typings/services'
import type { AchievementResponsePayload } from '~/typings/services/achievement/achievements'

function AchievementsScreen() {
  const queryResult = useQuery<ServerListResponse<AchievementResponsePayload>>(
    [achievementApiEndpoints.ALL_ACHIEVEMENTS],
    getAllAchievements,
    { staleTime: Infinity },
  )

  const achievementsData = queryResult.data?.data ?? []

  return (
    <MainLayout>
      <Container maxW="container.md" as="main" py="10">
        <VStack as="header" mb="6">
          <Heading>Achievements ({achievementsData.length})</Heading>
          <Text>This page contains all the achievements I&apos;ve achieved along my career.</Text>
        </VStack>
        <Achievements achievements={achievementsData} />
      </Container>
    </MainLayout>
  )
}

export default AchievementsScreen
