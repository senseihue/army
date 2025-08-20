export type NotificationType = "event" | "project"

declare global {
  interface IModal {
    notification: number
  }

  interface INotification {
    id: number
    link: string
    title: string
    message: string
    type: NotificationType
  }

  interface INotificationResponse {
    count: number
    items: INotification[]
  }
}
