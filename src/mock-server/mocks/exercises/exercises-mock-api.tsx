import type { MockContext, MockRequest, MockResponse } from 'typings/mock-server'
import type { ExerciseResponsePayload, ServerResponse } from 'typings/services'
import { allExercisesSuccess } from './exercises-mock'

function getAllExercisesApi(request: MockRequest, response: MockResponse, context: MockContext) {
  const payload = allExercisesSuccess

  return response(context.status(200), context.json(payload))
}

function getExerciseApi(request: MockRequest, response: MockResponse, context: MockContext) {
  const { slug } = request.params as { slug: string }

  const exercise = allExercisesSuccess.data.results.find(exercise => exercise.slug === slug)

  if (!exercise) {
    return response(context.status(404))
  }

  const payload: ServerResponse<ExerciseResponsePayload> = {
    error: null,
    data: exercise,
  }

  return response(context.status(200), context.json(payload))
}

export { getAllExercisesApi, getExerciseApi }
