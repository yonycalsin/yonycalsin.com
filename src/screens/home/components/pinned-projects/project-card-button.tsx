import * as React from 'react'
import { RiArrowDownSLine } from 'react-icons/ri'
import { Box, HStack, Icon, Text, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'

import { getWorkItemColors, getWorkItemIcon } from '~/components/work-item/components'
import type { ProjectResponsePayload } from '~/typings/services/project/projects'

export interface ProjectCardButtonProps {
  isOpen: boolean
  onToggle: () => void
  project: ProjectResponsePayload
}

export function ProjectCardButton(props: ProjectCardButtonProps) {
  const { isOpen, onToggle, project } = props

  const icon = React.useMemo(() => {
    return getWorkItemIcon(project.type)
  }, [project.type])

  const colors = React.useMemo(() => {
    return getWorkItemColors(project.type)
  }, [project.type])

  const borderColor = useColorModeValue('gray.100', 'gray.700')

  return (
    <Box
      as="button"
      type="button"
      display="flex"
      alignItems="center"
      py="3"
      px="4"
      borderBottom={isOpen ? '1px' : 'none'}
      borderColor={borderColor}
      onClick={onToggle}
      title={project.name}
    >
      <HStack flex="1" alignItems="center">
        <Icon as={icon} fill={colors.fill} />
        <Text>{project.slug}</Text>
      </HStack>
      <div>
        <motion.div animate={{ rotate: isOpen ? -90 : 0 }}>
          <RiArrowDownSLine />
        </motion.div>
      </div>
    </Box>
  )
}
