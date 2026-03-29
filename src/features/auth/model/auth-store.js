/**
 * Auth Feature - Store/Model
 * 
 * Authentication state management using Nuxt Auth
 */

/**
 * Use authentication composable
 * Wraps @sidebase/nuxt-auth for consistent API
 */
export function useAuthStore() {
  const { data: user, status, signIn, signOut } = useAuth()
  
  const isAuthenticated = computed(() => status.value === 'authenticated')
  const isLoading = computed(() => status.value === 'loading')
  
  const logout = async () => {
    await signOut({ redirect: false })
    if (!useAuth().data.value) {
      return navigateTo('/')
    }
  }
  
  return {
    user,
    status,
    isAuthenticated,
    isLoading,
    signIn,
    signOut,
    logout,
  }
}
