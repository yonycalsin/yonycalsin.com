export interface ISnippet {
  title: string
  description: string
  slug: string
  body: {
    mdxCode: string
  }
  readingStats: {
    minutes: number
    time: number
    words: number
  }
  tags: string[]
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
