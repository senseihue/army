import { useAuthApi } from "~/entities/auth"

export default defineNuxtRouteMiddleware(async (to) => {
  const authApi = useAuthApi()
  const { $session } = useNuxtApp()
  const { loading, profile } = $session
  if (!profile.value?.user?.isResident && to.path.includes("/profile/password")) {
    if ($session?.token.value) {
      navigateTo("/profile", { external: true })
      return abortNavigation()
    }
    navigateTo("/", { external: true })
    return abortNavigation()
  }
})
