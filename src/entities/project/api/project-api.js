/**
 * Project Entity - API Layer
 */

/**
 * Fetch projects with pagination and optional category filter
 */
export async function fetchProjects(options = {}) {
  const { sortPage = 0, pageSize = 6, category = null } = options
  
  const body = {
    sortPage,
    pageSize,
  }
  
  if (category) {
    body.ParamsCat = category
  }

  return useFetch('/api/project/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body,
  })
}

/**
 * Fetch projects for index page
 */
export async function fetchProjectsIndex(options = {}) {
  const { sortPage = 0, pageSize = 6 } = options

  return useFetch('/api/projectindex/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: { sortPage, pageSize },
  })
}

/**
 * Fetch single project by slug
 */
export async function fetchProjectBySlug(slug) {
  return $fetch('/api/projectitem/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: slug,
  })
}

/**
 * Fetch project for reviews
 */
export async function fetchProjectForReviews(projectId) {
  return useFetch('/api/projectitem/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: projectId,
  })
}
