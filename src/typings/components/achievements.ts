import type { AchievementResponsePayload } from 'typings/services'

interface AchievementsProps {
  achievements: AchievementResponsePayload[]
}

interface AchievementProps {
  achievement: AchievementsProps['achievements'][number]
}

interface AchievementTypeIllustrationProps {
  type: AchievementProps['achievement']['type']
  className?: string
}

export type { AchievementProps, AchievementsProps, AchievementTypeIllustrationProps }
