import * as React from 'react'
import { Button, Text, VStack } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import { MdLaunch } from 'react-icons/md'

import type { ProjectCardContentProps } from 'typings/screens'
import { MotionBox } from 'components'

function ProjectCardContent(props: ProjectCardContentProps) {
  const { isOpen, project } = props

  return (
    <AnimatePresence>
      {isOpen && (
        <MotionBox initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} display="flex" h="full">
          <VStack spacing="3" py="4" px="5" alignItems="flex-start" w="full">
            <Text>{project.shortDescription}</Text>
            <Button
              as="a"
              href={(project.repositoryUrl ?? project.packageUrl ?? project.websiteUrl) as string}
              target="_blank"
              rel="noreferrer"
              size="sm"
              colorScheme="primary"
              rightIcon={<MdLaunch />}
            >
              See project
            </Button>
          </VStack>
        </MotionBox>
      )}
    </AnimatePresence>
  )
}

export default ProjectCardContent
