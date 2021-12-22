import type { CriteriaFilteringFields } from '~/server/contexts/shared/Modules/Shared/Application/Criteria/CriteriaFiltering'

interface ListBooksFilteringFields {}

type ListBooksCriteriaFilteringFields = CriteriaFilteringFields<ListBooksFilteringFields>

export default ListBooksCriteriaFilteringFields
