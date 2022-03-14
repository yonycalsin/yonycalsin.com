import _ from 'lodash'

import type JsonSerializable from '../../../Shared/Serializer/JsonSerializable'

interface ListProjectsJsonTechStackDto {
  name: string
  color: string
}

interface ListProjectsJsonDto {
  id: string
  name: string
  type: 'project' | 'package' | 'contribution'
  status: 'published' | 'draft'
  maintenanceStatus: 'active' | 'deprecated' | 'inactive'
  isFeatured: boolean
  shortDescription: string
  websiteUrl: string | null
  repositoryUrl: string | null
  packageUrl: string | null
  techStack: ListProjectsJsonTechStackDto[]
  startedAt: string
}

interface ListProjectsDtoTechStackProps {
  name: string
  color: string
}

interface ListProjectsDtoProps {
  id: string
  name: string
  type: 'project' | 'package' | 'contribution'
  status: 'published' | 'draft'
  maintenanceStatus: 'active' | 'deprecated' | 'inactive'
  isFeatured: boolean
  shortDescription: string
  websiteUrl?: string
  repositoryUrl?: string
  packageUrl?: string
  techStack: ListProjectsDtoTechStackProps[]
  startedAt: Date
}

class ListProjectsDto implements JsonSerializable<ListProjectsJsonDto> {
  private readonly id!: string

  private readonly name!: string

  private readonly type!: 'project' | 'package' | 'contribution'

  private readonly status!: 'published' | 'draft'

  private readonly maintenanceStatus!: 'active' | 'deprecated' | 'inactive'

  private readonly isFeatured!: boolean

  private readonly shortDescription!: string

  private readonly websiteUrl?: string

  private readonly repositoryUrl?: string

  private readonly packageUrl?: string

  private readonly techStack!: ListProjectsDtoTechStackProps[]

  private readonly startedAt!: Date

  private constructor(props: ListProjectsDtoProps) {
    this.id = props.id

    this.name = props.name

    this.type = props.type

    this.status = props.status

    this.maintenanceStatus = props.maintenanceStatus

    this.isFeatured = props.isFeatured

    this.shortDescription = props.shortDescription

    this.websiteUrl = props.websiteUrl

    this.repositoryUrl = props.repositoryUrl

    this.packageUrl = props.packageUrl

    this.techStack = props.techStack

    this.startedAt = props.startedAt
  }

  public static create(props: ListProjectsDtoProps) {
    return new ListProjectsDto(props)
  }

  public toJSON(): ListProjectsJsonDto {
    return {
      id: this.id!,
      name: this.name!,
      type: this.type!,
      status: this.status!,
      maintenanceStatus: this.maintenanceStatus!,
      isFeatured: this.isFeatured!,
      shortDescription: this.shortDescription!,
      websiteUrl: this.websiteUrl ?? null,
      repositoryUrl: this.repositoryUrl ?? null,
      packageUrl: this.packageUrl ?? null,
      techStack: _.map(this.techStack, techStack => ({
        name: techStack.name,
        color: techStack.color,
      })),
      startedAt: this.startedAt.toISOString(),
    }
  }
}

export type { ListProjectsJsonDto }

export default ListProjectsDto
