/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'
import Zoom from 'react-medium-image-zoom'
import * as Chakra from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import Image, { ImageProps } from 'next/image'

import { Anchor } from './components/anchor'
import { LinkedHeading } from './components/linked-heading'
import { Table, TableCell, TableHead } from './components/table'

import 'react-medium-image-zoom/dist/styles.css'

const { chakra } = Chakra

function RoundedImage(props: ImageProps) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />
}

function ZoomImage(props: any) {
  return (
    <Zoom
      wrapStyle={{
        marginTop: '1.25rem',
      }}
    >
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img {...props} />
    </Zoom>
  )
}

const MDXComponents = {
  ...Chakra,

  /**
   * Heading
   */
  h1: (props: any) => <chakra.h1 apply="mdx.h1" {...props} />,
  h2: (props: any) => <LinkedHeading apply="mdx.h2" {...props} />,
  h3: (props: any) => <LinkedHeading as="h3" apply="mdx.h3" {...props} />,
  h4: (props: any) => <LinkedHeading as="h4" apply="mdx.h4" {...props} />,

  /**
   * Other
   */
  hr: (props: any) => <chakra.hr apply="mdx.hr" {...props} />,
  strong: (props: any) => <Box as="strong" fontWeight="semibold" {...props} />,
  kbd: Chakra.Kbd,
  /**
   * Link
   */
  a: Anchor,

  /**
   *
   * @param props Typography
   */
  br: ({ reset, ...props }: any) => (
    <Box as={reset ? 'br' : undefined} height={reset ? undefined : '24px'} {...props} />
  ),
  p: (props: any) => {
    if (typeof props.children === 'string') {
      return <chakra.p apply="mdx.p" {...props} />
    }

    return props.children
  },
  ul: (props: any) => <chakra.ul apply="mdx.ul" {...props} />,
  ol: (props: any) => <chakra.ol apply="mdx.ul" {...props} />,
  li: (props: any) => <chakra.li pb="4px" {...props} />,

  /**
   * Table
   */
  table: Table,
  th: TableHead,
  td: TableCell,

  /**
   * Image
   */
  Image: RoundedImage,
  img: ZoomImage,
}

export default MDXComponents
