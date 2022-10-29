import { cva } from 'class-variance-authority'

const badgeStyles = cva(' text-xs font-semibold mr-2 px-2.5 py-0.5 rounded', {
  variants: {
    palette: {
      primary: 'bg-primary-100 text-primary-800',
      secondary: 'bg-secondary-100 text-secondary-800',
      error: 'bg-error-100 text-error-800',
      success: 'bg-success-100 text-success-800',
      warning: 'bg-warning-100 text-warning-800',
      gray: 'bg-gray-100 text-gray-800',
    },
  },
})

export default badgeStyles
