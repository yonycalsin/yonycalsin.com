/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ImageProps } from 'next/image'
import * as React from 'react'
import { isPlainObject } from 'lodash'
import Image from 'next/image'

import { Blockquote } from 'components/blockquote'
import { Divider } from 'components/divider'
import { HeadingLinked } from 'components/heading'
import { ListItem, UnorderedList } from 'components/list'
import { MdxAnchor } from './components/anchor'
import ZoomImage from './components/zoom-image'

function RoundedImage(props: ImageProps) {
  return <Image className="rounded-lg" {...props} />
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
  p: (props: React.PropsWithChildren) => {
    // We dont want to wrap a image with p tag
    // @ts-expect-error ts(2339)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (isPlainObject(props.children) && !!props.children?.props?.src) {
      return props.children as JSX.Element
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
  // table: Table,
  // th: TableHead,
  // td: TableCell,
  /**
   * Image
   */
  Image: RoundedImage,
  img: ZoomImage,
}

export default MDXComponents
