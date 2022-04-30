import * as React from 'react'

import { Meta } from '~/components/meta'
import { SnippetsScreen } from '~/screens/snippets'

function SnippetsPage() {
  return (
    <>
      <Meta title="Snippets" />
      <SnippetsScreen />
    </>
  )
}

export default SnippetsPage
