import * as React from 'react'
import { Badge, Box, Container, Heading, HStack, StackDivider, Text, VStack } from '@chakra-ui/react'
import { RuntsPlayground } from '@runts/react'
import { useDefineLightPlaygroundThemes } from '@runts/react'
import vitesseDark from '@runts/react/themes/vitesse-dark.json'
import dayjs from 'dayjs'
import nextBase64 from 'next-base64'

import type { ExerciseScreenProps } from 'typings/screens'
import { useMDXComponent } from 'hooks'
import { Navbar } from 'containers'
import { MDXComponents } from 'components'
import { DATE_FORMATS } from 'utils/constants'

function ExerciseScreen(props: ExerciseScreenProps) {
  const { exercise } = props

  const solution = exercise.solutions[0]

  const Component = useMDXComponent(decodeURIComponent(decodeURIComponent(nextBase64.decode(exercise.body.code))))

  useDefineLightPlaygroundThemes([vitesseDark])

  return (
    <>
      <Navbar />
      <Container maxW="6xl" my="6">
        <VStack spacing="6" alignItems="flex-start" w="full">
          <VStack alignItems="flex-start">
            <Heading>{exercise.name}</Heading>
            <HStack divider={<StackDivider />}>
              <Text fontStyle="italic" textColor="gray">
                Last updated at {dayjs(exercise.updatedAt).format(DATE_FORMATS.HUMAN_DATE)}
              </Text>
              <Badge colorScheme="primary">{exercise.difficulty}</Badge>
              <Badge colorScheme="secondary">{exercise.status}</Badge>
            </HStack>
          </VStack>
          <Box w="full">
            <RuntsPlayground
              files={{
                '/main.ts': solution.body.code,
                '/main.test.ts': exercise.test.code,
              }}
              activeFile="/main.ts"
              theme="vitesse-dark"
            />
          </Box>
          <Component components={MDXComponents} />
        </VStack>
      </Container>
    </>
  )
}

export default ExerciseScreen
