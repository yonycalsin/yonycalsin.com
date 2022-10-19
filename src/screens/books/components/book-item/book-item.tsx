import * as React from 'react'
import { Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import { AiFillStar } from 'react-icons/ai'

import type { BookItemProps } from 'typings/screens'

function BookItem(props: BookItemProps) {
  const { name, imageSrc, author, rating } = props

  return (
    <VStack alignItems="flex-start" spacing="2" role="listitem">
      <div>
        <Image src={imageSrc} alt={name} w="full" borderRadius="md" />
      </div>
      <Heading size="sm">{name}</Heading>
      <Text fontSize="sm">{author}</Text>
      <HStack alignItems="center" fontSize="sm">
        <AiFillStar />
        <Text>Rating {rating}</Text>
      </HStack>
    </VStack>
  )
}

export default BookItem
