import * as React from 'react'
import type { GetStaticPropsResult } from 'next'

import { Meta } from '~/components/meta'
import { WorkItem } from '~/components/work-item/work-item'
import { HomeLayout } from '~/layouts'
import { getWorkProjects, WorkProject } from '~/lib/airtable-api'
import { socialLinks } from '~/utils/constants'

interface ProjectsPageProps {
  workProjects: WorkProject[]
}

function ProjectsPage(props: ProjectsPageProps) {
  const { workProjects = [] } = props

  return (
    <HomeLayout>
      <Meta title="Proyectos" notRobots />
      <h1>Proyectos ({workProjects.length}) </h1>
      <p>
        Aqui algunos de mis proyectos destacados. Véalos todos{' '}
        <a href={socialLinks.GITHUB} target="blank">
          en mi GitHub
        </a>
        .
      </p>
      <div className="timeline relative space-y-5">
        {workProjects.map(work => (
          <WorkItem
            key={work.id}
            title={work.name}
            webHref={work.webUrl}
            repositoryHref={work.repositoryUrl}
            packageHref={work.packageUrl}
            description={work.description}
            tags={work.technologies}
            startedAt={work.startedAt}
          />
        ))}
      </div>
    </HomeLayout>
  )
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<{
    workProjects: WorkProject[]
  }>
> {
  const workProjects = await getWorkProjects()

  return {
    props: {
      workProjects: workProjects,
    },
    revalidate: 10,
  }
}

export default ProjectsPage
