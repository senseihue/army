declare global {
  interface IProjectCategory {
    id: number
    title: string
    order: number
    icon: string
    description: string
    image: IFile
    draft?: boolean
  }

  interface IProjectCategoryById extends IProjectCategory {
    service_categories: IProjectCategory[]
  }
}
