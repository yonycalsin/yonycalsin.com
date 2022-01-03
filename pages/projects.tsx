import * as React from 'react'
import type { GetStaticPropsResult } from 'next'

import { Meta } from '~/components/meta'
import { WorkItem } from '~/components/work-item/work-item'
import { MainLayout } from '~/layouts'
import { getWorkProjects, WorkProject } from '~/lib/airtable-api'
import { socialLinks } from '~/utils/constants'
import env from '~/utils/env'

interface ProjectsPageProps {
  workProjects: WorkProject[]
}

function ProjectsPage(props: ProjectsPageProps) {
  const { workProjects = [] } = props

  return (
    <MainLayout>
      <Meta title="Proyectos" notRobots />
      <article className="article">
        <header>
          <h1>Proyectos ({workProjects.length}) </h1>
          <p>
            Aqui algunos de mis proyectos destacados. Véalos todos{' '}
            <a href={socialLinks.GITHUB} target="blank">
              en mi GitHub
            </a>
            .
          </p>
        </header>
        <ul
          className="timeline relative space-y-5 lg:space-y-7"
          style={{
            listStyleType: 'none',
          }}
        >
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
        </ul>
      </article>
    </MainLayout>
  )
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<{
    workProjects: WorkProject[]
  }>
> {
  const hasWorkProjects = env.FF_PROJECTS

  const workProjects = hasWorkProjects ? await getWorkProjects() : []

  return {
    props: {
      workProjects: workProjects,
    },
    revalidate: hasWorkProjects ? 10 : false,
  }
}

export default ProjectsPage
