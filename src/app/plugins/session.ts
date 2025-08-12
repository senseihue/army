export default defineNuxtPlugin(() => {
  const router = useRouter()
  const localePath = useLocalePath()

  const token = useCookie("token")
  const loaded = ref(false) // Profile is loaded
  const loading = ref(false) // Flag for loading
  const profile = ref<ISessionProfile>()
  const loggedIn = computed(() => {
    return !!profile.value
  })

  watch(loggedIn, (value) => {
    if (!value) {
      token.value = undefined
      profile.value = undefined
    }
  })

  const clear = () => {
    token.value = undefined
    loading.value = false
    profile.value = undefined
    router.replace(localePath("/"))
  }

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
