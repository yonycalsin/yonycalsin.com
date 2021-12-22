import type Criteria from '~/server/contexts/shared/Modules/Shared/Application/Criteria/Criteria'

import type ListBooksCriteriaFilteringFields from './ListBooksCriteriaFilteringFields'
import type ListBooksPaginationDto from './ListBooksPaginationDto'

interface ListBooksQueryService {
  execute(criteria: Criteria<ListBooksCriteriaFilteringFields>): Promise<ListBooksPaginationDto>
}

export default ListBooksQueryService
