declare global {
  interface IModal {
    "request": IRequest
  }

  interface IRequest {
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


}


export class Request implements IRequest {
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

  static toRequest (data: Partial<Request>) {
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

  static toResponse (data: Request) {
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
