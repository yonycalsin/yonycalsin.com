import * as React from 'react'

import type { AchievementsProps } from 'typings/components'
import { Achievement } from './components'

function Achievements(props: AchievementsProps) {
  const { achievements } = props

  return (
    <div className="space-y-3" role="list" aria-label="List of achievements">
      {achievements.map(achievement => (
        <Achievement key={achievement.id} achievement={achievement} />
      ))}
    </div>
  )
}

export default Achievements
