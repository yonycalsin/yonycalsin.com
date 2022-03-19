import Criteria from '~/server/contexts/shared/Modules/Shared/Application/Criteria/Criteria'
import CriteriaFiltering from '~/server/contexts/shared/Modules/Shared/Application/Criteria/CriteriaFiltering'
import PaginationOffset from '~/server/contexts/shared/Modules/Shared/Application/Pagination/PaginationOffset'
import type QueryHandler from '~/server/contexts/shared/Modules/Shared/Application/Query/QueryHandler'

import type ListProjectsCriteriaFilteringFields from './ListProjectsCriteriaFilteringFields'
import type ListProjectsPaginationDto from './ListProjectsPaginationDto'
import type ListProjectsQuery from './ListProjectsQuery'
import type ListProjectsQueryService from './ListProjectsQueryService'

class ListProjectsQueryHandler implements QueryHandler<ListProjectsPaginationDto, ListProjectsQuery> {
  private readonly listProjectsQueryService: ListProjectsQueryService

  public constructor(listProjectsQueryService: ListProjectsQueryService) {
    this.listProjectsQueryService = listProjectsQueryService
  }

  public async handle(query: ListProjectsQuery): Promise<ListProjectsPaginationDto> {
    const filtering = CriteriaFiltering.create<ListProjectsCriteriaFilteringFields>({
      isPinned: query.getIsPinned(),
    })

    const pagination = new PaginationOffset(query.getPage(), query.getLimit())

    const criteria = new Criteria<ListProjectsCriteriaFilteringFields>(filtering, pagination)

    return this.listProjectsQueryService.execute(criteria)
  }
}

export default ListProjectsQueryHandler
