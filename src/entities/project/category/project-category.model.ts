declare global {
  interface IProjectCategory {
    id: number
    title: string
    order: number
    icon: string
    description: string
    draft?: boolean
  }

  interface IProjectCategoryById extends IProjectCategory {
    service_categories: IProjectCategory[]
  }
}
