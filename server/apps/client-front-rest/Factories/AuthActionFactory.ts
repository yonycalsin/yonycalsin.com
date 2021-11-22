import UserRepositoryPrisma from '~/server/contexts/client-front/Modules/User/Infrastructure/Domain/UserRepositoryPrisma'
import DatabaseConnectionPrisma from '~/server/contexts/shared/Modules/Shared/Infrastructure/Database/DatabaseConnectionPrisma'

import SignInCommandHandler from '../../../contexts/client-front/Modules/Auth/Guest/Application/SignIn/SignInCommandHandler'
import SignInAction from '../Actions/Auth/Guest/SignIn/SignInAction'
import SignInActionResponder from '../Actions/Auth/Guest/SignIn/SignInActionResponder'

class AuthActionFactory {
  public static GuestSignIn() {
    const prismaConnection = new DatabaseConnectionPrisma()

    const userRepository = new UserRepositoryPrisma(prismaConnection)

    const handler = new SignInCommandHandler(userRepository)

    const responder = new SignInActionResponder()

    const action = new SignInAction(handler, responder)

    return action.execute.bind(action)
  }
}

export default AuthActionFactory
