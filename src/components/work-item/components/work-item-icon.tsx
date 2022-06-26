import * as React from 'react'
import { CgTemplate } from 'react-icons/cg'
import { FaHandsHelping, FaNpm } from 'react-icons/fa'
import { MdWorkOutline } from 'react-icons/md'
import { Icon } from '@chakra-ui/react'

import { IProjectType } from '~/module-types/api-rest/projects'

export interface WorkItemIconProps {
  projectType: IProjectType
}

function getWorkItemIcon(projectType: IProjectType) {
  switch (projectType) {
    case IProjectType.PROJECT: {
      return MdWorkOutline
    }

    case IProjectType.PACKAGE: {
      return FaNpm
    }

    case IProjectType.CONTRIBUTION: {
      return FaHandsHelping
    }

    case IProjectType.TEMPLATE: {
      return CgTemplate
    }

    default: {
      return undefined
    }
  }
}

export function getWorkItemColors(projectType: IProjectType) {
  switch (projectType) {
    case IProjectType.PROJECT: {
      return {
        fill: 'secondary.900',
        backgroundColor: 'secondary.100',
      }
    }

    case IProjectType.PACKAGE: {
      return {
        fill: 'error.900',
        backgroundColor: 'error.100',
      }
    }

    case IProjectType.CONTRIBUTION: {
      return {
        fill: 'success.900',
        backgroundColor: 'success.100',
      }
    }

    case IProjectType.TEMPLATE: {
      return {
        fill: 'purple.900',
        backgroundColor: 'purple.100',
      }
    }

    default: {
      return {
        fill: 'primary.900',
        backgroundColor: 'primary.100',
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
