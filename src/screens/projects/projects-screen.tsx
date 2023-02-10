import * as React from 'react'

import { getAllProjectsApi } from 'services'
import { Anchor, Heading, WorkItem } from 'components'
import { SOCIAL_LINKS } from 'utils/constants'

function ProjectsScreen() {
  const response = React.use(getAllProjectsApi())

  const projects = response.data.results ?? []

  return (
    <main className="container py-10">
      <div className="space-y-6 mb-10">
        <Heading size="h1">Projects ({projects.length})</Heading>
        <p>
          Let me show you some of my projects. See all of them{' '}
          <Anchor color="primary.500" href={SOCIAL_LINKS.GITHUB} target="blank">
            on my GitHub.
          </Anchor>
        </p>
      </div>
      <ul
        className="space-y-12 relative before:content-[''] before:absolute before:top-0 before:left-4 lg:before:left-6 before:h-full before:w-1 before:bg-primary-600"
        role="list"
        aria-label="List of projects"
      >
        {projects.map(project => (
          <WorkItem
            key={project.id}
            title={project.name}
            type={project.type}
            slug={project.slug}
            webHref={project.websiteUrl}
            repositoryHref={project.repositoryUrl}
            packageHref={project.packageUrl}
            description={project.shortDescription}
            tags={project.techStack.map(stack => stack.name)}
            startedAt={project.startedAt}
          />
        ))}
      </ul>
    </main>
  )
}

export default ProjectsScreen
