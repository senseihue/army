declare global {
  interface IProject {
    id: number
    title: string
    icon: string
    order: number
    budget: number
    status: string
    sector: ISector
    upload: IFile
    category: IProjectCategory
  }

  interface IProjectById extends IProject {
    content: string
    presentation: IFile
    latitude: number
    longitude: number
    pp: string
    irr: string
    npv: string
    email: string
    phone: string
  }

  interface ISector {
    id: number
    content: string
    created: string
  }
}
