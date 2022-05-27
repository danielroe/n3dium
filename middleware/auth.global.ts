export default defineNuxtRouteMiddleware(to => {
  const { $auth } = useNuxtApp()

  if (!$auth.loggedIn.value && to.path !== '/login') {
    return navigateTo('/login')
  }
  if ($auth.loggedIn.value && to.path === '/login') {
    return navigateTo('/')
  }
})
