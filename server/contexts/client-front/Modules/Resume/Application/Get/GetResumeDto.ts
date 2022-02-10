import type JsonSerializable from '../../../Shared/Serializer/JsonSerializable'

interface GetResumeJsonDto {
  id: string
}

interface GetResumeDtoProps {
  id: string
}

class GetResumeDto implements JsonSerializable<GetResumeJsonDto> {
  private readonly id: string

  public constructor(props: GetResumeDtoProps) {
    this.id = props.id
  }

  public static create(props: GetResumeDtoProps) {
    return new GetResumeDto(props)
  }

  public toJSON(): GetResumeJsonDto {
    return {
      id: this.id,
    }
  }
}

export default GetResumeDto
