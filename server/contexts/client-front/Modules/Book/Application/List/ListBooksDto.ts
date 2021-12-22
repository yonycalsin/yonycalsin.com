import type JsonSerializable from '../../../Shared/Serializer/JsonSerializable'

interface ListBooksImage {
  name: string
  url: string
}

interface ListBooksJsonDto {
  id: string
  name: string
  rating: number
  releaseAt: string
  status: string
  author: string
  tags: string[]
  images: ListBooksImage[]
  createdAt: string
  updatedAt: string
}

interface ListBooksDtoProps {
  id: string
  name: string
  rating: number
  releaseAt: Date
  status: string
  author: string
  tags: string[]
  images: ListBooksImage[]
  createdAt: Date
  updatedAt: Date
}

class ListBooksDto implements JsonSerializable<ListBooksJsonDto> {
  private readonly id!: string

  private readonly name!: string

  private readonly rating!: number

  private readonly releaseAt!: Date

  private readonly status!: string

  private readonly author!: string

  private readonly tags!: string[]

  private readonly images!: ListBooksImage[]

  private readonly createdAt!: Date

  private readonly updatedAt!: Date

  private constructor(props: ListBooksDtoProps) {
    this.id = props.id

    this.name = props.name

    this.rating = props.rating

    this.releaseAt = props.releaseAt

    this.status = props.status

    this.author = props.author

    this.tags = props.tags

    this.images = props.images

    this.createdAt = props.createdAt

    this.updatedAt = props.updatedAt
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
      tags: this.tags!,
      images: this.images!,
      createdAt: this.createdAt!.toISOString(),
      updatedAt: this.updatedAt!.toISOString(),
    }
  }
}

export default ListBooksDto

export type { ListBooksJsonDto }
