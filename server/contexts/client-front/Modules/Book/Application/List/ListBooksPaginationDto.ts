import _ from 'lodash'

import PaginationDto, {
  PaginationMetaDto,
} from '~/server/contexts/shared/Modules/Shared/Application/Pagination/PaginationDto'

import type { ListBooksJsonDto } from './ListBooksDto'
import type ListBooksDto from './ListBooksDto'

interface ListBooksCollectionDto {
  toJSON(): ListBooksJsonDto[]
}

class ListBooksPaginationDto extends PaginationDto<ListBooksCollectionDto> {
  public static create(items: ListBooksDto[], meta: PaginationMetaDto) {
    const data = {
      toJSON: () => _.map(items, item => item.toJSON()),
    }

    return new ListBooksPaginationDto(data, meta)
  }
}

export default ListBooksPaginationDto
