import _ from 'lodash'

const DEFAULT_CURRENT_PAGE = 1

const DEFAULT_ITEMS_PER_PAGE = 15

const MAX_ITEMS_PER_PAGE = 20

class PaginationOffset {
  private readonly page: number

  private readonly limit: number

  private readonly offset: number

  private total: number

  private pages: number

  public constructor(pageReceived?: number, limitReceived?: number) {
    let page = pageReceived as number

    let limit = limitReceived as number

    if (_.isNaN(pageReceived) || !_.isNumber(pageReceived)) {
      page = DEFAULT_CURRENT_PAGE
    }

    if (_.isNaN(limitReceived) || !_.isNumber(limitReceived)) {
      limit = DEFAULT_ITEMS_PER_PAGE
    }

    this.page = page!

    this.limit = Math.min(limit, MAX_ITEMS_PER_PAGE)

    this.offset = this.page * this.limit - this.limit
  }

  public setTotal(total: number) {
    this.total = total

    this.pages = Math.ceil(this.total / this.limit)
  }

  public getPage(): number {
    return this.page
  }

  public getLimit(): number {
    return this.limit
  }

  public getOffset(): number {
    return this.offset
  }

  public getTotal(): number {
    return this.total
  }

  public getPages(): number {
    return this.pages
  }
}

export default PaginationOffset
