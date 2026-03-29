/**
 * Guest Middleware - Redirects authenticated users
 * FSD Layer: app/middleware
 */
export default defineNuxtRouteMiddleware((to, from) => {
  const { status } = useAuth()
  
  if (status.value === 'authenticated') {
    return navigateTo('/cabinet')
  }
})
