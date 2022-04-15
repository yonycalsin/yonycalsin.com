import type { Resolver } from 'react-hook-form'
import isEmpty from 'just-is-empty'
import mapValues from 'just-map-values'
import type { ValidateOption } from 'validate.js'
import validate from 'validate.js'

const validateConfig: ValidateOption = {
  fullMessages: false,
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const validationResolver: Resolver<any, any> = (formValues, context) => {
  const errors = validate(formValues, context, validateConfig)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const normalizedErrors = errors ? mapValues(errors, (error: any) => ({ message: error[0] })) : {}

  return {
    values: isEmpty(normalizedErrors) ? formValues : {},
    errors: normalizedErrors,
  }
}

export default validationResolver
