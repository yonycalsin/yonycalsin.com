export interface ServerErrorResponse {
  code: string
  message: string
}

export interface ServerListPaginationResponse {
  pages: number
  page: number
  total: number
  hasNextPage: boolean
  hasPrevPage: boolean
}

export interface ServerListResponse<T> {
  data: T[]
  meta: ServerListPaginationResponse
  error: ServerErrorResponse | null
}

export interface ServerResponse<T> {
  data: T
  error: ServerErrorResponse | null
}
