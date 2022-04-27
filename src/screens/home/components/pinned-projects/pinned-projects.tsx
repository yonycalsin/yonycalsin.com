import * as React from 'react'
import { useQuery } from 'react-query'
import { Box, SimpleGrid } from '@chakra-ui/react'
import Link from 'next/link'

import { ProjectCard } from '~/components/projects/components/project-card/project-card'
import { SectionHeader } from '~/components/section/section-header'
import { QUERY_KEY_PINNED_PROJECTS } from '~/constants/query-keys'
import type { IProjectQueryWithMeta } from '~/module-types/api-rest/projects'

export function PinnedProjects() {
  const queryResult = useQuery<IProjectQueryWithMeta>(QUERY_KEY_PINNED_PROJECTS, {
    staleTime: Infinity,
  })

  const pinnedProjects = queryResult.data?.data ?? []

  return (
    <Box py="3">
      <SectionHeader title="Proyectos fijados" actionLabel="Ver más" actionComponent={Link} actionHref="/projects" />
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
