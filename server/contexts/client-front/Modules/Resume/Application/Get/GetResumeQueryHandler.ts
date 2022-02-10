import type QueryHandler from '~/server/contexts/shared/Modules/Shared/Application/Query/QueryHandler'

import type GetResumeDto from './GetResumeDto'
import type GetResumeQuery from './GetResumeQuery'
import type GetResumeQueryService from './GetResumeQueryService'

class GetResumeQueryHandler implements QueryHandler<GetResumeDto, GetResumeQuery> {
  private readonly getResumeQueryService: GetResumeQueryService

  public constructor(getResumeQueryService: GetResumeQueryService) {
    this.getResumeQueryService = getResumeQueryService
  }

  public handle(query: GetResumeQuery): Promise<GetResumeDto> {
    return this.getResumeQueryService.execute(query.getId())
  }
}

export default GetResumeQueryHandler
