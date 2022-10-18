import type { GetStaticPropsResult } from 'next'
import * as React from 'react'
import { dehydrate, QueryClient } from '@tanstack/react-query'

import type { ProjectsPageProps } from 'typings/pages'
import type { ProjectResponsePayload, ServerListResponse } from 'typings/services'
import { getAllProjectsApi } from 'services'
import { API_ENDPOINTS } from 'services/shared'
import ProjectsScreen from 'screens/projects'
import { Meta } from 'components'
import { ENV, NUMERICS, TIMINGS } from 'utils/constants'

function ProjectsPage() {
  return (
    <>
      <Meta title="Projects" notRobots />
      <ProjectsScreen />
    </>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<ProjectsPageProps>> {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: NUMERICS.RETRY_QUERY,
      },
    },
  })

  const hasWorkProjects = !!ENV.FF_PROJECTS

  if (hasWorkProjects) {
    await queryClient.prefetchQuery<ServerListResponse<ProjectResponsePayload>>(
      [API_ENDPOINTS.ALL_PROJECTS],
      () => getAllProjectsApi(),
      { staleTime: Infinity },
    )
  }

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: hasWorkProjects ? TIMINGS.REVALIDATE_STATIC_PAGES_TIME : false,
  }
}

export default ProjectsPage
