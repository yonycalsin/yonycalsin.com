import debug from 'debug'
import Joi from 'joi'
import _ from 'lodash'

import ValidationErrorException from '../Shared/Http/Exceptions/ValidationErrorException'

const MINIMUM_SEARCH_TERM_LENGTH = 2

class Validator<T = unknown> {
  protected schema: Joi.AnySchema

  protected constructor(schema: Joi.AnySchema) {
    this.schema = schema.options({
      stripUnknown: true,
      abortEarly: false,
      errors: {
        wrap: {
          label: false,
        },
      },
    })
  }

  protected validate(payload: Partial<Record<keyof T, any>>): T {
    const result = this.schema.validate(payload)

    if (Joi.isError(result.error)) {
      const errors: Joi.ValidationErrorItem[] = result.error.details

      const messages = _.reduce(
        errors,
        (accumulator, error) => {
          const message = error.message

          const path = error.context?.key as any

          return {
            ...accumulator,
            [path]: message,
          }
        },
        {},
      )

      throw new ValidationErrorException({
        extraData: {
          state: messages,
        },
      })
    }

    return result.value as T
  }
}

export { MINIMUM_SEARCH_TERM_LENGTH }

export default Validator
