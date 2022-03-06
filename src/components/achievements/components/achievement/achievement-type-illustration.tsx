import {
  AwardAchievementIllustration,
  EducationAchievementIllustration,
  SecurityAchievementIllustration,
  WorkAchievementIllustration,
} from '~/assets/illustrations'
import { UnsupportedValueError } from '~/errors'

export interface AchievementTypeIllustrationProps {
  type: string
  className?: string
}

export function AchievementTypeIllustration(props: AchievementTypeIllustrationProps) {
  const { type, className } = props

  switch (type) {
    case 'Award': {
      return <AwardAchievementIllustration className={className} />
    }

    case 'Work': {
      return <WorkAchievementIllustration className={className} />
    }

    case 'Education': {
      return <EducationAchievementIllustration className={className} />
    }

    case 'Security': {
      return <SecurityAchievementIllustration className={className} />
    }

    default: {
      console.error(new UnsupportedValueError(type))

      return null
    }
  }
}
