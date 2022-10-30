import { cva } from 'class-variance-authority'

const headingStyles = cva('font-bold font-heading', {
  variants: {
    size: {
      h1: 'text-4xl',
      h2: 'text-3xl',
      h3: 'text-2xl',
      h4: 'text-xl',
      h5: 'text-base',
      h6: 'text-sm',
    },
  },
  defaultVariants: {
    size: 'h5',
  },
})

export default headingStyles
