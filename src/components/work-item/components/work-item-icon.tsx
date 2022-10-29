import * as React from 'react'
import { Icon } from '@chakra-ui/react'
import { CgTemplate } from 'react-icons/cg'
import { FaHandsHelping, FaNpm } from 'react-icons/fa'
import { MdWorkOutline } from 'react-icons/md'

import { ProjectTypeResponsePayload } from 'typings/services'
import type { WorkItemIconProps } from 'typings/components'

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
        fill: 'fill-secondary-900',
        backgroundColor: 'bg-secondary-100',
      }
    }

    case ProjectTypeResponsePayload.PACKAGE: {
      return {
        fill: 'fill-error-900',
        backgroundColor: 'bg-error-100',
      }
    }

    case ProjectTypeResponsePayload.CONTRIBUTION: {
      return {
        fill: 'fill-success-900',
        backgroundColor: 'bg-success-100',
      }
    }

    case ProjectTypeResponsePayload.TEMPLATE: {
      return {
        fill: 'fill-warning-900',
        backgroundColor: 'bg-warning-100',
      }
    }

    default: {
      return {
        fill: 'fill-primary-900',
        backgroundColor: 'bg-primary-100',
      }
    }
  }
}

export function WorkItemIcon(props: WorkItemIconProps) {
  const { projectType } = props

  const icon = React.useMemo(() => {
    return getWorkItemIcon(projectType)
  }, [projectType])

  const colors = React.useMemo(() => {
    return getWorkItemColors(projectType)
  }, [projectType])

  return <Icon title={projectType} fill={colors.fill} w="full" h="full" as={icon} />
}
