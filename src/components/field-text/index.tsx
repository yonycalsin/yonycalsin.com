import React from 'react'
import { useFormContext } from 'react-hook-form'

import env from '~/utils/env'

import { FormControl } from '../form-control'
import { FormHelperText } from '../form-helper-text'
import { FormLabel } from '../form-label'
import { TextInput, TextInputProps } from '../text-input'

export interface FieldTextProps extends Omit<TextInputProps, 'ref'> {
  name: string
  label?: string
  helperText?: string
}

function FieldText(props: FieldTextProps) {
  const { name, label, helperText, ...restInputProps } = props

  const { register, formState } = useFormContext()

  const error = formState.errors[name]

  return (
    <FormControl>
      {label ? <FormLabel>{label}</FormLabel> : null}
      <TextInput {...register(name)} {...restInputProps} hasError={error} />
      {helperText || error ? (
        <FormHelperText textColor={error && 'text-error'}>{error?.message || helperText}</FormHelperText>
      ) : null}
    </FormControl>
  )
}

if (env.IS_ENV_DEV) {
  FieldText.displayName = 'FieldText'
}

export { FieldText }
