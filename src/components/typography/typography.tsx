import clsx from 'clsx'

export interface TypographyProps extends React.HTMLProps<HTMLElement> {
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div' | 'a' | 'strong'
  gutterBottom?: boolean
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body'
  isResponsive?: boolean
  fontWeight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold'
}

const fontWeightStyles = {
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
  extrabold: 'font-extrabold',
}

const variantStyles = {
  h1: {
    component: 'h1',
    sizeStyle: 'text-3xl lg:text-5xl',
    fontWeight: 'bold',
    gutterBottomStyle: 'mb-3 lg:mb-4',
  },
  h2: {
    component: 'h2',
    sizeStyle: 'text-2xl lg:text-4xl',
    fontWeight: 'bold',
    gutterBottomStyle: 'mb-3 lg:mb-4',
  },
  h3: {
    component: 'h3',
    sizeStyle: 'text-xl lg:text-3xl',
    fontWeight: 'bold',
    gutterBottomStyle: 'mb-3 lg:mb-4',
  },
  h4: {
    component: 'h4',
    sizeStyle: 'text-lg lg:text-2xl',
    fontWeight: 'bold',
    gutterBottomStyle: 'mb-3 lg:mb-4',
  },
  h5: {
    component: 'h5',
    sizeStyle: 'text-base lg:text-xl',
    fontWeight: 'bold',
    gutterBottomStyle: 'mb-3 lg:mb-4',
  },
  h6: {
    component: 'h6',
    sizeStyle: 'text-sm lg:text-lg',
    fontWeight: 'bold',
    gutterBottomStyle: 'mb-3 lg:mb-4',
  },
  body: {
    component: 'p',
    sizeStyle: 'text-base lg:text-xl',
    fontWeight: 'normal',
    gutterBottomStyle: 'mb-3 lg:mb-4',
  },
}

export function Typography(props: TypographyProps) {
  const { component, variant = 'body', className, fontWeight, gutterBottom, ...restProps } = props

  const variantStyle = variantStyles[variant]

  // @ts-expect-error
  const fontWeightStyle = fontWeightStyles[fontWeight || variantStyle.fontWeight]

  const gutterBottomStyle = gutterBottom ? variantStyle.gutterBottomStyle : ''

  const Component = component || variantStyle.component

  return (
    // @ts-expect-error doesn't exist className prop
    <Component className={clsx(variantStyle.sizeStyle, fontWeightStyle, gutterBottomStyle, className)} {...restProps} />
  )
}
