/**
 * Repository Layer - Centralized data access with MongoDB optimizations
 * 
 * All repositories use .lean() for read operations (2-5x faster)
 * Import specific repositories as needed
 */

export { BaseRepository } from './base.repository'
export { projectRepository } from './project.repository'
export { categoryRepository } from './category.repository'
export { reviewsRepository } from './reviews.repository'
export { newsRepository } from './news.repository'
export { systemRepository } from './system.repository'
export { stageRepository } from './stage.repository'
export { allpagesRepository } from './allpages.repository'
