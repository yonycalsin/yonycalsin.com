import HomeScreen from 'screens/home'
import { PageTransition } from 'components'

function HomePage() {
  return (
    <PageTransition>
      <HomeScreen />
    </PageTransition>
  )
}

export default HomePage
