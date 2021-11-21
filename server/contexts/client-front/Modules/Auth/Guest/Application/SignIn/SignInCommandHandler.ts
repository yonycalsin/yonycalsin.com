import debug from 'debug'

import type CommandHandler from '../../../../Shared/Application/Command/CommandHandler'

import type SignInCommand from './SignInCommand'
import SignInDto from './SignInDto'

const logger = debug('api:contexts:client-front:auth:guest:application:signin')

class SignInCommandHandler implements CommandHandler<SignInDto, SignInCommand> {
  public async handle(command: SignInCommand): Promise<SignInDto> {
    logger(command)

    return SignInDto.create({
      token: 'this is a example token',
    })
  }
}

export default SignInCommandHandler
