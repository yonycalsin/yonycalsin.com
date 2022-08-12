import * as React from 'react'
import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'

import { SectionHeader } from '~/components/section/section-header'
import { QUERY_KEY_PINNED_PROJECTS } from '~/constants/query-keys'
import type { IProjectQueryWithMeta } from '~/module-types/api-rest/projects'

import { ProjectCard } from './project-card'

export function PinnedProjects() {
  const queryResult = useQuery<IProjectQueryWithMeta>(QUERY_KEY_PINNED_PROJECTS, {
    staleTime: Infinity,
  })

  const pinnedProjects = queryResult.data?.data ?? []

  return (
    <Box py="3">
      <SectionHeader title="Proyectos fijados" actionLabel="Ver más" actionComponent={Link} actionHref="/projects">
        <Text mt="3">Aqui algunos de mis proyectos destacados</Text>
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
