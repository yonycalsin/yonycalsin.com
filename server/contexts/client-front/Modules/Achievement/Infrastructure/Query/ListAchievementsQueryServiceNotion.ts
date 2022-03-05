import debug from 'debug'
import _ from 'lodash'

import type Criteria from '~/server/contexts/shared/Modules/Shared/Application/Criteria/Criteria'
import type SdkClientNotion from '~/server/contexts/shared/Modules/Shared/Infrastructure/Sdk/SdkClientNotion'

import env from '../../../Shared/Utils/env'
import type ListAchievementsCriteriaFilteringFields from '../../Application/List/ListAchievementsCriteriaFilteringFields'
import ListAchievementsDto from '../../Application/List/ListAchievementsDto'
import ListAchievementsPaginationDto from '../../Application/List/LIstAchievementsPaginationDto'
import type ListAchievementsQueryService from '../../Application/List/ListAchievementsQueryService'

const logger = debug(
  'api:contexts:client-front:modules:achievement:infrastructure:query:list-achievements-query-service-notion',
)

class ListAchievementsQueryServiceNotion implements ListAchievementsQueryService {
  private readonly sdkClientNotion: SdkClientNotion

  public constructor(sdkClientNotion: SdkClientNotion) {
    this.sdkClientNotion = sdkClientNotion
  }

  public async execute(
    criteria: Criteria<ListAchievementsCriteriaFilteringFields>,
  ): Promise<ListAchievementsPaginationDto> {
    const pagination = criteria.getPagination()

    const filter = {
      and: [
        {
          property: 'Is Published',
          checkbox: {
            equals: true,
          },
        },
      ],
    }

    const response = await this.sdkClientNotion.getClient().databases.query({
      database_id: env.NOTION_ACHIEVEMENTS_DATABASE_ID,
      filter,
    })

    const dtos: ListAchievementsDto[] = _.map(response.results, (item: any) => {
      const properties = item.properties as any

      return ListAchievementsDto.create({
        id: item.id,
        title: _.head<any>(properties['Title'].title).plain_text,
        type: properties['Type'].select.name,
        date: new Date(properties['Date'].date.start),
        isFeatured: properties['Is Featured'].checkbox,
        isPublished: properties['Is Published'].checkbox,
      })
    })

    pagination.setTotal(dtos.length)

    return ListAchievementsPaginationDto.create(dtos, {
      page: pagination.getPage(),
      pages: pagination.getPages(),
      total: pagination.getTotal(),
    })
  }
}

export default ListAchievementsQueryServiceNotion
