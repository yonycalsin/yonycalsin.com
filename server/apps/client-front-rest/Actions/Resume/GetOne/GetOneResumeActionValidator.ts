import Joi from 'joi'

import Validator from '../../Validator'

interface Payload {
  id: string
}

const Schema: Joi.ObjectSchema<Payload> = Joi.object({
  id: Joi.string().trim(),
})

class GetOneResumeActionValidator extends Validator<Payload> {
  public static validate(payload: Partial<Record<keyof Payload, unknown>>): Payload {
    const validator = new GetOneResumeActionValidator(Schema)

    return validator.validate(payload)
  }
}

export default GetOneResumeActionValidator
