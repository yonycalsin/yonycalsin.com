import type Query from '~/server/contexts/shared/Modules/Shared/Application/Query/Query'

interface ListBooksQueryProps {
  page?: number
  limit?: number
}

class ListBooksQuery implements Query {
  private readonly page: number | undefined

  private readonly limit: number | undefined

  public constructor(props: ListBooksQueryProps) {
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

export default ListBooksQuery
