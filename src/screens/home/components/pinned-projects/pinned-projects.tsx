import * as React from 'react'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'

import type { ProjectResponsePayload, ServerListResponse } from 'typings/services'
import { getPinnedProjectsApi } from 'services'
import { API_ENDPOINTS } from 'services/shared'
import { ProjectCard } from 'containers'
import { LoaderBox, SectionHeader } from 'components'

function PinnedProjects() {
  const queryResult = useQuery<ServerListResponse<ProjectResponsePayload>>(
    [API_ENDPOINTS.PINNED_PROJECTS],
    () => getPinnedProjectsApi(),
    { staleTime: Infinity },
  )

  if (queryResult.isLoading) {
    return <LoaderBox />
  }

  const pinnedProjects = queryResult.data?.data ?? []

  return (
    <div className="py-3 space-y-3">
      <SectionHeader title="Featured Projects" actionLabel="See more" actionComponent={Link} actionHref="/projects">
        <p className="mt-3">List of some featured projects.</p>
      </SectionHeader>
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4"
        role="list"
        aria-label="List of featured projects"
      >
        {pinnedProjects.map(pinnedProject => (
          <ProjectCard key={pinnedProject.id} project={pinnedProject} />
        ))}
      </div>
    </div>
  )
}

export default PinnedProjects
