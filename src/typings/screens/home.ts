import type { ProjectResponsePayload } from 'typings/services'

interface ProjectCardProps {
  project: ProjectResponsePayload
}

interface ProjectCardButtonProps {
  isOpen: boolean
  onToggle: () => void
  project: ProjectCardProps['project']
}

interface ProjectCardContentProps {
  isOpen: boolean
  project: ProjectCardProps['project']
}

export type { ProjectCardButtonProps, ProjectCardContentProps, ProjectCardProps }
