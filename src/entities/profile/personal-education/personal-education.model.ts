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
    created_at: string
    updated_at: string
    school_type: SchoolType
    school: SchoolType
  }

  interface SchoolType {
    id: number
    title: string
  }
}


export class PersonalEducation implements IPersonalEducation {
  "person_id": 16,
  "school_type_id": 16,
  "school_id": 16,
  "start_date": "2026-01-19T11:46:24",
  "end_date": "2026-01-19T11:46:24",
  "diploma_number": "n",
  "diploma_date": "2026-01-19T11:46:24",
}

export class PersonalServiceParams {
  type?: string
}
