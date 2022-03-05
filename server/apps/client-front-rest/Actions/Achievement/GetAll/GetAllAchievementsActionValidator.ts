import Joi from 'joi'

import Validator from '../../Validator'

interface Payload {
  page: number
  limit: number
  isFeatured?: boolean
}

const Schema: Joi.ObjectSchema<Payload> = Joi.object({
  page: Joi.number().integer().positive(),
  limit: Joi.number().integer().positive(),
  isFeatured: Joi.boolean().default(false),
})

class GetAllAchievementsActionValidator extends Validator<Payload> {
  public static validate(payload: Partial<Record<keyof Payload, unknown>>): Payload {
    const validator = new GetAllAchievementsActionValidator(Schema)

    return validator.validate(payload)
  }
}

export default GetAllAchievementsActionValidator
