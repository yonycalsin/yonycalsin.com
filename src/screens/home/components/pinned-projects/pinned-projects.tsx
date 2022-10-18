import * as React from 'react'
import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'

import type { ProjectResponsePayload, ServerListResponse } from 'typings/services'
import { getPinnedProjectsApi } from 'services'
import { API_ENDPOINTS } from 'services/shared'
import { SectionHeader } from 'components'
import ProjectCard from './project-card'

function PinnedProjects() {
  const queryResult = useQuery<ServerListResponse<ProjectResponsePayload>>(
    [API_ENDPOINTS.PINNED_PROJECTS],
    () => getPinnedProjectsApi(),
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
        role="list"
        aria-label="List of featured projects"
      >
        {pinnedProjects.map(pinnedProject => (
          <ProjectCard key={pinnedProject.id} project={pinnedProject} />
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default PinnedProjects
