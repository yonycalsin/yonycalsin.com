import * as React from 'react'
import { Avatar, Badge, Box, Heading, HStack, Link, Text, VStack } from '@chakra-ui/react'
import dayjs from 'dayjs'

import { Clock } from '~/icons/clock'
import { dateFormats } from '~/utils/constants'
import { getRandomBadgeColors } from '~/utils/get-random-colors'

export interface WorkItemProps {
  title: string
  description: string
  webHref?: string
  repositoryHref?: string
  packageHref?: string
  tags?: string[]
  startedAt: string
}

export function WorkItem(props: WorkItemProps) {
  const { tags = [], title, description, webHref, startedAt = new Date(), repositoryHref, packageHref } = props

  return (
    <Box as="li">
      <Box
        backgroundColor="gray.500"
        boxShadow="md"
        position="absolute"
        h="12"
        w="12"
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="full"
      >
        <Box
          position="absolute"
          right="20"
          whiteSpace="nowrap"
          display={{
            base: 'none',
            lg: 'block',
          }}
        >
          <Text>{dayjs(startedAt).format(dateFormats.HUMAN_DATE)}</Text>
        </Box>
        <Clock className="w-full h-full" />
      </Box>
      <VStack spacing="6" ml="20" alignItems="flex-start">
        <Heading
          as={Link}
          size="md"
          href={webHref ?? repositoryHref ?? packageHref ?? '#'}
          target="__blank"
          display="block"
        >
          {title}
        </Heading>
        <Text>{description}</Text>
        <HStack spacing="4">
          {webHref && (
            <a href={webHref} target="_blank" rel="noreferrer">
              <Avatar size="sm" src="https://cdn-icons-png.flaticon.com/512/2301/2301129.png" />
            </a>
          )}
          {repositoryHref && (
            <a href={repositoryHref} target="_blank" rel="noreferrer">
              <Avatar size="sm" src="https://cdn.svgporn.com/logos/github-icon.svg" />
            </a>
          )}
          {packageHref && (
            <a href={packageHref} target="_blank" rel="noreferrer">
              <Avatar size="sm" src="https://cdn-icons-png.flaticon.com/512/726/726546.png" />
            </a>
          )}
        </HStack>
        <Box flexWrap="wrap" display="flex" gap="2">
          {tags.map(item => (
            <Badge key={item} variant="outline" colorScheme={getRandomBadgeColors()}>
              {item}
            </Badge>
          ))}
        </Box>
      </VStack>
    </Box>
  )
}
