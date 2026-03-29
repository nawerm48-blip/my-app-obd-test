/**
 * News/Article Entity - API Layer
 */

/**
 * Fetch all news articles
 */
export function fetchNews(options = {}) {
  const { levelFilter = false, sortPage, pageSize } = options
  
  const body = {}
  if (levelFilter) body.levelFilter = true
  if (sortPage !== undefined) body.sortPage = sortPage
  if (pageSize !== undefined) body.pageSize = pageSize

  return useFetch('/api/news/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body,
    lazy: true,
  })
}

/**
 * Fetch news for index page (limited)
 */
export function fetchNewsForIndex() {
  return fetchNews({ levelFilter: true })
}

/**
 * Fetch single news article by slug
 */
export async function fetchNewsBySlug(slug) {
  return $fetch('/api/newsitem/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: slug,
  })
}
