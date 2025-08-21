import type { Unsubscribe } from "@firebase/messaging"
import { getToken, onMessage } from "@firebase/messaging"
import { useNotificationStore } from "~/entities/notification"
import { useNotificationApi } from "~/features/notification"

export const useNotificationService = () => {
  const notificationApi = useNotificationApi()
  const notificationStore = useNotificationStore()
  const { loading, sentinel, items, count, params } = storeToRefs(notificationStore)

  const { $session, $config, $firebaseMessaging } = useNuxtApp()
  const notifications: INotification[] = [
    {
      id: 1,
      message: "Ваш аккаунт успешно зарегистрирован.",
      type: "registration",
      link: "/profile",
      seen: false,
      sent: true,
      created: "2023-10-01T12:00:00Z",
    },
    {
      id: 2,
      message: "Вы зарегистрировались на событие.",
      type: "event_registration",
      link: "/events",
      seen: false,
      sent: true,
      created: "2023-10-02T15:30:00Z",
    },
    {
      id: 3,
      message: "Поступила новая жалоба.",
      type: "new_appeal",
      link: "/appeals",
      seen: true,
      sent: true,
      created: "2023-10-03T09:45:00Z",
    },
    {
      id: 4,
      message: "Жалоба была перенаправлена.",
      type: "appeal_forwarded",
      link: "/appeals",
      seen: false,
      sent: true,
      created: "2023-10-04T10:00:00Z",
    },
    {
      id: 5,
      message: "Жалоба была отклонена.",
      type: "appeal_rejected ",
      link: "/appeals",
      seen: false,
      sent: true,
      created: "2023-10-05T11:00:00Z",
    },
    {
      id: 6,
      message: "Получен новый ответ на жалобу.",
      type: "new_appeal_response",
      link: "/appeals",
      seen: false,
      sent: true,
      created: "2023-10-06T12:00:00Z",
    },
    {
      id: 7,
      message: "Добавлен новый комментарий к жалобе.",
      type: "new_appeal_comment",
      link: "/appeals",
      seen: false,
      sent: true,
      created: "2023-10-07T13:00:00Z",
    },
    {
      id: 8,
      message: "Создан новый проект.",
      type: "new_project",
      link: "/projects",
      seen: false,
      sent: true,
      created: "2023-10-08T14:00:00Z",
    },
    {
      id: 9,
      message: "Проект был обновлен.",
      type: "update_project",
      link: "/projects",
      seen: false,
      sent: true,
      created: "2023-10-09T15:00:00Z",
    },
    {
      id: 10,
      message: "Проект был отклонен.",
      type: "project_rejected ",
      link: "/projects",
      seen: false,
      sent: true,
      created: "2023-10-10T16:00:00Z",
    },
    {
      id: 11,
      message: "Проект был одобрен.",
      type: "project_approved",
      link: "/projects",
      seen: false,
      sent: true,
      created: "2023-10-11T17:00:00Z",
    },
  ];


  const getInfiniteNotificationList = async () => {
    const { content, pageable } = await notificationApi.getNotificationList(cleanParams(params.value))

    if (!content.length) return disconnect()
    items.value = items.value.concat(content)
    count.value = pageable?.total ?? 0
    params.value.page++
  }
  console.log(sentinel, 'test')

  const { observe, disconnect } = useInfinite(sentinel, getInfiniteNotificationList)

  const getNotificationList = async () => {
    try {
      loading.value = true
      const { content, pageable } = await notificationApi.getNotificationList(cleanParams({ size: 10 }))
      items.value = notifications
      count.value = pageable?.total ?? 0
      await observe()
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

  return { getNotificationList, read, readAll, subscribeToNotification, subscribeToServiceWorker }
}
