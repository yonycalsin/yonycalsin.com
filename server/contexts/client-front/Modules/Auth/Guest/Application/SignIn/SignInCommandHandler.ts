import debug from 'debug'
import jwt from 'jsonwebtoken'
import { v4 as uuidv4 } from 'uuid'

import type CommandHandler from '../../../../Shared/Application/Command/CommandHandler'
import env from '../../../../Shared/Utils/env'
import User from '../../../../User/Domain/User'
import UserId from '../../../../User/Domain/UserId'
import type UserRepository from '../../../../User/Domain/UserRepository'

import type SignInCommand from './SignInCommand'
import SignInDto from './SignInDto'

const logger = debug('api:contexts:client-front:auth:guest:application:signin')

class SignInCommandHandler implements CommandHandler<SignInDto, SignInCommand> {
  private readonly userRepository: UserRepository

  public constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  public async handle(command: SignInCommand): Promise<SignInDto> {
    const existsUser = await this.userRepository.getByEmail(command.getEmail())

    let userId = existsUser?.getId()

    if (!existsUser) {
      userId = await this.userRepository.create(
        User.create({
          id: UserId.empty(),
          email: command.getEmail(),
        }),
      )
    }

    const payload = {
      id: userId,
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
