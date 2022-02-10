import type Query from '~/server/contexts/shared/Modules/Shared/Application/Query/Query'

interface GetResumeQueryProps {
  id: string
}

class GetResumeQuery implements Query {
  private readonly id: string

  public constructor(props: GetResumeQueryProps) {
    this.id = props.id
  }

  public getId(): string {
    return this.id
  }
}

export default GetResumeQuery
