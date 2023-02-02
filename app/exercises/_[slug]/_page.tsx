'use client'

import * as React from 'react'
import { notFound } from 'next/navigation'

import type { ExercisePageParams, ExercisePageProps } from 'typings/app'
import { getAllExercisesApi, getExerciseApi } from 'services'
import ExerciseScreen from 'screens/exercise'
import { PageTransition } from 'components'

export const dynamicParams = false

export async function generateStaticParams(): Promise<ExercisePageParams[]> {
  const exercisesResponse = await getAllExercisesApi()

  const exercises = exercisesResponse.data

  return exercises.map(exercise => ({
    slug: exercise.slug,
  }))
}

function ExercisePage(props: ExercisePageProps) {
  const { params } = props

  const exerciseSDlug = params.slug

  const exerciseResponse = React.use(getExerciseApi(exerciseSDlug))

  const exercise = exerciseResponse.data

  if (!exercise) {
    return notFound()
  }

  return (
    <PageTransition>
      <ExerciseScreen exercise={exercise} />
    </PageTransition>
  )
}

export default ExercisePage
