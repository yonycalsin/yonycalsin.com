import '@runts/react/styles/runts-playground.css'

import { useDefineLightPlaygroundThemes } from '@runts/react'
import vitesseDark from '@runts/react/themes/vitesse-dark.json'

import ExerciseScreen from 'screens/exercise'
import { Meta } from 'components'

function ExercisePage() {
  useDefineLightPlaygroundThemes([vitesseDark])

  return (
    <>
      <Meta title="Exercise" notRobots />
      <ExerciseScreen />
    </>
  )
}

export default ExercisePage
