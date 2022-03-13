import type Criteria from '~/server/contexts/shared/Modules/Shared/Application/Criteria/Criteria'

import type ListRecommendationsCriteriaFilteringFields from './ListRecommendationsCriteriaFilteringFields'
import type ListRecommendationsPaginationDto from './ListRecommendationsPaginationDto'

interface ListRecommendationsQueryService {
  execute(criteria: Criteria<ListRecommendationsCriteriaFilteringFields>): Promise<ListRecommendationsPaginationDto>
}

export default ListRecommendationsQueryService
