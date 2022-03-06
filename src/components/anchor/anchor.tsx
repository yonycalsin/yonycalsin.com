import * as React from 'react'
import clsx from 'clsx'

export interface AnchorProps
  extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  variant?: 'regular' | 'decorated'
  component?: 'a' | 'span'
}

const variants: any = {
  regular: 'no-underline dark:text-gray-300',
  decorated: 'hover:bg-primary hover:text-white border-b-2 border-primary',
}

const Anchor = React.forwardRef<HTMLAnchorElement, AnchorProps>(function Anchor(props: AnchorProps, ref) {
  const { className, component: Component = 'a', ...restProps } = props

  const variantStyles = variants[props.variant || 'regular']

  return <Component className={clsx(variantStyles, className)} {...restProps} ref={ref} />
})

export { Anchor }
