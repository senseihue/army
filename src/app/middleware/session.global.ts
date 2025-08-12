export default defineNuxtRouteMiddleware(async (to) => {
  const { $session } = useNuxtApp()
  const { loading } = $session

  const getProfile = async () => {
    loading.value = true

    try {
      const { content } = await $fetch<IResponse<ISessionProfile>>("/gateway/core/profile", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${$session.token.value}`
        }
      })

      $session.profile.value = content
      $session.loaded.value = true
    } catch {
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

  // For authenticated users
  const checkResidency = () => {
    if (!to.meta?.residentOnly && !to.meta?.nonResidentOnly) return
    const user = $session?.profile.value?.user
    if (!user) throw showError({ statusCode: 401, statusMessage: "Unauthorized" })
    if (to.meta.residentOnly && !user.isResident) throw showError({ statusCode: 403, statusMessage: "Forbidden" })
    if (to.meta.nonResidentOnly && user.isResident) throw showError({ statusCode: 403, statusMessage: "Forbidden" })
  }

  checkResidency()
})
