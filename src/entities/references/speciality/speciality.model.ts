declare global {

    interface ISpeciality {
      id: number
      code: string
      title: string
      description: string
      status: string
      specialty_type_id: number
      created_by: string
      updated_by: string
      deleted_by: string
    }
}

export {}