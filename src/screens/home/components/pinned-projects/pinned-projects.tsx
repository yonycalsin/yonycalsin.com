import * as React from 'react'
import { useQuery } from 'react-query'
import Link from 'next/link'

import { ProjectCard } from '~/components/projects/components/project-card/project-card'
import { Section } from '~/components/section/section'
import { SectionHeader } from '~/components/section/section-header'
import { QUERY_KEY_PINNED_PROJECTS } from '~/constants/query-keys'
import type { IProjectQueryWithMeta } from '~/module-types/api-rest/projects'

export function PinnedProjects() {
  const queryResult = useQuery<IProjectQueryWithMeta>(QUERY_KEY_PINNED_PROJECTS, {
    staleTime: Infinity,
  })

  const pinnedProjects = queryResult.data?.data ?? []

  return (
    <Section>
      <SectionHeader
        title="Proyectos fijados"
        actionLabel="Ver más"
        actionComponent={Link}
        actionHref="/projects"
        key="654654"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 mt-3 gap-3">
        {pinnedProjects.map(pinnedProject => (
          <ProjectCard key={pinnedProject.id} project={pinnedProject} />
        ))}
      </div>
    </Section>
  )
}
