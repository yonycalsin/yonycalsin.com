import * as React from 'react'
import { Box, Text } from '@chakra-ui/react'
import RouterLink from 'next/link'

import type { ProjectCardProps } from 'typings/screens'

function ProjectCard(props: ProjectCardProps) {
  const { project } = props

  return (
    <RouterLink href={`/projects#${project.slug}`} passHref>
      <Box
        backgroundColor="white"
        boxShadow="card"
        px="4"
        py="2"
        borderRadius="lg"
        as="a"
        border="1px"
        borderColor="transparent"
        borderWidth="medium"
        _hover={{
          borderColor: 'primary.600',
          cursor: 'pointer',
        }}
        _dark={{
          backgroundColor: 'gray.800',
        }}
      >
        <Text noOfLines={1} mb="1" fontWeight="semibold">
          {project.name}
        </Text>
        <Text fontSize="md" fontStyle="italic" textColor="gray" noOfLines={2}>
          {project.shortDescription}
        </Text>
      </Box>
    </RouterLink>
  )
}

export default ProjectCard
