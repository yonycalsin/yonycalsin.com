import ListRecommendationsQueryHandler from '~/server/contexts/client-front/Modules/Recommendation/Application/ListRecommendationsQueryHandler'
import ListRecommendationsQueryServiceNotion from '~/server/contexts/client-front/Modules/Recommendation/Infrastructure/ListRecommendationsQueryServiceNotion'
import SdkClientNotion from '~/server/contexts/shared/Modules/Shared/Infrastructure/Sdk/SdkClientNotion'

import GetAllRecommendationsAction from '../Actions/Recommendation/GetAll/GetAllRecommendationsAction'
import GetAllRecommendationsActionResponder from '../Actions/Recommendation/GetAll/GetAllRecommendationsActionResponder'

class RecommendationActionFactory {
  public static GetAll() {
    const notionSdkClient = new SdkClientNotion()

    const listRecommendationsQueryService = new ListRecommendationsQueryServiceNotion(notionSdkClient)

    const listRecommendationsQueryHandler = new ListRecommendationsQueryHandler(listRecommendationsQueryService)

    const getAllRecommendationsActionResponder = new GetAllRecommendationsActionResponder()

    const getAllRecommendationsAction = new GetAllRecommendationsAction(
      listRecommendationsQueryHandler,
      getAllRecommendationsActionResponder,
    )

    return getAllRecommendationsAction.execute.bind(getAllRecommendationsAction)
  }
}

export default RecommendationActionFactory
