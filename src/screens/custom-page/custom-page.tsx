'use client'

import { decode } from 'next-base64'

import type { CustomPageScreenProps } from 'typings/screens'
import useMDXComponent from 'hooks/use-mdx-component'
import { MDXComponents } from 'components'

function CustomPageScreen(props: CustomPageScreenProps) {
  const { customPage } = props

  const BodyComponent = useMDXComponent(decodeURIComponent(decodeURIComponent(decode(customPage.body.code))))

  return (
    <div className="container pb-10">
      <BodyComponent components={MDXComponents} />
    </div>
  )
}

export default CustomPageScreen
