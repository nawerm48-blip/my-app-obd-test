/**
 * User Entity - API Layer
 */

/**
 * Get current authenticated user
 */
export function useCurrentUser() {
  const { data: session, status } = useAuth()
  
  const user = computed(() => session.value?.user || null)
  const isAuthenticated = computed(() => status.value === 'authenticated')
  const isLoading = computed(() => status.value === 'loading')
  
  return {
    user,
    isAuthenticated,
    isLoading,
  }
}

/**
 * Get user session data
 */
export function getUserSession() {
  const { data } = useAuth()
  return data.value
}

/**
 * Check if user is admin (has cabinet access)
 */
export function useIsAdmin() {
  const { user, isAuthenticated } = useCurrentUser()
  
  return computed(() => {
    if (!isAuthenticated.value) return false
    // Add your admin check logic here
    return !!user.value
  })
}
