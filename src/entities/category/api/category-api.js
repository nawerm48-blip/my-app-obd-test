/**
 * Category Entity - API Layer
 */

/**
 * Fetch all categories
 */
export async function fetchCategories() {
  return $fetch('/api/category/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  })
}

/**
 * Fetch categories with pagination (for admin)
 */
export async function fetchCategoriesPaginated(options = {}) {
  const { sortPage = 0, pageSize = 10 } = options

  return useFetch('/api/category/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: { sortPage, pageSize },
  })
}

/**
 * Find category by slug
 */
export function findCategoryBySlug(categories, slug) {
  if (!categories || !Array.isArray(categories)) return null
  return categories.find(cat => cat.kirilica === slug)
}
