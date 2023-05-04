import * as React from 'react'
import Link from 'next/link'

import { getPinnedProjectsApi } from 'services'
import { ProjectCard } from 'containers'
import { SectionHeader } from 'components'

function PinnedProjects() {
  const response = React.use(getPinnedProjectsApi())

  const pinnedProjects = response.data.results

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
