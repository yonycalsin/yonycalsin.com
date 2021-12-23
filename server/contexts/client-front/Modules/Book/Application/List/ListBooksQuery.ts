import type Query from '~/server/contexts/shared/Modules/Shared/Application/Query/Query'

interface ListBooksQueryProps {
  page?: number
  limit?: number
  status?: string
}

class ListBooksQuery implements Query {
  private readonly page: number | undefined

  private readonly limit: number | undefined

  private readonly status: string | undefined

  public constructor(props: ListBooksQueryProps) {
    this.page = props.page

    this.limit = props.limit

    this.status = props.status
  }

  public getPage(): number | undefined {
    return this.page
  }

  public getLimit(): number | undefined {
    return this.limit
  }

  public getStatus(): string | undefined {
    return this.status
  }
}

export default ListBooksQuery
