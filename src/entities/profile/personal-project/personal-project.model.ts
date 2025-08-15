declare global {
  interface IModal {
    "personal-project-cancel-reason": string
  }

  interface IPersonalProject {
    id: number
    title: string
    description: string
    type: string
    status: string
    state: string
    budget: number
    pp: string
    irr: string
    npv: string
    email: string
    phone: string
    content: string
    upload: IFile
    presentation: IFile
    category: IProjectCategory
    sector: IProjectSector
    upload_id: number
    presentation_id: number
    category_id: number
    sector_id: number
    project_status: string
    latitude: number
    longitude: number
    createdAt: string
    updatedAt: string
  }

  interface IProjectSector {
    id: number
    title: string
  }
}

export class PersonalProject {
  id!: number
  title: string = ""
  state: string = ""
  content: string = ""
  sector_id!: number
  upload!: File
  presentation!: File
  category_id!: number
  latitude!: number
  longitude!: number
  budget!: number
  pp: string = ""
  irr: string = ""
  npv: string = ""
  status: string = ""
  location?: string
  project_status: string = ""
  email: string = ""
  phone: string = ""
}
