export interface SnippetResponsePayload {
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
