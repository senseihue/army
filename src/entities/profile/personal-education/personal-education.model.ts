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

  type SchoolType = ISchool

  interface ISchool {
    id: number
    school_type_id: number
    code: string
    title: string
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

  static toRequest (data: Partial<PersonalEducation>) {
    return {
      id: data.id,
      person_id: data.person_id,
      school_type_id: data.school_type_id,
      school_id: data.school_id,
      start_date: data.start_date,
      end_date: data.end_date,
      diploma_number: data.diploma_number,
      diploma_date: data.diploma_date
    }
  }

  static toResponse (data: PersonalEducation) {
    return {
      id: data.id,
      person_id: data.person_id,
      school_type_id: data.school_type_id,
      school_id: data.school_id,
      start_date: data.start_date,
      end_date: data.end_date,
      diploma_number: data.diploma_number,
    }
  }
}
