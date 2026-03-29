import { BaseRepository } from './base.repository'
import ProjectModel from '../models/Project'

/**
 * Project Repository - Optimized data access for Project entity
 */
class ProjectRepository extends BaseRepository {
  constructor() {
    super(ProjectModel)
  }

  /**
   * Find projects with custom sorting (null/0 level values last)
   */
  async findWithSorting(filter = {}, options = {}) {
    const { sortPage = 0, pageSize } = options
    
    const pipeline = [
      { $match: filter },
      {
        $addFields: {
          specialSortField: {
            $cond: {
              if: { $or: [{ $eq: ['$level', null] }, { $eq: ['$level', 0] }] },
              then: 1,
              else: 0,
            },
          },
        },
      },
      { $sort: { specialSortField: 1, level: 1 } },
      { $skip: sortPage },
    ]

    if (pageSize) {
      pipeline.push({ $limit: pageSize })
    }

    const result = await this.aggregate(pipeline)
    const count = await this.count(filter)

    return { result, count }
  }

  /**
   * Find projects by category
   */
  async findByCategory(categorySlug, options = {}) {
    const filter = categorySlug ? { category: categorySlug } : {}
    return this.findWithSorting(filter, options)
  }

  /**
   * Find project by slug (kirilica)
   */
  async findBySlug(slug) {
    return this.findAll({ kirilica: slug })
  }

  /**
   * Find projects for index page (limited)
   */
  async findForIndex(limit = 6) {
    return this.findAll({}, {
      sort: { level: 1 },
      limit
    })
  }

  /**
   * Find all projects for sitemap
   */
  async findAllSlugs() {
    return this.findAll({}, {
      select: 'kirilica'
    })
  }
}

export const projectRepository = new ProjectRepository()
