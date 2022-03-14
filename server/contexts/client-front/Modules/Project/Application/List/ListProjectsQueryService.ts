import type Criteria from '~/server/contexts/shared/Modules/Shared/Application/Criteria/Criteria'

import type ListProjectsCriteriaFilteringFields from './ListProjectsCriteriaFilteringFields'
import type ListProjectsPaginationDto from './ListProjectsPaginationDto'

interface ListProjectsQueryService {
  execute(criteria: Criteria<ListProjectsCriteriaFilteringFields>): Promise<ListProjectsPaginationDto>
}

export default ListProjectsQueryService
