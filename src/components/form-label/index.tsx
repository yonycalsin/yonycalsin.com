import * as React from 'react'

interface FormLabelProps {
  children: React.ReactNode
}

export function FormLabel(props: FormLabelProps) {
  const { children } = props

  return (
    <label className="block text-left mb-0.5 text-gray-700">
      <span>{children}</span>
    </label>
  )
}
