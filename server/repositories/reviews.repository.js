import { BaseRepository } from './base.repository'
import ReviewsModel from '../models/Reviews'

/**
 * Reviews Repository - Optimized data access for Reviews entity
 */
class ReviewsRepository extends BaseRepository {
  constructor() {
    super(ReviewsModel)
  }

  /**
   * Find all reviews sorted by level
   */
  async findAllSorted() {
    return this.findAll({}, {
      sort: { level: 1 }
    })
  }

  /**
   * Find reviews by project ID
   */
  async findByProject(projectId) {
    return this.findAll({ project: projectId }, {
      sort: { level: 1 }
    })
  }

  /**
   * Find reviews with pagination
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
}

export const reviewsRepository = new ReviewsRepository()
