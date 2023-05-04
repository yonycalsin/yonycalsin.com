'use client'

import * as React from 'react'
import { RuntsPlayground, useDefineLightPlaygroundThemes } from '@runts/react'
import vitesseDark from '@runts/react/themes/vitesse-dark.json'
import dayjs from 'dayjs'
import { decode } from 'next-base64'

import type { ExerciseScreenProps } from 'typings/screens'
import { useMDXComponent } from 'hooks'
import { Badge, Heading, MDXComponents } from 'components'
import { DATE_FORMATS } from 'utils/constants'

function ExerciseScreen(props: ExerciseScreenProps) {
  const { exercise } = props

  const solution = exercise.solutions[0]

  const Component = useMDXComponent(decodeURIComponent(decodeURIComponent(decode(exercise.body.code))))

  useDefineLightPlaygroundThemes([vitesseDark])

  return (
    <div className="container py-10 space-y-6">
      <div className="space-y-3">
        <Heading size="h1">{exercise.name}</Heading>
        <div className="flex flex-row items-center space-x-3">
          <p className="italic text-gray-600">
            Last updated at {dayjs(exercise.updatedAt).format(DATE_FORMATS.HUMAN_DATE)}
          </p>
          <Badge palette="primary">{exercise.difficulty}</Badge>
          <Badge palette="secondary">{exercise.status}</Badge>
        </div>
      </div>
      <div className="w-full relative">
        <div className="lg:-ml-14 lg:-mr-14 xl:-ml-40 xl:-mr-40">
          <RuntsPlayground
            files={{
              '/main.ts': solution.body.code,
              '/main.test.ts': exercise.test.code,
            }}
            activeFile="/main.ts"
            theme="vitesse-dark"
          />
        </div>
      </div>
      <Component components={MDXComponents} />
    </div>
  )
}

export default ExerciseScreen
