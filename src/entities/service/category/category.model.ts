declare global {
  interface IServiceCategory {
    id: number
    title: string
    description: string
    draft: boolean
    order: number
    icon: string
    parent: string
  }
}
