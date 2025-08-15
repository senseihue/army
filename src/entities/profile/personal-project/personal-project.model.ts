declare global {
  interface IModal {
    "personal-project-cancel-reason": string
  }

  interface IPersonalProject {
    id: number
    title_ru: string
    title_en: string
    title_uz: string
    type: string
    status: string
    state: string
    budget: number
    pp: string
    irr: string
    npv: string
    email: string
    phone: string
    content_ru: string
    content_en: string
    content_uz: string
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
  title_ru: string = ""
  title_en: string = ""
  title_uz: string = ""
  state: string = ""
  content_ru: string = ""
  content_en: string = ""
  content_uz: string = ""
  pp: string = ""
  irr: string = ""
  npv: string = ""
  status: string = ""
  project_status: string = ""
  email: string = ""
  phone: string = ""

  sector_id!: number
  upload!: File
  presentation!: File
  category_id!: number
  latitude!: number
  longitude!: number
  budget!: number
  location!: string

}
