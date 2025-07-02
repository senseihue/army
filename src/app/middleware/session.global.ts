import { useAuthApi } from "~/features/auth"

export default defineNuxtRouteMiddleware(async (to) => {
  const authApi = useAuthApi()
  const { $session } = useNuxtApp()

  const getProfile = async () => {
    try {
      const { content } = await authApi.getProfile()
      $session.profile.value = content
      $session.loaded.value = true
    } catch (error: any) {
      $session.loaded.value = true
      $session.clear()
    }
  }

  if ($session?.token.value && !$session?.loaded.value) {
    await getProfile()
  }

  if (to.meta?.protected && !$session?.token.value) {
    const { origin } = useRequestURL()

    const { content } = await $fetch<IResponse<string>>("/gateway/auth/one-id", {
      method: "GET",
      params: { state: origin + "/sso" }
    })

    window.open(content, "_self")
    return abortNavigation()
  }
})
