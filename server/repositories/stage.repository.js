import { BaseRepository } from './base.repository'
import StageModel from '../models/Stage'

/**
 * Stage Repository - Optimized data access for Stage entity
 * Stages represent work process steps
 */
class StageRepository extends BaseRepository {
  constructor() {
    super(StageModel)
  }

  /**
   * Find all stages sorted by level
   */
  async findAllSorted() {
    return this.findAll({}, {
      sort: { level: 1 }
    })
  }

  /**
   * Find stages with pagination
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

export const stageRepository = new StageRepository()
