import * as React from 'react'
import { BsLink } from 'react-icons/bs'
import { FaNpm } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'
import { RiMapPinTimeLine } from 'react-icons/ri'
import { Badge, Box, Heading, Icon, Link, List, ListIcon, ListItem, Text, VStack } from '@chakra-ui/react'
import dayjs from 'dayjs'

import { dateFormats } from '~/utils/constants'
import { getRandomBadgeColors } from '~/utils/get-random-colors'
import normalizeDisplayUrl from '~/utils/normalize-display-url'

export interface WorkItemProps {
  title: string
  description: string
  webHref?: string | null
  repositoryHref?: string | null
  packageHref?: string | null
  tags?: string[]
  startedAt: string
}

export function WorkItem(props: WorkItemProps) {
  const { tags = [], title, description, webHref, startedAt = new Date(), repositoryHref, packageHref } = props

  return (
    <Box as="li">
      <Box
        boxShadow="lg"
        position="absolute"
        h={{
          base: '9',
          lg: '12',
        }}
        w={{
          base: '9',
          lg: '12',
        }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="full"
        backgroundColor="primary.100"
        p="3"
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
          <Text fontStyle="italic">{dayjs(startedAt).format(dateFormats.HUMAN_DATE)}</Text>
        </Box>
        <Icon fill="primary.900" w="full" h="full" as={RiMapPinTimeLine} />
      </Box>
      <VStack
        spacing="6"
        ml={{
          base: '14',
          lg: '20',
        }}
        alignItems="flex-start"
      >
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
        <Box>
          <List
            spacing={{
              base: 0,
              lg: 1,
            }}
            fontSize="md"
          >
            {webHref && (
              <ListItem
                textColor="primary.500"
                display="block"
                as={Link}
                href={webHref}
                target="_blank"
                rel="noreferrer"
              >
                <ListIcon as={BsLink} color="secondary.900" />
                Visit {normalizeDisplayUrl(webHref)}
              </ListItem>
            )}
            {repositoryHref && (
              <ListItem
                textColor="primary.500"
                display="block"
                as={Link}
                href={repositoryHref}
                target="_blank"
                rel="noreferrer"
              >
                <ListIcon as={FiGithub} color="gray.500" />
                View source code
              </ListItem>
            )}
            {packageHref && (
              <ListItem
                textColor="primary.500"
                display="block"
                as={Link}
                href={packageHref}
                target="_blank"
                rel="noreferrer"
              >
                <ListIcon as={FaNpm} color="error.500" />
                View package
              </ListItem>
            )}
          </List>
        </Box>
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
