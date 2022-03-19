import * as React from 'react'
import { motion } from 'framer-motion'

import type { IProject } from '~/module-types/api-rest/projects'

import { ProjectCardButton } from './project-card-button'
import { ProjectCardContent } from './project-card-content'

export interface ProjectCardProps {
  project: IProject
}

export function ProjectCard(props: ProjectCardProps) {
  const { project } = props

  const [isOpen, setIsOpen] = React.useState(false)

  const onToggle = () => setIsOpen(prevIsOpen => !prevIsOpen)

  return (
    <motion.div
      animate={{
        height: isOpen ? 'auto' : 60,
      }}
      className="flex overflow-hidden relative flex-col no-underline dark:hover:bg-gray-900  border-secondary-200 bg-secondary-50 dark:bg-black rounded-md border dark:border-white/10 md:rounded-lg"
    >
      <ProjectCardButton isOpen={isOpen} onToggle={onToggle} project={project} />
      <ProjectCardContent isOpen={isOpen} project={project} />
    </motion.div>
  )
}
