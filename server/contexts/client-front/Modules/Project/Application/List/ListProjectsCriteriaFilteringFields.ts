import type { CriteriaFilteringFields } from '~/server/contexts/shared/Modules/Shared/Application/Criteria/CriteriaFiltering'

interface ListProjectsFilteringFields {
  isPinned?: boolean
}

type ListProjectsCriteriaFilteringFields = CriteriaFilteringFields<ListProjectsFilteringFields>

export default ListProjectsCriteriaFilteringFields
