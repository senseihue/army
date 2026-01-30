export const cdn = () => {
  const CDN_URL = useRuntimeConfig().public.cdnUrl
  const getCdnUrl = (path: string) => {
    if (!path) return "/img/MO.png"
    if (path.startsWith("http://") || path.startsWith("https://")) return path
    return `${CDN_URL}/${path}`
  }
  return { getCdnUrl }
}
