import type Criteria from '~/server/contexts/shared/Modules/Shared/Application/Criteria/Criteria'

import type ListBooksCriteriaFilteringFields from '../../Application/List/ListBooksCriteriaFilteringFields'
import ListBooksPaginationDto from '../../Application/List/ListBooksPaginationDto'
import type ListBooksQueryService from '../../Application/List/ListBooksQueryService'

class ListBooksQueryServiceNotion implements ListBooksQueryService {
  public async execute(criteria: Criteria<ListBooksCriteriaFilteringFields>): Promise<ListBooksPaginationDto> {
    const pagination = criteria.getPagination()

    pagination.setTotal(0)

    return ListBooksPaginationDto.create([], {
      pages: pagination.getPages(),
      page: pagination.getPage(),
      total: pagination.getTotal(),
    })
  }
}

export default ListBooksQueryServiceNotion
