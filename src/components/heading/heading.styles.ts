import { cva } from 'class-variance-authority'

const headingStyles = cva('font-bold font-heading', {
  variants: {
    size: {
      h1: 'text-3xl',
      h2: 'text-2xl',
      h3: 'text-xl',
      h4: 'text-lg',
      h5: 'text-base',
      h6: 'text-sm',
    },
  },
  defaultVariants: {
    size: 'h5',
  },
})

export default headingStyles
