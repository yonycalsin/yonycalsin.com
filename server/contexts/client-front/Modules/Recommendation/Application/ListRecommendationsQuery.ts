import type Query from '~/server/contexts/shared/Modules/Shared/Application/Query/Query'

interface ListRecommendationsQueryProps {
  page?: number
  limit?: number
}

class ListRecommendationsQuery implements Query {
  private readonly page: number | undefined

  private readonly limit: number | undefined

  public constructor(props: ListRecommendationsQueryProps) {
    this.page = props.page

    this.limit = props.limit
  }

  public getPage(): number | undefined {
    return this.page
  }

  public getLimit(): number | undefined {
    return this.limit
  }
}

export default ListRecommendationsQuery
