import type { ExerciseResponsePayload, ServerListResponse, ServerResponse } from 'typings/services'
import { TIMINGS } from 'utils/constants'
import { API_ENDPOINTS, DEFAULT_HEADERS, formatResponse } from './shared'

async function getAllExercisesApi() {
  const response = await fetch(API_ENDPOINTS.ALL_EXERCISES, {
    method: 'GET',
    headers: DEFAULT_HEADERS,
    next: {
      revalidate: TIMINGS.REVALIDATE_STATIC_PAGES_TIME,
    },
  })

  const payload = await formatResponse<ServerListResponse<ExerciseResponsePayload>>(response)

  return payload
}

async function getExerciseApi(exerciseSlug: string) {
  const response = await fetch(API_ENDPOINTS.EXERCISE(exerciseSlug), {
    method: 'GET',
    headers: DEFAULT_HEADERS,
    next: {
      revalidate: TIMINGS.REVALIDATE_STATIC_PAGES_TIME,
    },
  })

  const payload = await formatResponse<ServerResponse<ExerciseResponsePayload>>(response)

  return payload
}

export { getAllExercisesApi, getExerciseApi }
