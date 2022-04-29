import * as React from 'react'
import { Container } from '@chakra-ui/react'

import { MainLayout } from '~/layouts'

export function NotFoundScreen() {
  return (
    <MainLayout>
      <Container maxW="container.md" as="main" py="10">
        <div className="my-5">
          <div className="my-20">
            <h1 className="text-center my-5">Page Not Found</h1>
          </div>
        </div>
      </Container>
    </MainLayout>
  )
}
