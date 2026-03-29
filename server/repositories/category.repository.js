import { BaseRepository } from './base.repository'
import CategoryModel from '../models/Category'

/**
 * Category Repository - Optimized data access for Category entity
 */
class CategoryRepository extends BaseRepository {
  constructor() {
    super(CategoryModel)
  }

  /**
   * Find all categories (cached friendly)
   */
  async findAllCategories() {
    return this.findAll({}, {
      sort: { id_category: 1 }
    })
  }

  /**
   * Find category by slug (kirilica)
   */
  async findBySlug(slug) {
    return this.findOne({ kirilica: slug })
  }

  /**
   * Find categories with pagination
   */
  async findPaginated(options = {}) {
    const { sortPage = 0, pageSize } = options
    
    const result = await this.findAll({}, {
      skip: sortPage,
      limit: pageSize
    })
    
    const count = await this.count()
    
    return { result, count }
  }

  /**
   * Find all category slugs for sitemap
   */
  async findAllSlugs() {
    return this.findAll({}, {
      select: 'kirilica name'
    })
  }
}

export const categoryRepository = new CategoryRepository()
