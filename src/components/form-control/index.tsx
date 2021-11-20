import * as React from 'react'

export interface FormControlProps {
  children: React.ReactNode
}

export function FormControl(props: FormControlProps) {
  const { children } = props

  return <div className="w-full relative">{children}</div>
}
