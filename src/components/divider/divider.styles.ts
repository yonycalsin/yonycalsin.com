import { cva } from 'class-variance-authority'

const dividerStyles = cva('opacity-[0.6] border-gray-300 dark:border-gray-800', {
  variants: {
    variant: {
      solid: 'border-solid',
      dashed: 'border-dashed',
    },
    direction: {
      horizontal: 'w-full border-b-[1px]',
      vertical: 'h-full border-l-[1px]',
    },
  },
})

export default dividerStyles
