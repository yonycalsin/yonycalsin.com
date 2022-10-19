import * as React from 'react'
import { Container, Heading, Link, Text, VStack } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'

import type { ProjectResponsePayload, ServerListResponse } from 'typings/services'
import { getAllProjectsApi } from 'services'
import { API_ENDPOINTS } from 'services/shared'
import { useQueryCache } from 'hooks'
import { MainLayout } from 'layouts'
import { LoaderBox, WorkItem } from 'components'
import { SOCIAL_LINKS } from 'utils/constants'

function ProjectsScreenProjectList() {
  const queryCacheResult = useQueryCache<ServerListResponse<ProjectResponsePayload>>([API_ENDPOINTS.ALL_PROJECTS])

  if (queryCacheResult?.state?.status === 'loading') {
    return <LoaderBox />
  }

  const projects = queryCacheResult?.state?.data?.data ?? []

  return (
    <VStack
      spacing="12"
      as="ul"
      alignItems="flex-start"
      position="relative"
      listStyleType="none"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        height: 'full',
        width: '1',
        left: {
          base: 'calc((var(--yony-space-9) / 2) - (var(--yony-space-1) / 2))',
          lg: 'calc((var(--yony-space-12) / 2) - (var(--yony-space-1) / 2))',
        },
        // prettier-ignore
        background: 'linear-gradient(135deg, rgb(238, 97, 97), rgb(254, 212, 2), rgb(5, 227, 156), rgb(1, 208, 251))',
        opacity: '.5',
      }}
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
    </VStack>
  )
}

function ProjectsScreen() {
  const queryResult = useQuery<ServerListResponse<ProjectResponsePayload>>(
    [API_ENDPOINTS.ALL_PROJECTS],
    () => getAllProjectsApi(),
    { staleTime: Infinity },
  )

  const projects = queryResult.data?.data ?? []

  return (
    <MainLayout>
      <Container maxW="container.md" as="main" py="10">
        <VStack alignItems="flex-start" mb="10" spacing="6">
          <Heading as="h1" fontWeight="extrabold">
            Projects ({projects.length})
          </Heading>
          <Text>
            Let me show you some of my projects. See all of them{' '}
            <Link color="primary.500" fontWeight="bold" href={SOCIAL_LINKS.GITHUB} target="blank">
              on my GitHub
            </Link>
            .
          </Text>
        </VStack>
        <ProjectsScreenProjectList />
      </Container>
    </MainLayout>
  )
}

export default ProjectsScreen
