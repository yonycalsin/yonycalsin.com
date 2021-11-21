import debug from 'debug'
import jwt from 'jsonwebtoken'
import { v4 as uuidv4 } from 'uuid'

import type CommandHandler from '../../../../Shared/Application/Command/CommandHandler'
import env from '../../../../Shared/Utils/env'

import type SignInCommand from './SignInCommand'
import SignInDto from './SignInDto'

const logger = debug('api:contexts:client-front:auth:guest:application:signin')

class SignInCommandHandler implements CommandHandler<SignInDto, SignInCommand> {
  public async handle(command: SignInCommand): Promise<SignInDto> {
    const payload = {
      id: `V${uuidv4()}`,
      role: 'guest',
      email: command.getEmail(),
    }

    const token = jwt.sign(payload, env.AUTH_JWT_SECRET)

    return SignInDto.create({
      token,
    })
  }
}

export default SignInCommandHandler
