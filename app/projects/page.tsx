import * as React from 'react'

import ProjectsScreen from 'screens/projects'
import { PageTransition } from 'components'

export const metadata = {
  robots: 'index, follow',
  title: 'Projects',
}

function ProjectsPage() {
  return (
    <PageTransition>
      <ProjectsScreen />
    </PageTransition>
  )
}

export default ProjectsPage
