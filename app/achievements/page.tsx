import AchievementsScreen from 'screens/achievements'
import { PageTransition } from 'components'

export const metadata = {
  title: 'Achievements',
}

function AchievementsPage() {
  return (
    <PageTransition>
      <AchievementsScreen />
    </PageTransition>
  )
}

export default AchievementsPage
