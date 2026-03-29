/**
 * Main Entity - API Layer
 * 
 * Handles main page data (hero content, gallery, videos)
 */

/**
 * Fetch main page content
 */
export function fetchMainContent() {
  return useFetch('/api/main/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  })
}

/**
 * Fetch all pages data (for global store)
 */
export function fetchAllPages() {
  return useFetch('/api/allpages/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  })
}

/**
 * Fetch system data
 */
export function fetchSystem() {
  return useFetch('/api/system/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    lazy: true,
  })
}

/**
 * Fetch stage data
 */
export function fetchStage() {
  return useFetch('/api/stage/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    lazy: true,
  })
}
