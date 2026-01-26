export default defineNuxtPlugin(() => {
  const localePath = useLocalePath()
  const route = useRoute()

  const token = useCookie("token")
  const loaded = ref(false) // Profile is loaded
  const loading = ref(false) // Flag for loading
  const profile = ref<ISessionProfile>()
  const loggedIn = computed(() => {
    return !!profile.value
  })

  const clear = () => {
    token.value = undefined
    loading.value = false
    profile.value = undefined
    if (route.meta.protected) {
      reloadNuxtApp({ path: localePath("/"), force: true })
    }
  }

  watch(
    () => token.value,
    (value) => {
      if (!value?.length) clear()
      // else reloadNuxtApp({ path: localePath("/"), force: true })
    }
  )

  const session = {
    token,
    loaded,
    loading,
    profile,
    loggedIn,
    clear
  }

  return { provide: { session } }
})
