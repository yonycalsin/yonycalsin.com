import * as React from 'react'

import { Meta } from '~/components/meta'
import { MeScreen } from '~/screens/me'

export default function Home() {
  return (
    <>
      <Meta title="Sobre Mi" />
      <MeScreen />
    </>
  )
}
