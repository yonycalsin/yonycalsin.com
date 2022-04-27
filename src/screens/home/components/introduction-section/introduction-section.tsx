import * as React from 'react'
import { BiArrowToRight } from 'react-icons/bi'
import { Button, Heading, Text, VStack } from '@chakra-ui/react'
import RouterLink from 'next/link'

export function IntroductionSection() {
  return (
    <VStack spacing="6" alignItems="flex-start" py="3">
      <Heading fontWeight="extrabold">Hola, soy Yony</Heading>
      <Text>
        Soy un desarrollador de software{' '}
        <Text
          as="span"
          textDecoration="underline"
          _hover={{
            backgroundColor: 'primary.600',
            textColor: 'white',
          }}
        >
          autodidacta
        </Text>
        . Este es mi sitio web personal, donde encontrarás todas las cosas que he aprendido y creado a lo largo de los
        años
      </Text>
      <RouterLink href="/me" passHref>
        <Button as="a" rightIcon={<BiArrowToRight />} colorScheme="primary" variant="outline">
          Más sobre mí
        </Button>
      </RouterLink>
    </VStack>
  )
}
