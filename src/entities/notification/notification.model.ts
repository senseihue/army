export type NotificationType =
  | "registration"
  | "event_registration"
  | "new_appeal"
  | "appeal_forwarded"
  | "appeal_rejected "
  | "new_appeal_response"
  | "new_appeal_comment"
  | "new_project"
  | "update_project"
  | "project_rejected "
  | "project_approved"

declare global {
  interface IModal {
    notification: number
  }

  interface INotification {
    id: number
    message: string
    type: NotificationType
    link: string
    seen: boolean
    sent: boolean
    created: string
  }
}
