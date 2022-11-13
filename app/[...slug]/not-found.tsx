import NotFoundScreen from 'screens/not-found'
import { Meta } from 'components'

function NotFoundPage() {
  return (
    <>
      <Meta title="Page not found" notRobots />
      <NotFoundScreen />
    </>
  )
}

export default NotFoundPage
