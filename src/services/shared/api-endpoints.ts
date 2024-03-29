import { ENV } from 'utils/constants'

const { REST_API_URL } = ENV

const API_ENDPOINTS = {
  // Achievements
  ALL_ACHIEVEMENTS: `${REST_API_URL}/achievements`,
  FEATURED_ACHIEVEMENTS: `${REST_API_URL}/achievements?isFeatured=true`,

  // Posts
  POST: (postSlug: string) => `${REST_API_URL}/blog/posts/${postSlug}`,
  POSTS: `${REST_API_URL}/blog/posts`,

  // Categories
  CATEGORY: (categorySlug: string) => `${REST_API_URL}/blog/categories/${categorySlug}`,
  CATEGORIES: `${REST_API_URL}/blog/categories`,

  // Books
  ALL_BOOKS: `${REST_API_URL}/books`,
  READING_BOOKS: `${REST_API_URL}/books?status=Reading`,

  // Pages
  PAGE: (pageSlug: string) => `${REST_API_URL}/pages/${pageSlug}`,
  ALL_PAGES: `${REST_API_URL}/pages`,

  // Projects
  ALL_PROJECTS: `${REST_API_URL}/projects`,
  PINNED_PROJECTS: `${REST_API_URL}/projects?isPinned=true`,

  // Recommendations
  /**
   * @todo use featured recommendations endpoint
   * @author yonycalsin
   */
  FEATURED_RECOMMENDATIONS: `${REST_API_URL}/recommendations`,

  // Exercises
  EXERCISE: (exerciseSlug: string) => `${REST_API_URL}/exercises/${exerciseSlug}`,
  ALL_EXERCISES: `${REST_API_URL}/exercises`,
}

export default API_ENDPOINTS
