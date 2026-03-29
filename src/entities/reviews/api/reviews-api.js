/**
 * Reviews Entity - API Layer
 */

/**
 * Fetch all reviews
 */
export async function fetchReviews() {
  return useFetch('/api/reviews/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  })
}

/**
 * Fetch reviews with pagination
 */
export async function fetchReviewsPaginated(options = {}) {
  const { sortPage = 0, pageSize = 10 } = options

  return useFetch('/api/reviews/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: { sortPage, pageSize },
  })
}

/**
 * Submit a new review
 */
export async function submitReview(reviewData) {
  return $fetch('/api/sendreview/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: reviewData,
  })
}
