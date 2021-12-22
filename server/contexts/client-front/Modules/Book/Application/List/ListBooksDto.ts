import type JsonSerializable from '../../../Shared/Serializer/JsonSerializable'

interface ListBooksJsonDto {
  id: number
  name: string
  rating: number
  releaseAt: string
  status: string
  author: string
}

interface ListBooksDtoProps {
  id: number
  name: string
  rating: number
  releaseAt: Date
  status: string
  author: string
}

class ListBooksDto implements JsonSerializable<ListBooksJsonDto> {
  private readonly id!: number

  private readonly name!: string

  private readonly rating!: number

  private readonly releaseAt!: Date

  private readonly status!: string

  private readonly author!: string

  private constructor(props: ListBooksDtoProps) {
    this.id = props.id

    this.name = props.name

    this.rating = props.rating

    this.releaseAt = props.releaseAt

    this.status = props.status

    this.author = props.author
  }

  public static create(props: ListBooksDtoProps): ListBooksDto {
    return new ListBooksDto(props)
  }

  public toJSON(): ListBooksJsonDto {
    return {
      id: this.id!,
      name: this.name!,
      rating: this.rating!,
      releaseAt: this.releaseAt!.toISOString(),
      status: this.status!,
      author: this.author!,
    }
  }
}

export default ListBooksDto

export type { ListBooksJsonDto }
