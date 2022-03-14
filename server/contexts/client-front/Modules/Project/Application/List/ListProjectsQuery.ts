import type Query from '~/server/contexts/shared/Modules/Shared/Application/Query/Query'

interface ListProjectsQueryProps {
  page?: number
  limit?: number
}

class ListProjectsQuery implements Query {
  private readonly page: number | undefined

  private readonly limit: number | undefined

  public constructor(props: ListProjectsQueryProps) {
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

export default ListProjectsQuery
