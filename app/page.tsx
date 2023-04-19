import HomeScreen from 'screens/home'
import { PageTransition } from 'components'

export const metadata = {
  robots: 'index, follow',
}

function HomePage() {
  return (
    <PageTransition>
      <HomeScreen />
    </PageTransition>
  )
}

export default HomePage
