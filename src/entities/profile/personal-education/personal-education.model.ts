import type { IContent } from "~/shared/types/content"

declare global {
  interface IModal {
    "personal-education": IPersonalEducation
  }

  interface IPersonalEducation {
    id: number
    person_id: number
    school_type_id: number
    school_id: number
    start_date: string
    end_date: string
    diploma_number: string
    diploma_date: string
    deleted_at?: any
    created_at?: string
    updated_at?: string
    school_type: SchoolType
    school: SchoolType
  }

  type SchoolType = School

  interface School {
    id: number
    school_type_id: number
    code: string
    name: IContent
    alias: string
    status: boolean
    created_by?: any
    updated_by?: any
    deleted_by?: any
    deleted_at?: any
    created_at: string
    updated_at: string
  }
}


export class PersonalEducation implements IPersonalEducation {
  id!: number
  school_type!: SchoolType
  school!: SchoolType

  // 2. Fix syntax: remove quotes and use '=' for assignment
  person_id!: number
  school_type_id!: number
  school_id!: number
  start_date: string = ""
  end_date: string = ""
  diploma_number: string = ""
  diploma_date: string = ""

  // 3. Include optional properties if you want to be explicit, or omit them
  deleted_at?: any
  created_at?: string
  updated_at?: string
}
