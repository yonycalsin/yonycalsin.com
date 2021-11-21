import Joi from 'joi'

import Validator from '../../../Validator'

interface Payload {
  email: string
}

const Schema: Joi.ObjectSchema<Payload> = Joi.object({
  email: Joi.string().email().required(),
})

class SignInActionValidator extends Validator<Payload> {
  public static validate(payload: Partial<Record<keyof Payload, unknown>>): Payload {
    const validator = new SignInActionValidator(Schema)

    return validator.validate(payload)
  }
}

export default SignInActionValidator
