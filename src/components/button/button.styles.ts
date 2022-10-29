import { cva } from 'class-variance-authority'

const buttonStyles = cva('text-sm font-medium rounded-lg px-4 py-2 text-center inline-flex', {
  variants: {
    variant: {
      solid: '',
      outline: 'border focus:ring-4 focus:outline-none',
      ghost: '',
      link: '',
    },
    palette: {
      gray: '',
      primary: '',
      secondary: '',
      error: '',
      success: '',
      warning: '',
    },
  },
  compoundVariants: [
    {
      variant: 'outline',
      palette: 'gray',
      class: 'text-gray-700 hover:text-white border-gray-700 hover:bg-gray-800 focus:ring-gray-300',
    },
    {
      variant: 'outline',
      palette: 'primary',
      class: 'text-primary-700 hover:text-white border-primary-700 hover:bg-primary-800 focus:ring-primary-300',
    },
    {
      variant: 'outline',
      palette: 'secondary',
      class: 'text-secondary-700 hover:text-white border-secondary-700 hover:bg-secondary-800 focus:ring-secondary-300',
    },
    {
      variant: 'outline',
      palette: 'error',
      class: 'text-error-700 hover:text-white border-error-700 hover:bg-error-800 focus:ring-error-300',
    },
    {
      variant: 'outline',
      palette: 'success',
      class: ' text-success-700 hover:text-white border-success-700 hover:bg-success-800 focus:ring-success-300',
    },
    {
      variant: 'outline',
      palette: 'warning',
      class: 'text-warning-700 hover:text-white border-warning-700 hover:bg-warning-800 focus:ring-warning-300',
    },
  ],
})

export default buttonStyles
