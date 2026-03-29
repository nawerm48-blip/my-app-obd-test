import { BaseRepository } from './base.repository'
import SystemModel from '../models/System'

/**
 * System Repository - Optimized data access for System entity
 * Systems represent service types (heating, water supply, etc.)
 */
class SystemRepository extends BaseRepository {
  constructor() {
    super(SystemModel)
  }

  /**
   * Find all systems sorted by level
   */
  async findAllSorted() {
    return this.findAll({}, {
      sort: { level: 1 }
    })
  }

  /**
   * Find system by ID
   */
  async findSystemById(id) {
    return this.findById(id)
  }

  /**
   * Find systems with pagination
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

export const systemRepository = new SystemRepository()
