import * as React from 'react'
import Image, { ImageProps } from 'next/image'
import Link from 'next/link'

function CustomLink(props: any) {
  const { href, children } = props

  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>{children}</a>
      </Link>
    )
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

function RoundedImage(props: ImageProps) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />
}

const MDXComponents = {
  a: CustomLink,
  Image: RoundedImage,
}

export default MDXComponents
