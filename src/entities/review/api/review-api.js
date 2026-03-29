/**
 * Review Entity - API Layer
 */

/**
 * Fetch all reviews
 */
export function fetchReviews() {
  return useFetch('/api/reviews/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    lazy: true,
  })
}

/**
 * Fetch reviews by project ID
 */
export function fetchReviewsByProject(projectSlug) {
  return useFetch('/api/reviews/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: { project: projectSlug },
    lazy: true,
  })
}
