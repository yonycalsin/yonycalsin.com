import type GetResumeDto from './GetResumeDto'

interface GetResumeQueryService {
  execute(id: string): Promise<GetResumeDto>
}

export default GetResumeQueryService
