import * as React from 'react'
import dayjs from 'dayjs'

import type { AchievementProps } from 'typings/components'
import { DATE_FORMATS } from 'utils/constants'
import AchievementTypeIllustration from './achievement-type-illustration'

function Achievement(props: AchievementProps) {
  const { achievement } = props

  return (
    <div className="grid items-center grid-cols-1 lg:grid-cols-[100px_1fr_100px] gap-6" role="listitem">
      <div className="hidden lg:block">
        <AchievementTypeIllustration type={achievement.type} />
      </div>
      <div className="space-y-1">
        <h4 className="font-bold">{achievement.title}</h4>
        <p>{achievement.shortDescription}</p>
        <p className="block lg:hidden italic">- {dayjs(achievement.date).format(DATE_FORMATS.HUMAN_DATE)}</p>
      </div>
      <span className="italic text-sm hidden lg:block whitespace-nowrap">
        -{dayjs(achievement.date).format(DATE_FORMATS.HUMAN_DATE)}
      </span>
    </div>
  )
}

export default Achievement
