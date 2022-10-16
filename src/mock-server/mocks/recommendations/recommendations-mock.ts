import type { RecommendationResponsePayload, ServerListResponse } from 'typings/services'

const featuredRecommendationsSuccess: ServerListResponse<RecommendationResponsePayload> = {
  error: null,
  data: [
    {
      id: 'recommendation-1',
      type: 'received',
      text: 'Yony is an amazing person at work',
      author: {
        name: 'Elon Musk',
        jobTitle: 'Software Engineer',
        avatar: null,
        linkedin: 'https://linkedin.com/in/mock-username',
      },
      createdAt: '2022-10-16T00:27:03.571Z',
    },
  ],
  meta: {
    hasPrevPage: false,
    hasNextPage: false,
    page: 1,
    pages: 1,
    total: 1,
  },
}

export { featuredRecommendationsSuccess }
