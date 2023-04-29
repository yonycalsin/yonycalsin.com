import type { AchievementTypeIllustrationProps } from 'typings/components'
import {
  AwardAchievementIllustration,
  EducationAchievementIllustration,
  SecurityAchievementIllustration,
  WorkAchievementIllustration,
} from 'components/illustrations'
import { UnsupportedValueError } from 'utils/exceptions'

function AchievementTypeIllustration(props: AchievementTypeIllustrationProps) {
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
      // eslint-disable-next-line no-console
      console.error(new UnsupportedValueError(type))

      return null
    }
  }
}

export default AchievementTypeIllustration
