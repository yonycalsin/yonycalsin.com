import { rest } from 'msw'

import { API_ENDPOINTS } from 'services/shared'
import {
  getAllAchievementsApi,
  getAllBooksApi,
  getAllPagesApi,
  getAllProjectsApi,
  getCategoriesApi,
  getCategoryApi,
  getFeaturedAchievementsApi,
  getFeaturedRecommendationsApi,
  getPageApi,
  getPinnedProjectsApi,
  getPostApi,
  getPostsApi,
  getReadingBooksApi,
} from './mocks'

export const mockServerHandlers = [
  // Achievements
  rest.get(API_ENDPOINTS.ALL_ACHIEVEMENTS, getAllAchievementsApi),
  rest.get(API_ENDPOINTS.FEATURED_ACHIEVEMENTS, getFeaturedAchievementsApi),

  // Posts
  rest.get(API_ENDPOINTS.POST(':slug'), getPostApi),
  rest.get(API_ENDPOINTS.POSTS, getPostsApi),

  // Categories
  rest.get(API_ENDPOINTS.CATEGORY(':slug'), getCategoryApi),
  rest.get(API_ENDPOINTS.CATEGORIES, getCategoriesApi),

  // Books
  rest.get(API_ENDPOINTS.ALL_BOOKS, getAllBooksApi),
  rest.get(API_ENDPOINTS.READING_BOOKS, getReadingBooksApi),

  // Pages
  rest.get(API_ENDPOINTS.PAGE(':slug'), getPageApi),
  rest.get(API_ENDPOINTS.ALL_PAGES, getAllPagesApi),

  // Projects
  rest.get(API_ENDPOINTS.ALL_PROJECTS, getAllProjectsApi),
  rest.get(API_ENDPOINTS.PINNED_PROJECTS, getPinnedProjectsApi),

  // Recommendations
  rest.get(API_ENDPOINTS.FEATURED_RECOMMENDATIONS, getFeaturedRecommendationsApi),
]
