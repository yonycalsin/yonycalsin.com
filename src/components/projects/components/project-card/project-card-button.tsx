import * as React from 'react'
import { RiArrowDownSLine } from 'react-icons/ri'
import { Box, HStack, Text, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'

import type { IProject } from '~/module-types/api-rest/projects'

export interface ProjectCardButtonProps {
  isOpen: boolean
  onToggle: () => void
  project: IProject
}

export function ProjectCardButton(props: ProjectCardButtonProps) {
  const { isOpen, onToggle, project } = props

  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Box
      as="button"
      type="button"
      display="flex"
      alignItems="center"
      py="4"
      px="5"
      borderBottom={isOpen ? '1px' : 'none'}
      borderColor={borderColor}
      onClick={onToggle}
      title={project.name}
    >
      <HStack flex="1" alignItems="center">
        <Text isTruncated fontWeight="bold">
          {project.slug}
        </Text>
        <span>⭐</span>
      </HStack>
      <div>
        <motion.div animate={{ rotate: isOpen ? -90 : 0 }}>
          <RiArrowDownSLine />
        </motion.div>
      </div>
    </Box>
  )
}
