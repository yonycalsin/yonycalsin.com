import ListAchievementsQueryHandler from '~/server/contexts/client-front/Modules/Achievement/Application/List/ListAchievementsQueryHandler'
import ListAchievementsQueryServiceNotion from '~/server/contexts/client-front/Modules/Achievement/Infrastructure/Query/ListAchievementsQueryServiceNotion'
import SdkClientNotion from '~/server/contexts/shared/Modules/Shared/Infrastructure/Sdk/SdkClientNotion'

import GetAllAchievementsAction from '../Actions/Achievement/GetAll/GetAllAchievementsAction'
import GetAllAchievementsActionResponder from '../Actions/Achievement/GetAll/GetAllAchievementsActionResponder'

class AchievementActionFactory {
  public static GetAll() {
    const notionSdkClient = new SdkClientNotion()

    const listAchievementsQueryService = new ListAchievementsQueryServiceNotion(notionSdkClient)

    const listAchievementsQueryHandler = new ListAchievementsQueryHandler(listAchievementsQueryService)

    const getAllAchievementsActionResponder = new GetAllAchievementsActionResponder()

    const getAllAchievementsAction = new GetAllAchievementsAction(
      listAchievementsQueryHandler,
      getAllAchievementsActionResponder,
    )

    return getAllAchievementsAction.execute.bind(getAllAchievementsAction)
  }
}

export default AchievementActionFactory
