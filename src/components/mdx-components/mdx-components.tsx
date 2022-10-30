'use client'

/* eslint-disable @typescript-eslint/no-explicit-any */
import 'react-medium-image-zoom/dist/styles.css'

import * as React from 'react'
import { isPlainObject } from 'lodash'
import Image, { ImageProps } from 'next/image'
import Zoom from 'react-medium-image-zoom'

import { Blockquote } from 'components/blockquote'
import { Divider } from 'components/divider'
import { HeadingLinked } from 'components/heading'
import { ListItem, UnorderedList } from 'components/list'
import { MdxAnchor } from './components'

function RoundedImage(props: ImageProps) {
  return <Image className="rounded-lg" {...props} alt={props.alt} />
}

function ZoomImage(props: any) {
  return (
    <Zoom>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img {...props} />
    </Zoom>
  )
}

const MDXComponents = {
  /**
   * Heading
   */
  h1: (props: any) => <HeadingLinked size="h1" className="my-6" {...props} />,
  h2: (props: any) => <HeadingLinked size="h2" className="my-6" {...props} />,
  h3: (props: any) => <HeadingLinked size="h3" className="my-6" {...props} />,
  h4: (props: any) => <HeadingLinked size="h4" className="my-6" {...props} />,
  h5: (props: any) => <HeadingLinked size="h5" className="my-6" {...props} />,
  h6: (props: any) => <HeadingLinked size="h6" className="my-6" {...props} />,

  /**
   * Other
   */
  hr: (props: any) => <Divider className="my-6" {...props} />,
  strong: (props: any) => <b className="font-semibold" {...props} />,
  kbd: (props: any) => <kbd {...props} />,
  /**
   * Link
   */
  a: MdxAnchor,

  /**
   * Typography
   */
  br: (props: any) => <br {...props} />,
  p: (props: any) => {
    // We dont want to wrap a image with p tag
    if (isPlainObject(props.children) && !!props.children?.props?.src) {
      return props.children
    }

    return <p className="my-5" {...props} />
  },
  ul: (props: any) => <UnorderedList className="my-6" {...props} />,
  ol: (props: any) => <UnorderedList date-type="ol" className="my-6" {...props} />,
  li: (props: any) => <ListItem {...props} />,
  blockquote: (props: any) => <Blockquote className="my-6" {...props} />,

  /**
   * Table
   */
  //   table: Table,
  //   th: TableHead,
  //   td: TableCell,

  /**
   * Image
   */
  Image: RoundedImage,
  img: ZoomImage,
}

export default MDXComponents
