import * as React from 'react'
import type { GetStaticPropsResult } from 'next'

import { Meta } from '~/components/meta'
import { getWorkProjects, WorkProject } from '~/lib/airtable-api'
import { ProjectsScreen } from '~/screens/projects'
import { timings } from '~/utils/constants'
import env from '~/utils/env'

interface ProjectsPageProps {
  workProjects: WorkProject[]
}

function ProjectsPage(props: ProjectsPageProps) {
  const { workProjects = [] } = props

  return (
    <>
      <Meta title="Proyectos" notRobots />
      <ProjectsScreen workProjects={workProjects} />
    </>
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
    revalidate: hasWorkProjects ? timings.REVALIDATE_STATIC_PAGES_TIME : false,
  }
}

export default ProjectsPage
