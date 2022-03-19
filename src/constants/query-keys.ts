// TODO: pass (isFeatured) filter to query
export const QUERY_KEY_FEATURED_RECOMMENDATIONS = ['/recommendations']

export const QUERY_KEY_PINNED_PROJECTS = [
  '/projects',
  {
    isFeatured: true,
  },
]
