import type JsonSerializable from '../../../Shared/Serializer/JsonSerializable'

interface ListAchievementsJsonDto {
  id: string
  title: string
  type: string
  date: string
  isFeatured: boolean
  isPublished: boolean
}

interface ListAchievementsDtoProps {
  id: string
  title: string
  type: string
  date: Date
  isFeatured: boolean
  isPublished: boolean
}

class ListAchievementsDto implements JsonSerializable<ListAchievementsJsonDto> {
  private readonly id!: string

  private readonly title!: string

  private readonly type!: string

  private readonly date!: Date

  private readonly isFeatured!: boolean

  private readonly isPublished!: boolean

  private constructor(props: ListAchievementsDtoProps) {
    this.id = props.id

    this.title = props.title

    this.type = props.type

    this.date = props.date

    this.isFeatured = props.isFeatured

    this.isPublished = props.isPublished
  }

  public static create(props: ListAchievementsDtoProps) {
    return new ListAchievementsDto(props)
  }

  public toJSON(): ListAchievementsJsonDto {
    return {
      id: this.id,
      title: this.title,
      type: this.type,
      date: this.date.toISOString(),
      isFeatured: this.isFeatured,
      isPublished: this.isPublished,
    }
  }
}

export type { ListAchievementsJsonDto }

export default ListAchievementsDto
