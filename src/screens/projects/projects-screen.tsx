import * as React from 'react'
import { Container, Heading, Link, Text, VStack } from '@chakra-ui/react'

import { WorkItem } from '~/components/work-item/work-item'
import { MainLayout } from '~/layouts'
import type { WorkProject } from '~/lib/airtable-api'
import { socialLinks } from '~/utils/constants'

export interface ProjectsScreenProps {
  workProjects: WorkProject[]
}

export function ProjectsScreen(props: ProjectsScreenProps) {
  const { workProjects } = props

  return (
    <MainLayout>
      <Container maxW="container.md" as="main" py="10">
        <Heading as="h1" fontWeight="extrabold">
          Proyectos ({workProjects.length})
        </Heading>

        <Text mt="6">
          Aqui algunos de mis proyectos destacados. Véalos todos{' '}
          <Link color="primary.500" fontWeight="bold" href={socialLinks.GITHUB} target="blank">
            en mi GitHub
          </Link>
          .
        </Text>

        <VStack
          spacing="12"
          mt="6"
          as="ul"
          alignItems="flex-start"
          position="relative"
          className="timeline"
          listStyleType="none"
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
        </VStack>
      </Container>
    </MainLayout>
  )
}
