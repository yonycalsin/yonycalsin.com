import * as React from 'react'
import { dehydrate, DehydratedState, QueryClient } from 'react-query'
import type { GetStaticPropsResult } from 'next'

import { createQueryFn } from '~/clients/query-client'
import { Meta } from '~/components/meta'
import { QUERY_KEY_PROJECTS } from '~/constants/query-keys'
import type { IProjectQueryWithMeta } from '~/module-types/api-rest/projects'
import { ProjectsScreen } from '~/screens/projects'
import { timings } from '~/utils/constants'
import env from '~/utils/env'

interface ProjectsPageProps {
  dehydratedState: DehydratedState
}

function ProjectsPage() {
  return (
    <>
      <Meta title="Proyectos" notRobots />
      <ProjectsScreen />
    </>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<ProjectsPageProps>> {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        queryFn: createQueryFn(),
      },
    },
  })

  const hasWorkProjects = !!env.FF_PROJECTS

  if (hasWorkProjects) {
    await queryClient.prefetchQuery<IProjectQueryWithMeta>(QUERY_KEY_PROJECTS, {
      staleTime: Infinity,
    })
  }

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: hasWorkProjects ? timings.REVALIDATE_STATIC_PAGES_TIME : false,
  }
}

export default ProjectsPage
