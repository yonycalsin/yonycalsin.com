import * as React from 'react'
import Link from 'next/link'

import type { ProjectCardProps } from 'typings/screens'
import { Heading } from 'components/heading'
import { Icon } from 'components/icon'
import { getWorkItemColors, getWorkItemIcon } from 'components/work-item/components'

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
      <div
        className="bg-white shadow-card px-4 py-2 rounded-lg border-transparent border-2 hover:border-primary-600 cursor-pointer h-full"
        role="listitem"
      >
        <div className="space-y-3">
          <div className="flex flex-row items-center space-x-3">
            {ProjectIcon && (
              <Icon className={colors.fill}>
                <ProjectIcon />
              </Icon>
            )}
            <Heading size="h5" className="line-clamp-1">
              {project.name}
            </Heading>
          </div>
          <p className="text-sm italic line-clamp-2">{project.shortDescription}</p>
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard
