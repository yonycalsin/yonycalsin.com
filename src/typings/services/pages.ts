interface PageResponsePayload {
  title: string
  slug: string
  visibility: string
  body: {
    type: string
    code: string
  }
  createdAt: string
  updatedAt: string
}

export type { PageResponsePayload }
