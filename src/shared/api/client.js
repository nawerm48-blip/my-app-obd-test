/**
 * Shared API Client - Centralized fetch wrapper with error handling
 */

/**
 * Base API request function with error handling
 * @param {string} url - API endpoint
 * @param {object} options - Fetch options
 * @returns {Promise} - Response data
 */
export async function apiRequest(url, options = {}) {
  const defaultOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  }

  const config = { ...defaultOptions, ...options }
  
  if (config.body && typeof config.body === 'object' && !(config.body instanceof FormData)) {
    config.body = JSON.stringify(config.body)
  }

  try {
    const response = await $fetch(url, config)
    return response
  } catch (error) {
    console.error(`API Error [${url}]:`, error)
    throw error
  }
}

/**
 * GET request helper
 */
export function apiGet(url, options = {}) {
  return apiRequest(url, { ...options, method: 'GET' })
}

/**
 * POST request helper
 */
export function apiPost(url, body, options = {}) {
  return apiRequest(url, { ...options, method: 'POST', body })
}

/**
 * useFetch wrapper with default options
 */
export function useApiPost(url, body, options = {}) {
  return useFetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body,
    ...options,
  })
}
