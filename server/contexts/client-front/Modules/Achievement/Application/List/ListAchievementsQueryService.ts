import type Criteria from '~/server/contexts/shared/Modules/Shared/Application/Criteria/Criteria'

import type ListAchievementsCriteriaFilteringFields from './ListAchievementsCriteriaFilteringFields'
import type ListAchievementsPaginationDto from './LIstAchievementsPaginationDto'

interface ListAchievementsQueryService {
  execute(criteria: Criteria<ListAchievementsCriteriaFilteringFields>): Promise<ListAchievementsPaginationDto>
}

export default ListAchievementsQueryService
