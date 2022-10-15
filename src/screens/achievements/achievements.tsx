import * as React from 'react'
import { Container, Heading, Text, VStack } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'

import type { AchievementResponsePayload, ServerListResponse } from 'typings/services'
import { getAllAchievements } from 'services'
import { API_ENDPOINTS } from 'services/shared'
import { MainLayout } from 'layouts'
import { Achievements } from 'components'

function AchievementsScreen() {
  const queryResult = useQuery<ServerListResponse<AchievementResponsePayload>>(
    [API_ENDPOINTS.ALL_ACHIEVEMENTS],
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
