import * as React from 'react'
import dayjs from 'dayjs'

import { Typography } from '~/components/typography/typography'
import type { IAchievement } from '~/module-types/api-rest/achievements'
import { dateFormats } from '~/utils/constants'

import { AchievementTypeIllustration } from './achievement-type-illustration'

export interface AchievementProps {
  achievement: IAchievement
}

export function Achievement(props: AchievementProps) {
  const { achievement } = props

  return (
    <div className="grid grid-cols-[50px_1fr] lg:grid-cols-[90px_1fr_150px] gap-6 items-center">
      <div>
        <AchievementTypeIllustration type={achievement.type} />
      </div>
      <div>
        <Typography variant="h5" fontWeight="medium">
          {achievement.title}
        </Typography>
        <Typography variant="h6" fontWeight="normal" className="text-gray-500">
          {achievement.shortDescription}
        </Typography>
        <Typography className="block lg:hidden italic" variant="h6" fontWeight="normal">
          - {dayjs(achievement.date).format(dateFormats.HUMAN_DATE)}
        </Typography>
      </div>
      <Typography className="hidden lg:block italic" variant="h6" fontWeight="light">
        -{dayjs(achievement.date).format(dateFormats.HUMAN_DATE)}
      </Typography>
    </div>
  )
}

export default Achievement
