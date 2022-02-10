import type SdkClientNotion from '~/server/contexts/shared/Modules/Shared/Infrastructure/Sdk/SdkClientNotion'

import GetResumeDto from '../../Application/Get/GetResumeDto'
import type GetResumeQueryService from '../../Application/Get/GetResumeQueryService'

class GetResumeQueryServiceNotion implements GetResumeQueryService {
  private readonly sdkClientNotion: SdkClientNotion

  public constructor(sdkClientNotion: SdkClientNotion) {
    this.sdkClientNotion = sdkClientNotion
  }

  public async execute(id: string): Promise<GetResumeDto> {
    return GetResumeDto.create({
      id: 'id_123457890',
    })
  }
}

export default GetResumeQueryServiceNotion
