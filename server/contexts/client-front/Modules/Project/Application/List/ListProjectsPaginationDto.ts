import _ from 'lodash'

import PaginationDto, {
  PaginationMetaDto,
} from '~/server/contexts/shared/Modules/Shared/Application/Pagination/PaginationDto'

import type ListProjectsDto from './ListProjectsDto'
import type { ListProjectsJsonDto } from './ListProjectsDto'

interface ListProjectsCollectionDto {
  toJSON(): ListProjectsJsonDto[]
}

class ListProjectsPaginationDto extends PaginationDto<ListProjectsCollectionDto> {
  public static create(items: ListProjectsDto[], meta: PaginationMetaDto): ListProjectsPaginationDto {
    const data = {
      toJSON: () => _.map(items, item => item.toJSON()),
    }

    return new ListProjectsPaginationDto(data, meta)
  }
}

export default ListProjectsPaginationDto
