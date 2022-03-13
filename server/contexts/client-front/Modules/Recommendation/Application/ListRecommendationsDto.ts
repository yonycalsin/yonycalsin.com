import type JsonSerializable from '../../Shared/Serializer/JsonSerializable'

interface ListRecommendationsJsonAuthorDto {
  name: string
  jobTitle: string
  avatar: string | null
  linkedin: string
}

interface ListRecommendationsJsonDto {
  id: string
  type: 'received' | 'given'
  text: string
  author: ListRecommendationsJsonAuthorDto
  createdAt: string
}

interface ListRecommendationsDtoAuthorProps {
  name: string
  jobTitle: string
  avatar?: string
  linkedin: string
}

interface ListRecommendationsDtoProps {
  id: string
  type: 'received' | 'given'
  text: string
  author: ListRecommendationsDtoAuthorProps
  createdAt: Date
}

class ListRecommendationsDto implements JsonSerializable<ListRecommendationsJsonDto> {
  private readonly id!: string

  private readonly type!: 'received' | 'given'

  private readonly text!: string

  private readonly author!: ListRecommendationsDtoAuthorProps

  private readonly createdAt!: Date

  public constructor(props: ListRecommendationsDtoProps) {
    this.id = props.id

    this.type = props.type

    this.text = props.text

    this.author = props.author

    this.createdAt = props.createdAt
  }

  public static create(props: ListRecommendationsDtoProps) {
    return new ListRecommendationsDto(props)
  }

  public toJSON(): ListRecommendationsJsonDto {
    return {
      id: this.id!,
      type: this.type!,
      text: this.text!,
      author: {
        name: this.author.name!,
        jobTitle: this.author.jobTitle!,
        avatar: this.author.avatar ?? null,
        linkedin: this.author.linkedin!,
      },
      createdAt: this.createdAt.toISOString(),
    }
  }
}

export type { ListRecommendationsJsonDto }

export default ListRecommendationsDto
