import { BaseRepository } from './base.repository'
import AllpagesModel from '../models/Allpages'

/**
 * Allpages Repository - Optimized data access for site-wide settings
 * Contains global site configuration (phones, emails, SEO defaults)
 */
class AllpagesRepository extends BaseRepository {
  constructor() {
    super(AllpagesModel)
  }

  /**
   * Find all site settings
   */
  async findSettings() {
    return this.findAll()
  }

  /**
   * Find first settings record (main config)
   */
  async findMainSettings() {
    const settings = await this.findAll({}, { limit: 1 })
    return settings[0] || null
  }
}

export const allpagesRepository = new AllpagesRepository()
