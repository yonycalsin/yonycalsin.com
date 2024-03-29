import * as React from 'react'
import { CgTemplate } from 'react-icons/cg'
import { FaHandsHelping, FaNpm } from 'react-icons/fa'
import { MdWorkOutline } from 'react-icons/md'

import { ProjectTypeResponsePayload } from 'typings/services'
import type { WorkItemIconProps } from 'typings/components'
import { Icon } from 'components/icon'

export function getWorkItemIcon(projectType: WorkItemIconProps['projectType']) {
  switch (projectType) {
    case ProjectTypeResponsePayload.PROJECT: {
      return MdWorkOutline
    }

    case ProjectTypeResponsePayload.PACKAGE: {
      return FaNpm
    }

    case ProjectTypeResponsePayload.CONTRIBUTION: {
      return FaHandsHelping
    }

    case ProjectTypeResponsePayload.TEMPLATE: {
      return CgTemplate
    }

    default: {
      return undefined
    }
  }
}

export function getWorkItemColors(projectType: WorkItemIconProps['projectType']) {
  switch (projectType) {
    case ProjectTypeResponsePayload.PROJECT: {
      return {
        fill: 'fill-cyan-900',
        backgroundColor: 'bg-cyan-100',
      }
    }

    case ProjectTypeResponsePayload.PACKAGE: {
      return {
        fill: 'fill-red-900',
        backgroundColor: 'bg-red-100',
      }
    }

    case ProjectTypeResponsePayload.CONTRIBUTION: {
      return {
        fill: 'fill-green-900',
        backgroundColor: 'bg-green-100',
      }
    }

    case ProjectTypeResponsePayload.TEMPLATE: {
      return {
        fill: 'fill-orange-900',
        backgroundColor: 'bg-orange-100',
      }
    }

    default: {
      return {
        fill: 'fill-blue-900',
        backgroundColor: 'bg-blue-100',
      }
    }
  }
}

export function WorkItemIcon(props: WorkItemIconProps) {
  const { projectType } = props

  const Element = React.useMemo(() => {
    return getWorkItemIcon(projectType)
  }, [projectType])

  const colors = React.useMemo(() => {
    return getWorkItemColors(projectType)
  }, [projectType])

  if (!Element) {
    return null
  }

  return (
    <Icon className={colors.fill}>
      <Element />
    </Icon>
  )
}
