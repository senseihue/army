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
    budget: number
    upload: IFile
    category: {
      id: number
      title: string
    }
    sector: {
      id: number
      title: string
    }
    upload_id: number
    category_id: number
    sector_id: number
    project_status: string
    longitude: number
    createdAt: string
    updatedAt: string
  }
}

export class PersonalProject {
  id!: number
  title: string =  ""
  description: string =  ""
  type: string =  ""
  status: string =  ""
  budget!: number
  category?: {
    id: number
    title: string
  }
  sector?: {
    id: number
    title: string
  }
  category_id!: number
  sector_id!: number
  project_status: string =  ""
  longitude!: number
  createdAt: string =  ""
  updatedAt: string =  ""
}
