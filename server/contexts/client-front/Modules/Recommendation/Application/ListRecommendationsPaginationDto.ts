import _ from 'lodash'

import PaginationDto, {
  PaginationMetaDto,
} from '~/server/contexts/shared/Modules/Shared/Application/Pagination/PaginationDto'

import type ListRecommendationsDto from './ListRecommendationsDto'
import type { ListRecommendationsJsonDto } from './ListRecommendationsDto'

interface ListRecommendationsCollectionDto {
  toJSON(): ListRecommendationsJsonDto[]
}

class ListRecommendationsPaginationDto extends PaginationDto<ListRecommendationsCollectionDto> {
  public static create(items: ListRecommendationsDto[], meta: PaginationMetaDto) {
    const data = {
      toJSON: () => _.map(items, item => item.toJSON()),
    }

    return new ListRecommendationsPaginationDto(data, meta)
  }
}

export default ListRecommendationsPaginationDto
