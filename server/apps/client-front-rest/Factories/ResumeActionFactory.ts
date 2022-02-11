import GetResumeQueryHandler from '~/server/contexts/client-front/Modules/Resume/Application/Get/GetResumeQueryHandler'
import GetResumeQueryServiceNotion from '~/server/contexts/client-front/Modules/Resume/Infrastructure/Query/GetResumeQueryServiceNotion'
import SdkClientNotion from '~/server/contexts/shared/Modules/Shared/Infrastructure/Sdk/SdkClientNotion'

import GlobalIdActionDecorator from '../Actions/GlobalIdActionDecorator'
import GetOneResumeAction from '../Actions/Resume/GetOne/GetOneResumeAction'
import GetOneResumeActionResponder from '../Actions/Resume/GetOne/GetOneResumeActionResponder'
import GlobalIdResponderDecorator from '../Responder/GlobalIdResponderDecorator'

class ResumeActionFactory {
  public static GetOne() {
    const globalIdEntity = 'Resume'

    const notionSdkClient = new SdkClientNotion()

    const getResumeQueryServiceNotion = new GetResumeQueryServiceNotion(notionSdkClient)

    const getResumeQueryHandler = new GetResumeQueryHandler(getResumeQueryServiceNotion)

    const getOneResumeActionResponder = new GlobalIdResponderDecorator(
      new GetOneResumeActionResponder(),
      globalIdEntity,
    )

    const getOneResumeAction = new GlobalIdActionDecorator(
      new GetOneResumeAction(getResumeQueryHandler, getOneResumeActionResponder),
      globalIdEntity,
    )

    return getOneResumeAction.execute.bind(getOneResumeAction)
  }
}

export default ResumeActionFactory
