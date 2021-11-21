import SignInCommandHandler from '~/server/contexts/client-front/Modules/Auth/Guest/Application/SignIn/SignInCommandHandler'

import SignInAction from '../Actions/Auth/Guest/SignIn/SignInAction'
import SignInActionResponder from '../Actions/Auth/Guest/SignIn/SignInActionResponder'

class AuthActionFactory {
  public static GuestSignIn() {
    const handler = new SignInCommandHandler()

    const responder = new SignInActionResponder()

    const action = new SignInAction(handler, responder)

    return action.execute.bind(action)
  }
}

export default AuthActionFactory
