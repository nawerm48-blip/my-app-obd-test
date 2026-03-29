import { BaseRepository } from './base.repository'
import NewsModel from '../models/News'

/**
 * News Repository - Optimized data access for News/Articles entity
 */
class NewsRepository extends BaseRepository {
  constructor() {
    super(NewsModel)
  }

  /**
   * Find all news sorted by level
   */
  async findAllSorted() {
    return this.findAll({}, {
      sort: { level: 1 }
    })
  }

  /**
   * Find news for index page (filtered by level)
   */
  async findForIndex() {
    const result = await this.findAll(
      { level: { $ne: null, $ne: '' } },
      { sort: { level: 1 } }
    )
    const count = await this.count()
    return { result, count }
  }

  /**
   * Find news article by slug
   */
  async findBySlug(slug) {
    return this.findOne({ kirilica: slug })
  }

  /**
   * Find news with pagination
   */
  async findPaginated(options = {}) {
    const { sortPage = 0, pageSize } = options
    
    const result = await this.findAll({}, {
      skip: sortPage,
      limit: pageSize,
      sort: { level: 1 }
    })
    
    const count = await this.count()
    
    return { result, count }
  }

  /**
   * Find all news slugs for sitemap
   */
  async findAllSlugs() {
    return this.findAll({}, {
      select: 'kirilica title'
    })
  }
}

export const newsRepository = new NewsRepository()
