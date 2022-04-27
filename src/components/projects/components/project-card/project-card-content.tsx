import * as React from 'react'
import { MdLaunch } from 'react-icons/md'
import { Button, Text, VStack } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'

import { MotionBox } from '~/components/motion'
import type { IProject } from '~/module-types/api-rest/projects'

export interface ProjectCardContentProps {
  isOpen: boolean
  project: IProject
}

export function ProjectCardContent(props: ProjectCardContentProps) {
  const { isOpen, project } = props

  return (
    <AnimatePresence>
      {isOpen && (
        <MotionBox initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} display="flex" h="full">
          <VStack py="4" px="5" alignItems="flex-start" w="full">
            <Text>{project.shortDescription}</Text>
            <Button size="sm" colorScheme="primary" rightIcon={<MdLaunch />}>
              Ver Proyecto
            </Button>
          </VStack>
        </MotionBox>
      )}
    </AnimatePresence>
  )
}
