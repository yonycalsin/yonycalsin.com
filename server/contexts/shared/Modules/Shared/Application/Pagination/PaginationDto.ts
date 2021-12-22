import type JsonSerializable from '~/server/contexts/client-front/Modules/Shared/Serializer/JsonSerializable'

interface PaginationDtoJson<P> {
  data: P
  meta: {
    page: number
    pages: number
    total: number
    hasNextPage: boolean
    hasPrevPage: boolean
  }
}

interface PaginationMetaDto {
  page: number
  pages: number
  total: number
}

abstract class PaginationDto<P extends JsonSerializable<any>> implements JsonSerializable<PaginationDtoJson<P>> {
  protected readonly info: PaginationMetaDto

  protected readonly data: P

  protected constructor(data: P, info: PaginationMetaDto) {
    this.data = data

    this.info = info
  }

  public toJSON(): PaginationDtoJson<P> {
    const paginationInfo = this.info

    return {
      data: this.data,
      meta: {
        ...paginationInfo,
        hasNextPage: paginationInfo.page < paginationInfo.pages,
        hasPrevPage: paginationInfo.page > 1,
      },
    }
  }
}

export default PaginationDto

export type { PaginationDtoJson, PaginationMetaDto }
