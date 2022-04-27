import * as React from 'react'
import { useColorModeValue } from '@chakra-ui/react'

import { MotionBox } from '~/components/motion'
import type { IProject } from '~/module-types/api-rest/projects'

import { ProjectCardButton } from './project-card-button'
import { ProjectCardContent } from './project-card-content'

export interface ProjectCardProps {
  project: IProject
}

export function ProjectCard(props: ProjectCardProps) {
  const { project } = props

  const borderColor = useColorModeValue('gray.200', 'gray.700')

  const backgroundColor = useColorModeValue('gray.50', 'gray.900')

  const [isOpen, setIsOpen] = React.useState(false)

  const onToggle = () => setIsOpen(prevIsOpen => !prevIsOpen)

  return (
    <MotionBox
      animate={{
        height: isOpen ? 'auto' : 60,
      }}
      display="flex"
      overflow="hidden"
      position="relative"
      flexDirection="column"
      borderRadius="md"
      border="1px"
      backgroundColor={backgroundColor}
      borderColor={borderColor}
    >
      <ProjectCardButton isOpen={isOpen} onToggle={onToggle} project={project} />
      <ProjectCardContent isOpen={isOpen} project={project} />
    </MotionBox>
  )
}
