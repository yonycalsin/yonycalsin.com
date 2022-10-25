import { rest } from 'msw'

import { API_ENDPOINTS } from 'services/shared'
import { sanitizeEndpoint } from './mock-server-utils'
import {
  getAllAchievementsApi,
  getAllBooksApi,
  getAllExercisesApi,
  getAllPagesApi,
  getAllProjectsApi,
  getCategoriesApi,
  getCategoryApi,
  getExerciseApi,
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
  rest.get(sanitizeEndpoint(API_ENDPOINTS.ALL_ACHIEVEMENTS), getAllAchievementsApi),
  rest.get(sanitizeEndpoint(API_ENDPOINTS.FEATURED_ACHIEVEMENTS), getFeaturedAchievementsApi),

  // Posts
  rest.get(sanitizeEndpoint(API_ENDPOINTS.POST(':slug')), getPostApi),
  rest.get(sanitizeEndpoint(API_ENDPOINTS.POSTS), getPostsApi),

  // Categories
  rest.get(sanitizeEndpoint(API_ENDPOINTS.CATEGORY(':slug')), getCategoryApi),
  rest.get(sanitizeEndpoint(API_ENDPOINTS.CATEGORIES), getCategoriesApi),

  // Books
  rest.get(sanitizeEndpoint(API_ENDPOINTS.ALL_BOOKS), getAllBooksApi),
  rest.get(sanitizeEndpoint(API_ENDPOINTS.READING_BOOKS), getReadingBooksApi),

  // Pages
  rest.get(sanitizeEndpoint(API_ENDPOINTS.PAGE(':slug')), getPageApi),
  rest.get(sanitizeEndpoint(API_ENDPOINTS.ALL_PAGES), getAllPagesApi),

  // Projects
  rest.get(sanitizeEndpoint(API_ENDPOINTS.ALL_PROJECTS), getAllProjectsApi),
  rest.get(sanitizeEndpoint(API_ENDPOINTS.PINNED_PROJECTS), getPinnedProjectsApi),

  // Recommendations
  rest.get(sanitizeEndpoint(API_ENDPOINTS.FEATURED_RECOMMENDATIONS), getFeaturedRecommendationsApi),

  // Exercises
  rest.get(sanitizeEndpoint(API_ENDPOINTS.EXERCISE(':slug')), getExerciseApi),
  rest.get(sanitizeEndpoint(API_ENDPOINTS.ALL_EXERCISES), getAllExercisesApi),
]
