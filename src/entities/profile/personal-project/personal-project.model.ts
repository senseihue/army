import { Content } from "~/shared/types/content"

declare global {
  interface IModal {
    "personal-project-cancel-reason": string
  }

  interface IPersonalProject {
    id: number
    title: IContent
    type: string
    status: string
    state: string
    reject_reason: string
    budget: number
    pp: string
    irr: string
    npv: string
    email: string
    phone: string
    content: IContent
    upload: IFile
    presentation: IContent<File | undefined>
    category: IProjectCategory
    sector: IProjectSector
    upload_id: number
    presentation_id: number
    category_id: number
    sector_id: number
    budgets: IPersonalProjectBudget[]
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

  interface IPersonalProjectBudget {
    id: number
    sum: number
  }
}

export class PersonalProject {
  id!: number
  title: IContent = new Content()
  state: string = ""
  reject_reason: string = ""
  content: IContent = new Content()
  pp: string = ""
  irr: string = ""
  // npv: string = ""
  status: string = ""
  // project_status: string = ""
  email: string = ""
  phone: string = ""

  sector_id!: number
  upload!: File
  presentation: IContent<File | undefined> = new Content<undefined>()
  category_id!: number
  latitude!: number
  longitude!: number
  budget: number = 0
  budgets: IPersonalProjectBudget[] = [new ProjectBudget()]
  deleted_budgets!: number[]
  location!: string
}

export class ProjectBudget {
  id!: number
  sum: string = ""
}
