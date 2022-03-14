import debug from 'debug'
import _ from 'lodash'

import type Criteria from '~/server/contexts/shared/Modules/Shared/Application/Criteria/Criteria'
import type SdkClientNotion from '~/server/contexts/shared/Modules/Shared/Infrastructure/Sdk/SdkClientNotion'

import env from '../../../Shared/Utils/env'
import type ListProjectsCriteriaFilteringFields from '../../Application/List/ListProjectsCriteriaFilteringFields'
import ListProjectsDto from '../../Application/List/ListProjectsDto'
import ListProjectsPaginationDto from '../../Application/List/ListProjectsPaginationDto'
import type ListProjectsQueryService from '../../Application/List/ListProjectsQueryService'

const logger = debug(
  'api:contexts:client-front:modules:project:infrastructure:query:list-projects-query-service-notion',
)

class ListProjectsQueryServiceNotion implements ListProjectsQueryService {
  private readonly sdkClientNotion: SdkClientNotion

  public constructor(sdkClientNotion: SdkClientNotion) {
    this.sdkClientNotion = sdkClientNotion
  }

  public async execute(criteria: Criteria<ListProjectsCriteriaFilteringFields>) {
    const pagination = criteria.getPagination()

    const response = await this.sdkClientNotion.getClient().databases.query({
      database_id: env.NOTION_PROJECTS_DATABASE_ID,
      filter: {
        and: [
          {
            property: 'Status',
            select: {
              equals: 'Published',
            },
          },
        ],
      },
    })

    const dtos: ListProjectsDto[] = _.map(response.results, (result: any) => {
      const properties = result.properties as any

      return ListProjectsDto.create({
        id: result.id,
        name: _.head<any>(properties['Name'].title).plain_text,
        type: properties['Type'].select.name,
        status: properties['Status'].select.name,
        maintenanceStatus: properties['Maintenance status'].select.name,
        isFeatured: properties['Is Featured'].checkbox,
        shortDescription: _.head<any>(properties['Short Description'].rich_text).plain_text,

        websiteUrl: properties['Website Url'].url,
        repositoryUrl: properties['Repository Url'].url,
        packageUrl: properties['Package Url'].url,
        techStack: _.map(properties['Tech Stack'].multi_select, techStack => ({
          name: techStack.name,
          color: techStack.color,
        })),
        startedAt: new Date(properties['Started At'].date.start),
      })
    })

    pagination.setTotal(dtos.length)

    return ListProjectsPaginationDto.create(dtos, {
      page: pagination.getPage(),
      pages: pagination.getPages(),
      total: pagination.getTotal(),
    })
  }
}

export default ListProjectsQueryServiceNotion
