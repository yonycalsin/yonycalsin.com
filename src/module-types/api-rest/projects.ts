export enum IProjectType {
  PROJECT = 'project',
  PACKAGE = 'package',
  CONTRIBUTION = 'contribution',
  TEMPLATE = 'template',
}

export enum IProjectStatus {
  PUBLISHED = 'published',
  DRAFT = 'draft',
}

export enum IProjectMaintenanceStatus {
  ACTIVE = 'active',
  DEPRECATED = 'deprecated',
  INACTIVE = 'inactive',
}

export interface IProjectTechStack {
  name: string
  color: string
}

export interface IProject {
  id: number
  slug: string
  name: string
  type: IProjectType
  status: IProjectStatus
  maintenanceStatus: IProjectMaintenanceStatus
  isPinned: boolean
  shortDescription: string
  websiteUrl: string | null
  repositoryUrl: string | null
  packageUrl: string | null
  techStack: IProjectTechStack[]
  startedAt: string
}

export interface IProjectQueryWithMeta {
  data: IProject[]
  meta: PaginationMeta
}

export interface IProjectQueryWithData {
  data: IProject
}
