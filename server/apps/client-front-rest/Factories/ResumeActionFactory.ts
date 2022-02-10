import GetResumeQueryHandler from '~/server/contexts/client-front/Modules/Resume/Application/Get/GetResumeQueryHandler'
import GetResumeQueryServiceNotion from '~/server/contexts/client-front/Modules/Resume/Infrastructure/Query/GetResumeQueryServiceNotion'
import SdkClientNotion from '~/server/contexts/shared/Modules/Shared/Infrastructure/Sdk/SdkClientNotion'

import GetOneResumeAction from '../Actions/Resume/GetOne/GetOneResumeAction'
import GetOneResumeActionResponder from '../Actions/Resume/GetOne/GetOneResumeActionResponder'

class ResumeActionFactory {
  public static GetOne() {
    const notionSdkClient = new SdkClientNotion()

    const getResumeQueryServiceNotion = new GetResumeQueryServiceNotion(notionSdkClient)

    const getResumeQueryHandler = new GetResumeQueryHandler(getResumeQueryServiceNotion)

    const getOneResumeActionResponder = new GetOneResumeActionResponder()

    const getOneResumeAction = new GetOneResumeAction(getResumeQueryHandler, getOneResumeActionResponder)

    return getOneResumeAction.execute.bind(getOneResumeAction)
  }
}

export default ResumeActionFactory
