import * as React from 'react'
import clsx from 'clsx'

export interface ButtonProps {
  children: React.ReactNode
  colorScheme?: 'primary' | 'secondary' | 'gray'
  isFullWidth?: boolean
  isDisabled?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const styles = {
  primary:
    'px-2 py-1 rounded-md font-medium border-0 focus:outline-none focus:ring transition text-white bg-primary-500 hover:bg-primary-600 active:bg-primary-700 focus:ring-primary-300',
  secondary:
    'px-2 py-1 rounded-md font-medium border-0 focus:outline-none focus:ring transition text-white bg-secondary-500 hover:bg-secondary-600 active:bg-secondary-700 focus:ring-secondary-300',
  gray: 'px-2 py-1 rounded-md font-medium border-0 focus:outline-none focus:ring transition text-white bg-gray-500 hover:bg-gray-600 active:bg-gray-700 focus:ring-gray-300',
}

export function Button(props: ButtonProps) {
  const { children, colorScheme = 'primary', isFullWidth, onClick, isDisabled } = props

  const buttonStyle = styles[colorScheme]

  return (
    <button
      className={clsx(buttonStyle, isFullWidth && 'w-full', isDisabled && 'cursor-not-allowed opacity-75')}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
