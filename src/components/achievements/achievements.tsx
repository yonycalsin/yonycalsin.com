import clsx from 'clsx'

import type { IAchievement } from '~/module-types/api-rest/achievements'

import { Achievement } from './components/achievement'

export interface AchievementsProps {
  achievements: IAchievement[]
  className?: string
}

export function Achievements(props: AchievementsProps) {
  const { achievements, className } = props

  return (
    <div className={clsx('space-y-3', className)}>
      {achievements.map(achievement => (
        <Achievement key={achievement.id} achievement={achievement} />
      ))}
    </div>
  )
}

export default Achievements
