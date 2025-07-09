import { useAuthApi } from "~/features/auth"

export default defineNuxtRouteMiddleware(async (to) => {
  const authApi = useAuthApi()
  const { $session } = useNuxtApp()
  const { loading } = $session

  const getProfile = async () => {
    loading.value = true
    try {
      const { content } = await authApi.getProfile()
      $session.profile.value = content
      $session.loaded.value = true
    } catch (error: any) {
      $session.loaded.value = true
      $session.clear()
    } finally {
      loading.value = false
    }
  }

  if ($session?.token.value && !$session?.loaded.value) {
    await getProfile()
  }

  if (to.meta?.protected && !$session?.token.value) {
    const { origin } = useRequestURL()

    const { content } = await $fetch<IResponse<string>>("/gateway/core/auth", {
      method: "GET",
      params: { state: origin + "/sso" }
    })

    navigateTo(content, { external: true })
    return abortNavigation()
  }
})
