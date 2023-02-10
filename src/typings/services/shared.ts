interface ListQueryParamsRequest<F> {
  filters: F
}

interface ServerErrorResponse {
  code: string
  message: string
}

interface ServerListPaginationResponse {
  pages: number
  page: number
  total: number
  hasNextPage: boolean
  hasPrevPage: boolean
}

interface ServerListResponse<T> {
  data: {
    results: T[]
    meta: ServerListPaginationResponse
  }
  error: ServerErrorResponse | null
}

interface ServerResponse<T> {
  data: T
  error: ServerErrorResponse | null
}

export type { ListQueryParamsRequest, ServerErrorResponse, ServerListResponse, ServerResponse }
