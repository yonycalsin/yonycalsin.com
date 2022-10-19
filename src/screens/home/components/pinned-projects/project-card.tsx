import * as React from 'react'
import { Box, HStack, Icon, Text } from '@chakra-ui/react'
import RouterLink from 'next/link'

import type { ProjectCardProps } from 'typings/screens'
import { getWorkItemColors, getWorkItemIcon } from 'components/work-item/components'

function ProjectCard(props: ProjectCardProps) {
  const { project } = props

  const icon = React.useMemo(() => {
    return getWorkItemIcon(project.type)
  }, [project.type])

  const colors = React.useMemo(() => {
    return getWorkItemColors(project.type)
  }, [project.type])

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
        role="listitem"
      >
        <HStack>
          <Icon as={icon} fill={colors.fill} />
          <Text noOfLines={1} mb="1" fontWeight="semibold">
            {project.name}
          </Text>
        </HStack>
        <Text fontSize="md" fontStyle="italic" textColor="gray" noOfLines={2}>
          {project.shortDescription}
        </Text>
      </Box>
    </RouterLink>
  )
}

export default ProjectCard
