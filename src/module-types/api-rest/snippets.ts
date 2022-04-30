export interface ISnippet {
  title: string
  description: string
  slug: string
  createdAt: string
  updatedAt: string
}

export interface ISnippetQueryWithMeta {
  data: ISnippet[]
  meta: PaginationMeta
}

export interface ISnippetQueryWithData {
  data: ISnippet
}
