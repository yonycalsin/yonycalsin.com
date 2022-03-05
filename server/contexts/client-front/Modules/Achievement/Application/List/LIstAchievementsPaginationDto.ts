import _ from 'lodash'

import PaginationDto, {
  PaginationMetaDto,
} from '~/server/contexts/shared/Modules/Shared/Application/Pagination/PaginationDto'

import type { ListAchievementsJsonDto } from './ListAchievementsDto'
import type ListAchievementsDto from './ListAchievementsDto'

interface ListAchievementsCollectionDto {
  toJSON(): ListAchievementsJsonDto[]
}

class ListAchievementsPaginationDto extends PaginationDto<ListAchievementsCollectionDto> {
  public static create(items: ListAchievementsDto[], meta: PaginationMetaDto) {
    const data = {
      toJSON: () => _.map(items, item => item.toJSON()),
    }

    return new ListAchievementsPaginationDto(data, meta)
  }
}

export default ListAchievementsPaginationDto
