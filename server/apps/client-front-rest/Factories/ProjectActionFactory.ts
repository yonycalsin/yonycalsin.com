import ListProjectsQueryHandler from '~/server/contexts/client-front/Modules/Project/Application/List/ListProjectsQueryHandler'
import ListProjectsQueryServiceNotion from '~/server/contexts/client-front/Modules/Project/Infrastructure/Query/ListProjectsQueryServiceNotion'
import SdkClientNotion from '~/server/contexts/shared/Modules/Shared/Infrastructure/Sdk/SdkClientNotion'

import GetAllProjectsAction from '../Actions/Project/GetALl/GetAllProjectsAction'
import GetAllProjectsActionResponder from '../Actions/Project/GetALl/GetAllProjectsActionResponder'

class ProjectActionFactory {
  public static GetAll() {
    const notionSdkClient = new SdkClientNotion()

    const listProjectsQueryService = new ListProjectsQueryServiceNotion(notionSdkClient)

    const listProjectsQueryHandler = new ListProjectsQueryHandler(listProjectsQueryService)

    const getAllProjectsActionResponder = new GetAllProjectsActionResponder()

    const getAllProjectsAction = new GetAllProjectsAction(listProjectsQueryHandler, getAllProjectsActionResponder)

    return getAllProjectsAction.execute.bind(getAllProjectsAction)
  }
}

export default ProjectActionFactory
