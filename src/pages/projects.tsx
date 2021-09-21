import * as React from 'react'
import { Meta } from '~/components/meta'
import { HomeLayout } from '~/layouts'
import { socialLinks } from '~/utils/constants'
import type { GetStaticPropsResult } from 'next'
import { getWorkProjects, WorkProject } from '~/lib/airtable-api'
import { WorkItem } from '~/components/work-item/work-item'

interface ProjectsPageProps {
  workProjects: WorkProject[]
}

function ProjectsPage(props: ProjectsPageProps) {
  const { workProjects = [] } = props

  return (
    <HomeLayout>
      <Meta title="Proyectos" notRobots />
      <h1>Proyectos</h1>
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
            title={work.name}
            demoHref={work.demoUrl}
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
  }
}

export default ProjectsPage
