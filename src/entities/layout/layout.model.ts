import type { SidebarComponentItem, SidebarHeaderItem, SidebarItem } from "vue-sidebar-menu"

export type SidebarMenuList = Array<SidebarItem | SidebarComponentItem | SidebarHeaderItem>

declare global {
  interface IModal {
    "offer": IOffer
    "error-modal": {
      title: string
      message: string
    }
  }

  interface IHeaderNav {
    label: string
    to?: string
    dropdown?: Array<{
      label: string
      to: string
    }>
  }

  interface IOffer {
    file_path: string
    title: string
    id: number
  }
}
