/**
 * Auth Feature - API Layer
 */

/**
 * Login user with credentials
 */
export async function loginUser(credentials) {
  const { signIn } = useAuth()
  
  return signIn('credentials', {
    ...credentials,
    redirect: false,
  })
}

/**
 * Logout current user
 */
export async function logoutUser() {
  const { signOut } = useAuth()
  return signOut({ redirect: false })
}

/**
 * Register new user
 */
export async function registerUser(userData) {
  return $fetch('/api/auth/registr', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: userData,
  })
}

/**
 * Get current auth session
 */
export function useAuthSession() {
  const { data, status, signOut } = useAuth()
  
  return {
    session: data,
    status,
    signOut,
    isAuthenticated: computed(() => status.value === 'authenticated'),
    isLoading: computed(() => status.value === 'loading'),
    user: computed(() => data.value?.user || null),
  }
}
