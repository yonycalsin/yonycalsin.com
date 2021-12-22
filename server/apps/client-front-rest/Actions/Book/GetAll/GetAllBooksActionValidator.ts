import Joi from 'joi'

import Validator from '../../Validator'

interface Payload {
  page: number
  limit: number
}

const Schema: Joi.ObjectSchema<Payload> = Joi.object({
  page: Joi.number().integer().positive(),
  limit: Joi.number().integer().positive(),
})

class GetAllBooksActionValidator extends Validator<Payload> {
  public static validate(payload: Partial<Record<keyof Payload, unknown>>): Payload {
    const validator = new GetAllBooksActionValidator(Schema)

    return validator.validate(payload)
  }
}

export default GetAllBooksActionValidator
