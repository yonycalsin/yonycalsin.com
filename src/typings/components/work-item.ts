import type { ProjectResponsePayload } from 'typings/services'

interface WorkItemProps {
  title: string
  slug: string
  type: ProjectResponsePayload['type']
  description: string
  webHref?: string | null
  repositoryHref?: string | null
  packageHref?: string | null
  tags?: string[]
  startedAt: string
}

interface WorkItemIconProps {
  projectType: ProjectResponsePayload['type']
}

export type { WorkItemIconProps, WorkItemProps }
