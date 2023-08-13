import * as React from 'react'
import Link from 'next/link'

import type { ProjectCardProps } from 'typings/screens'
import { Icon } from 'components'
import { Card, CardDescription, CardHeader, CardTitle } from 'components/ui/card'
import { getWorkItemColors, getWorkItemIcon } from 'components/work-item/components'
import { cn } from 'utils/ui'

function ProjectCard(props: ProjectCardProps) {
  const { project } = props

  const ProjectIcon = React.useMemo(() => {
    return getWorkItemIcon(project.type)
  }, [project.type])

  const colors = React.useMemo(() => {
    return getWorkItemColors(project.type)
  }, [project.type])

  return (
    <Link href={`/projects#${project.slug}`}>
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="flex items-center text-base">
            {ProjectIcon ? (
              <Icon className={cn(colors.fill, 'mr-2')}>
                <ProjectIcon />
              </Icon>
            ) : null}
            <span>{project.name}</span>
          </CardTitle>
          <CardDescription>{project.shortDescription}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  )
}

export default ProjectCard
