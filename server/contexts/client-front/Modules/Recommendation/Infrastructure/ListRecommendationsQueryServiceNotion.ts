import debug from 'debug'
import _ from 'lodash'

import type Criteria from '~/server/contexts/shared/Modules/Shared/Application/Criteria/Criteria'
import type SdkClientNotion from '~/server/contexts/shared/Modules/Shared/Infrastructure/Sdk/SdkClientNotion'

import env from '../../Shared/Utils/env'
import type ListRecommendationsCriteriaFilteringFields from '../Application/ListRecommendationsCriteriaFilteringFields'
import ListRecommendationsDto from '../Application/ListRecommendationsDto'
import ListRecommendationsPaginationDto from '../Application/ListRecommendationsPaginationDto'
import type ListRecommendationsQueryService from '../Application/ListRecommendationsQueryService'

const logger = debug(
  'api:contexts:client-front:modules:recommendations:infrastructure:list-recommendations-query-service-notion',
)

class ListRecommendationsQueryServiceNotion implements ListRecommendationsQueryService {
  private readonly sdkClientNotion: SdkClientNotion

  public constructor(sdkClientNotion: SdkClientNotion) {
    this.sdkClientNotion = sdkClientNotion
  }

  public async execute(
    criteria: Criteria<ListRecommendationsCriteriaFilteringFields>,
  ): Promise<ListRecommendationsPaginationDto> {
    const pagination = criteria.getPagination()

    const response = await this.sdkClientNotion.getClient().databases.query({
      database_id: env.NOTION_RECOMMENDATIONS_DATABASE_ID,
    })

    const dtos: ListRecommendationsDto[] = _.map(response.results, (result: any) => {
      const properties = result.properties as any

      return ListRecommendationsDto.create({
        id: result.id,
        type: properties.Type.select.name === 'Received' ? 'received' : 'given',
        text: _.head<any>(properties['Recommendation'].rich_text).plain_text,
        author: {
          name: _.head<any>(properties['Author Name'].rich_text).plain_text,
          jobTitle: _.head<any>(properties['Author Job Title'].rich_text).plain_text,
          linkedin: properties['Author Linkedin'].url,
        },
        createdAt: new Date(properties['Recommended At'].date.start),
      })
    })

    pagination.setTotal(dtos.length)

    return ListRecommendationsPaginationDto.create(dtos, {
      page: pagination.getPage(),
      pages: pagination.getPages(),
      total: pagination.getTotal(),
    })
  }
}

export default ListRecommendationsQueryServiceNotion
