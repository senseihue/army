export const useWindowHeight = (offset = 0) => {
  const minHeight = ref("100vh")
  const minHeightPx = ref(0)

  const setMinHeight = () => {
    minHeightPx.value = Math.min(window.innerHeight, window.screen.height) - offset
    minHeight.value = minHeightPx.value + "px"
  }

  onBeforeMount(() => {
    setMinHeight()
    window.addEventListener("resize", setMinHeight)
  })

  onBeforeUnmount(() => window.removeEventListener("resize", setMinHeight))

  return { minHeight, minHeightPx }
}
