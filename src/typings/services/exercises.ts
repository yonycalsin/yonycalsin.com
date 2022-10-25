interface ExerciseResponsePayload {
  id: string
  name: string
  slug: string
  status: 'draft' | 'todo' | 'solved'
  difficulty: 'easy' | 'medium' | 'hard'
  test: {
    type: 'string'
    code: string
  }
  solutions: {
    lang: 'typescript'
    body: {
      type: 'string'
      code: string
    }
    solvedAt: string
  }[]
  body: {
    type: 'mdx'
    code: string
  }
  createdAt: string
  updatedAt: string
}

export type { ExerciseResponsePayload }
