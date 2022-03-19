import type Query from '~/server/contexts/shared/Modules/Shared/Application/Query/Query'

interface ListProjectsQueryProps {
  page?: number
  limit?: number
  isPinned?: boolean
}

class ListProjectsQuery implements Query {
  private readonly page: number | undefined

  private readonly limit: number | undefined

  private readonly isPinned: boolean | undefined

  public constructor(props: ListProjectsQueryProps) {
    this.page = props.page

    this.limit = props.limit

    this.isPinned = props.isPinned
  }

  public getPage(): number | undefined {
    return this.page
  }

  public getLimit(): number | undefined {
    return this.limit
  }

  public getIsPinned(): boolean | undefined {
    return this.isPinned
  }
}

export default ListProjectsQuery
