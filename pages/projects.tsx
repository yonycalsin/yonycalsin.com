import * as React from 'react'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import type { GetStaticPropsResult } from 'next'

import { Meta } from '~/components/meta'
import { NUMERICS } from '~/constants/numerics'
import { ProjectsScreen } from '~/screens/projects'
import { getAllProjects } from '~/services/project/projects'
import { projectApiEndpoints } from '~/services/project/utils/project-api-endpoints'
import type { ProjectsPageProps } from '~/typings/pages/projects'
import type { ServerListResponse } from '~/typings/services'
import type { ProjectResponsePayload } from '~/typings/services/project/projects'
import { timings } from '~/utils/constants/constants'
import env from '~/utils/constants/env'

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

  const hasWorkProjects = !!env.FF_PROJECTS

  if (hasWorkProjects) {
    await queryClient.prefetchQuery<ServerListResponse<ProjectResponsePayload>>(
      [projectApiEndpoints.ALL_PROJECTS],
      () => getAllProjects(),
      { staleTime: Infinity },
    )
  }

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: hasWorkProjects ? timings.REVALIDATE_STATIC_PAGES_TIME : false,
  }
}

export default ProjectsPage
