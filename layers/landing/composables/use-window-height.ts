export const useWindowHeight = (offset = 0) => {
  const minHeight = ref("100vh")

  const setMinHeight = () => (minHeight.value = Math.min(window.innerHeight, window.screen.height) - offset + "px")

  onBeforeMount(() => {
    setMinHeight()
    window.addEventListener("resize", setMinHeight)
  })

  onBeforeUnmount(() => window.removeEventListener("resize", setMinHeight))

  return { minHeight }
}
