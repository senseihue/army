import type { Unsubscribe } from "@firebase/messaging"
import { getToken, onMessage } from "@firebase/messaging"
import { useNotificationStore } from "~/entities/notification"
import { useNotificationApi } from "~/features/notification"

export const useNotificationService = () => {
  const notificationApi = useNotificationApi()
  const notificationStore = useNotificationStore()
  const { loading } = storeToRefs(notificationStore)

  const { $session, $config, $firebaseMessaging } = useNuxtApp()
  const { loggedIn } = $session || {}

  const getNotificationList = () => {
    if (!loggedIn.value) return
    loading.value = true
    notificationApi
      .getNotificationList()
      .then(({ content }) => (notificationStore.record = content))
      .finally(() => (loading.value = false))
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
    return onMessage($firebaseMessaging, () => {
      if ($session.token.value) getNotificationList()
    })
  }

  const subscribeToServiceWorker = async () => {
    try {
      if ("serviceWorker" in navigator) {
        const sw = await navigator.serviceWorker.register($config.public.swPath)

        return await getToken($firebaseMessaging, {
          serviceWorkerRegistration: sw,
          vapidKey: $config.public.firebase.vapidKey
        })
      }
    } catch (error) {
      console.error(error)
    }
  }

  return { getNotificationList, read, readAll, subscribeToNotification, subscribeToServiceWorker }
}
