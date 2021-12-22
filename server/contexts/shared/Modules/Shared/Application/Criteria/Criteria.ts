import type PaginationOffset from '../Pagination/PaginationOffset'

import type { CriteriaFilteringFields } from './CriteriaFiltering'
import type CriteriaFiltering from './CriteriaFiltering'

class Criteria<F extends CriteriaFilteringFields<F>> {
  private readonly filtering: CriteriaFiltering<F>

  private readonly pagination: PaginationOffset

  public constructor(filtering: CriteriaFiltering<F>, pagination: PaginationOffset) {
    this.filtering = filtering

    this.pagination = pagination
  }

  public getFilterFields(): Readonly<CriteriaFilteringFields<F>> {
    return Object.freeze(this.filtering.getFields())
  }

  public getPagination(): PaginationOffset {
    return this.pagination
  }
}

export default Criteria
