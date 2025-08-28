import type { SidebarComponentItem, SidebarHeaderItem, SidebarItem } from "vue-sidebar-menu"

export type SidebarMenuList = Array<SidebarItem | SidebarComponentItem | SidebarHeaderItem>

declare global {
  interface IHeaderNav {
    label: string
    to: string
    dropdown?: Array<{
      label: string
      to: string
    }>
  }
}
