/**
 * @todo this enum shouldn't be exported as a value
 * @author yonycalsin
 */
export enum ProjectTypeResponsePayload {
  PROJECT = 'project',
  PACKAGE = 'package',
  CONTRIBUTION = 'contribution',
  TEMPLATE = 'template',
}

enum ProjectStatusResponsePayload {
  PUBLISHED = 'published',
  DRAFT = 'draft',
}

enum ProjectMaintenanceStatusResponsePayload {
  ACTIVE = 'active',
  DEPRECATED = 'deprecated',
  INACTIVE = 'inactive',
}

interface ProjectTechStackResponsePayload {
  name: string
  color: string
}

export interface ProjectResponsePayload {
  id: number
  slug: string
  name: string
  type: ProjectTypeResponsePayload
  status: ProjectStatusResponsePayload
  maintenanceStatus: ProjectMaintenanceStatusResponsePayload
  isPinned: boolean
  shortDescription: string
  websiteUrl: string | null
  repositoryUrl: string | null
  packageUrl: string | null
  techStack: ProjectTechStackResponsePayload[]
  startedAt: string
}
