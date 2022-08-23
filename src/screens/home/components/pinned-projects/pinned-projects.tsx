import * as React from 'react'
import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'

import { SectionHeader } from '~/components/section/section-header'
import { getPinnedProjects } from '~/services/project/projects'
import { projectApiEndpoints } from '~/services/project/utils/project-api-endpoints'
import type { ServerListResponse } from '~/typings/services'
import type { ProjectResponsePayload } from '~/typings/services/project/projects'

import { ProjectCard } from './project-card'

export function PinnedProjects() {
  const queryResult = useQuery<ServerListResponse<ProjectResponsePayload>>(
    [projectApiEndpoints.PINNED_PROJECTS],
    () => getPinnedProjects(),
    { staleTime: Infinity },
  )

  const pinnedProjects = queryResult.data?.data ?? []

  return (
    <Box py="3">
      <SectionHeader title="Featured Projects" actionLabel="See more" actionComponent={Link} actionHref="/projects">
        <Text mt="3">List of some featured projects.</Text>
      </SectionHeader>
      <br />
      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
        }}
        spacing={{
          base: 3,
          md: 4,
        }}
        py="3"
      >
        {pinnedProjects.map(pinnedProject => (
          <ProjectCard key={pinnedProject.id} project={pinnedProject} />
        ))}
      </SimpleGrid>
    </Box>
  )
}
