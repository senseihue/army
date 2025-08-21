import type { Unsubscribe } from "@firebase/messaging"
import { getToken, onMessage } from "@firebase/messaging"
import { useNotificationStore } from "~/entities/notification"
import { useNotificationApi } from "~/features/notification"

export const useNotificationService = () => {
  const notificationApi = useNotificationApi()
  const notificationStore = useNotificationStore()
  const { loading, sentinel, items, count, params } = storeToRefs(notificationStore)

  const { $session, $config, $firebaseMessaging } = useNuxtApp()

  const getInfiniteNotificationList = async () => {
    if (params.value.total % params.value.size === 0) {
      disconnect()
      return
    }
    const { content, pageable } = await notificationApi.getNotificationList(cleanParams(params.value))

    if (!content.length) return disconnect()
    items.value = items.value.concat(content)
    count.value = pageable?.total ?? 0
    params.value.page++
  }
  const { observe, disconnect } = useInfinite(sentinel, getInfiniteNotificationList)

  const getNotificationList = async () => {
    try {
      loading.value = true
      const { content, pageable } = await notificationApi.getNotificationList(cleanParams({ size: 10 }))
      items.value = content
      count.value = pageable?.total ?? 0
    } finally {
      loading.value = false
    }
  }
  const read = (id: number) => {
    loading.value = true
    notificationApi
      .read(id)
      .then(() => getNotificationList())
      .catch(() => (loading.value = false))
  }

  const readAll = () => {
    loading.value = true
    notificationApi
      .readAll()
      .then(() => getNotificationList())
      .catch(() => (loading.value = false))
  }

  const subscribeToNotification = (): Unsubscribe => {
    return onMessage($firebaseMessaging, async () => {
      if ($session.token.value) {
        await getNotificationList()
      }
    })
  }

  const subscribeToServiceWorker = async () => {
    try {
      if ("serviceWorker" in navigator) {
        const sw = await navigator.serviceWorker.register($config.public.swPath)

        return await getToken($firebaseMessaging, {
          serviceWorkerRegistration: sw
        })
      }
    } catch (error) {
      console.error(error)
    }
  }

  return { getNotificationList, read, readAll, subscribeToNotification, subscribeToServiceWorker, observe, disconnect }
}
