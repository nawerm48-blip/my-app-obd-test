/**
 * Base Repository - Provides optimized MongoDB access with .lean()
 * 
 * Benefits:
 * - .lean() returns plain JavaScript objects (2-5x faster reads)
 * - Centralized query optimization
 * - Consistent populate/select patterns
 */
export class BaseRepository {
  constructor(model) {
    this.model = model
  }

  /**
   * Find all documents with optional filtering and pagination
   * Uses .lean() for optimized read performance
   */
  async findAll(filter = {}, options = {}) {
    const { select, populate, sort, limit, skip } = options
    let query = this.model.find(filter)
    
    if (select) query = query.select(select)
    if (populate) query = query.populate(populate)
    if (sort) query = query.sort(sort)
    if (limit) query = query.limit(limit)
    if (skip) query = query.skip(skip)
    
    return query.lean().exec()
  }

  /**
   * Find document by ID
   * Uses .lean() for optimized read performance
   */
  async findById(id, options = {}) {
    const { select, populate } = options
    let query = this.model.findById(id)
    
    if (select) query = query.select(select)
    if (populate) query = query.populate(populate)
    
    return query.lean().exec()
  }

  /**
   * Find single document matching filter
   * Uses .lean() for optimized read performance
   */
  async findOne(filter, options = {}) {
    const { select, populate } = options
    let query = this.model.findOne(filter)
    
    if (select) query = query.select(select)
    if (populate) query = query.populate(populate)
    
    return query.lean().exec()
  }

  /**
   * Create new document
   * Returns full Mongoose document for post-creation hooks
   */
  async create(data) {
    return this.model.create(data)
  }

  /**
   * Update document by ID
   * Returns updated document
   */
  async updateById(id, data) {
    return this.model.findByIdAndUpdate(id, data, { new: true }).lean().exec()
  }

  /**
   * Delete document by ID
   */
  async deleteById(id) {
    return this.model.findByIdAndDelete(id).lean().exec()
  }

  /**
   * Count documents matching filter
   */
  async count(filter = {}) {
    return this.model.countDocuments(filter)
  }

  /**
   * Aggregate with pipeline
   */
  async aggregate(pipeline) {
    return this.model.aggregate(pipeline)
  }
}
