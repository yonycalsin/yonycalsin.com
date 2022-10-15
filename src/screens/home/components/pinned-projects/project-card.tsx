import * as React from 'react'
import { useColorModeValue } from '@chakra-ui/react'

import type { ProjectCardProps } from 'typings/screens'
import { MotionBox } from 'components'
import { ProjectCardButton } from './project-card-button'
import ProjectCardContent from './project-card-content'

function ProjectCard(props: ProjectCardProps) {
  const { project } = props

  const backgroundColor = useColorModeValue('gray.50', 'gray.800')

  const [isOpen, setIsOpen] = React.useState(false)

  const onToggle = () => setIsOpen(prevIsOpen => !prevIsOpen)

  return (
    <MotionBox
      animate={{
        height: isOpen ? 'auto' : 58,
      }}
      display="flex"
      overflow="hidden"
      position="relative"
      flexDirection="column"
      borderRadius="md"
      backgroundColor={backgroundColor}
    >
      <ProjectCardButton isOpen={isOpen} onToggle={onToggle} project={project} />
      <ProjectCardContent isOpen={isOpen} project={project} />
    </MotionBox>
  )
}

export default ProjectCard
