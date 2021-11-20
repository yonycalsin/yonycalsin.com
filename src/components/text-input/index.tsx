import * as React from 'react'
import clsx from 'clsx'

import env from '~/utils/env'

import s from './styles.module.css'

export interface TextInputProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  hasError?: boolean
}

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
  const { type = 'text', hasError, className, ...rest } = props

  return <input {...rest} ref={ref} type={type} className={clsx(s.root, hasError && s['has-error'], className)} />
})

if (env.IS_ENV_DEV) {
  TextInput.displayName = 'TextInput'
}
