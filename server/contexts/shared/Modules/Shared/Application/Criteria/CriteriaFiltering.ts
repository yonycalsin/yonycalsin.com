type CriteriaFilteringFields<T> = { [K in keyof T]: T[K] }

class CriteriaFiltering<T> {
  private readonly fields: CriteriaFilteringFields<T>

  private constructor(fields: CriteriaFilteringFields<T>) {
    this.fields = fields
  }

  public static create<T>(fields: CriteriaFilteringFields<T>): CriteriaFiltering<T> {
    return new CriteriaFiltering<T>(fields)
  }

  public getFields(): CriteriaFilteringFields<T> {
    return this.fields
  }
}

export default CriteriaFiltering

export type { CriteriaFilteringFields }
