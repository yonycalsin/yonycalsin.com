import env from '~/utils/env'

export const projectApiEndpoints = {
  ALL_PROJECTS: `${env.REST_API_URL}/projects`,
  PINNED_PROJECTS: `${env.REST_API_URL}/projects?isPinned=true`,
}
