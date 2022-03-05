import type { AnchorHTMLAttributes, DetailedHTMLProps } from 'react'
import clsx from 'clsx'

export interface Anchor extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  variant?: 'regular' | 'decorated'
  component?: 'a' | 'span'
}

const variants: any = {
  regular: 'no-underline dark:text-gray-300',
  decorated: 'hover:bg-primary hover:text-white border-b-2 border-primary',
}

export function Anchor(props: Anchor) {
  const { className, component: Component = 'a', ...restProps } = props

  const variantStyles = variants[props.variant || 'regular']

  return <Component className={clsx(variantStyles, className)} {...restProps} />
}
