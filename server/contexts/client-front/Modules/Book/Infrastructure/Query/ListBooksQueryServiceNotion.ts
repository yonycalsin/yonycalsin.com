import _ from 'lodash'

import type Criteria from '~/server/contexts/shared/Modules/Shared/Application/Criteria/Criteria'
import type SdkClientNotion from '~/server/contexts/shared/Modules/Shared/Infrastructure/Sdk/SdkClientNotion'

import env from '../../../Shared/Utils/env'
import type ListBooksCriteriaFilteringFields from '../../Application/List/ListBooksCriteriaFilteringFields'
import ListBooksDto from '../../Application/List/ListBooksDto'
import ListBooksPaginationDto from '../../Application/List/ListBooksPaginationDto'
import type ListBooksQueryService from '../../Application/List/ListBooksQueryService'

class ListBooksQueryServiceNotion implements ListBooksQueryService {
  private readonly sdkClientNotion: SdkClientNotion

  public constructor(sdkClientNotion: SdkClientNotion) {
    this.sdkClientNotion = sdkClientNotion
  }

  public async execute(criteria: Criteria<ListBooksCriteriaFilteringFields>): Promise<ListBooksPaginationDto> {
    const pagination = criteria.getPagination()

    const filteringFields = criteria.getFilterFields()

    const filter = {
      and: [],
    } as any

    if (!_.isNil(filteringFields.status)) {
      filter.and.push({
        property: 'Status',
        select: {
          equals: 'Published',
        },
      })
    }

    const response = await this.sdkClientNotion.getClient().databases.query({
      database_id: env.BOOKS_NOTION_ID,
      filter,
    })

    pagination.setTotal(response.results.length)

    const dtos: ListBooksDto[] = _.map(response.results, (item: any) => {
      const properties = item.properties as any

      return ListBooksDto.create({
        id: item.id,
        name: _.head<any>(properties['Name'].title).plain_text,
        rating: properties['Rating'].number,
        releaseAt: new Date(properties['Release At'].date.start),
        status: properties['Status'].select.name,
        author: _.head<any>(properties['Author'].rich_text).plain_text,
        tags: _.map(properties['Tags'].multi_select, 'name'),
        images: _.map(properties['Images'].files, file => ({
          name: file.name,
          url: file.file.url,
        })),
        createdAt: new Date(item.created_time),
        updatedAt: new Date(item.last_edited_time),
      })
    })

    return ListBooksPaginationDto.create(dtos, {
      pages: pagination.getPages(),
      page: pagination.getPage(),
      total: pagination.getTotal(),
    })
  }
}

export default ListBooksQueryServiceNotion
