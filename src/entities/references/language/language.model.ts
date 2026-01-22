declare global {

    interface ILanguage {
      id: number
      name: string
      code: string
      status: boolean
      created_by: number
      updated_by: number
      deleted_by?: any
      deleted_at?: any
      created_at: string
      updated_at: string
    }
}

export {}