import Criteria from '~/server/contexts/shared/Modules/Shared/Application/Criteria/Criteria'
import CriteriaFiltering from '~/server/contexts/shared/Modules/Shared/Application/Criteria/CriteriaFiltering'
import PaginationOffset from '~/server/contexts/shared/Modules/Shared/Application/Pagination/PaginationOffset'
import type QueryHandler from '~/server/contexts/shared/Modules/Shared/Application/Query/QueryHandler'

import type ListRecommendationsCriteriaFilteringFields from './ListRecommendationsCriteriaFilteringFields'
import type ListRecommendationsPaginationDto from './ListRecommendationsPaginationDto'
import type ListRecommendationsQuery from './ListRecommendationsQuery'
import type ListRecommendationsQueryService from './ListRecommendationsQueryService'

class ListRecommendationsQueryHandler
  implements QueryHandler<ListRecommendationsPaginationDto, ListRecommendationsQuery>
{
  private readonly listRecommendationsQueryService: ListRecommendationsQueryService

  public constructor(listRecommendationsQueryService: ListRecommendationsQueryService) {
    this.listRecommendationsQueryService = listRecommendationsQueryService
  }

  public async handle(query: ListRecommendationsQuery): Promise<ListRecommendationsPaginationDto> {
    const filtering = CriteriaFiltering.create<ListRecommendationsCriteriaFilteringFields>({})

    const pagination = new PaginationOffset(query.getPage(), query.getLimit())

    const criteria = new Criteria<ListRecommendationsCriteriaFilteringFields>(filtering, pagination)

    return this.listRecommendationsQueryService.execute(criteria)
  }
}

export default ListRecommendationsQueryHandler
