import * as React from 'react'
import clsx from 'clsx'

export interface FormHelperTextProps {
  children: React.ReactNode
  textColor?: string
  className?: string
}

export function FormHelperText(props: FormHelperTextProps) {
  const { children, textColor = 'text-gray-400', className } = props

  return <span className={clsx('block text-sm mt-0.5', textColor, className)}>{children}</span>
}
