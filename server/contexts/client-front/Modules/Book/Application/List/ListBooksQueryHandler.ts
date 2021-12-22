import Criteria from '~/server/contexts/shared/Modules/Shared/Application/Criteria/Criteria'
import CriteriaFiltering from '~/server/contexts/shared/Modules/Shared/Application/Criteria/CriteriaFiltering'
import PaginationOffset from '~/server/contexts/shared/Modules/Shared/Application/Pagination/PaginationOffset'
import type QueryHandler from '~/server/contexts/shared/Modules/Shared/Application/Query/QueryHandler'

import type ListBooksCriteriaFilteringFields from './ListBooksCriteriaFilteringFields'
import type ListBooksPaginationDto from './ListBooksPaginationDto'
import type ListBooksQuery from './ListBooksQuery'
import type ListBooksQueryService from './ListBooksQueryService'

class ListBooksQueryHandler implements QueryHandler<ListBooksPaginationDto, ListBooksQuery> {
  private readonly listBooksQueryService: ListBooksQueryService

  public constructor(listBooksQueryService: ListBooksQueryService) {
    this.listBooksQueryService = listBooksQueryService
  }

  public async handle(query: ListBooksQuery): Promise<ListBooksPaginationDto> {
    const filtering = CriteriaFiltering.create<ListBooksCriteriaFilteringFields>({})

    const pagination = new PaginationOffset(query.getPage(), query.getLimit())

    const criteria = new Criteria<ListBooksCriteriaFilteringFields>(filtering, pagination)

    return this.listBooksQueryService.execute(criteria)
  }
}

export default ListBooksQueryHandler
