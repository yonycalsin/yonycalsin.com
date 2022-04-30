import * as React from 'react'
import { Container } from '@chakra-ui/react'

import { MainLayout } from '~/layouts'

export function SnippetsScreen() {
  return (
    <MainLayout>
      <Container maxW="container.md" as="main" py="10">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis soluta quas recusandae? Recusandae, beatae
        perspiciatis dignissimos dolorem aperiam minima deleniti hic voluptas. Corrupti asperiores odio quibusdam quasi!
        Officia, sunt possimus!
      </Container>
    </MainLayout>
  )
}
