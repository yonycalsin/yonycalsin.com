import '@runts/react/styles/runts-playground.css'

import type { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult, PreviewData } from 'next'
import { QueryClient } from '@tanstack/react-query'

import type { ExercisePageProps, ExercisePageQueryParams } from 'typings/pages'
import type { ExerciseResponsePayload, ServerListResponse } from 'typings/services'
import { getAllExercisesApi, getExerciseApi } from 'services'
import { API_ENDPOINTS } from 'services/shared'
import ExerciseScreen from 'screens/exercise'
import { Meta } from 'components'
import { ENV, NUMERICS, TIMINGS } from 'utils/constants'

function ExercisePage(props: ExercisePageProps) {
  const { exercise } = props

  return (
    <>
      <Meta title="Exercise" notRobots={true} />
      <ExerciseScreen exercise={exercise} />
    </>
  )
}

async function getStaticPaths(): Promise<GetStaticPathsResult<ExercisePageQueryParams>> {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: NUMERICS.RETRY_QUERY,
      },
    },
  })

  if (!ENV.FF_EXERCISES) {
    return {
      fallback: false,
      paths: [],
    }
  }

  const exercisesResponse = await queryClient.fetchQuery<ServerListResponse<ExerciseResponsePayload>>(
    [API_ENDPOINTS.ALL_EXERCISES],
    () => getAllExercisesApi(),
    { staleTime: Infinity },
  )

  return {
    fallback: false,
    paths: exercisesResponse.data.map(exercise => ({
      params: {
        slug: exercise.slug,
      },
    })),
  }
}

async function getStaticProps(
  context: GetStaticPropsContext<ExercisePageQueryParams, PreviewData>,
): Promise<GetStaticPropsResult<ExercisePageProps>> {
  const { params } = context

  if (!params?.slug) {
    return {
      notFound: true,
    }
  }

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: NUMERICS.RETRY_QUERY,
      },
    },
  })

  const exerciseSlug = params.slug

  const exerciseResponse = await queryClient.fetchQuery(
    [API_ENDPOINTS.EXERCISE(exerciseSlug)],
    () => getExerciseApi(exerciseSlug),
    { staleTime: Infinity },
  )

  if (!exerciseResponse.data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      exercise: exerciseResponse.data,
    },
    revalidate: TIMINGS.REVALIDATE_STATIC_PAGES_TIME,
  }
}

export { getStaticPaths, getStaticProps }

export default ExercisePage
