import type { ExerciseResponsePayload } from 'typings/services'

interface ExercisePageProps {
  exercise: ExerciseResponsePayload
}

/**
 * @see https://stackoverflow.com/a/73665562/19694758
 */
type ExercisePageQueryParams = {
  slug: string
}

export type { ExercisePageProps, ExercisePageQueryParams }
