import type Query from '~/server/contexts/shared/Modules/Shared/Application/Query/Query'

interface ListAchievementsQueryProps {
  page?: number
  limit?: number
  isFeatured?: boolean
}

class ListAchievementsQuery implements Query {
  private readonly page: number | undefined

  private readonly limit: number | undefined

  private readonly isFeatured: boolean | undefined

  constructor(props: ListAchievementsQueryProps) {
    this.page = props.page

    this.limit = props.limit

    this.isFeatured = props.isFeatured
  }

  public getPage(): number | undefined {
    return this.page
  }

  public getLimit(): number | undefined {
    return this.limit
  }

  public getIsFeatured(): boolean | undefined {
    return this.isFeatured
  }
}

export default ListAchievementsQuery
