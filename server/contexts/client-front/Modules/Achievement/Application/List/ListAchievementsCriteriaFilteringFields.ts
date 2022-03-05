import type { CriteriaFilteringFields } from '~/server/contexts/shared/Modules/Shared/Application/Criteria/CriteriaFiltering'

interface ListAchievementsFilteringFields {
  isFeatured?: boolean
}

type ListAchievementsCriteriaFilteringFields = CriteriaFilteringFields<ListAchievementsFilteringFields>

export default ListAchievementsCriteriaFilteringFields
