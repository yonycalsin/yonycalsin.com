import * as React from 'react'
import clsx from 'clsx'

export interface ButtonProps {
  children: React.ReactNode
  colorScheme?: 'primary' | 'secondary' | 'gray'
  variant?: 'solid' | 'light'
  isFullWidth?: boolean
  isDisabled?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const styles = {
  solid: {
    primary:
      'px-4 py-2 rounded-md font-medium border-0 focus:outline-none focus:ring transition text-white bg-primary-500 hover:bg-primary-600 active:bg-primary-700 focus:ring-primary-300',
    secondary:
      'px-4 py-2 rounded-md font-medium border-0 focus:outline-none focus:ring transition text-white bg-secondary-500 hover:bg-secondary-600 active:bg-secondary-700 focus:ring-secondary-300',
    gray: 'px-4 py-2 rounded-md font-medium border-0 focus:outline-none focus:ring transition text-white bg-gray-500 hover:bg-gray-600 active:bg-gray-700 focus:ring-gray-300',
  },
  light: {
    primary:
      'px-4 py-2 rounded-md font-medium border-0 focus:outline-none focus:ring transition text-primary bg-primary-100 hover:bg-primary-200 active:bg-primary-300 focus:ring-primary-300',
    secondary:
      'px-4 py-2 rounded-md font-medium border-0 focus:outline-none focus:ring transition text-secondary bg-secondary-100 hover:bg-secondary-200 active:bg-secondary-300 focus:ring-secondary-300',
    gray: 'px-4 py-2 rounded-md font-medium border-0 focus:outline-none focus:ring transition text-gray bg-gray-100 hover:bg-gray-200 active:bg-gray-300 focus:ring-gray-300',
  },
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(props: ButtonProps, ref) {
  const { children, colorScheme = 'primary', isFullWidth, onClick, isDisabled, variant = 'solid' } = props

  const buttonStyle = styles[variant][colorScheme]

  return (
    <button
      className={clsx(buttonStyle, isFullWidth && 'w-full', isDisabled && 'cursor-not-allowed opacity-75')}
      disabled={isDisabled}
      onClick={onClick}
      ref={ref}
    >
      {children}
    </button>
  )
})

export { Button }
