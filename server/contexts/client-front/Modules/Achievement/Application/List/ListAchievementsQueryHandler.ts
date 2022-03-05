import Criteria from '~/server/contexts/shared/Modules/Shared/Application/Criteria/Criteria'
import CriteriaFiltering from '~/server/contexts/shared/Modules/Shared/Application/Criteria/CriteriaFiltering'
import PaginationOffset from '~/server/contexts/shared/Modules/Shared/Application/Pagination/PaginationOffset'
import type QueryHandler from '~/server/contexts/shared/Modules/Shared/Application/Query/QueryHandler'

import type ListAchievementsCriteriaFilteringFields from './ListAchievementsCriteriaFilteringFields'
import type ListAchievementsPaginationDto from './LIstAchievementsPaginationDto'
import type ListAchievementsQuery from './ListAchievementsQuery'
import type ListAchievementsQueryService from './ListAchievementsQueryService'

class ListAchievementsQueryHandler implements QueryHandler<ListAchievementsPaginationDto, ListAchievementsQuery> {
  private readonly listAchievementsQueryService: ListAchievementsQueryService

  public constructor(listAchievementsQueryService: ListAchievementsQueryService) {
    this.listAchievementsQueryService = listAchievementsQueryService
  }

  public async handle(query: ListAchievementsQuery): Promise<ListAchievementsPaginationDto> {
    const filtering = CriteriaFiltering.create<ListAchievementsCriteriaFilteringFields>({})

    const pagination = new PaginationOffset(query.getPage(), query.getLimit())

    const criteria = new Criteria<ListAchievementsCriteriaFilteringFields>(filtering, pagination)

    return this.listAchievementsQueryService.execute(criteria)
  }
}

export default ListAchievementsQueryHandler
