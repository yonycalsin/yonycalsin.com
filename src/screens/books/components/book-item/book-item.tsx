import * as React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'

interface BookItemProps {
  name: string
  imageSrc: string
  author: string
  rating: number
}

export function BookItem(props: BookItemProps) {
  const { name, imageSrc, author, rating } = props

  return (
    <VStack alignItems="flex-start" spacing="2">
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
